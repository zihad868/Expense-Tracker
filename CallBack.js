const paymentSuccess = true
const markes = 75

function enroll(callback){
    console.log("Cource enroll is in progress")

    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }else{
            console.log("Payment failed")
        }
    }, 2000)
}

function progress(){
    console.log("Course progress is running")

    setTimeout(function(callback){
        if (markes >= 80){
            callback();
        }else{
            console.log("You could not get enough marks");
        }
    }, 3000)
}

function getCertificate(){
    console.log("Certificate is processing...")

    setTimeout(function(){
        console.log("Congrats you got certificate")
    }, 1000)
}


enroll(function(){
    progress(getCertificate())
})