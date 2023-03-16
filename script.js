const keyboard=(e)=>{
    let capslo=e.getModifierState("CapsLock")
    let numlo=e.getModifierState("NumLock")
    if (capslo){
        document.getElementById("feedback").innerHTML="caps lock on"
        console.log("caps log is on");
    }else{
        document.getElementById("feedback").innerHTML="caps lock off"
        console.log("caps log is off");
    }
    if (numlo){
        document.getElementById("feedback1").innerHTML="Num lock on"
        console.log("Num is on");
    }else{
        document.getElementById("feedback1").innerHTML="Num lock off"
        console.log("Num is off");
    }
}