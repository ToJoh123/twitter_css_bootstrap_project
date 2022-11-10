// function that asks user if workshop planned, if planned it asks user if we want meeting before or after. if not planned it asks user if what time we want meeting
function workshop() {
  let workshop = prompt("is there a workshop planned?");
  if (workshop === "yes") {
    let meeting = prompt("before or after?");
    if (meeting === "before") {
      alert("meeting at 9:30");
    } else if (meeting === "after") {
      alert("meeting at 2:30");
    } else {
      alert("no meeting");
    }
  } else {
    let meeting = prompt("what time?");
    alert("meeting at " + meeting);
  }
}
