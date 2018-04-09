var buttons = document.getElementsByClassName("button");
var amountButton = buttons.length;

function amountBtn(amountButton) {
  for (i = 0 ; i <= amountButton ; i++ ) {
    alert(buttons[i].innerText);
  }
}

amountBtn(amountButton);
