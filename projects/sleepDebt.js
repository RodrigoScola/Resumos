var acceptableDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const getSleepHours = (day) => {
  day.toLowerCase();
  if (acceptableDays.includes(day)) {
    return 8;
  } else {
    return "unnaceptable day";
  }
};
const getActualSleepHours = () => {
  let hoursArr = 0;
  for (days in acceptableDays) {
    hoursArr += getSleepHours(acceptableDays[days]);
  }
  return hoursArr;
};
const getIdealSleepHours = () => {
  return 3 * 7;
};
function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours == idealSleepHours) {
    console.log("all balanced");
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`you need more sleep my man`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `you are sleeping too much, you need ${
        actualSleepHours - idealSleepHours
      } hours less sleep`
    );
  }
}
calculateSleepDebt();
