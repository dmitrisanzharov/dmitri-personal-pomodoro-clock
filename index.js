let startWorkBtn = document.getElementById('startWork'),
  startWorkTimer,
  wm = document.getElementById('wm'),
  ws = document.getElementById('ws'),
  shaker = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'),
  state = document.getElementById('state'),
  sets = document.getElementById('sets'),
  chord1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'),
  chord2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
  chord3 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'),
  fiveMinLeftFem = new Audio('https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/5+Minute+Warning+(Unreal+Tournament+Female)+-+Sound+Effect+for+editing.mp3'),
  oneMinLeftFem = new Audio('https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/1+Minute+remains+(Unreal+Tournament+Female)+-+Sound+Effect+for+editing.mp3'),
  workDiv = document.getElementById('workDiv'),
  breakDiv = document.getElementById('breakDiv'),
  startBreakBtn = document.getElementById('startBreakBtn'),
  startBreakTimer,
  resetSets = document.getElementById('resetSets'),
  audioVol = document.getElementById('volumeControl').value / 100,
  volumeControl = document.getElementById('volumeControl'),
  workMode = document.getElementById('workMode'),
  secondsSpeed = 1000,
  audioBigAlert = new Audio('https://ds-alarm-sounds.s3-eu-west-1.amazonaws.com/Popular+Alarm+Clock+Sound+Effect.mp3'),
  bigReminder = document.querySelector('#BigReminder');


// Auto Run Button and Function

let autoOnOff = document.querySelector('#autoOnOff');

autoOnOff.addEventListener('click', autoOnOffFunction);

function autoOnOffFunction() {
  autoOnOff.value == 'auto-run OFF' ? autoOnOff.value = 'auto-run ON' : autoOnOff.value = 'auto-run OFF';
  if (autoOnOff.value == 'auto-run ON') {
    autoOnOff.style.backgroundColor = 'orange';
  } else {
    autoOnOff.style.backgroundColor = '#e7e7e7';
  }
}



// .... volume control.... 

volumeControl.addEventListener('change', volControl);
volumeControl.addEventListener('input', volControl);


function volControl() {
  audioVol = this.value / 100;
  console.log(audioVol);
}


//... work button control ............


startWorkBtn.addEventListener('click', startWorkButton);



function startWorkButton() {

  bm.innerHTML = 5;
  bs.innerHTML = 00;
  clearInterval(startBreakTimer);
  startBreakBtn.innerHTML = 'start break';




  if (startWorkBtn.innerHTML == "start work") {

    startWorkBtn.innerHTML = 'pause work';

    shaker.play();
    shaker.volume = audioVol;

    startWorkTimer = setInterval(runTimer, secondsSpeed)


  } else if (startWorkTimer.innerHTML = 'pause work') {

    startWorkBtn.innerHTML = 'start work';
    clearInterval(startWorkTimer);

    shaker.play();
    shaker.volume = audioVol;
  }

}


//......... work timer control ............

function runTimer() {

  state.inneHTML = 'Work';
  workDiv.style.backgroundColor = '#fac2be';
  breakDiv.style.backgroundColor = 'white';


  // muted 5 mi
  // if (wm.innerHTML == 5 && ws.innerHTML == 0) {
  //   let fiveMinNot = new Notification('5 minutes left');
  //   fiveMinLeftFem.play();
  //   fiveMinLeftFem.volume = audioVol;
  // }


  // if (wm.innerHTML == 1 && ws.innerHTML == 0) {

  //   oneMinLeftFem.play();
  //   oneMinLeftFem.volume = audioVol;
  // }


  if (wm.innerHTML != 0 && ws.innerHTML == 0) {

    wm.innerHTML--;
    ws.innerHTML = 59;


  } else if (ws.innerHTML != 0) {
    ws.innerHTML--;
  }

  if (wm.innerHTML == 0 && ws.innerHTML == 0) {

  
    //............  Announcer sound ................. 

    //....  changes the WorkState here ...   revision OLD, revision OLD, project work.../



    // ..............THESE ARE LONG BREAK AUDIO

    console.log(sets.innerHTML);
    console.log(bigReminder.value);
    audioBigAlert.volume = 1;

   
    if(sets.innerHTML == bigReminder.value - 1 
      || sets.innerHTML == bigReminder.value*2 - 1
      || sets.innerHTML == bigReminder.value*3 - 1
      || sets.innerHTML == bigReminder.value*4 - 1
      || sets.innerHTML == bigReminder.value*5 - 1
      ){
        
        console.log(sets.innerHTML);
        console.log(bigReminder.value);
 
        audioBigAlert.volume = 1;
        audioBigAlert.play();
        
    }


    if (sets.innerHTML == 17){

      let audio17sets = new Audio('https://dmitri-audio-files.s3-eu-west-1.amazonaws.com/graduations-you-are-the-winner.mp3');
      audio17sets.play();
      audio17sets.volume = audioVol;

    } else if (sets.innerHTML <= 13) {  /// this is 5 actually, but have to go -1 cause of code

      console.log('sets below 14');
      randUnrealLow();

    }
    else if (sets.innerHTML >= 14 && sets.innerHTML != 17) { /// this is 16 to 20 actually, but have to go -1 cause of code

      randUnrealHigh();

    }

    // ...........  end of the Anouncer sounds ................ 

    sets.innerHTML++;


    // .............. HERE IS THE CODE THAT STARTS THE AUTO-RUN THING AND CLICK THE BUTTON ..... 

    if (autoOnOff.value == 'auto-run OFF') {


      // this code below is what would normally run, if I didnt have the auto-run OFF function

      clearInterval(startWorkTimer);

      startWorkBtn.innerHTML = 'start work';

      wm.innerHTML = 25;
      ws.innerHTML = 00;

            // chord1.play();
            // chord1.volume = audioVol;

            // setTimeout(() => chord3.play(), 1000);
            // chord3.volume = audioVol;

      state.innerHTML = 'Break'

      workDiv.style.backgroundColor = 'white';
      breakDiv.style.backgroundColor = '#e5fad2';

      let workEndNotification = new Notification('Time for a Break');
    }

    else if (autoOnOff.value == 'auto-run ON') {

      clearInterval(startWorkTimer);

      startWorkBtn.innerHTML = 'start work';

      wm.innerHTML = 25;
      ws.innerHTML = 00;

      // chord1.play();
      // chord1.volume = audioVol;

      // setTimeout(() => chord3.play(), 1000);
      // chord3.volume = audioVol;

      state.innerHTML = 'Break'

      workDiv.style.backgroundColor = 'white';
      breakDiv.style.backgroundColor = '#e5fad2';

      startWorkButton();


    }



  }

}

