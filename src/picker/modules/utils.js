
import moment from 'moment-jalaali'

moment.loadPersian({dialect: 'persian-modern'})

function addWeek (weekArray, week) {
  let emptyDays = 7 - week.length

  for (let i = 0; i < emptyDays; ++i) {
    week[weekArray.length ? 'push' : 'unshift'](null)
  }

  weekArray.push(week)
}

function getWeekArray (d, firstDayOfWeek) {
  let daysInMonth = moment.jDaysInMonth(moment(d).jYear(), moment(d).jMonth())

  let dayArray = []
  for (let i = 1; i <= daysInMonth; i++) {
    dayArray.push(moment(d).jDate(i).toDate())
  }

  let weekArray = []
  let week = []

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(weekArray, week)
      week = []
    }

    week.push(day)

    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(weekArray, week)
    }
  })

  return weekArray
}

function getYearsList (from = 1300, to = 1450, range = false, date) {
  let years = []
  if (range) {
    let year = getYear(date)
    from = year - range
    to = year + range
  }
  for (let i = from; i <= to; i++) {
    years.push(i)
  }
  return years
}

// c = element to scroll to or top position in pixels
// e = duration of the scroll in ms, time scrolling
// d = (optative) ease function. Default easeOutCuaic
function scrollTo (a, c, e, d) {
  d || (d = easeOutCuaic); a = a || document.documentElement; if (a.scrollTop === 0) { var b = a.scrollTop; ++a.scrollTop; a = b + 1 === a.scrollTop-- ? a : document.body }b = a.scrollTop; e <= 0 || (typeof b === 'object' && (b = b.offsetTop), typeof c === 'object' && (c = c.offsetTop), (function (a, b, c, f, d, e, h) { function g () { f < 0 || f > 1 || d <= 0 ? a.scrollTop = c : (a.scrollTop = b - (b - c) * h(f), f += d * e, setTimeout(g, e)) }g() }(a, b, c, 0, 1 / e, 20, d)))
}
function easeOutCuaic (t) { t--; return t * t * t + 1 }

function getMonthsList (minDate, maxDate, date) {
  let list = [],
    min = minDate ? minDate.clone().startOf('jMonth').unix() : -Infinity,
    max = maxDate ? maxDate.clone().endOf('jMonth').unix() : Infinity
  for (let i = 0; i < 12; i++) {
    let m = date.clone().jMonth(i)
    if (m.clone().startOf('jMonth').unix() < min || m.clone().endOf('jMonth').unix() > max) {
      m.disabled = true
    }
    list.push(m)
  }
  return list
}

export default {
  getWeekArray,
  getYearsList,
  getMonthsList,
  scrollTo,
  moment
}
