
// utility
function isEmpty(testString) {
  return (testString.trim().length === 0);
}


// business
function pigLatin(text) {
    if (isEmpty(text)) {
        return "";
    }
    return text;
}


// interface
function formSubmit (event) {
  event.preventDefault();
  document.getElementById("translated-passage").innerText = "";
  const passage = document.getElementById("text-passage").value;
  let result = pigLatin(passage);
  document.getElementById("translated-passage").append(result);
}


window.addEventListener("load", function() {
  document.querySelector("form#translator").addEventListener("submit", formSubmit);
});