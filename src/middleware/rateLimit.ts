import rateLimit from 'express-rate-limit'


export const apiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        error: "Too many requests, Please Try again.",
    },
    standardHeaders: true,
})

export const listSchoolsLimit = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: {
        error: "Too many requests, Please Try again.",
    },
    standardHeaders: true,
})