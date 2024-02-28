const codes= document.querySelectorAll(".code")
const msg=document.querySelector(".info")
const btn=document.getElementById("submitButton")
btn.style.color = "orange";
btn.style.border = "none";
btn.style.borderRadius = "10%";
btn.style.padding = "3px";
btn.textContent = "Gönder!";
btn.style.cursor = "pointer";
document.addEventListener("DOMContentLoaded", () => {      
    codes[0].focus();
    
});
btn.addEventListener("click", () => {    
    btn.style.color = "orange";
    btn.textContent = "Gönderildi"; 
    codes.forEach(code => {
        code.value = "";
    });
    codes[0].focus();
  
    setTimeout(() => {       
      btn.style.color = "orange"; 
      btn.textContent = "Gönder!"; 
          }, 2000);
  });

codes.forEach((code, index) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= '0' && e.key <= '9' || e.key ==="-") {
            code.value = "";

            setTimeout(() =>  codes[index + 1] ? codes[index + 1].focus() : dogruNumara(), 10);
        } 
        else if (e.key ==="Backspace") {
            
            setTimeout(() =>codes[index - 1] ? codes[index - 1].focus() : codes[index].focus(), 10);}
    });
});
function dogruNumara() {
    const num1 = codes[0].value.trim() + codes[1].value.trim() + codes[2].value.trim();
    const num2 = codes[4].value.trim() + codes[5].value.trim() + codes[6].value.trim();
    const num3 = codes[8].value.trim() + codes[9].value.trim() + codes[10].value.trim();
   
   

    const isFormatCorrect = num1.length === 3 && num2.length === 3 && num3.length === 3;
    const isAllNum = isNaN(parseInt(codes[3].value.trim())) && isNaN(parseInt(codes[7].value.trim()));
    
    if (isFormatCorrect && isAllNum) {
        document.getElementById("submitButton").focus();
    } else {   
        console.log(codes[3]);     
        msg.textContent="Numara 123-456-789 formatında olmalıdır.";
        msg.style.color="red"
        codes.forEach(code => {
            code.value = "";
        });
        setTimeout(() => {  
            msg.textContent = ""; 
                }, 2000);
        codes[0].focus();
    }
}