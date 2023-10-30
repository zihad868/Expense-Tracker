function myMove(){
    const animate = document.getElementById("animate") 

    let pos = 0

    var interval = setInterval(frame, 5);

    function frame(){
        pos++;

        if (pos>350){
            animate.style.top = pos + "px";
            animate.style.left = pos + "px";
        }else{
            clearInterval(interval)
        }
    }
};

myMove();