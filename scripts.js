let red=Math.floor(Math.random() * 256);
let green=Math.floor(Math.random() * 256);
let blue=Math.floor(Math.random() * 256);


document.appendChild("Aaaaaa");
document.getElementById("sth").style.backgroundColor="red";
let select=document.querySelector('#options');
let result=document.querySelector('.result');
select.addEventListener("change",runGame);
function runGame() { 
    if ((red=Math.max(red,green,blue) && select.value="red") || 
    (green=Math.max(red,green,blue) && select.value="green") ||
    (blue=Math.max(red,green,blue) && select.value="blue")) { 
        result.textContent="Congratulations! You got this right.";
    }
    else { 
        result.textContent="Oops. You got it wrong.";
    }
}


