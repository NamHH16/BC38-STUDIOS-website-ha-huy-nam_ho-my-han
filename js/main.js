var headerBottom = document.getElementById('headerBottom');
var iconMoon = document.getElementById('iconMoon');

var vitriHeaderBottom = headerBottom.offsetTop;
var trangthai = true;
// console.log(headerBottom.offsetTop);
window.addEventListener('scroll', function () {
    if(this.window.pageYOffset>vitriHeaderBottom && trangthai==true){
        headerBottom.classList.add('menuFix');
        iconMoon.classList.add('changeColorIconMoon');
        trangthai=false
    } if(this.window.pageYOffset<vitriHeaderBottom && trangthai==false){
        headerBottom.classList.remove('menuFix');
        iconMoon.classList.remove('changeColorIconMoon');
        trangthai=true;

    }
})
iconMoon.onclick=function () {
    var bodyId = document.getElementById('bodyID');
    headerBottom.classList.toggle('changebgHeader');
    bodyId.classList.toggle('changeBGBody');
}
