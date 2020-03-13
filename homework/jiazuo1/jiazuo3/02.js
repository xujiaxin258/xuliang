console.log('执行02.js');


setInterval(function() {
  // console.log(new Date());
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();

  document.getElementById('spTime').innerHTML =
    year + '年' + month + '月' + day + '日' + hour + '时' + minute + '分' + second +'秒';
}, 1000);
