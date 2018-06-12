const cardsArray = [{
    'name': 'Celtics',
    'img': 'images/boston-celtics-logo-vector.png',
  },
  {
    'name': 'Nets',
    'img': 'images/brooklyn-nets-logo-vector.png', 
  },
  {
    'name': 'Bulls',
    'img': 'images/chicago-bulls.png',
  },
  {
    'name': 'Cavs',
    'img': 'images/cleveland-cavaliers-logo-vector.png',
  },
  {
    'name': 'Pistons',
    'img': 'images/detroit-pistons-logo-vector.png',
  },
  {
    'name': 'Warriors',
    'img': 'images/golden-state-warriors-logo-vector.png',
  },
  {
    'name': 'Lakers',
    'img': 'images/los-angeles-lakers-logo-vector.png',
  },
  {
    'name': 'Heat',
    'img': 'images/miami-heat-logo-vector.png',
  }, 
  {
    'name': 'Knicks',
    'img': 'images/new-york-knicks-logo-vector.png',
  },
  {
    'name': 'Magic',
    'img': 'images/orlando-magic-logo-vector.png',
  },
  {
    'name': '76ers',
    'img': 'images/philadelphia-76ers-logo-vector.png',
  },
  {
    'name': 'Spurs',
    'img': 'images/san-antonio-spurs-logo-vector.png',
  },
  {
    'name': 'Jazz',
    'img': 'images/utah-jazz-logo-vector.png',
  }
];
let gameGrid = cardsArray.concat(cardsArray);

//grab div

const game = document.getElementById('game');

//create section
const grid = document.createElement('section');
grid.setAttribute('class', 'grid')
//append section
game.appendChild(grid);

//For each team in array

gameGrid.forEach(item => {
    const card = document.createElement('div');
    // adds class
    card.classList.add('card');
    // set data name to key name
    card.dataset.name = item.name;
    // apply background image
    card.style.backgroundImage = `url(${item.img})`;
    // append to section
    grid.appendChild(card);
});