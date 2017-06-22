import * as moment from 'moment'
import { red, green, gray, yellow } from 'chalk'

type Color = (str: string) => string
type Log = (...messages: any[]) => void

function init(dateFormat = 'DD.MM.YYYY HH:mm:ss'): { [index: string]: Log } {
    const date = () => moment().format(dateFormat)

    function create(logFn: Log, color?: Color): Log {
        return (...messages: any[]) => {
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

export default init
