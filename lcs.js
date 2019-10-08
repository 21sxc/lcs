function lcs(s1, s2) {
	let m = s1.length
	let n = s2.length
	if (m == 0 || n == 0) {
		return 0
	}
	if (s1[m-1] == s2[n-1]) {
		return lcs(s1.substring(0, m-1), s2.substring(0, n-1))
	} else {
		return Math.max(lcs(s1.substring(0, m-1), s2), lcs(s1, s2.substring(0, n-1)))
	}
}