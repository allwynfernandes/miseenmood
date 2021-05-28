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
    
