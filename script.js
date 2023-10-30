function changeColor(element) {
  const currentColor = element.style.backgroundColor;
  if (currentColor == "orange") {
    element.style.backgroundColor = "blue";
  } else {
    element.style.backgroundColor = "orange";
  }
}