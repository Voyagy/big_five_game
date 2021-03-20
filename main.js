const addC = document.querySelector("#add-concord");
const rmvC = document.querySelector("#rmv-concord");
const addE = document.querySelector("#add-external");
const rmvE = document.querySelector("#rmv-external");
const addO = document.querySelector("#add-open");
const rmvO = document.querySelector("#rmv-open");
const addH = document.querySelector("#add-honest");
const rmvH = document.querySelector("#rmv-honest");
const addN = document.querySelector("#add-neurosis");
const rmvN = document.querySelector("#rmv-neurosis");
const concord = document.querySelector("#concord-param");
const external = document.querySelector("#external-param");
const opening = document.querySelector("#open-param");
const honesty = document.querySelector("#honest-param");
const neurosis = document.querySelector("#neurosis-param");
const countBtn = document.querySelector(".count-btn");
let countC = 0;
let countE = 0;
let countO = 0;
let countH = 0;
let countN = 0;

class Countup {
  constructor(a, r, i){
  a.addEventListener("click", ()=>{
    if(i < 9){
      i += counter(1);
    }else{
      a.style.backgroundColor  = 'rgba(168,160,171,1)';
      a.setAttribute('disabled', "");
      r.style.backgroundColor  = 'rgba(168,160,171,1)';
      r.setAttribute('disabled', "");
    };
  });
  r.addEventListener("click", ()=>{
    if(i < 9){
      i += counter(1);
    }else{
      a.style.backgroundColor  = 'rgba(168,160,171,1)';
      a.setAttribute('disabled', "");
      r.style.backgroundColor  = 'rgba(168,160,171,1)';
      r.setAttribute('disabled', "");
    };
  });
}}

function counter(count){
  return  count ++;
};

new Countup(addC, rmvC, countC);
new Countup(addE, rmvE, countE);
new Countup(addO, rmvO, countO);
new Countup(addH, rmvH, countH);
new Countup(addN, rmvN, countN);

function btnAdd(param){
  param.value ++;
  if(param.value == 5){
    param.nextElementSibling.style.backgroundColor  = 'rgba(168,160,171,1)';
    param.nextElementSibling.setAttribute('disabled', "");
  };
};

function btnRmv(param){
  param.value --;
  if(param.value == -5){
    param.previousElementSibling.style.backgroundColor  = 'rgba(168,160,171,1)';
    param.previousElementSibling.setAttribute('disabled', "");
  };
};


const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
  location.reload(true);
});
