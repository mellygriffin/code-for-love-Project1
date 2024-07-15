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
            {answer: 'Windows', choice: 'great'},
            {answer: 'Mac', choice: 'good'},
            {answer: 'I don\'t really like computers...'}

        ]
    },
    {question: 'What do you like about going to a cafe?',
        options: [
            {answer: 'Peace and quiet', choice: 'good'},
            {answer: 'Free WiFi', choice: 'great'},
            {answer: 'A nice cup of coffee', choice: 'bad'}
        ]
    },
    {question: 'What kind of video games do you like?',
        options: [
            {answer: 'Cozy Farming Sims', choice: 'good'},
            {answer: 'Rhythm Games', choice: 'bad'},
            {answer: 'Roleplaying Adventures', choice: 'great'}
        ]
    },
    {question: 'What\'s your favorite sport?',
        options: [
            {answer: 'Baseball', choice: 'bad'},
            {answer: 'Pong', choice: 'great'},
            {answer: 'Tennis', choice: 'good'}
        ]
    },
    {question: 'Do you like to travel?',
        options: [
            {answer: 'Yes', choice: 'good'},
            {answer: 'No', choice: 'bad'},
            {answer: 'As long as I have an extension cord...', choice: 'great'}
        ]
    }
]

const hobbiesInterests = [
    {question: 'What do you do on a rainy day?',
        options: [
            {answer: 'Stay inside and read.', choice: 'good'},
            {answer: 'Go outside and dance in the rain!', choice: 'bad'},
            {answer: 'Cozy up and game all day.', choice: 'great'}
        ]
    },
    {question: 'Do you have a hobby?',
        options: [
            {answer: 'Making Arts and Crafts', choice: 'good'},
            {answer: 'Sports and Exercise', choice: 'bad'},
            {answer: 'Playing Video Games', choice: 'great'}
        ]
    },
    {question: 'What\'s your favorite color?',
        options: [
            {answer: 'Blue', choice: 'good'},
            {answer: 'Red', choice: 'bad'},
            {answer: '#808080', choice: 'great'}
        ]
    },
    {question: 'What\'s your dream job?',
        options: [
            {answer: 'Software Engineer', choice: 'great'},
            {answer: 'Artist', choice: 'good'},
            {answer: 'Doctor', choice: 'bad'}
        ]
    },
    {question: 'Do you like to travel?',
        options: [
            {answer: 'Yes', choice: 'good'},
            {answer: 'No', choice: 'bad'},
            {answer: 'As long as I have an extension cord...', choice: 'great'}
        ]
    }
]

/*-------------- Constants -------------*/
const winningScore = 10;
const greatPoints = 2;
const goodPoints = 1;
const badPoints = 0;
const choices = [];
    
    
/*---------- Variables (state) ---------*/
let playerChoice = null;
let progressBar = 0;
let whichQuestion = 0;
let category = null;


/*----- Cached Element References  -----*/
let playerScore = 0;

/*-------------- Functions -------------*/
//First question chooses what array you're using!

//access array, at this array at this question, at this answer
//.options
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

const categorySelect = (choice) => {
    //
}

const init = () => {
    introduction();
    // play();
}

const play = function(event){
    if (event.target.id === 'first' && !category) {
        category = aboutYou
        questionDisplay(aboutYou)
    } else if (event.target.id === 'second' && !category) {
        category = hobbiesInterests
        questionDisplay(hobbiesInterests)
    } else if (event.target.id === 'third' && !category) {
        console.log('End game')
    } else {
        whichQuestion = whichQuestion + 1
        questionDisplay(category)
    }
}

const endGame = () => {
    if (question === 4) {
        
    }
}

class Scenes {
    //
}

init();


/*----------- Event Listeners ----------*/
document.getElementById('first').addEventListener('click', play);
document.getElementById('second').addEventListener('click', play);
document.getElementById('third').addEventListener('click', play);

document.getElementById('reset').addEventListener('click', init);