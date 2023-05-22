const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;
const ROUNDS = 6;


async function init() {
    let currentGuess = '';
    let currentRow = 0;
    let isLoading = true;

    // const res = await fetch("https://words.dev-apis.com/word-of-the-day?random=1");
    const res = await fetch("https://words.dev-apis.com/word-of-the-day");
    const resObj = await res.json();
    const word = resObj.word.toUpperCase();
    
    // desctructuting... new syntax but the same functinality as above
    // const { word } = await res.json(); // take the property of the json respons called `word`
                                       // and create a cont with the same name `word`
                                       // this way we do two lines in one
    const wordParts = word.split("");
    let done = false;

    setLoading(false);
    isLoading = false;
    console.log(word)


    function addLetter(letter) {
        if (currentGuess.length < ANSWER_LENGTH) {
            // add letter to the end
            currentGuess += letter;
        } else {
            // replace the last letter
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }
        letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
    }

    async function commit() {
        if (currentGuess.length !== ANSWER_LENGTH) {
            // do nothing
            return;
        }
        isLoading = true;
        setLoading(true);

        const res = await fetch("https://words.dev-apis.com/validate-word", {
            method: "POST",
            body: JSON.stringify({word: currentGuess}) 
                });

        const resObj = await res.json();
        const validWord = resObj.validWord;
        // const { validWord } = resObj; // the same as the line above
        
        isLoading = false;
        setLoading(false);

        if (!validWord) {
            markInvalidWord();
            return;
        }



        // TODO validate the word

        // TODO do all the marking as 'correct', 'close' or 'wrong'

        const guessParts =  currentGuess.split("");
        const map = makeMap(wordParts);
        console.log(map);


        for (let i = 0; i < wordParts.length; i++) {
            // mark as correct
            if (guessParts[i] === wordParts[i]) {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
                map[guessParts[i]]--;
    
            }
        }

        for (let i = 0; i < ANSWER_LENGTH; i++) {
            if (guessParts[i] === wordParts[i]) {
                // do nothing, we already did it
            } else if (wordParts.includes(guessParts[i])  && map[guessParts[i]] > 0) {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
                map[guessParts[i]]--;
            } else {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
            }
        }
        
        currentRow++;
        
        if (currentGuess === word) {
            // win
            alert("you win!");
            document.querySelector(".brand").classList.add("winner");
            
            done = true;
            return;
        } else if (currentRow === ROUNDS) {
            alert(`You lose, the word was ${word}`);
            done = true;
        }
        currentGuess = '';
    }

    function backspace() {
        currentGuess = currentGuess.substring(0, currentGuess.length - 1);
        letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
    }

    function markInvalidWord() {
        // alert(" Not a valid word");
        for (let i=0; i < ANSWER_LENGTH; i++) {
            letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");

            setTimeout(function () {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid");
            }, 10);
        }
    } 


    document.addEventListener('keydown', function handleKeyPress (event) {
        if (done || isLoading) {
            // do nothing
            return;
        }

        const action = event.key;
        console.log(action);

        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backspace();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase());
        } else {
            // do nothing
        }
    });
}

// a little function to check to see if a character is alphabet letter
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
    }

function setLoading(isLoading) {
    loadingDiv.classList.toggle('hidden', !isLoading); // `!` means the negation, not equal..
}

function makeMap(array) {
    const obj = {};
    for (let i=0; i<array.length; i++) {
        const letter = array[i]
        if (obj[letter]) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    return  obj;
}

init()
// console.log(spinner)