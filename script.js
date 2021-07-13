const boxes = [];
var boxNum = 6;
var targetBox;
var newColorsButton = document.querySelector(".nav__container_new_colors");
var displayBoxes = document.querySelectorAll(".grid__boxes");
var displayTargetText = document.querySelector(".title__txt");
var modeButton = document.querySelectorAll(".nav__container_game_mode_button");

init();
newColorsButton.addEventListener('click', function(){
  reset();
})
function init (){
  modeSelection();
}
function modeSelection(){
  for(let i = 0; i < modeButton.length; i++)
  {
    modeButton[i].addEventListener('click', function(){
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "EASY" ? boxNum = 3 : boxNum =  6; 
    reset();
    })
  }
}

function reset(){
  clearBoxes();
  generateBoxes(boxNum);
  targetBox = getOneBoxAsAnswer();
  document.querySelector(".nav__container_message").textContent = "";
  document.querySelector(".title").style.background = "steelblue";
  displayTargetText.textContent = `RGB(${boxes[targetBox][0]}, ${boxes[targetBox][1]}, ${boxes[targetBox][2]})`;
  clickBoxHandler();
}

function clearBoxes(){
  if(boxNum === 3){
    for(let i = boxNum; i < 6; i++){
      displayBoxes[i].style.display="none"
    }
  }
  else {
    for(let i = 0; i < 6; i++){
      displayBoxes[i].style.display="block"
    }
  }
}

function clickBoxHandler(){
  for(let i = 0; i < boxNum; i++){
    displayBoxes[i].addEventListener('click', function(){
      let clickColor = this.style.background;
      console.log(clickColor);
      if(clickColor === `rgb(${boxes[targetBox][0]}, ${boxes[targetBox][1]}, ${boxes[targetBox][2]})`){
        document.querySelector(".title").style.background = clickColor;
        document.querySelector(".nav__container_message").textContent = "CORRECT!";
        document.querySelector(".nav__container_message").style.color = "green";
        changeColor(clickColor);
      }
      else
      {
        this.style.background = "#232323";
        document.querySelector(".nav__container_message").textContent = "TRY AGAIN!";
        document.querySelector(".nav__container_message").style.color = "red";
      }
    })
  }
}
function changeColor(color){
  for(let i = 0; i < boxNum; i++)
  {
    document.querySelectorAll(".grid__boxes")[i].style.background = color;
  }
    
}
function getOneBoxAsAnswer(){
  return Math.floor(Math.random()* boxNum);
}
function generateBoxes (boxNum){
  for(let i = 0; i < boxNum; i++){
    boxes[i] = getRandomColors();
    displayBoxes[i].style.background = `rgb(${boxes[i][0]},${boxes[i][1]},${boxes[i][2]})`;
  }
}
function getRandomColors(){
  return [Math.floor(Math.random() *256),Math.floor(Math.random() *256), Math.floor(Math.random() *256) ]
}


