const btnQuiet = document.getElementById('quiet-btn');
const btnLoud = document.getElementById('loud-btn');
const btnSarc = document.getElementById('sarc-btn');
const p = document.getElementById('patrick')

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
if(p.innerText[i]==''){
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