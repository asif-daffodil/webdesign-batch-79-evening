const titles = document.querySelectorAll(".titles")[0]
const details = document.querySelectorAll(".details")[0]
const titlesArr = Array.from(titles.children);
const detailsArr = Array.from(details.children);

for (let i = 0; i < titlesArr.length; i++) {
    titlesArr[i].addEventListener("click", (e)=>{
        for (let j = 0; j < titlesArr.length; j++) {
            if(i === j){
                titlesArr[j].classList.add("active");
                detailsArr[j].classList.remove("d-none");
            }else{
                titlesArr[j].classList.remove("active");
                detailsArr[j].classList.add("d-none");
            }
            
        }
    })
}

const heading = document.querySelectorAll(".heading");
const headingArr = Array.from(heading);
for (let i = 0; i < headingArr.length; i++) {
    headingArr[i].addEventListener("click", ()=>{
        for (let j = 0; j < headingArr.length; j++) {
            if(i === j){
                if(headingArr[j].nextElementSibling.style.display === "none"){
                    headingArr[j].nextElementSibling.style.display = "block";
                    headingArr[j].nextElementSibling.style.height = "max-content";
                }else{
                    headingArr[j].nextElementSibling.style.display = "none";
                    headingArr[j].nextElementSibling.style.height = "0px";
                }
            }else{
                headingArr[j].nextElementSibling.style.display = "none";
                headingArr[j].nextElementSibling.style.height = "0px";
            }
        }
    })
}