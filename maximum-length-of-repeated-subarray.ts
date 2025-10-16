// tabulation
// O(m*n) time | O(m*n) space
function findLength(nums1: number[], nums2: number[]): number {
    let n = nums1.length, m = nums2.length;
    //using dp table
    let dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));
    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (nums1[i] === nums2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
                ans = Math.max(ans, dp[i + 1][j + 1]);
            }
        }
    }

    return ans; 
};