const sendBtn = document.getElementById('send-btn') 
const chatLog = document.getElementById('chat') 
const input = document.querySelector('[name= "message"]');   
function postInput(){
const newP = document.createElement('p')  
newP.innerText = input.value;
input.value = "";  
chatLog.appendChild(newP)}
sendBtn.addEventListener('click', postInput)
