console.log('执行xjx.js===>');
var jieguo = document.getElementById('jieguo01');
console.log(jieguo);

var shuzi01 = document.getElementById('shuzi01');
var shuzi02 = document.getElementById('shuzi02');
console.log(shuzi01, shuzi02);
var jisuan = document.getElementById('jisuan');
var shuzi03 = document.getElementById('shuzi03');
var shuzi04 = document.getElementById('shuzi04');
var jieguo02 = document.getElementById('jieguo02');

jisuan.addEventListener('click', function() {
  jieguo01.innerHTML = parseFloat(shuzi01.value) + parseFloat(shuzi02.value);

  jieguo02.innerHTML = shuzi03.value - shuzi04.value;

  jieguo03.innerHTML = shuzi05.value - shuzi06.value;

  jieguo04.innerHTML = shuzi07.value - shuzi08.value;


});