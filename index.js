function scuberGreetingForFeet(distance) {
  let message;
  
  if (distance <= 400) {
    message = "This one is on me!";
  } else if (distance > 2000 && distance <= 2500) {
    message = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    message = "No can do.";
  }
  
  return message;
}

function ternaryCheckCity(city){
  let message;
  if (city === "NYC"){
    message ="Ok, sounds good."
  } else if(city === "Pittsburgh"){
    message = "No go."
  }
  return message;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}