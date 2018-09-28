// https://www.codechef.com/wiki/tutorial-dynamic-programming

// Minimum Steps To One

// Memoization

function getMinSteps_memo(n) {
  let memo = new Array(n + 1) // we will initialize the elements to -1 ( -1 means, not solved it yet )
  memo.fill(-1)

  function recursive_part(n) {
    if (n == 1)
      return 0  // base case

    if (memo[n] != -1)
      return memo[n]  // we have solved it already :)

    let min = (a, b) => a < b ? a : b // the min function

    let r = 1 + recursive_part(n - 1)  // '-1' step .  'r' will contain the optimal answer finally
    if (n % 2 == 0) r = min(r, 1 + recursive_part(n / 2))  //  '/2' step
    if (n % 3 == 0) r = min(r, 1 + recursive_part(n / 3))  //  '/3' step
    memo[n] = r  // save the result. If you forget this step, then its same as plain recursion.

    return r
  }

  return recursive_part(n)
}

console.log(`getMinSteps_memo(9): 2 == ${getMinSteps_memo(9)}`)
console.log(`getMinSteps_memo(10): 3 == ${getMinSteps_memo(10)}`)




// Bottom Up: Dynamic Programming

function getMinSteps_dynamic(n) {
  let dp = new Array(n + 1)

  dp[1] = 0  // trivial case

  let min = (a, b) => a < b ? a : b // the min function

  for (let i = 2; i <= n; ++i) {
    dp[i] = 1 + dp[i - 1]
    if (i % 2 == 0) dp[i] = min(dp[i], 1 + dp[i / 2])
    if (i % 3 == 0) dp[i] = min(dp[i], 1 + dp[i / 3])
  }

  return dp[n]
}

console.log(`getMinSteps_dynamic(9): 2 == ${getMinSteps_dynamic(9)}`)
console.log(`getMinSteps_dynamic(10): 3 == ${getMinSteps_dynamic(10)}`)
