const verifyBtn = document.querySelector(".verify-btn");
const otpInputs = document.querySelectorAll(".otp");

let currActiveInput = 0;

window.addEventListener("keyup", (e) => {
    console.log(e.key);
  
    // Restrict to numbers for OTP
    if ( e.key != "Backspace") {
      otpInputs[currActiveInput].value = e.key;
  
      // Move to the next input if not the last one
      if (currActiveInput < otpInputs.length - 1) {
        otpInputs[currActiveInput].classList.remove("active");
        currActiveInput++;
        otpInputs[currActiveInput].classList.add("active");
        otpInputs[currActiveInput].focus();
      }
    } else if (e.key === "Backspace") {
      // Handle Backspace (remove value or move to previous input)
      if (otpInputs[currActiveInput].value) {
        otpInputs[currActiveInput].value = "";
      } else {
        if (currActiveInput > 0) {
          otpInputs[currActiveInput].classList.remove("active");
          currActiveInput--;
          otpInputs[currActiveInput].classList.add("active");
          otpInputs[currActiveInput].focus();
        }
      }
    }
  });
  
