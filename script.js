//your JS code here. If required.
//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.getElementById("level");
  let domLevel = 0;
  let currentElement = targetElement;

  while (currentElement !== document.documentElement) {
    domLevel++;
    currentElement = currentElement.parentElement;
  }

  alert(`The level of the element is: ${domLevel}`);
});
