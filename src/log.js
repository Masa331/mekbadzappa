const Testy = {
  test1() {
    return 'test1';
  },

  test2() {
    return 'test2';
  }
}

// const test2 = function() { return 2 }

export default Testy;
window.hovno = Testy;
global.Testy = Testy;
