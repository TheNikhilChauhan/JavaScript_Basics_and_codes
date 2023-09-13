const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Height! ${height}`;
  } else if (weight === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Weight! ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span>
        <p>You are under weight</p>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi}</span>
        <p>Your weight is in normal range</p>`;
    } else {
      result.innerHTML = `<span>${bmi}</span>
        <p>You are overweight</p>`;
    }
  }
});
