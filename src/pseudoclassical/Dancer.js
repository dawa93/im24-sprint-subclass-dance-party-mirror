if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// Dancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function Dancer(top, left, time) {
  // your code here
  this.top = top;
  this.left = left;
  this.time = time;
}

let createDancerElement = function() {
  let elDancer = document.createElement("span");
  elDancer.className = "dancer";
  return elDancer;
};

Dancer.prototype.$node = createDancerElement();

Dancer.prototype.step = function() {
  setTimeout(Dancer.step, this.time);
};

Dancer.prototype.setPosition = function() {
  Object.assign(this.$node.style, {
    top: `${this.top}px`,
    left: `${this.left}px`
  });
};

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = Dancer;
}
