/* 
* Congratulation! it works.
* Chatter plays, ambiance and radio too.

* NEED TO FIX ason [[2021-05-26]]:
* Global playpause counter. makes one item play and not pause the other. 
* Radio takes 10 sec to load (Use)
* Volume func cant be called inividually. Needs to be typed for each item.
* Make pop up box alert that shows tutorial on how to use.
*/

// Radio Station dictionary
radioList = {
    "smooth-jazz" : "http://streaming513.radionomy.com/SmoothJazzZone",
    "minimal-techno" : "http://amoris.sknt.ru:8000/stream",
    'classical-relax' : "https://relax.stream.publicradio.org/relax.mp3",
    "oldies" : "http://hazel.torontocast.com:3050/stream",
    "international-talk" : "http://streaming510.radionomy.com/2cr-radio",
    "russian-bible" : "http://amoris.sknt.ru:8026/stream",
    "lounge-electro" : "http://5.39.86.44:8006/stream-mp3-CoolCoffee_autodj",
    "ambient-lounge" : "http://streaming512.radionomy.com/Ambiance-Lounge",
}




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



function togglePlayStop(sound, button, volbtn) {
    if (!sound.playing()) {
        sound.play();
        button.classList.add("playing")
    } else {
        sound.stop();
        button.classList.remove("playing")
    };
    let vol = document.getElementById(volbtn);
    vol.addEventListener('input',function(){
        sound.volume(this.value / 100);
        console.log(this.value/100);
    });


};


let btnSndChatter = document.getElementById("btn-snd-chatter");
btnSndChatter.addEventListener("click", () => {togglePlayStop(chatter, btnSndChatter, 'vol-chatter')});



let btnSndAmbiance = document.getElementById("btn-snd-ambiance");
btnSndAmbiance.addEventListener("click", () => {togglePlayStop(ambiance, btnSndAmbiance, 'vol-ambiance')});



let btnSndRadio = document.getElementById("btn-snd-radio");
btnSndRadio.addEventListener("click", () => {togglePlayStop(radio, btnSndRadio, 'vol-radio')});















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
    
