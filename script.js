const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const logo = document.querySelector(".logo")
const navbar = document.getElementById("navbar");
const abtImg = document.getElementById("abtImg");
const abtText = document.getElementById("abtText")
const shape = document.getElementById("shape");
const imgBox = document.getElementById("imgBox");
const box = document.querySelectorAll(".box");
const box2 = document.querySelectorAll(".box2");


box.forEach(boxes => {
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                boxes.className = "newBox"
            }
        })
    })
    observer.observe(boxes)
})

box2.forEach(boxes => {
    const observer2 = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                boxes.className = "newBox2"
            }
        })
    })
    observer2.observe(boxes)
})

function runAbtCir() {
    const observer5 = new IntersectionObserver(entries => {
        
        entries.forEach(entry => {
            if(entry.isIntersecting){
                abtImg.style.transform = "translateY(0)"
                abtImg.style.opacity = 1
            }
        })
    })
    observer5.observe(abtImg)
}

function runAbtTxt() {
    const observer5 = new IntersectionObserver(entries => {
        
        entries.forEach(entry => {
            if(entry.isIntersecting){
                abtText.style.transform = "translateX(0)"
                abtText.style.opacity = 1
                abtText.style.transform = "translateY(-10px)"
            }
        })
    })
    observer5.observe(abtText)
}

runAbtCir()
runAbtTxt()

function runShape() {
    const observer4 = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                shape.style.width = "100%"
                shape.style.scale = 1
            }
        })
    })
    observer4.observe(shape);
}

function runImg() {
    const observer3 = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                imgBox.style.transform = "translateY(0)"
            }
        })
    })
    observer3.observe(imgBox);
}

runShape()
runImg()


openMenuBtn.addEventListener("click", () => {
    logo.style.transform = "translateX(0)"
})
closeMenuBtn.addEventListener("click", () => {
    logo.style.transform = "translateX(100%)"
})

window.onscroll = function() {
    if(document.body.scrollTop > window.innerHeight * 0.9 || document.documentElement.scrollTop > window.innerHeight * 0.9) {
        navbar.style.top = "10px";
        navbar.style.position = "fixed";
        navbar.style.zIndex = 10;
    }

    else{
        navbar.style.top = "90vh"
        navbar.style.position = "absolute"
    }
}