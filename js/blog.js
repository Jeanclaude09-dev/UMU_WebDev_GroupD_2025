<div
  id="box"
  style="width: 100px; height: 100px; background-color: lightblue; position: relative;"
></div>;

document.getElementById("box").onclick = function () {
  this.style.transition = "1s";
  this.style.transform = "scale(1.3)";
};

document.getElementById("text").style.display = "none"; //hide
document.getElementById("text").style.display = "block"; //hide

document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});

let items = document.querySelectorAll(".items");
items.forEach((el) => (el.style.color = "red"));
let name = document.getElementById("username").value;
document.getElementById("output").textContent = "Hello" + name;
document.getElementById("image").src = "new-image.jpg";
document.getElementById("box").style.backgroundColor = "yellow";
document.getElementById("box").style.fontSize = "20px";
