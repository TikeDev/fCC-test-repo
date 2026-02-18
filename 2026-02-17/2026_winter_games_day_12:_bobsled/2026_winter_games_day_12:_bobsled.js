function checkEligibility(athleteWeights, sledWeight) {
  let sledWeights = {1:162, 2:170, 4:210};
  let totalWeights = {1:247, 2:390, 4:630};
  let numAth = athleteWeights.length;

  if (sledWeights[numAth] > sledWeight ) return "Not Eligible";

  if (totalWeights[numAth] < sledWeight +
  athleteWeights.reduce((p, c) => {return p+c}, 0) ){
    return "Not Eligible";
  }
  return "Eligible";
}


/*
Input: array w weights of athletes and weight of bobsled
Output: if team is eligible to race`

- obj with 
let sledWeights = {1:162, 2:170, 4:210}
let totalWeights = {1:247, 2:390, 4:630}


*/