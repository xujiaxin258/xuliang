console.log('执行01.js')

document.getElementById('sp01').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','animated flash');
});

document.getElementById('sp02').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','animated shake');
});

document.getElementById('sp03').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','myani02');
});

document.getElementById('sp04').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','myani01');
});

document.getElementById('sp05').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','myani03');
});

document.getElementById('sp06').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','myani04');
});

