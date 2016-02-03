TogglClient = require('toggl-api')

class PomodoremiToggl
  constructor: ({ @apiToken }) ->
    @toggl = new TogglClient({ @apiToken })

  start: (interval, cb) ->
    if interval.type == 'work'
      timeEntryData =
        description: interval.name

      @toggl.startTimeEntry timeEntryData, (err, @timeEntry) =>
        cb()
    else
      cb()

  stop: (interval, cb) ->
    if interval.type == 'work'
      timeEntryData =
        tags: interval.tags

      @toggl.updateTimeEntry @timeEntry.id, timeEntryData, (err) =>
        @toggl.stopTimeEntry @timeEntry.id, (err) ->
          cb()
    else
      cb()


module.exports = PomodoremiToggl
