function lcsRecursive(s1, s2) {
    let m = s1.length
    let n = s2.length
    if (m == 0 || n == 0) {
        return 0
    }
    if (s1[m-1] == s2[n-1]) {
        return lcsRecursive(s1.substring(0, m-1), s2.substring(0, n-1)) + 1
    } else {
        return Math.max(lcsRecursive(s1.substring(0, m-1), s2), lcsRecursive(s1, s2.substring(0, n-1)))
    }
}

function lcsDP(s1, s2) {
    let m = s1.length
    let n = s2.length
    if (m == 0 || n == 0) {
        return 0
    }
    const record = []
    for (i = 0; i <= m; i++) {
        record[i] = [0]
    }
    
    record[0] = (new Array(n + 1)).fill(0)

    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1]) {
                record[i][j] = record[i-1][j-1] + 1
            } else {
                record[i][j] = Math.max(record[i][j-1], record[i-1][j])
            }
        }
    }
    return record[m][n]
}

module.exports.lcsRecursive = lcsRecursive
module.exports.lcsDP = lcsDP