
// utility
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// function depunctualize(word) {
//   const charArray = word.toLowerCase().split('');
//   let noPunctWord = '';
//   charArray.forEach(function(char) {
//     const asciiCode = char.charCodeAt(0);
//     if (asciiCode >= 97 && asciiCode <= 122) {
//       noPunctWord += String.fromCharCode(asciiCode);
//     } else {
//       noPunctWord += ' ';
//     }
//   })
//   return noPunctWord
// }

function depunctualize(word) {
  const charArray = word.split('');
  const reversedArray = charArray.reverse();
  let punctuation = '';
  for (let char of reversedArray) {
    const asciiCode = char.toLowerCase().charCodeAt(0);
    if (asciiCode >= 97 && asciiCode <= 122) {
      break
    } else {
      punctuation = char + punctuation;
    }
  }
  return [charArray.slice(punctuation.length).reverse().join(''), punctuation];
}


function latinify(word, suffix, prefix='') {
  const [letters, punctuation] = depunctualize(word);
  word = letters.slice(prefix.length);
  return word[0].toUpperCase() + word.slice(1) + prefix + suffix + punctuation;
}

// business
function pigLatin(text) {
    if (isEmpty(text)) {
        return "";
    }
    const vowels = ["A", "E", "I", "O", "U"];
    if (vowels.includes(text[0].toUpperCase())) {
      return latinify(text, "way");
    } else if ((text.charAt(0).toLowerCase() === "q") && (text.charAt(1).toLowerCase() === "u")) {
      return latinify(text, "ay", "qu");
    } else if (text.toLowerCase().startsWith('squ')) { 
      return latinify(text, 'ay', 's');
    } else {
        const conArray= text.split('');
        let prefix = '';
        for (let index=0; index <text.length; index +=1) {
            if (vowels.includes(conArray[index].toUpperCase())) {
                return latinify(text, "ay", prefix.toLowerCase());
            } else {
                prefix+=conArray[index];
            }
        }
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