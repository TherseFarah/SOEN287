const orderButton = document.querySelector(".PlaceOrder");

function isInt(value) {
  return (
    !isNaN(value) &&
    (function (x) {
      return (x | 0) === x;
    })(parseFloat(value))
  );
}

orderButton.addEventListener("click", function (e) {
  e.preventDefault();

  const xhtmlPrice = 19.99;
  const phpPrice = 86.0;
  const jqueryPrice = 55.0;
  var total = 0;
  var result = document.createElement("text");
  result.setAttribute("id", "order-result");
  result.innerHTML = "";
  const node = document.createElement("div2");

  const xhtmlQuantity = document.getElementById("xhtmlQuantity").value;
  if (isInt(xhtmlQuantity)) {
    console.log(xhtmlQuantity);
    const xhtmlTotal = xhtmlQuantity * xhtmlPrice;
    console.log(xhtmlTotal);
    result.innerHTML +=
      "<b>Basic XHTML (Quantity = " +
      xhtmlQuantity +
      "):</b> $" +
      xhtmlTotal +
      "<br>";
    total += xhtmlTotal;
  } else {
    result.innerHTML += "<b>Basic XHTML: This is not an integer</b> <br>";
  }

  const phpQuantity = document.getElementById("phpQuantity").value;
  if (isInt(phpQuantity)) {
    console.log(phpQuantity);
    const phpTotal = phpQuantity * phpPrice;
    console.log(phpTotal);
    result.innerHTML +=
    "<b>Intro to PHP (Quantity = " +
    phpQuantity +
    "):</b> $" +
    phpTotal +
    "<br>";
    total += phpTotal;
  } else {
    result.innerHTML += "<b>Intro to PHP: This is not an integer</b> <br>";
  }

  const jqueryQuantity = document.getElementById("jqueryQuantity").value;
  if (isInt(jqueryQuantity)) {
    console.log(jqueryQuantity);
    const jqueryTotal = jqueryQuantity * jqueryPrice;
    console.log(jqueryTotal);
    result.innerHTML +=
    "<b>Advanced JQuery (Quantity = " +
    jqueryQuantity +
    "):</b> $" +
    jqueryTotal +
    "<br><br>";
    total += jqueryTotal;
  } else {
    result.innerHTML += "<b>Advanced JQuery: This is not an integer</b> <br>";
  }

  result.innerHTML +=
    "<b>Final Total :</b> $" +
    total +
    "<br><br>";

  node.appendChild(result);
  document.getElementById("div2").appendChild(node);
});
