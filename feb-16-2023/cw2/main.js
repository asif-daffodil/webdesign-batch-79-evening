const inp = document.querySelectorAll(".inp")[0];
const nbs = document.querySelectorAll(".nbs");
const btn16 = document.querySelectorAll(".btn16")[0];
const jog = document.querySelectorAll(".jog")[0];
const soman = document.querySelectorAll(".soman")[0];

const nbsArr = Array.from(nbs);
let jogfol = 0;
let x = 0;

const sum = ()=>{
    jogfol += parseInt(inp.value);
    inp.value = jogfol;
    x = 1;
}

nbsArr.map(btn => {
    btn.addEventListener("click", (e) => {
        if(inp.value == 0){
            inp.value = e.target.textContent;
        }else{
            if(x  == 0){
                inp.value += e.target.textContent;
            }else{
                inp.value = e.target.textContent;
                x = 0;
            }
        }
    })
})

btn16.addEventListener("click", ()=>{
    inp.value = 0;
})

jog.addEventListener("click", sum);
soman.addEventListener("click", () => {
    sum();
});