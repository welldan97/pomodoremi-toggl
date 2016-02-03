# Pomodoremi-Toggl

Link [Pomodoremi](https://github.com/welldan97/pomodoremi) to
[Toggl](https://toggl.com/).


## Usage

It can be used as Pomodoremi module in config.js:

```js
PomodoremiToggl = require 'pomodoremi-toggl'

module.exports = function() {
  this.modules.push(new PomodoremiToggl({
    apToken: '<api-token>'
  }));
};
```
