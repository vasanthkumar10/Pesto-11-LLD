function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    console.log("debouncing......", args);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    console.log("throttling", args);
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function display() {
  console.log("vasanth");
}

// const debouncedDisplay = throttle(display, 1000);
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// debouncedDisplay();
// setTimeout(() => {
//   debouncedDisplay("vasanth");
// }, 2000);
