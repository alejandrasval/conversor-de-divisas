//Evento para que apenas se haga click se llame la función

let boton = document.getElementById("submit");
boton.addEventListener("click", moneyConversor);

//Función que convierte las monedas

function moneyConversor(currentAmount, from, to) {
  currentAmount = document.getElementById("currentAmount").value;
  from = document.getElementById("from").value;
  to = document.getElementById("to").value;
  finalAmount = document.getElementById("finalAmount");
  let total = 0;

  if (from == "EUR" && to == "USD") {
    total = `$${currentAmount * 1.18}`;
    finalAmount.innerHTML = total;
  } else if (from == "EUR" && to == "GBP") {
    total = `£${currentAmount * 0.85}`;
    finalAmount.innerHTML = total;
  } else if (from == "EUR" && to == "COP") {
    total = `$${currentAmount * 4489.7}`;
    finalAmount.innerHTML = total;
  } else if (from == "EUR" && to == "MXN") {
    total = `$${currentAmount * 23.46}`;
    finalAmount.innerHTML = total;
  } else if (from == "USD" && to == "MXN") {
    total = `$${currentAmount * 19.94}`;
    finalAmount.innerHTML = total;
  } else if (from == "USD" && to == "COP") {
    total = `$${currentAmount * 3817.17}`;
    finalAmount.innerHTML = total;
  } else if (from == "USD" && to == "EUR") {
    total = `€${currentAmount * 0.85}`;
    finalAmount.innerHTML = total;
  } else if (from == "USD" && to == "GBP") {
    total = `£${currentAmount * 0.72}`;
    finalAmount.innerHTML = total;
  } else if (from == "MXN" && to == "USD") {
    total = `$${currentAmount * 0.05}`;
    finalAmount.innerHTML = total;
  } else if (from == "MXN" && to == "COP") {
    total = `$${currentAmount * 191.39}`;
    finalAmount.innerHTML = total;
  } else if (from == "MXN" && to == "EUR") {
    total = `€${currentAmount * 0.043}`;
    finalAmount.innerHTML = total;
  } else if (from == "MXN" && to == "GBP") {
    total = `£${currentAmount * 0.036}`;
    finalAmount.innerHTML = total;
  } else if (from == "GBP" && to == "EUR") {
    total = `€${currentAmount * 1.17}`;
    finalAmount.innerHTML = total;
  } else if (from == "GBP" && to == "USD") {
    total = `$${currentAmount * 1.38}`;
    finalAmount.innerHTML = total;
  } else if (from == "GBP" && to == "COP") {
    total = `$${currentAmount * 5263.11}`;
    finalAmount.innerHTML = total;
  } else if (from == "GBP" && to == "MXN") {
    total = `$${currentAmount * 27.49}`;
    finalAmount.innerHTML = total;
  } else if (from == "COP" && to == "EUR") {
    total = `€${currentAmount * 0.00026}`;
    finalAmount.innerHTML = total;
  } else if (from == "COP" && to == "USD") {
    total = `$${currentAmount * 0.00022}`;
    finalAmount.innerHTML = total;
  } else if (from == "COP" && to == "GBP") {
    total = `£${currentAmount * 0.00019}`;
    finalAmount.innerHTML = total;
  } else if (from == "COP" && to == "MXN") {
    total = `$${currentAmount * 0.0052}`;
    finalAmount.innerHTML = total;
  }  else if (currentAmount == "") {
    alert("Ingrese un valor")
  } 
}
