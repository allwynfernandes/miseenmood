const chatter = new Howl({
    src: ['data/sounds/space/chatter-russian.mp3'],
    html5: false,
    loop: true
});

const ambiance = new Howl({
    src: ['data/sounds/space/ambient-electro.mp3'],
    html5: true,
    loop: true,
    volume: 0.9
});


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

let chatterVol
chatterVol = Number(document.getElementById("vol-chatter").value)/100;

// function initplayer(){
    // chatter.volume(chatterVol)
    // }
    
    // window.addEventListener("load", initplayer)
    // updateVolume(chatter, chatterVol);
    
chatter.volume(Number(Number(document.getElementById("vol-chatter").value)/100))
chatter.play();
    
console.log(document.getElementById("vol-chatter").value);