const ad = document.querySelector('.song');
const playing = document.querySelector('.fa-play');
const pauses = document.querySelector('.fa-pause');
const forw = document.querySelector('.fa-forward-step');
const ttl = document.querySelector('.title');
const art_img = document.querySelector('#artist');
const art_name = document.querySelector('#artist-name');
const playsong = document.querySelector('#playsong');
const artist_name = ['SID SRIRAM','ANURAG KULKARNI','MANGLI','ARIJIT SINGH','SHREYA GOSHAL','KARTHIK','HARI CHARAN','VIJAY PRAKASH','K J YESUDAS']
const song_name = ['Samajavaragamana','Sirivennela','Jinthaka chithaka jinthaka','Kesariya Tera Ishq','Tum Kya Mile','Chilipiga Chusthavala','Thuli Thuli','Hosanna','Edhele Tharatharala charitham']
playsong.addEventListener('click',effect)
function effect(){
    if(ad.duration == ad.currentTime){
        x += 1;
        console.log(x);
    }
    if((!playing.classList.contains('none'))){
        ad.play();
        // setInterval(prog,1000);
        // setInterval(line,1000);
        // progres.addEventListener('click',(e)=>{
        //     var widthbar2 =(e.offsetX/e.target.clientWidth)*ad.duration;
        //     ad.currentTime = widthbar2;
        // })
    }
    else{
        ad.pause();

    }
    ttl.classList.toggle('run');
    playing.classList.toggle('none');   
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
}
function removeEffect() {
    ad.pause();
    ad.currentTime = 0.01;
    ttl.classList.remove('run');
    playing.classList.remove('none');   
    pauses.classList.add('none');
    art_img.classList.remove('round');
}

var x = 0;
function backward(){
    // dur();
    x -= 1;
    removeEffect();
    songs(x);
    if(x <= 0){
        x = artist_name.length;
    }
    
}
function forward(){
    // dur();
    x += 1;
    removeEffect();
    songs(x);
    if(x >= artist_name.length-1){
        x = -1;
    }
}
function songs(x){
    art_name.innerHTML = artist_name[x];
    ttl.innerHTML = artist_title[x];
    art_img.src = `./images/${x}.jpg`;
    ad.src = `./songs/${x}.mp3`;
}
songs(0);
    
