console.log('执行demo0005.js')

// click点击的意思
document.getElementById('sp01').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','animated flash');
});

document.getElementById('sp02').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','animated shake');
});

document.getElementById('sp03').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','myani');
});
// 作业：加到五个以上的动画效果，最好是有自定义的动画