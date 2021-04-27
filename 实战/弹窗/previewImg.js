
var img = document.getElementById('myImg');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.onclick = function (){
    modal.style.display = 'block';
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modalImg.style.width = '500px';
    captionText.innerHTML = this.alt;
    captionText.style.color = 'white'
}

var closBtn = document.getElementsByClassName('close')[0];

closBtn.onclick = function(){
    modal.style.display = 'none';
}

modal.onclick = function(){
    this.style.display = 'none';
}

modalImg.onclick = function(e){
    // 取消冒泡
    e.stopPropagation();
}
