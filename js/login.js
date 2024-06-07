const bodyEl = document.querySelector('body')
const focusEl = document.querySelector('#focus')

// first load
window.onload = () => {
  resetFocus()
}

// screen resized
window.addEventListener("resize", resizeScreen = () => {
  resetFocus()
})

document.addEventListener("mousemove", trackMouse = (event) => {
  const eventX = event.clientX + "px"
  const eventY = event.clientY + "px"
  focusEl.style.background = `radial-gradient(
    circle ${getScreenAvg() * 0.2}px at ${eventX} ${eventY},
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.96) 100%`
})

let isEventRunning = false
document.addEventListener("click", clickFocus = (event) => {
  if(!isEventRunning) {
    isEventRunning = true
    window.removeEventListener('resize', resizeScreen)
    document.removeEventListener("mousemove", trackMouse)
    document.removeEventListener("click", clickFocus)
    
    const eventX = event.clientX + "px"
    const eventY = event.clientY + "px"

    let i = j = 0
    // zoomIn 반복 실행 3ms에 0.001씩 100번(300ms)
    zoomIn = setInterval(() => {
      i += 1
      console.log(i)
      focusEl.style.background = `radial-gradient(
        circle ${getScreenAvg() * (0.2-(0.001*i))}px at ${eventX} ${eventY},
        rgba(0, 0, 0, 0.01) 0%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 0.96) 100%`
    }, 3)
  
    // zoomIn 반복 끝
    setTimeout(() => {
      clearInterval(zoomIn)
      console.log("zoomIn Clear")
      
      // zoomOut 반복 실행 10ms에 0.02씩 100번(1000ms)
      zoomOut = setInterval(() => {
        j += 1
        focusEl.style.background = `radial-gradient(
          circle ${getScreenAvg() * (0.1+(0.02*j))}px at ${eventX} ${eventY},
          rgba(0, 0, 0, 0.01) 0%,
          rgba(0, 0, 0, 0.5) 70%,
          rgba(0, 0, 0, 0.96) 100%`
      }, 10)
    
      // zoomOut 반복 끝
      setTimeout(() => {
        clearInterval(zoomOut)
        console.log("zoomOut Clear")
        isEventRunning = false
      }, 1000)
    }, 300)
  }
})

function resetFocus() {
  // reset place if reloaded
  focusEl.style.background = `radial-gradient(
    circle ${getScreenAvg() * 0.2}px at ${bodyEl.clientWidth * 0.6 + "px"} ${bodyEl.clientHeight * 0.3 + "px"},
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.96) 100%`
}

function getScreenAvg() {
  return Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.5)
}