if (typeof window === "undefined") {
  var Dancer = require("./Dancer");
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function BlinkyDancer(...args) {
  // your code here
  Dancer.apply(this, args);
}
// function BlinkyDancer(top, left, time) {
//   // your code here
//   Dancer.apply(this, [top, left, time]);
// }
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this);

  let style = this.$node.style;
  style.display = style.display === "none" ? "inline-block" : "none";
};

// BlinkyDancer.prototype.setPosition = function() {
//   Dancer.prototype.setPosition.apply;

//   let style = BlinkyDancer.$node.style;
//   style.display = style.display === "none" ? "inline-block" : "none";
// };
// functional
// var makeBlinkyDancer = (top, left, timeBetweenSteps) => {
//   const blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   let oldStep = blinkyDancer.step;

//   blinkyDancer.step = () => {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();

//     let style = blinkyDancer.$node.style;
//     style.display = style.display === "none" ? "inline-block" : "none";

//     // if(style.display === 'none'){
//     //   style.display = "inline-block"
//     // }else{
//     //   style.display = 'none'
//     // }
//   };

//   return blinkyDancer;
// };
//

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = BlinkyDancer;
}
