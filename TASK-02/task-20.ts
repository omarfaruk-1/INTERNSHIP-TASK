
// Task-20 Rate Limiter

function rateLimiter(limit: number, interval: number) {

  let calls: number[] = []

  return function () {

    const now = Date.now()

    calls = calls.filter(t => now - t < interval)

    if (calls.length >= limit) {
    console.log("Limit exceeded")
    return
    }

    calls.push(now)

    console.log("Allowed")

  }

}

const limited = rateLimiter(3,1000)

limited()
limited()
limited()
limited()