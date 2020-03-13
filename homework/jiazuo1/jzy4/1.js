console.log('执行1.js')

document.getElementById('sp01').addEventListener('click',function(){
  document.getElementById('ani01').setAttribute('class','animated flash');
});

document.getElementById('sp02').addEventListener('click',function(){
  document.getElementById('ani01').setAttribute('class','animated shake');
});

document.getElementById('sp03').addEventListener('click',function(){
  document.getElementById('ani01').setAttribute('class','myani01');
});

document.getElementById('sp04').addEventListener('click',function(){
  document.getElementById('ani01').setAttribute('class','myani02');
});

document.getElementById('sp05').addEventListener('click',function(){
  document.getElementById('ani01').setAttribute('class','myani03');
});

document.getElementById('sp06').addEventListener('click',function(){
  document.getElementById('ani01').setAttribute('class','mydh');
});







sp01.addEventListener('click', function() {
  ani01.setAttribute('class', 'animated flash');
  setTimeout(function() {
    ani01.setAttribute('class', '');
    console.log('===>延迟执行代码');
  }, 1000);
});

sp02.addEventListener('click', function() {
  ani01.setAttribute('class', 'animated shake');
  setTimeout(function() {
    ani01.setAttribute('class', '');
    console.log('===>延迟执行代码');
  }, 1000);
});

sp03.addEventListener('click', function() {
  ani01.setAttribute('class', 'myani01');
  setTimeout(function() {
    ani01.setAttribute('class', '');
    console.log('===>延迟执行代码');
  }, 1000);
});

sp04.addEventListener('click', function() {
  ani01.setAttribute('class', 'myani02');
  setTimeout(function() {
    ani01.setAttribute('class', '');
    console.log('===>延迟执行代码');
  }, 1000);
});

sp05.addEventListener('click', function() {
  ani01.setAttribute('class', 'myani03');
  setTimeout(function() {
    ani01.setAttribute('class', '');
    console.log('===>延迟执行代码');
  }, 1000);
});

sp06.addEventListener('click', function() {
  ani01.setAttribute('class', 'mydh');
  setTimeout(function() {
    ani01.setAttribute('class', '');
    console.log('===>延迟执行代码');
  }, 1000);
});
