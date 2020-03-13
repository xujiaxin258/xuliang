var count = 0;


document.getElementById('spon02').innerHTML = count;

document.getElementById('spon01').addEventListener('click', function () {
  
  count=count + 1;
  document.getElementById('spon02').innerHTML = count;
});
