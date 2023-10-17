let homeTeamScores = 0;
let guestTeamScores = 0;

let homeTeamScoresNumber = document.getElementById('home-team_scores');
let guestTeamScoresNumber = document.getElementById('guest-team_scores');

function addOnePointToHome() {
    let addOne = homeTeamScores = homeTeamScores + 1;
    homeTeamScoresNumber.innerHTML = addOne;
}
function addTwoPointsToHome() {
    let addTwo = homeTeamScores = homeTeamScores + 2;
    homeTeamScoresNumber.innerHTML = addTwo;
}
function addThreePointsToHome() {
    let addThree = homeTeamScores = homeTeamScores + 3;
    homeTeamScoresNumber.innerHTML = addThree;
}
function addOnePointToGuest() {
    let addOneGuest = guestTeamScores = guestTeamScores + 1;
    guestTeamScoresNumber.innerHTML = addOneGuest;
}
function addTwoPointsToGuest() {
    let addTwoGuest = guestTeamScores = guestTeamScores + 2;
    guestTeamScoresNumber.innerHTML = addTwoGuest;
}
function addThreePointsToGuest() {
    let addThreeGuest = guestTeamScores = guestTeamScores + 3;
    guestTeamScoresNumber.innerHTML = addThreeGuest;
}