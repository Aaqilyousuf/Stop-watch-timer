const Btnstart=document.querySelector('.start');
const Btnstop=document.querySelector('.stop');
const Btnreset=document.querySelector('.reset');
let hrs=min=sec=ms=0,startTimer;
Btnstart.addEventListener('click',()=>{
    Btnstart.classList.add('start-active');
    Btnstop.classList.remove('stop-active');
    startTimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        Display_watch();
    },10);

});
Btnstop.addEventListener('click',()=>{
    clearInterval(startTimer);
    Btnstart.classList.remove('start-active');
    Btnstop.classList.add('stop-active');

})
Btnreset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    Display_watch();
    Btnstart.classList.remove('start-active');
    Btnstop.classList.remove('stop-active');

})
function Display_watch(){
        //Formated display
        phrs=hrs<10?'0'+hrs:hrs;
        pmin=min<10?'0'+min:min;
        psec=sec<10?'0'+sec:sec;
        pms=ms<10?'0'+ms:ms;
        //Output

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;

}
