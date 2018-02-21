import {Game, publicGame, privateBtn} from './game'; 

publicGame.addEventListener('click', function(){
    handleSwitchScreen('game');
});


privateBtn.addEventListener('click', function(){
    const room = prompt('Enter Private Game room name');
    if(room){
      handleSwitchScreen('game'); 
       
    }
});

function setState(targetState, updateObj){
    return Object.assign({}, targetState, updateObj);
}

function setStateAndRender(targetState, updateObj){
    updateApp(setState(targetState, updateObj));
}


//////////////////////// application

// setting up the initial state of the application
const appState = {
    currentScreen : 'splash',
  musicEnabled : false,
  soundFXEnabled : false,
  loading : true,
};

function updateApp(newState){
   
  const screenElements = document.getElementsByClassName('screen');
  for (let elem of screenElements){ 
    if (!elem.classList.contains('hidden')) {
        elem.classList.add('hidden');
    }
  }
    document.getElementsByClassName(newState.currentScreen)[0].classList.remove('hidden');
}

function switchScreen(targetScreen) {
    const newState = setState(appState, {currentScreen : targetScreen});
    return newState;
}

function handleSwitchScreen(targetScreen){
    setStateAndRender(switchScreen(targetScreen));
}

updateApp(appState);

