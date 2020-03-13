console.log('执行1.js===>');
var x = 100000;
var djcs = 0;
var jr = 0;

var xl = document.getElementById('xl');
var btnJoin = document.getElementById('btnJoin');

btnJoin.addEventListener('click', function() {
  djcs = djcs + 1;

  console.log('点击次数：', djcs);
});



document.getElementById('btnJoin').addEventListener('click', function() {
  jr = jr + 1
  document.getElementById('jr').innerHTML=jr
});

setInterval(function() {
  x = x - (djcs * 4500);
  xl.innerHTML = x;
  if (x <= 0) {
    document.getElementById('xl').innerHTML = '恭喜，boss已经被击杀';
  }
},1000);
