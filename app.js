/* 
* Congratulation! it works.
* Chatter plays, ambiance and radio too.

* NEED TO FIX ason [[2021-05-26]]:
* Global playpause counter. makes one item play and not pause the other. 
* Radio takes 10 sec to load (Use)
* Volume func cant be called inividually. Needs to be typed for each item.
* Make pop up box alert that shows tutorial on how to use.
*/


// Initiation of sounds

const chatter = new Howl({
    src: ['data/sounds/space/chatter-russian.mp3'],
    html5: true,
    loop: true,
    volume: 0.9
});



const ambiance = new Howl({
    src: ['data/sounds/space/ambient-electro.mp3'],
    html5: true,
    loop: true,
    volume: 0.9
})

const radio = new Howl({
    src: ['http://aliendreams.ddns.net:8000/music'],
    html5: true,
    loop: true,
    volume: 0.9,
})


// @type Number; Initializing counter; used by playStop function
let counter = 0;





// btnSndChatter.addEventListener("click", ()=> {
//     counter++;
//     if (counter%2==0) {
//         console.log("Stop: "+counter);
//         chatter.stop();
//         btnSndChatter.classList.remove("playing")

//     } else {
//         console.log("Playing: "+counter);
//         chatter.play();
//         btnSndChatter.classList.add("playing")


//     }
// } );


// Volume Control

// let chatterVol = document.getElementById('vol-chatter');

// chatterVol.addEventListener('input',function(){
//     chatter.volume(this.value / 100);
//     console.log(this.value/100);
// });


// Used with each sound to control playback on button click
function playStop(counter, sound, button) {
    if (counter%2==0) {
        console.log("Stop: "+counter);
        sound.stop();
        button.classList.remove("playing")

    } else {
        console.log("Playing: "+counter);
        sound.play();
        button.classList.add("playing")


    }

}



// Experimental! Not working as yet. Used to control volume on sounds.
function controlVolume(volVal, sound) {
    sound.volume(volVal / 100);
    console.log(volVal/100);
}



let btnSndChatter = document.getElementById("btn-snd-chatter");
btnSndChatter.addEventListener("click", () => {counter++; playStop(counter, chatter, btnSndChatter)});
let chatterVol = document.getElementById('vol-chatter');


let btnSndAmbiance = document.getElementById("btn-snd-ambiance");
btnSndAmbiance.addEventListener("click", () => {counter++; playStop(counter, ambiance, btnSndAmbiance)});


let btnSndRadio = document.getElementById("btn-snd-radio");
// In counter odd is play, even is pause hence the increment
btnSndRadio.addEventListener("click", () => {counter++; playStop(counter, radio, btnSndRadio)});

let radioVol = document.getElementById('vol-radio');
radioVol.addEventListener('input',function(){
    radio.volume(this.value / 100);
    console.log(this.value/100);
});















/*

OLD Code below

*/




// const ambiance = new Howl({
//     src: ['data/sounds/space/ambient-electro.mp3'],
//     html5: true,
//     loop: true,
//     volume: 0.9
// });





// const sound = document.querySelector(".sound-item");

// const btn_chatter = document.getElementById("btn-snd-chatter");

// btn_chatter.addEventListener('click', function(btn_chatter){
//     btn_chatter.target.classList.toggle('playing')
//     chatter.play()
// });


// sound.addEventListener('click',  () => {
//     if (event.target.classList.contains('sound-item')){
//         let soundToPlay = event.target.dataset.sound;
//         console.log(soundToPlay)
//     }
// })






// updateVolume = function(sound, value) {
    //     console.log('before update volume:', sound.volume());
    //     sound.volume(value);
    //     console.log('after update volume:', sound.volume());
// }


// function initplayer(){
    // chatter.volume(chatterVol)
    // }
    
    // window.addEventListener("load", initplayer)
    // updateVolume(chatter, chatterVol);
    
