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
    this.time = time;
    this.$node = this.createDancerElement();
    this.step();
    this.setPosition(top, left);
    // this.move(left);

    this.$node2 = this.createDancerElement2();
    this.step2();
    this.setPosition2(top, left);
  }

  createDancerElement() {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  }
  step() {
    setTimeout(this.step.bind(this), this.time);
  }
  setPosition(top, left) {
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`
    });
  }
  /// second dancer
  createDancerElement2() {
    let newDancer = document.createElement("span");
    newDancer.className = "newdancer";
    return newDancer;
  }
  step2() {
    setTimeout(this.step2.bind(this), this.time);
  }
  setPosition2(top, left) {
    Object.assign(this.$node2.style, {
      top: `${top}px`,
      left: `${left}px`
    });
  }
  // moving by themsleves
  // move(left) {
  //   Object.assign(this.$node.style, {
  //     left: `${left}px - 5px`
  //   });
  // }

  // line up
  lineUp() {
    Object.assign(this.$node.style, {
      top: "700px"
    });
    Object.assign(this.$node2.style, {
      top: "700px"
    });
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = DancerClass;
}
