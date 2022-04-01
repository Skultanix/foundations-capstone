const baseURL = "https://f19-foundations-capstone-skul.herokuapp.com/" || "http://localhost:6969"

//Personal Variables
let mal = 0
let vibe = 0
let malVibeNeut = 0
let noChill = 0
let chill = 0
let neutChill = 0



//Quiz Progress Bar
const progArea = document.getElementById("progress")
const progBar = document.getElementById("progress-bar")

//Quiz Scenarios
const sceneOne = document.getElementById("scene-1")
const sceneTwo = document.getElementById("scene-2")
const sceneThree = document.getElementById("scene-3")
const sceneFour = document.getElementById("scene-4")
const sceneFive = document.getElementById("scene-5")
const sceneSix = document.getElementById("scene-6")

//Quiz Answer Buttons
const firstA = document.getElementById("an1A")
const firstB = document.getElementById("an1B")
const firstC = document.getElementById("an1C")
const secondA = document.getElementById("an2A")
const secondB = document.getElementById("an2B")
const secondC = document.getElementById("an2C")
const thirdA = document.getElementById("an3A")
const thirdB = document.getElementById("an3B")
const thirdC = document.getElementById("an3C")
const fourthA = document.getElementById("an4A")
const fourthB = document.getElementById("an4B")
const fourthC = document.getElementById("an4C")
const fifthA = document.getElementById("an5A")
const fifthB = document.getElementById("an5B")
const fifthC = document.getElementById("an5C")
const sixthA = document.getElementById("an6A")
const sixthB = document.getElementById("an6B")
const sixthC = document.getElementById("an6C")

//Result Archetype Pages
const tranq = document.getElementById("tranq")
const fool = document.getElementById("fool")
const discon = document.getElementById("disconcert")
const indiff = document.getElementById("indiff")
const chad = document.getElementById("chad")
const sadist = document.getElementById("sadist")
const mastermind = document.getElementById("mastermind")
const savage = document.getElementById("savage")
const karen = document.getElementById("karen")

//Quiz Scoring Functions
function addMal() {
    mal = mal + 1
}
function addVibe() {
    vibe = vibe + 1
}
function addNoChill() {
    noChill = noChill + 1
}
function addChill() {
    chill = chill + 1
}
function addMalVibeNeut() {
    malVibeNeut = malVibeNeut + 1
}
function addNeutChill() {
    neutChill = neutChill + 1
}

//Quiz Progression
function nextOne() {
   sceneOne.style.display = "none"
    progBar.setAttribute("value", 10)
    sceneTwo.style.display = "block"
}
function nextTwo() {
    sceneTwo.style.display = "none"
    progBar.setAttribute("value", 20)
    sceneThree.style.display = "block" 
}
function nextThree() {
    sceneThree.style.display = "none"
    progBar.setAttribute("value", 30)
    sceneFour.style.display = "block" 
}
function nextFour() {
    sceneFour.style.display = "none"
    progBar.setAttribute("value", 40)
    sceneFive.style.display = "block" 
}
function nextFive() {
    sceneFive.style.display = "none"
    progBar.setAttribute("value", 50)
    sceneSix.style.display = "block" 
}
function nextSix() {
    progBar.setAttribute("value", 60)
    progArea.style.display = "none"
    sceneSix.style.display = "none"
    showMe.style.display = "block"

}
//EventListners
//Scene1
firstA.addEventListener("click", () => {
    addVibe()
    nextOne()
})
firstB.addEventListener("click", () => {
    addMalVibeNeut()
    nextOne()
})
firstC.addEventListener("click", () => {
    addMal()
    nextOne()
})
//Scene2
secondA.addEventListener("click", () => {
    addVibe()
    nextTwo()
})
secondB.addEventListener("click", () => {
    addMalVibeNeut()
    nextTwo()
})
secondC.addEventListener("click", () => {
    addMal()
    nextTwo()
})
//Scene3
thirdA.addEventListener("click", () => {
    addVibe()
    nextThree()
})
thirdB.addEventListener("click", () => {
    addMalVibeNeut()
    nextThree()
})
thirdC.addEventListener("click", () => {
    addMal()
    nextThree()
})
//Scene4
fourthA.addEventListener("click", () => {
    addChill()
    nextFour()
})
fourthB.addEventListener("click", () => {
    addNeutChill()
    nextFour()
})
fourthC.addEventListener("click", () => {
    addNoChill()
    nextFour()
})
//Scene5
fifthA.addEventListener("click", () => {
    addChill()
    nextFive()
})
fifthB.addEventListener("click", () => {
    addNeutChill()
    nextFive()
})
fifthC.addEventListener("click", () => {
    addNoChill()
    nextFive()
})
//Scene6
sixthA.addEventListener("click", () => {
    addChill()
    nextSix()

})
sixthB.addEventListener("click", () => {
    addNeutChill()
    nextSix()
  
})
sixthC.addEventListener("click", () => {
    addNoChill()
    nextSix()

})

