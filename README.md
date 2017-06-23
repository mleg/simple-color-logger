A simple wrapper around `console` logging functions (for Node.js)  
Just **colors** output and prepends it with formatted date.

## Usage
`$ yarn add simple-color-logger`
```javascript
const logger = require('simple-color-logger')('DD.MM.YYYY HH:mm:ss'/*default*/)

logger.error('error')
logger.info('info')
logger.fyi('fyi')
logger.log('log')
logger.warn('warn')
```
Approximate output:
<div style="background-color:black;font-family:monospace">
<span style="color:red">22.06.2017 13:34:18 error</span> // red<br>
<span style="color:green">22.06.2017 13:34:18 info</strong> // green<br>
<span style="color:darkgray">22.06.2017 13:34:18 fyi</span> // gray<br>
<span style="color:white">22.06.2017 13:34:18 log</span> // no coloring<br>
<span style="color:yellow">22.06.2017 13:34:18 warn</span> // yellow<br>
</div>