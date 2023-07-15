function createEvent(title, month, day) {
  var eventObj = {
    title: title,
    month: month,
    day: day,
  };
  if (day < 1 || day > 31) {
    return `Error: ${day} is not a valid day`;
  } else {
    return eventObj;
  }
}

function createCalendar(name, eventObj) {
  var calendarObj = {
    owner: name,
    events: eventObj,
  };
  return calendarObj;
}

function reportMonthlyEvents(calendarObj, month) {
  var monthlyEventsArr = [];
  for (var i = 0; i < calendarObj.events.length; i++) {
    if (calendarObj.events[i].month === month) {
      monthlyEventsArr.push(calendarObj.events[i]);
    }
  }
  return monthlyEventsArr;
}
module.exports = { createEvent, createCalendar, reportMonthlyEvents };
