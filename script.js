function checkDriverAge() {
  var age = prompt("What is your age?");
  
  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

var checkDriverAge2 = function() {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
};

function checkDriverAgeWithReturn(age) {
  if (age < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (age > 18) {
    return "Powering On. Enjoy the ride!";
  } else {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

function runBonus() {
  var ageValue = document.getElementById("ageInput").value;
  var message = checkDriverAgeWithReturn(Number(ageValue));
  document.getElementById("result").innerText = message;
}