// const jea = document.createElement("h2");
// jea.innerText="Dooms day";
// document.body.append(jea);
// darkgoldenrod;
// lightsalmon
//orchid
//slategray
//yellowgreen

const colors = ["darkgoldenrod" ,"lightsalmon","orchid","slategray","yellowgreen"];
let index = 0;
let dew;

function start(){
     dew = window.setInterval(()=>{  
        if(index===colors.length)
        index=0;  
        document.body.style = `background: ${colors[index]}`;
        console.log(colors[index]);
        index++;
    },1*1000);
}
function pause(){
    clearInterval(dew);
}
function stop(){
    clearInterval(dew);
    index =0;
}
