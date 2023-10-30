const paymentSuccess = true;
const marks = 83;

function enroll(){
    console.log("Course enrollment is in progress...")

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (paymentSuccess){
                resolve();
            }else{
                reject("Payment Failed");
            }
        },2000)
    })

    return promise
}

function progress(){
    console.log("Course on progress");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (marks >= 80){
                resolve();
            }else{
                reject("Could not get enough marks");
            }
        }, 2000)
    })

    return promise
}


function getCertificate(){
    console.log("Preparing your certificate");

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrats! you got the cerificate")
        }, 3000)
    })

    return promise
}

async function Course(){
    try{
        await enroll();
        await progress();
        const msg = await getCertificate();

        console.log(msg)
    }catch(err){
        console.log(err)
    }
}

Course();