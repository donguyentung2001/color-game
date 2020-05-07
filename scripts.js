let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let score=0;

document.getElementById("sth").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
let select = document.querySelector('#options');
let result = document.querySelector('.result');
select.addEventListener("change", run)
function runGame() { 
    if ((red===Math.max(red,green,blue) && select.value.localeCompare("red")===0) || (green===Math.max(red,green,blue) && select.value.localeCompare("green")===0)
     || (blue===Math.max(red,green,blue) && select.value.localeCompare("blue")===0)) { 
        score+=1;
        result.textContent="Congratulations! You got this right. Your score is " + score;
        select.value="default";
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        document.getElementById("sth").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        select.addEventListener("change",runGame);
    }
    else  { 
        result.textContent="Oops. You got it wrong. Your score is " + score;
        select.value="default";
        button=document.createElement("button"); 
        button.textContent="Try again!";
        button.id="button-1";
        score=-1;
        document.body.appendChild(button);
        button.onclick=replay;
    }
}
function replay() { 
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    score=0;
    document.getElementById("sth").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    result.textContent="";
    document.getElementById("button-1").remove();
}

function run() { 
    if (score!==-1) { 
        runGame();
    }
}
