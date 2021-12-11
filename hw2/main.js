let calculate = document.querySelector("#calculate");
let amount = document.querySelector("#c-amount");
let interest = document.querySelector("#c-interest");
let duration = document.querySelector("#c-duration");
let results = document.querySelector("#results");

calculate.addEventListener("click", function () {
  let amountVal = parseInt(amount.value);
  let interestVal = parseInt(interest.value);
  let durationVal = parseInt(duration.value);

  let finalAmount = amountVal + ((amountVal * interestVal) / 100) * durationVal;
  let remainder = Math.floor(finalAmount % durationVal);
  let monthlyPayment =  Math.floor((finalAmount - remainder) / durationVal);

  let paymentStartDate = new Date();

  for (let index = 1; index <= durationVal; index++) {
    if (index == durationVal) {
      createMonthlyItem(monthlyPayment+remainder,paymentStartDate);
      break;
    }
    createMonthlyItem(monthlyPayment,paymentStartDate);
    paymentStartDate.setDate(paymentStartDate.getDate() + 30);
  }

  function createMonthlyItem(value,date) {
    let item = document.createElement("div");
    item.classList.add("col-md-3", "mb-3");

    let itemInner = document.createElement("div");
    itemInner.classList.add("border", "rounded", "text-center", "py-5");
    itemInner.innerHTML = value + "₼ <br>" + date.getDate() +"-"+(date.getMonth()+1)+"-"+date.getFullYear();

    item.append(itemInner);
    results.append(item);
  }

  let h2 = document.createElement("h2");
  h2.innerHTML = "Total:" + finalAmount;
  results.append(h2);
});
