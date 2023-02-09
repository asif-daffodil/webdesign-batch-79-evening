  const img=document.getElementById("img");
const on = () => {
  img.src = "./pic_bulbon.gif";
};
const off = () => {
  img.src = "./pic_bulboff.gif";
};






const pera = document.getElementById("pera");
const dhk = document.getElementById("dhk");
const bd = document.getElementById("bd"); 

dhk.addEventListener("click", () => {
  pera.innerHTML="TAYYAB";
 pera.style.cssText =` color:red;`
});


 bd.addEventListener("click", () => {
  pera.innerHTML = "aria";
   pera.style.cssText = ` color:gray;`;
}); 



dhk.style.cssText=`font-style:italic;background:blue;color:red; `
pera.style.cssText=`font-style:italic;`
bd.style.cssText = `font-style:italic;background:blue;color:white;`; 







const showName = document.getElementById("showName");
const sntext = document.getElementById("sntext");
const snbtn = document.getElementById("snbtn");


snbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  stn.textContent= sntext.value;
})





showName.style.cssText="margin:40px 0";