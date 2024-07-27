let string = "";
let button = document.querySelectorAll(`.button`);
Array.from( buttons) .forEach((button) => {
  if (e.target.innerEventListener == "=") {
    string = eval(string);
    document.querySelector(`input`).value = string;
  } else if (e.target.innerEventListener == "C") {
    string = eval(string);
    document.querySelector(`input`).value = string;
  } else {
    console.log(e.target);
    string = string + e.target.innerHtml;
    document.querySelector(`input`).value = string;
  }
});
