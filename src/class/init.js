/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */

  // make a dancer with a random position
  //
  // TODO:
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  dancers.push(dancer);
  document.body.appendChild(dancer.$node);
}

function handleClickDancerButton2() {
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  dancers.push(dancer);
  document.body.appendChild(dancer.$node2);
}

document.querySelector(".lineUp").onclick = () => {
  dancers.forEach(dancer => dancer.lineUp());
};

window.addEventListener("DOMContentLoaded", () => {
  const elAddDancerButton = document.querySelector(".addDancerButton");
  elAddDancerButton.addEventListener("click", handleClickDancerButton);
});

window.addEventListener("DOMContentLoaded", () => {
  const elAddDancerButton = document.querySelector(".addNewDancerButton");
  elAddDancerButton.addEventListener("click", handleClickDancerButton2);
});
