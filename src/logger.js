const moment = require('moment')
const { red, green, gray, yellow } = require('chalk')

function init(dateFormat = 'DD.MM.YYYY HH:mm:ss') {
    const date = () => moment().format(dateFormat)

    function create(logFn, color) {
        return (...messages) => {
            const text = `${date()} ${messages.join(' ')}`
            logFn(color ? color(text) : text)
        }
    }

    const { error, info, log, warn } = console

    return {
        error: create(error, red),
        info: create(info, green),
        fyi: create(info, gray),
        log: create(log),
        warn: create(warn, yellow),
    }
}

module.exports = init
