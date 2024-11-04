const result = document.getElementById("result");

const plusbtn = document.getElementById("plus-btn");
plusbtn.addEventListener("click", () => {
  const count = Number(result.textContent) + 1;
  result.textContent = count;
});

const minusBTn = document.getElementById("minus-btn");
minusBTn.addEventListener("click", () => {
  const count = Number(result.textContent);
  result.textContent = count;
  if (count > 0) {
    result.textContent = count - 1;
  }
});

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  result.textContent = 0;
});
