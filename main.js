let changeCEOIntro = function() {
    let Intros = document.querySelectorAll("div.aboutStaffContainer p");
    Intros[0].innerHTML = Intros[1].innerHTML;
}
let changeCEOImg = function() {
    let Imgs = document.getElementsByClassName("stuffImg");
    Imgs[0].src = Imgs[1].src;
}
let changeParagraph = function() {
    let p = document.getElementsByTagName("p");
    p[0].style.fontSize = "30px";
    p[0].style.color = "red";
}
let changeParagraphAlign = function() {
    let p = document.getElementsByTagName("p");
    p[0].style.textAlign = "right";
}
let hideImgs = function() {
    let Imgs = document.getElementsByClassName("stuffImg");
    for (let i = 0; i < Imgs.length; i++) {
        if (i == 1) { continue };
        Imgs[i].style.display = "none";
    }
}