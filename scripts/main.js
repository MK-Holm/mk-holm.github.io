const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/final4-champs.jpeg") {
    myImage.setAttribute("src", "images/firefox2.jpeg");
  } else {
    myImage.setAttribute("src", "images/final4-champs.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Final4 is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Final4 is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
