const images = function(){
  return [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/2000px-Playing_card_heart_2.svg.png',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22389129-stock-photo-playing-card-three-of-hearts.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22389135-stock-photo-playing-card-four-of-hearts.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22389135-stock-photo-playing-card-four-of-hearts.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22389177-stock-photo-playing-card-six-of-hearts.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22389201-stock-photo-playing-card-seven-of-hearts.jpg',
    'https://c8.alamy.com/comp/D7BT9X/eight-of-hearts-playing-card-isolated-on-white-background-scanned-D7BT9X.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22389221-stock-photo-playing-card-nine-of-hearts.jpg',
    'https://previews.123rf.com/images/foto76/foto761803/foto76180300026/98278421-playing-cards-ten-of-hearts.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/English_pattern_jack_of_hearts.svg/2000px-English_pattern_jack_of_hearts.svg.png',
    'https://res.cloudinary.com/teepublic/image/private/s--T1RzLpx4--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1494240284/production/designs/1583178_1.jpg',
    'https://previews.123rf.com/images/chrisdorney/chrisdorney1109/chrisdorney110900017/10520649-the-king-of-hearts-playing-card.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/English_pattern_ace_of_diamonds.svg/2000px-English_pattern_ace_of_diamonds.svg.png',
    'https://image.shutterstock.com/image-vector/two-diamonds-450w-552344593.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22388823-stock-photo-playing-card-three-of-diamonds.jpg',
    'https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884157_960_720.png',
    'https://www.colourbox.com/preview/13612643-five-diamonds.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/2000px-6_of_diamonds.svg.png',
    'https://media.istockphoto.com/photos/seven-of-diamonds-playing-card-with-clipping-path-picture-id610756722',
    'https://media.deseretdigital.com/file/ff97139201?resize=width_1200&type=jpg&c=6&a=e0717f4c',
    'https://c1.staticflickr.com/9/8466/8086091036_f3cdd89416_b.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/10_of_diamonds_-_David_Bellot.svg/1200px-10_of_diamonds_-_David_Bellot.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/English_pattern_jack_of_diamonds.svg/2000px-English_pattern_jack_of_diamonds.svg.png',
    'https://i.pinimg.com/736x/cd/3e/94/cd3e94e2c4277d833fd6a6a5971de202.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/English_pattern_king_of_diamonds.svg/2000px-English_pattern_king_of_diamonds.svg.png',
    'https://m.media-amazon.com/images/M/MV5BZGMwODFkMjctMWY4MS00YzU1LWE3YmUtNmUyMjM3NjQ3MmRmXkEyXkFqcGdeQXVyNjQ3Mjg3OTA@._V1_SY1000_CR0,0,752,1000_AL_.jpg',
    'http://res.freestockphotos.biz/pictures/15/15497-illustration-of-a-two-of-spades-playing-card-pv.png',
    'https://previews.123rf.com/images/speedfighter/speedfighter0909/speedfighter090900181/5614017-three-of-spades-playing-card-isolated-on-white-background-.jpg',
    'https://st.depositphotos.com/1050294/1816/i/950/depositphotos_18168221-stock-photo-playing-cards-four-of-spades.jpg',
    'https://thumbs.dreamstime.com/z/playing-cards-five-spades-isolated-white-background-playing-cards-five-spades-112319721.jpg',
    'https://st.depositphotos.com/2127699/2238/i/950/depositphotos_22388715-stock-photo-playing-card-six-of-spades.jpg',
    'https://previews.123rf.com/images/foto76/foto761212/foto76121200096/17050196-playing-cards-seven-of-spades.jpg',
    'https://c8.alamy.com/comp/D7BNC8/eight-of-spades-playing-card-isolated-on-white-background-scanned-D7BNC8.jpg',
    'https://c8.alamy.com/comp/D7BNE6/nine-of-spades-playing-card-isolated-on-white-background-scanned-at-D7BNE6.jpg',
    'http://images.drstockphoto.com/0/ten-of-spades.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_jack_of_spades.svg/2000px-English_pattern_jack_of_spades.svg.png',
    'https://res.cloudinary.com/teepublic/image/private/s--SCydbDi3--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1494243095/production/designs/1583219_1.jpg',
    'https://res.cloudinary.com/teepublic/image/private/s--tmWDTzT8--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1492158378/production/designs/1449342_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/English_pattern_ace_of_clubs.svg/2000px-English_pattern_ace_of_clubs.svg.png',
    'http://www.clker.com/cliparts/v/y/e/7/u/7/2-of-clubs.svg',
    'http://images.drstockphoto.com/0/three-of-clubs.jpg',
    'https://previews.123rf.com/images/foto76/foto761212/foto76121200067/17036196-playing-cards-four-of-clubs.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/2000px-5_of_clubs.svg.png',
    'https://previews.123rf.com/images/foto76/foto761212/foto76121200088/17049395-playing-cards-six-of-clubs.jpg',
    'https://media.istockphoto.com/photos/seven-of-clubs-playing-card-with-clipping-path-picture-id612522060',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Atlas_deck_8_of_clubs.svg/2000px-Atlas_deck_8_of_clubs.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/2000px-Playing_card_club_9.svg.png',
    'https://previews.123rf.com/images/foto76/foto761212/foto76121200083/17042448-playing-cards-ten-of-clubs.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/English_pattern_jack_of_clubs.svg/2000px-English_pattern_jack_of_clubs.svg.png',
    'https://res.cloudinary.com/teepublic/image/private/s--VPAxhS_r--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1494239663/production/designs/1583171_1.jpg',
    'https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png'
  ];
};
const backCard= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYUJ7f4NECeCYf6-XrQAZfBLLyp5IeuQp5Q_FKPu8mYg5ArCX';
const coins = [1,2,5,10,20,50];
let coinIndex = 0;
let amount = 1000;
let placed = 0;
let betAvailable = true;
document.addEventListener('DOMContentLoaded', function() {
  const seeds = ['h','d','s','c'];
  const values = [14,2,3,4,5,6,7,8,9,10,11,12,13];
  const cards = document.querySelectorAll('.card');
  let switcher = true;
  const reverseCards = function(){
    cards.forEach(card =>{
      card.src = backCard;
    });
  };
  reverseCards();
  const play = document.querySelector('.play');
  const plus = document.querySelector('.plus');
  const bet = document.querySelector('.bett');
  const minus = document.querySelector('.minus');
  const stack = document.querySelector('.stack');
  const played = document.querySelector('.played');
  const points = document.querySelector('.points');
  const risk = document.querySelector('.risk');
  let gameOn = false;
  const cardsInPlay = [
    {position: cards[0], selected: false, active: false},
    {position: cards[1], selected: false, active: false},
    {position: cards[2], selected: false, active: false},
    {position: cards[3], selected: false, active: false},
    {position: cards[4], selected: false, active: false}
  ];
  let card;
  const checkForFlush = function(seeds){
    if(seeds[0] === seeds[1] && seeds[1] === seeds[2] && seeds[2] === seeds[3] && seeds[3] === seeds[4]){
      return 20;
    }
    return false;
  };
  const checkForStair = function(card){
    if(card[0] === 2 && card[1] === 3 && card[2] === 4 && card[3] === 5 && card[4] === 14){
      return 10;
    } else if(card[0] + 1 ===card[1] && card[1] + 1 ===card[2] && card[2] + 1 ===card[3] && card[3] + 1 ===card[4]) {
      return 10;
    }
    return false;
  };
  const checkForPoker = function(card){
    if(card[0] === card[1] && card[1] === card[2] && card[2] === card[3]){
      return 250;
    } else if(card[4] === card[1] && card[1] === card[2] && card[2] === card[3]){
      return 250;
    }
    return false;
  };
  const checkForFull = function(card){
    if((card[0] === card[1] && card[1] === card[2]) && (card[3] === card[4])){
      return 50;
    } else if ((card[4] === card[3] && card[3] === card[2]) && (card[0] === card[1])){
      return 50;
    }
    return false;
  };
  const checkForTris = function(card){
    if((card[0] === card[1] && card[1] === card[2]) || (card[1] === card[2] && card[2] === card[3]) || (card[2] === card[3] && card[3] === card[4])){
      return 5;
    }
    return false;
  };
  const checkForDouble = function(card){
    if(card[0] === card[1]){
      if(card[2] === card[3] || card[3] === card[4]){
        return 2;
      }
    } else if (card[1] === card[2] && card[3] === card[4]){
      return 2;
    }
    return false;
  };
  const checkForPair = function(card){
    if(((card[0] === card[1] || card[1] === card[2]) && card[1] >= 10) || ((card[2] === card[3] || card[3] === card[4]) && card[3] >= 10)){
      return 1;
    }
    return false;
  };

  bet.innerText=coins[coinIndex];
  stack.innerText= amount +'£';
  plus.addEventListener('click', function(){
    if(betAvailable){
      coinIndex < coins.length - 1 ? coinIndex++ : coinIndex = 0;
      bet.innerText=coins[coinIndex];
    }
  });
  minus.addEventListener('click', function(){
    if(betAvailable){
      coinIndex < 1 ? coinIndex = coins.length - 1 : coinIndex--;
      bet.innerText=coins[coinIndex];
    }
  });
  bet.addEventListener('click', function(){
    if(betAvailable){
      if(amount >= parseInt(bet.innerText)){
        placed = placed + parseInt(bet.innerText);
        if(placed > 0){
          played.innerText = placed + '£';
        }
      }
    }
  });
  played.addEventListener('click', function(){
    if(betAvailable){
      placed = 0;
      played.innerText = placed;
    }
  });


  const activateCards = function(){
    cardsInPlay.forEach(card =>{
      card.active = true;
    });
  };
  const disActivateCards = function(){
    cardsInPlay.forEach(card =>{
      card.active = false;
    });
  };
  const resetGame = function(){
    cardsInPlay.forEach(card =>{
      card.selected = false;
    });
    play.innerText = 'play';
    reverseCards();
    switcher = !switcher;
    betAvailable = true;
    points.innerText = '';
    risk.innerText = '';
  };
  const newDeck = function(){
    const deck = [];
    const figures = images();
    let incrementor = 0;
    for(let i=0; i<seeds.length; i++){
      for(let j=0; j<values.length; j++){
        card = {
          value: values[j],
          seed: seeds[i],
          image: figures[incrementor]
        };
        incrementor++;
        deck.push(card);
      }
    }
    console.log(deck.length);
    return deck;
  };
  const game = function(){
    let win = 0;
    let alpha = 52;
    let middle;
    const cardMobile = newDeck();
    const generateRandom = function(){
      const rnd = Math.floor(Math.random() * alpha);
      alpha--;
      return rnd;
    };
    const assign = function(card){
      middle = generateRandom();
      card.position.src = cardMobile[middle].image;
      card.value = cardMobile[middle].value;
      card.seed = cardMobile[middle].seed;
      cardMobile.splice(middle,1);
    };
    const shuffle = function(){
      cardsInPlay.forEach(card => assign(card));
    };
    if(!gameOn){
      if(placed > 0){
        amount = amount - placed;
        stack.innerText = amount + '£';
        betAvailable = false;
        shuffle();
        activateCards();
        play.innerText = 'Swap cards';
        cardsInPlay.forEach(card =>{
          if(card.active){
            card.position.addEventListener('click', function(){
              card.selected = true;
              card.active = false;
            });
          }
        });
        gameOn = !gameOn;
      }
    } else {
      disActivateCards();
      cardsInPlay.forEach(card =>{
        if(card.selected){
          assign(card);
        }
      });
      const cardsArray = [];
      const seedsArray = [];
      cardsInPlay.forEach(card =>{
        cardsArray.push(card.value);
        seedsArray.push(card.seed);
      });
      cardsArray.sort((a,b) => a - b);
      if(checkForFlush(seedsArray)){
        if(checkForStair(cardsArray)){
          win = parseInt(played.innerText) * 1000;
        } else {
          win = parseInt(played.innerText) * checkForFlush(seedsArray);
        }
      } else if(checkForStair(cardsArray)){
        win = parseInt(played.innerText) * checkForStair(cardsArray);
      } else if(checkForPoker(cardsArray)){
        win = parseInt(played.innerText) * checkForPoker(cardsArray);
      } else if(checkForFull(cardsArray)){
        win = parseInt(played.innerText) * checkForFull(cardsArray);
      } else if(checkForTris(cardsArray)){
        win = parseInt(played.innerText) * checkForTris(cardsArray);
      } else if(checkForDouble(cardsArray)){
        win = parseInt(played.innerText) * checkForDouble(cardsArray);
      } else if(checkForPair(cardsArray)){
        win = parseInt(played.innerText) * checkForPair(cardsArray);
      } else win = 0;
      console.log(cardsArray);
      if(win === 0) {
        points.innerText = 'You loose';
      } else {
        points.innerText = 'You won';
        risk.innerText = win + '£';
      }

      amount = amount + win;
      stack.innerText = amount + '£';
      win = 0;
      gameOn = !gameOn;
      play.innerText = 'reset';
      switcher = !switcher;
    }

  };

  play.addEventListener('click', function(){
    switcher ? game() : resetGame();
  });



});
