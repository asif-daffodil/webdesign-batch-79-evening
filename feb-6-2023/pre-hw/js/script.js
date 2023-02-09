const img = document.getElementById("img");
const onbtn = document.getElementById("onbtn");
const offbtn = document.getElementById("offbtn");

const btnon = () => {
    img.src = "./images/pic_bulbon.gif";
}

const btnoff = () => {
    img.src = "./images/pic_bulboff.gif";
}

onbtn.addEventListener("click", () => btnon());
offbtn.addEventListener("click", () => btnoff());