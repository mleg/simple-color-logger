const logger = require('./logger')()

// eslint-disable-next-line no-undef
test('Logger', () => {
    Object.keys(logger).forEach((key) => {
        const fn = logger[key]
        fn(`This is logger.${key}()`)
    })
})
