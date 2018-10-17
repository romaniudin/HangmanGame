/* pick up a random word

while the word has not been guessed {
    Show the uses his current status
    Get input from user

    if the user wants to quit {
        quit the game
    } else if the user enters > 1 letter {
        Warning -> ask to re-enter
    } else {
        if the user enters a correct letter - > show the current status & go to start of while again
    }
}
Congratulations to the user, he wins!
*/

//starting data for the Game
var words = ['monkey', 'rhino', 'elephant', 'chicken', 'dolphin', 'fish', 'bear', 'turtle', 'giraffe', 'goat', 'cow', 'horse', 'cat', 'dog', 'mice']

//creating random word for the Game

function startGame() {
    var word = words[Math.floor(Math.random() * words.length)]
    console.log(word) //to have access to the result

    //creating Answer field 
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = '*'
    }
    console.log(answerArray)

    var guessLimitsCounter = word.length + 5
    var remainingLetters = word.length;
    var name = prompt("Enter your name, Stranger")
    alert("Today's word is an animal. It has " + answerArray.length + ' letters' + ' ' + answerArray.join(' '))

    //Game code itself
    while (remainingLetters > 0) {
        var guessFromUser = prompt('Enter your letter, ' + name + '. Or click Cancel to quit.').toLowerCase()
        var guessLimits = guessLimitsCounter--;
        console.log(word)
        if (guessFromUser === null) {
            break;
        } else if (guessLimits <= 0) {
            alert('Your guessLimits are ended! Start the Game again');
            break;
        } else if (guessFromUser.length !== 1) {
            alert('Enter 1 letter only!')
        } else {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guessFromUser) {
                    answerArray[j] = guessFromUser;
                    remainingLetters--;
                }
            }
        }
        alert(answerArray.join(' '))
        alert('Remaining quantity of guesses: ' + guessLimits)

    }
    alert('The answer is ' + word)
}

$(document).on('click', 'button', function () {
    startGame()
});

$(document).ready(function () {
    $('button').addClass('animated infinite flash');
    $('button').click(function () {
        $('button').stop(true, true)
        });
});