let vibeAlign = " "
let chillAlign = " "

//Results Page interface
const showMe = document.getElementById("show-me")
const showMeBtn = document.getElementById("show-me-btn")
const shown = document.getElementById("shown")

//Personality Profile determination
function vibeChooser() {
    if(mal >= 2){
        vibeAlign = "malevolent"
    } else if(malVibeNeut >= 2){
        vibeAlign = "neutral"
    } else if(vibe >= 2) {
        vibeAlign = "vibing"
    } else {
        vibeAlign = "neutral"
    }
}
function chillChooser() {
    if(noChill >= 2) {
        chillAlign = "no chill"
    } else if(neutChill >= 2) {
        chillAlign = "neutral"
    } else if(chill >= 2) {
        chillAlign = "chill"
    } else {
        chillAlign = "neutral"
    }
}
function archetypeChooser() {
    showMe.style.display = "none"
    shown.style.display = "block"
    if((vibeAlign === "malevolent") && (chillAlign === "no chill")) {
        karen.style.display = "block"   
    } else if((vibeAlign === "malevolent") && (chillAlign === "neutral")) {
        savage.style.display = "block"   
    } else if((vibeAlign === "malevolent") && (chillAlign === "chill")) {
        mastermind.style.display = "block"   
    } else if((vibeAlign === "neutral") && (chillAlign === "no chill")) {
        sadist.style.display = "block"   
    } else if((vibeAlign === "neutral") && (chillAlign === "neutral")) {
        chad.style.display = "block"   
    } else if((vibeAlign === "neutral") && (chillAlign === "chill")) {
        indiff.style.display = "block"   
    } else if((vibeAlign === "vibing") && (chillAlign === "no chill")) {
        discon.style.display = "block"   
    } else if((vibeAlign === "vibing") && (chillAlign === "neutral")) {
        fool.style.display = "block"   
    } else if((vibeAlign === "vibing") && (chillAlign === "chill")) {
        tranq.style.display = "block"   
    }
      
}

showMeBtn.addEventListener("click", () => {
    vibeChooser()
    chillChooser()
    archetypeChooser()
})

//Feedback Functionality
const feedbackInput = document.getElementById("feedback-data")
const submitBtN = document.getElementById("sub-feedback")
const feedForm = document.getElementById("feedback-form")

function submitFeedback() {
    let newFeed = feedbackInput.ariaValueMax
    let feedbackBody = {
        newFeed
    }
    axios
    .post("http://localhost:6969/api/submitFeedback/", feedbackBody)
   //  .post("/api/submitFeedback/", feedbackBody)
   .then((res) => {
       let feedText = res.data
       function toSpongeBobCase(str) {
           let strArr = str.split("")
           let spongeArr = []
           let counter = 0
           for(i = 0; i < strArr.length; i++)
             if(strArr[i] === "'" || strArr[i] === "," || strArr[i] === "." || strArr[i] === " ") {
               counter++
               spongeArr.push(strArr[i])
             }
             else if((i + counter) % 2 === 0) {
               spongeArr.push(strArr[i].toLowerCase())
             } else {
               spongeArr.push(strArr[i].toUpperCase())
             }
           let spongeStr = spongeArr.join("")
           return spongeStr
         }
       let spongeFeed = toSpongeBobCase(feedText)
       let newMeme = document.createElement("h2")
       newMeme.innerText = `${spongeFeed}`
       console.log(spongeFeed)
       document.body.insertBefore(newMeme, feedForm)
   })
}
submitBtN.addEventListener("click",submitFeedback)