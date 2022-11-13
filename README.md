# _Pig Latin Translator_

#### By _**Cameron Abel**, **Chloe O'Neil**, **Carl Sustrich**_

#### _Translates English into Pig Latin_

## Technologies Used

- HTML
- CSS
- JavaScript

## Description

English to Pig Latin Translator

## Setup

This site may be accessed on [GitHub pages](https://cameronabel.github.io/pig-latin/). To host this site locally:

- Clone this repository to your local machine
- Navigate to the top level of the directory
- Open index.html in your browser

- Enter a phrase into the text box
- Click on `Submit!`

## Known Bugs

No known bugs at this time. Report bugs [here](mailto:cameronabel@gmail.com)

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _2022_ _Cameron Abel_, _Chloe O'Neil_, _Carl Sustrich_

## TDD Tests

Describe: pigLatin()

Test: "It will return a blank string if passed a blank string"
Code: pigLatin("");
Expected Output: ""

Test: "It will not add 'way' to the end of words that don't begin with a vowel."
Code: pigLatin("dog");
Expected output: "dog"

Test: "It will add 'way' to the end of words that are just a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("aardvark");
Expected Output: "aardvarkway"

Test: "It will add 'way' to the end of words that begin with a vowel, regardless of capitalization."
Code: pigLatin("A");
Expected Output: "Away"

Test: "It will add 'way' to the end of words that begin with a vowel, regardless of punctuation."
Code: pigLatin("A!");
Expected Output: "Away!"

Test: "It will, in words that begin with a consonant, move the consonant to the end of the word, followed by 'ay'."
Code: pigLatin("monkey");
Expected Output: "onkeymay"

Test: "It will, in words that begin with multiple consonants, move all consonants, until the first vowel, to the end of the word, followed by 'ay'."
Code: pigLatin("blank");
Expected Output: "ankblay"

Test: "It will, in words that begin with 'qu', move both letters to the end of the word, followed by 'ay'."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will not move a second letter 'u', unless preceeded by a 'q'."
Code: pigLatin("squeal");
Expected Output: "quealsay"

Describe: translatePassage()

Test: "It will apply piglatin() across all words in an inputted passage"
Code: translatePassage("The quick brown fox")
Expected Output: "ethay ickquay ownbray oxfay"
