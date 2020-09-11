if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// Creates and returns a new dancer object that can step
var makeDancer = (top, left, timeBetweenSteps) => {
  const dancer = {};

  // 메소드 1. -> span 태그 생성
  const createDancerElement = () => {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  };
  // dancer 객체의 요쇼로 span (elDancer) 태그를 넣어준다.
  dancer.$node = createDancerElement();

  // dancer 객체 span태그 즉, 점들에 대한 메소드
  dancer.step = () => {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };

  // 점들이 화면에 찍히는 위치.
  dancer.setPosition = (top, left) => {
    // Use css top and left properties to position our <span> tag
    Object.assign(dancer.$node.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  };

  // 점들의 위치와 반짝임 실행
  dancer.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = makeDancer;
}
