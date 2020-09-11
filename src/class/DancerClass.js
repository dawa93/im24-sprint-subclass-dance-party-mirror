if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
  // your code here
  constructor(top, left, time) {
    // const createDancerElement = function () {
    //   let elDancer = document.createElement("span");
    //   elDancer.className = "dancer";
    //   return elDancer;
    // };
    this.time = time;
    this.$node = this.createDancerElement();
    this.$node1 = this.createDancerElement1();
    this.step();
    this.step1();
    this.setPosition(top, left);
    this.setPosition1(top, left);
  }

  createDancerElement() {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  }

  createDancerElement1() {
    let newDancer = document.createElement("span");
    newDancer.className = "newdancer";
    return newDancer;
  }

  step() {
    setTimeout(this.step.bind(this), this.time);
  }

  step1() {
    setTimeout(this.step1.bind(this), this.time);
  }

  setPosition(top, left) {
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  }
  setPosition1(top, left) {
    Object.assign(this.$node1.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = DancerClass;
}
