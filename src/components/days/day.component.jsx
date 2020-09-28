import request from 'superagent'

const CALENDAR_ID = 'N2tnbDIxZjgwOG8zOHY4aXFlbmU2M2Rrb3Agc2hhcm9ua29zZ2VpNEBt'
const API_KEY = 'AIzaSyAQLCPfxxLyuUp13nFmFS-8-aRARkhUtmE'
let url = `https://www.googleapis.com/calendar/v3/calendars/${N2tnbDIxZjgwOG8zOHY4aXFlbmU2M2Rrb3Agc2hhcm9ua29zZ2VpNEBt}/events?key=${AIzaSyAQLCPfxxLyuUp13nFmFS-8-aRARkhUtmE}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}

// /eventedit/