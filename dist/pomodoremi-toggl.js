var PomodoremiToggl, TogglClient;

TogglClient = require('toggl-api');

PomodoremiToggl = (function() {
  function PomodoremiToggl(arg) {
    this.apiToken = arg.apiToken;
    this.toggl = new TogglClient({
      apiToken: this.apiToken
    });
  }

  PomodoremiToggl.prototype.start = function(interval, cb) {
    var timeEntryData;
    if (interval.type === 'work') {
      timeEntryData = {
        description: interval.name
      };
      return this.toggl.startTimeEntry(timeEntryData, (function(_this) {
        return function(err, timeEntry) {
          _this.timeEntry = timeEntry;
          return cb();
        };
      })(this));
    } else {
      return cb();
    }
  };

  PomodoremiToggl.prototype.stop = function(interval, cb) {
    var timeEntryData;
    if (interval.type === 'work') {
      timeEntryData = {
        tags: interval.tags
      };
      return this.toggl.updateTimeEntry(this.timeEntry.id, timeEntryData, (function(_this) {
        return function(err) {
          return _this.toggl.stopTimeEntry(_this.timeEntry.id, function(err) {
            return cb();
          });
        };
      })(this));
    } else {
      return cb();
    }
  };

  return PomodoremiToggl;

})();

module.exports = PomodoremiToggl;
