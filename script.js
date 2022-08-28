const rateButton = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".rating-submit");
const thankYouSection = document.querySelector(".thank");
const ratingSection = document.querySelector(".rating");
const thankInfo = document.querySelector(".thank-info");

rateButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedNumber = e.target.innerText;
    let btn = e.target;
    btn.classList.toggle("btn-back");
    btn.classList.toggle("rating-button");
    thankInfo.innerText = `You have selected ${selectedNumber} out of 5`;
  });
});

submitButton.addEventListener("click", () => {
  rateButton.forEach((btn) => {
    if (btn.classList.value === "btn-back") {
      thankYouSection.classList.toggle("hidden");
      ratingSection.classList.toggle("hidden");
    }
  });
});
