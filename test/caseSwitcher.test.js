
//var allP = document.getElementsByTagName('p')
//document.getElementById('quiet.button').onclick= function(){
//  document.getElementById('quiet').innerHTML = allP.toLowerCase()
//}
//document.getElementById('quiet.button').onclick= function(){
 // document.getElementById('loud').innerHTML = allP.toUpperCase()
//}
//function toCamelCase(allP){
//  let newStr = "";
//  if(allP){
//    let wordArr = allP.split();
//    for(let i in wordArr){
//      if(i>0){
//        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
//      } else{ newStr += wordArr[i]}
//    }
//  }else { return newStr}
//  return newStr;
//}
const btnQuiet = document.getElementById('quiet-btn');
const btnLoud = document.getElementById('loud-btn');
const btnSarc = document.getElementById('sarc-btn');
const p = document.getElementById('Patrick')

function onQuietClick(){
  p.innerText = p.innerText.toLowerCase();
}
function onLoudClick(){
  p.innerText = p.innerText.toUpperCase();
}
function onSarcClick(){
  console.log('sarc click')
  let finalString = '';
  let counter = 0
  for(let i=0; i< p.innerText.length; i++){
    if (p.innerText[i]== ''){
      finalString += p.innerText[i]
      continue;
    }
    if(p.inner[i]){
      if(counter % 2 == 0){
        finalString += p.innerText[i].toLowerCase();
      }else {finalString += p.innerText[i].toUpperCase();}
      counter++;
    }
  }
  p.innerText = finalString
}
btnQuiet.addEventListener('click', onQuietClick);
btnLoud.addEventListener('click', onLoudClick)
btnSarc.addEventListener('clcik', onSarcClick);