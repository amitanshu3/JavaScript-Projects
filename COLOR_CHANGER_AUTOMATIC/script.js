const changecolor=function(){
  const hex='0123456789ABCDEF';
   let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
    }
let intervalid
const startchange=function(){
  intervalid=setInterval(startcolor,1000)
  function startcolor(){
    document.body.style.backgroundColor=changecolor();
  }
  
}
const stopchange=function(){
  clearInterval(intervalid)
}
document.getElementById('start').addEventListener('click',startchange);
document.getElementById('stop').addEventListener('click',stopchange);
