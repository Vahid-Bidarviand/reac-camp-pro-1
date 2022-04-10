const submitBtn = document.querySelector("#submitBtn");
const formOptions = document.querySelectorAll('input[name="expense-choices"]');
let enteredData = localStorage.getItem("data");
let getData = JSON.parse(enteredData);
let data = getData && getData.length > 0 ? getData : [];
submitBtn.addEventListener("click", () => {
  let choice;
  let day = document.getElementById("day").value
    ? document.getElementById("day").value
    : undefined;
  let month = document.getElementById("month").value
    ? document.getElementById("month").value
    : undefined;
  let year = document.getElementById("year").value
    ? document.getElementById("year").value
    : undefined;
  let fullDate =
    day &&
    day !== undefined &&
    month &&
    month !== undefined &&
    year &&
    year !== undefined
      ? year + " / " + month + " / " + day
      : undefined;
  let description = document.getElementById("descField").value
    ? document.getElementById("descField").value
    : "";
  const amountField = document.getElementById("amount").value;
  for (const option of formOptions) {
    if (option.checked) {
      choice = option.value;
      break;
    } else {
      choice = undefined;
    }
  }
  if (
    choice &&
    choice !== undefined &&
    amountField &&
    amountField !== undefined &&
    fullDate &&
    fullDate !== undefined
  ) {
    let addedExpense = {
      option: choice,
      amount: amountField,
      date: fullDate,
      description: description,
    };
    data.push(addedExpense);
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    alert("111");
  }
  location.reload();
});
console.log("sd", data);
