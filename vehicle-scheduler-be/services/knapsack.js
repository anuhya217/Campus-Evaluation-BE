function findMaxImpact(tasks, hours) {

    let dp = Array(hours + 1).fill(0);

    for (let task of tasks) {

        for (let j = hours; j >= task.Duration; j--) {

            dp[j] = Math.max(
                dp[j],
                dp[j - task.Duration] + task.Impact
            );

        }

    }

    return dp[hours];
}

module.exports = findMaxImpact;