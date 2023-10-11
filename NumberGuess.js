const min=1;
const max=100;
const randno=Math.floor(Math.random()*(max-min+1))+min;
let userno;
let nooftries=0;
while(userno!==randno)
{
    userno=parseInt(prompt("Enter a number between 1 to 100:"))
    if(isNaN(userno))
    {
        alert("enter a valid no")
    }
    else{
        nooftries++;
        if(userno<randno)
        {
            alert("please enter a bigger no");
        }
        else if(userno>randno){
            alert("please enter a smaller no")
        }
    }
}
console.log(`you guessed ${randno} after guessing  ${nooftries}  times`)
