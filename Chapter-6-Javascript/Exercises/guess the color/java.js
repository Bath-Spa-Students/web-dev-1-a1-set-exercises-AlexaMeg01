var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorD");
var result = document.getElementById("result");
var header = document.getElementById("header");
var playagian =document.getElementById("playagian");
var newColor =document.getElementById("newcolor");
var colors= [];


generateColor();
function generateColor(){
    var i;
    for(i=0;i<squares.length;i++){
        colors.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );
    }
}

asignColor();
function asignColor(){
    var i;
    for(i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].setAttribute("data-color",colors[i]);
    }
}

var pickedColor = getrandomColor();
function getrandomColor(){
    var randomColor = colors[Math.floor(Math.random()*squares.length)];
    colorDisplay.innerText = randomColor;
    return randomColor;
}
checkColor();
function checkColor(){
    var i;
    for(i=0;i<squares.length;i++){
        squares[i].onclick = function(){
            var getColor = this.getAttribute("data-color");
            if(getColor == pickedColor)
            {
                for(j=0;j<squares.length;j++){
                    squares[j].style.opacity ="i";
                    squares[j].style.backgroundColor=pickedColor;
                }
                playagian.innerHTML ="Play Again";
                header.style.backgroundColor=pickedColor;
                result.innerText ="Correct";
            }
            else{
                result.innerText ="Wrong";
                this.classList.add("fade");
            }
        }
    }
}

newColor.onclick = function(){
    reset();
}

playagian.onclick = function(){
    reset();
}

function reset(){
    window.location = location.href;
}