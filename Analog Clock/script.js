const minsHand = document.querySelector(".mins-hand");
const secsHand = document.querySelector(".secs-hand");
const hoursHand = document.querySelector(".hours-hand");

// Function to get the current time

const clockTine = () => {
  let date = new Date();
  let hours = date.getHours()
  let mins = date.getMinutes()
  let secs = date.getSeconds()

  
  hoursHand.style.transform = `rotate(${hours * 15 }deg)`
  minsHand.style.transform = `rotate(${mins*6}deg)`
  secsHand.style.transform = `rotate(${secs*6}deg)`
};

setInterval(()=>{
    clockTine();
},1000)
