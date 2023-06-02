let averageTeamJohn = (150 + 120 + 103) / 3;
let averageTeamMike = (98 + 134 + 105) / 3;
let averageTeamMary = (197 + 134 + 105) / 3;

if (averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMary) {
  console.log(
    "John's team has a higher average score - " + averageTeamJohn + " points"
  );
} else if (
  averageTeamMary > averageTeamMike &&
  averageTeamMary > averageTeamJohn
) {
  console.log(
    "Mary's team has a higher average score - " + averageTeamMary + " points"
  );
} else if (
  averageTeamMike > averageTeamJohn &&
  averageTeamMike > averageTeamMary
) {
  console.log(
    "Mike's team has a higher average score - " + averageTeamMike + " points"
  );
} else {
  console.log("It's a tie");
}
