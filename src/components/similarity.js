/**
 * Shows similarity between 2 strings using Levenshtein edit distance
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @returns {Number} Similarity point, from 0 (no matches) to 1 (the same)
 */
export default function Similarity(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    if (!len1 || !len2) return 0;
    
    let dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;
    
    for (let i = 1; i <= len1; i++)
        for (let j = 1; j <= len2; j++)
            dp[i][j] =
    s1[i - 1] == s2[j - 1]
    ? dp[i - 1][j - 1]
    : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    
    return 1 - dp[len1][len2] / Math.max(len1, len2);
}