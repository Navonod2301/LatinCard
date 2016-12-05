var text = document.createElement('div');
text.style.position = 'absolute';
text.style.top = '200px';
text.style.left = '100px';
text.style.fontSize = '30px';
text.style.color = 'red';
text.style.zIndex = 5;
document.body.appendChild(text);

var msg = 'Merry Christmas!';
var counter = 0;

function delayedLoop() {
    text.innerHTML += msg[counter];
    if (++counter == msg.length) {
        return;
    }
    setTimeout(delayedLoop, 500);
}
delayedLoop();

var snowflakes = [ ];

function SnowFlake(){
  this.elem = document.createElement('img');
  this.elem.src = 'http://g44.imgup.net/Snowflakef612.png';
  this.elem.style.position = 'absolute';
  this.elem.style.left = 1383*Math.random()-40 + 'px';
  this.elem.style.width = '28px';
  this.y = 0;
  this.Vy = 2*Math.random()+1.5;
  document.body.appendChild(this.elem);
}

SnowFlake.prototype.fall = function(){
  this.y+=this.Vy;
  this.elem.style.top = this.y + 'px';
};

function makeFlakes(n){
  for(i=0;i<n;i++){
    snowflakes.push(new SnowFlake());
  }
}

makeFlakes(200);

setInterval(function(){
    for(i=0;i<snowflakes.length;i++){
      snowflakes[i].fall();
      if(snowflakes[i].y>615) snowflakes[i].y = -28;
    }
}, 30);
