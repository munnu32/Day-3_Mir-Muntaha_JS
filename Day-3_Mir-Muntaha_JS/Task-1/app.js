function getRandomColor(){
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let color = "rgb(" + red + ", "+ green +" ," + blue +")"
  return color
}
function changeBackgroundColor(){
  let randomColor = getRandomColor();
  let bgColor = document.getElementById('body')
  bgColor.style.backgroundColor = randomColor;
}