Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getHour() {
  return new Date().getHours();
}

function getMin() {
  return new Date().getMinutes();
}

function getSec() {
  return new Date().getSeconds();
}

function timeUpdate(time = 1000) {
  setInterval(getHour, time * 60 * 60);

  setInterval(getMin, time * 60);

  setInterval(getSec, time);
}

timeUpdate();

function clock(time = 1000) {
  setInterval(() => {
    let hour = getHour();
    let min = getMin();
    let sec = getSec();

    let result = "";
    if (hour >= 12) {
      result += `${hour}:${min}::${sec} PM`;
    } else {
      result += `${hour}:${min}::${sec} AM`;
    }
    console.log(result);
  }, time);
}

clock();