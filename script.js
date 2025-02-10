const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const image = document.getElementById("image");
const imageSection = document.getElementById("img-section");
const text = document.getElementById("text-act");

let nos = 0;
let yesses = 0;
yesButton.addEventListener("click", () => {
  yesses++;
  image.src = "images/totoro-h1.jpg";
  text.textContent = "Thank you!";
});

function sayNo() {
  const please = "please ";
  nos++;
  if (yesses > 0) {
    text.textContent = "No take backs!";
  } else {
    if (nos === 1) {
      text.textContent = "Are you sure?";
      image.src = "images/totoro-shocked.jpg";
    } else if (nos > 1) {
      text.textContent = `${please.repeat(nos - 1)}`;
      image.src = "images/totoro-sad.png";
    }
  }
}

noButton.addEventListener("click", sayNo);
