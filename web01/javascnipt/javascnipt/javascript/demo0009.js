console.log('执行demo0009.js');
var divInfo = document.getElementById('divInfo');
// 带div是页面上的元素
var info = 'what are you talk about.';
var index = 0;
// 获取字符串中指定位置（0开头的索引）的字符
console.log(info.charAt(0));
console.log(info.charAt(3));
// 获取字符的长度
// divInfo.innerHTML = info;

console.log(info.length);

setInterval(function() {
  divInfo.innerHTML = divInfo.innerHTML + info.charAt(index);
  index = index + 1;
  // 如果index的值到了字符串的长度，就表示全部输出完了，我们就重新开始输出
  if (index == info.length) {
    divInfo.innerHTML = '';
    index = 0;
  }
}, 200);
// ==================================================================
// 获取文本框的内容
var txtInfo = document.getElementById('txtInfo');
var btnInfo = document.getElementById('btnInfo');
var spInfo = document.getElementById('spInfo');

btnInfo.addEventListener('click', function() {
  // 表单元素才有value属性
  spInfo.innerHTML = txtInfo.value + '---' + txtInfo.value.length;
});

// 登陆校验 ==========================================================
var txtName = document.getElementById('txtName');
var txtPwd = document.getElementById('txtPwd');
var btnDengLu = document.getElementById('btnDengLu');
var spCuoWo = document.getElementById('spCuoWo');

btnDengLu.addEventListener('click', function() {
  var name = txtName.value; //姓名的值
  var pwd = txtPwd.value; //密码的值
  console.log(name, pwd);
  spCuoWo.innerHTML = '';
  if (name.length <= 4) {
    spCuoWo.innerHTML = '用户名的长度不能小于等于4个';
    // 如果执行到return，那么方法的执行到此结束
    return;
  }
  if (pwd.length < 6) {
    spCuoWo.innerHTML = '密码的长度不能小于6个';
    return;
  }
  spCuoWo.innerHTML = '欢迎：' + name;
});
