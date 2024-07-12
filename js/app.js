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


/*----- Cached Element References  -----*/
let playerScore = 0;
const npcDialogue = document.querySelector('.npc-text');

/*-------------- Functions -------------*/
const displayScene = () => {
    //
}

const introduction = () => {
    document.querySelector('.message').innerText = introQuestion[0].questionIntro;
    document.getElementById('first').innerText = introQuestion[0].options[0].answer;
    document.getElementById('second').innerText = introQuestion[0].options[1].answer;
    document.getElementById('third').innerText = introQuestion[0].options[2].answer;
}

const init = () => {
    introduction();
    // render();
}

init();

// const render = () => {
//     //
// }

//First question chooses what array you're using!

//access array, at this array at this question, at this answer
//.options



class Scenes {

}

const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
}

const play = function(event){
    console.log('Clicked!');
}

/*----------- Event Listeners ----------*/
document.getElementById('first').addEventListener('click', play);
document.getElementById('second').addEventListener('click', play);
document.getElementById('third').addEventListener('click', play);

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
    {question1: 'What operating system do you like?',
        options: [
            {answer: 'Windows', choice: 'great'},
            {answer: 'Mac', choice: 'good'},
            {answer: 'I don\'t really like computers...'}

        ]
    },
    {question2: 'What do you like about going to a cafe?',
        options: [
            {answer: 'Peace and quiet', choice: 'good'},
            {answer: 'Free WiFi', choice: 'great'},
            {answer: 'A nice cup of coffee', choice: 'bad'}
        ]
    },
    {question3: 'What kind of video games do you like?',
        options: [
            {answer: 'Cozy Farming Sims', choice: 'good'},
            {answer: 'Rhythm Games', choice: 'bad'},
            {answer: 'Roleplaying Adventures', choice: 'great'}
        ]
    },
    {question4: 'What\'s your favorite sport?',
        options: [
            {answer: 'Baseball', choice: 'bad'},
            {answer: 'Pong', choice: 'great'},
            {answer: 'Tennis', choice: 'good'}
        ]
    },
    {question5: 'Do you like to travel?',
        options: [
            {answer: 'Yes', choice: 'good'},
            {answer: 'No', choice: 'bad'},
            {answer: 'As long as I have an extension cord...', choice: 'great'}
        ]
    }
]

const hobbiesInterests = [
    {question1: 'What do you do on a rainy day?',
        options: [
            {answer: 'Stay inside and read.', choice: 'good'},
            {answer: 'Go outside and dance in the rain!', choice: 'bad'},
            {answer: 'Cozy up and game all day.', choice: 'great'}
        ]
    },
    {question2: 'Do you have a hobby?',
        options: [
            {answer: 'Making Arts and Crafts', choice: 'good'},
            {answer: 'Sports and Exercise', choice: 'bad'},
            {answer: 'Playing Video Games', choice: 'great'}
        ]
    },
    {question3: 'What\'s your favorite color?',
        options: [
            {answer: 'Blue', choice: 'good'},
            {answer: 'Red', choice: 'bad'},
            {answer: '#808080', choice: 'great'}
        ]
    },
    {question4: 'What\'s your dream job?',
        options: [
            {answer: 'Software Engineer', choice: 'great'},
            {answer: 'Artist', choice: 'good'},
            {answer: 'Doctor', choice: 'bad'}
        ]
    },
    {question5: 'Do you like to travel?',
        options: [
            {answer: 'Yes', choice: 'good'},
            {answer: 'No', choice: 'bad'},
            {answer: 'As long as I have an extension cord...', choice: 'great'}
        ]
    }
]