//.... Break handling

//.... break button control

startBreakBtn.addEventListener('click', function () {

  wm.innerHTML = 25;
  ws.innerHTML = 00;
  clearInterval(startWorkTimer);
  startWorkBtn.innerHTML = 'start work';



  if (startBreakBtn.innerHTML == 'start break') {

    startBreakBtn.innerHTML = 'pause break';

    shaker.play();
    shaker.volume = audioVol;
    startBreakTimer = setInterval(breakTimer, secondsSpeed);


  } else if (startBreakBtn.innerHTML == 'pause break') {

    startBreakBtn.innerHTML = 'start break';

    shaker.play();
    shaker.volume = audioVol;

    clearInterval(startBreakTimer);
  }

})


function breakTimer() {

  state.innerHTML = 'Break';
  breakDiv.style.backgroundColor = '#e5fad2';
  workDiv.style.backgroundColor = 'white';

  if (bm.innerHTML != 0 && bs.innerHTML == 0) {

    bm.innerHTML--;
    bs.innerHTML = 59;

  } else if (bs.innerHTML != 0) {
    bs.innerHTML--;
  }

  if (bm.innerHTML == 0 && bs.innerHTML == 0) {

    clearInterval(startBreakTimer);
    state.innerHTML = 'Work';

    chord1.play();
    chord1.volume = audioVol;

    chord2.volume = audioVol;
    setTimeout(() => chord2.play(), 1000);

    workDiv.style.backgroundColor = '#fac2be';
    breakDiv.style.backgroundColor = 'white';

    bm.innerHTML = 5;
    bs.innerHTML = 00;

    startBreakBtn.innerHTML = 'start break';

    let breakNot = new Notification('Work Time!')

  }



}

window.onload = onLoadFun;

function onLoadFun() {

  workDiv.style.backgroundColor = '#fac2be';
  autoOnOffFunction();

}

resetSets.addEventListener('click', function () {
  sets.innerHTML = 0;
})

//... sets increase button

document.querySelector('#setsInc').addEventListener('click', function () {
  sets.innerHTML++;
})

document.querySelector('#setsDec').addEventListener('click', function () {
  sets.innerHTML--;
})


/// audio library

let unrealLow = [
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/assasin.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/doublekill.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/excellent.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/extermination.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/firstblood.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/headhunter.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/headshot.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/juggernaut.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/killingspree.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/megakill.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/monsterkill.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/multikill.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/outstanding.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/payback.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/retribution.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/termination.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/vengeance.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/warpath.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/topgun.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/unreal.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/ultrakill.mp3'
]

let unrealHigh = [
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/dominating.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/godlike.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/massacre.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/rampage.mp3',
  'https://unreal-high-level-sounds.s3-eu-west-1.amazonaws.com/unstoppable.mp3',
  'https://unreal-low-level-sounds.s3-eu-west-1.amazonaws.com/maniac.mp3',
  'https://dmitri-audio-files.s3-eu-west-1.amazonaws.com/holy-shit-here-here-here.mp3'
]

function randUnrealLow() {
  let audioLow = new Audio(unrealLow[Math.floor(Math.random() * unrealLow.length)]);
  audioLow.play();
  audioLow.volume = audioVol;
  console.log('unreal LOW');
}

function randUnrealHigh() {
  let audioHigh = new Audio(unrealHigh[Math.floor(Math.random() * unrealHigh.length)]);
  audioHigh.play();
  audioHigh.volume = audioVol;
  console.log('unreal HIGH');
}


// TESTING ENVIRONEMTN.........

document.querySelector('#setsWorkTo1min').addEventListener('click', function () {
  wm.innerHTML = 1;
})


// BIG REMINDER THING

function bigReminderChange(){
    console.log(document.querySelector('#BigReminder').value);
}

function muteAlarm(){
  audioBigAlert.volume = 0;
}



