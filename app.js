var elementId = document.getElementById("dropForNav")
var droperEl = document.getElementById("droper")


// dropdown nav

window.addEventListener("click", (event) => {
    if (event.target == droperEl) {
        elementId.classList.toggle('check-drop')
        // console.log(elementId.classList[1])
    }
    else if (event.target != elementId && elementId.classList[1] === undefined) {
        elementId.classList.toggle("check-drop")
    }
})




// response drop
var responseDroperEl = document.getElementById("responseDrop")
var responseDropEl = document.getElementById("dropForMenu");

window.addEventListener("click", (event1) => {
    // console.log("working")

    if (event1.target == responseDroperEl) {
        responseDropEl.classList.toggle('check-menu')
        // console.log("working")
    }
})



// response dropdown


var specialMenuEl = document.getElementById("specialMenu")
// var specialListEl = document.getElementById("specialList")
var specialDropEl = document.getElementById("specialDrop")


// not removed this part cuz this is imp for getting elements of the same class through loop

// var specialChildEl = document.getElementsByClassName("specialchild")
// var arr = []

// for(i = 0; i < specialChildEl.length ; i++){

//     arr.push(specialChildEl[i])
// }

// console.log(arr)

window.addEventListener("click", (event) => {
    if (event.target == specialMenuEl) {
        // console.log("han bhai is pr click howa ha")
        specialDropEl.classList.toggle("toggleDropClass")
        // arr[0].style.display = "block";
        // arr[1].style.display = 'block';
        // arr[2].style.display = "block";  
    }
    else if (specialDropEl.style.height == "33vh") {
        specialDropEl.classList.toggle("toggleDropClass")
    }

})




// third-item profile changer

var thirdEl1 = document.getElementById("itemChanger-1")
var thirdEl2 = document.getElementById("itemChanger-2")
var thirdEl3 = document.getElementById("itemChanger-3")
var thirdEl4 = document.getElementById("itemChanger-4")
var dotChildEl1 = document.getElementById("dotChild-1")
var dotChildEl2 = document.getElementById("dotChild-2")
var divEl = document.getElementById("thirdDiv")



setInterval(() => {

    if (thirdEl1.innerHTML.charAt(0) == "A") {
        divEl.style.opacity = "0"
        divEl.style.transition = "0.2s"
        setTimeout(() => {
            divEl.style.opacity = "1"
            thirdEl1.innerHTML = "Extremely well done and an excellent example of mastery learning."
            dotChildEl2.style.opacity = "1"
            dotChildEl1.style.opacity = ".6"
            thirdEl2.src = "./image/coding.png"
            thirdEl3.innerHTML = "Ahmed Omran"
            thirdEl4.innerHTML = "@this_ahmed"
        }, 250);

    }
    else {
        divEl.style.opacity = "0"
        divEl.style.transition = "0.2s"
        setTimeout(() => {
            divEl.style.opacity = "1"
            thirdEl1.innerHTML = "Accidentally got addicted to codewars, oops."
            dotChildEl2.style.opacity = ".6"
            dotChildEl1.style.opacity = "1"
            thirdEl2.src = "./image/pika.png"
            thirdEl3.innerHTML = "Kelly Williams"
            thirdEl4.innerHTML = "Coder"
        }, 500)
    }

}, 5000)











