import {} from 'jest'
import Logger from './logger'

// eslint-disable-next-line no-undef
test('Logger', () => {
    const logger = Logger()
    Object.keys(logger).forEach((key) => {
        const fn = logger[key]
        fn(`This is logger.${key}()`)
    })
})
