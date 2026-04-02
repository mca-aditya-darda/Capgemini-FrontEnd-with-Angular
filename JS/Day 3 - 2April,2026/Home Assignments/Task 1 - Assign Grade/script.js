// Grade using if-else
function getGradeIfElse(marks) {
  if (marks >= 76 && marks <= 100) {
    return "A";
  } else if (marks >= 61) {
    return "B";
  } else if (marks >= 56) {
    return "C";
  } else if (marks >= 41) {
    return "D";
  } else {
    return "Failed";
  }
}

// Grade using switch
function getGradeSwitch(marks) {
  switch (true) {
    case marks >= 76 && marks <= 100:
      return "A";
    case marks >= 61:
      return "B";
    case marks >= 56:
      return "C";
    case marks >= 41:
      return "D";
    default:
      return "Failed";
  }
}
