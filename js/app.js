/*-------------- Array -------------*/
//two arrays: consts - Hobbies Questions, About You Questions
//five objects in each array, for each questions
//properties: question, key: What would youb like to talk
//options: Choices array, objects
const introQuestion = [
    {questionIntro: 'What would you like to talk about?',
        options: [
            {answer: 'About You', choice: ''},
            {answer: 'Hobbies and Skills', choice: ''},
            {answer: 'Nothing, you can\'t talk you\'re a computer!', choice: ''}
        ]
    }
]

const aboutYou = [
    {question: 'What operating system do you like?',
        options: [
            {answer: 'Windows', choice: 2},
            {answer: 'Mac', choice: 1},
            {answer: 'I don\'t really like computers...', choice: 0}

        ]
    },
    {question: 'What do you like about going to a cafe?',
        options: [
            {answer: 'Peace and quiet', choice: 1},
            {answer: 'Free WiFi', choice: 2},
            {answer: 'A nice cup of coffee', choice: 0}
        ]
    },
    {question: 'What kind of video games do you like?',
        options: [
            {answer: 'Cozy Farming Sims', choice: 1},
            {answer: 'Rhythm Games', choice: 0},
            {answer: 'Roleplaying Adventures', choice: 2}
        ]
    },
    {question: 'What\'s your favorite sport?',
        options: [
            {answer: 'Baseball', choice: 0},
            {answer: 'Pong', choice: 2},
            {answer: 'Tennis', choice: 1}
        ]
    },
    {question: 'Do you like to travel?',
        options: [
            {answer: 'Yes', choice: 1},
            {answer: 'No', choice: 0},
            {answer: 'As long as I have an extension cord...', choice: 2}
        ]
    }
]

const hobbiesInterests = [
    {question: 'What do you do on a rainy day?',
        options: [
            {answer: 'Stay inside and read.', choice: 1},
            {answer: 'Go outside and dance in the rain!', choice: 0},
            {answer: 'Cozy up and game all day.', choice: 2}
        ]
    },
    {question: 'Do you have a hobby?',
        options: [
            {answer: 'Making Arts and Crafts', choice: 1},
            {answer: 'Sports and Exercise', choice: 0},
            {answer: 'Playing Video Games', choice: 2}
        ]
    },
    {question: 'What\'s your favorite color?',
        options: [
            {answer: 'Blue', choice: 1},
            {answer: 'Red', choice: 0},
            {answer: '#808080', choice: 2}
        ]
    },
    {question: 'What\'s your dream job?',
        options: [
            {answer: 'Software Engineer', choice: 3},
            {answer: 'Artist', choice: 1},
            {answer: 'Doctor', choice: 0}
        ]
    },
    {question: 'Do you like to travel?',
        options: [
            {answer: 'Yes', choice: 1},
            {answer: 'No', choice: 0},
            {answer: 'As long as I have an extension cord...', choice: 2}
        ]
    }
]

/*-------------- Constants -------------*/
const winningScore = 10;
const choices = [];
    
    
/*---------- Variables (state) ---------*/
let playerChoice = null;
let progressBar = 0;
let whichQuestion = 0;
let category = null;
let playerPoints = 0;
let audio = document.getElementById('cafe-song');


/*----- Cached Element References  -----*/
let playerScore = 0;

/*-------------- Functions -------------*/
audio.volume = 0.05;
audio.loop = true;

const introduction = () => {
    document.querySelector('.message').innerText = introQuestion[0].questionIntro;
    document.getElementById('first').innerText = introQuestion[0].options[0].answer;
    document.getElementById('second').innerText = introQuestion[0].options[1].answer;
    document.getElementById('third').innerText = introQuestion[0].options[2].answer;
}//VERY FIRST SCREEN - HAS TWO OPTIONS that switch scenes

const questionDisplay =  (choice) => {
    document.querySelector('.message').innerText = choice[whichQuestion].question
    document.getElementById('first').innerText = choice[whichQuestion].options[0].answer
    document.getElementById('second').innerText = choice[whichQuestion].options[1].answer
    document.getElementById('third').innerText = choice[whichQuestion].options[2].answer
}

const pointValue = (choice) => {
    if (choice === 'first') {
        playerPoints = playerPoints + category[whichQuestion].options[0].choice;
        expressionChange(category[whichQuestion].options[0].choice);
    } else if (choice === 'second') {
        playerPoints = playerPoints + category[whichQuestion].options[1].choice;
        expressionChange(category[whichQuestion].options[1].choice);
    } else if (choice === 'third') {
        playerPoints = playerPoints + category[whichQuestion].options[2].choice;
        expressionChange(category[whichQuestion].options[2].choice);
    }
}

const expressionChange = (choice) => {
    if (choice === 2) {
        document.getElementById("date").src = './assets/great-answer.png';
    } else if (choice === 1) {
        document.getElementById("date").src = './assets/good-answer.png';
    } else if (choice === 0) {
        document.getElementById("date").src = './assets/bad-answer.png';
    } else {
        document.getElementById("date").src = './assets/tv-test.png';
    }
}

const displayPoints = () => {
    document.getElementById('pointsCounter').innerText = playerPoints
}

const init = () => {
    introduction();
    playerPoints = 0;
    document.getElementById('result').innerText = ""
    document.getElementById('reset').style.opacity = "0";
    document.getElementById("date").src = './assets/tv-test.png';
    audio.play();
    playerChoice = null;
    progressBar = 0;
    whichQuestion = 0;
    category = null;
    playerPoints = 0;
}

const render = () => {
    displayPoints()
    if (whichQuestion > 4) endGame();
}

const play = function(event){
    if (whichQuestion === 4) {
        pointValue(event.target.id)
        whichQuestion = whichQuestion + 1
        return render()
    }
    if (event.target.id === 'first' && !category) {
        category = aboutYou
        questionDisplay(aboutYou)
    } else if (event.target.id === 'second' && !category) {
        category = hobbiesInterests
        questionDisplay(hobbiesInterests)
    } else if (event.target.id === 'third' && !category) {
        document.querySelector('.message').innerText = "That's rude..."
        console.log('End game')
    } else {
        pointValue(event.target.id)
        whichQuestion = whichQuestion + 1
        questionDisplay(category)
        console.log(whichQuestion)
    }
    render()
}

const endGame = () => {
    if (whichQuestion === 5 && playerPoints === 10) {
        document.getElementById('result').innerText = "Date Success!"
        document.getElementById('reset').style.opacity = "100";
    } else if (whichQuestion === 5 && playerPoints >= 5) {
        document.getElementById('result').innerText = "Maybe they'll call back?"
        document.getElementById('reset').style.opacity = "100";
    } else {
        document.getElementById('result').innerText = "Date Fail..."
        document.getElementById('reset').style.opacity = "100";
    }
}

init();


/*----------- Event Listeners ----------*/
document.getElementById('first').addEventListener('click', play);
document.getElementById('second').addEventListener('click', play);
document.getElementById('third').addEventListener('click', play);

document.getElementById('reset').addEventListener('click', init);