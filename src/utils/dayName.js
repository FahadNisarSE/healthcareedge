export function getDayString(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Sunday";
  }
}

export function getMonthString(number) {
  switch (number) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    default:
      return "December";
  }
}

export function getFormattedDate(date) {
  let numberDate = date.getDate();
  let numberMonth = date.getMonth();
  let numberYear = date.getFullYear();

  return `${numberDate}-${getMonthString(numberMonth)}-${numberYear}`;
}

export function getDateArray(start, end) {
  let arr = new Array();
  let dt = start;

  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return arr;
}
