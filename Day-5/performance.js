// function debounce(func, delay) {
//   let timeoutId;
//   return function () {
//     console.log("debouncing......");
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(func, delay);
//   };
// }

function throttle(func, limit) {
  let inThrottle;
  return function () {
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
