let add = document.getElementById("add");

add.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  let text = document.createTextNode(input);

  let newItem = document.createElement("li");
  newItem.appendChild(text);

  let olItem = document.getElementById("ol-item");
  olItem.appendChild(newItem);
});
