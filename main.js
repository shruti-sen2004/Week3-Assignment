const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const counterval = document.getElementById('counter-val');
const counter = document.getElementById('counter');
const incorrect = document.getElementById('incorrect');
const last = document.getElementById('last');
const flashcardsContainer = document.getElementById('flashcards');

let clickedFlashcards = [];
const handleStart = () => {
  let counterval = 10;
  document.getElementById('counter-val').innerText = counterval;
  flashcardsContainer.innerHTML = '';
  flashcardsData.forEach((item) => {
    //* Card add section
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    //* Card click event
    
    cardElement.addEventListener('click', () => {
      console.log(item.word);
      cardElement.classList.add('border-red-500');
      cardElement.innerText = item.meaning;
      clickedFlashcards.push(item);
      
      if (counterval > 0) {
        counterval--;
        
        document.getElementById('counter-val').innerText = counterval;
    }
    let incorrect = 10- counterval;
    document.getElementById('incorrect').innerText = incorrect;
    });  
  });
  

  resetButton.classList.remove('hidden');
  doneButton.classList.remove('hidden');
  counter.classList.remove('hidden');
  startButton.classList.add('hidden');
  last.classList.add('hidden');
  flashcardsContainer.classList.add('hidden');
};

const handleReset = () => {
  cardContainer.innerHTML = '';
  document.getElementById('counter-val').innerText = 10;

  clickedFlashcards = [];
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  last.classList.remove('hidden');
};


const handleDone = () => {
  cardContainer.innerHTML = '';

  clickedFlashcards.forEach(item => { 
    let flashcard = document.createElement('div');
    flashcard.className = 'border-2 border-red-500 rounded-md p-5 h-full font-bold text-md';
    flashcard.innerText = `${item.word} \n ${item.meaning}`;
    flashcardsContainer.appendChild(flashcard);
  });

  
  clickedFlashcards = [];
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  counter.classList.remove('hidden');
  last.classList.remove('hidden');
  flashcardsContainer.classList.remove('hidden');
}
