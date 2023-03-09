// Pages Variables
const adviceIdEl= $("p#advice_ID");
const adviceTextEl= $(".advice");
let advice;
// API request

let xhr= new XMLHttpRequest();
let url= "https://api.adviceslip.com/advice";

$(document).ready(()=>{
    xhr.open("GET", url, true);
    xhr.send();
});

$("#dice_container").on("click", ()=>{
    xhr.open("GET", url, true);
    xhr.send();
});

xhr.onreadystatechange= ()=>{
    if(xhr.readyState === 4){ 
        adv=JSON.parse(xhr.response);
        let idMessage= "ADVICE #" + adv.slip.id;
        adviceIdEl.text(idMessage);
        adviceTextEl.text(' “ ' + adv.slip.advice + ' ” ')
    }
};






