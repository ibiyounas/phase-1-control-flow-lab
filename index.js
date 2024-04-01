function scuberGreetingForFeet(ridelength){
  
  if (ridelength <= 400) {
    return 'This one is on me!';
    
  }
  else if (ridelength > 400 && ridelength <=2000) {
    return 'That will be twenty bucks.'
  }
  else if (ridelength > 2000 && ridelength <= 2500) {
  return 'I will gladly take your thirty bucks.'
  }
  else {
  return 'No can do.';
  }
  
}

function ternaryCheckCity(name){
  return name == 'NYC'? 'Ok, sounds good.' : 'No go.';
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case tip = 'generous':
    return "Thank you so much."
    case tip = 'not as generous':
    return "Thank you."
    default:
      return "Bye."
  }
}