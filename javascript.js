function szerkesztheto() {
    var elsooldal = document.getElementById("elsooldal").value;
    var masodikoldal = document.getElementById("masodikoldal").value;
    var atfogo = document.getElementById("atfogo").value;

    if(Math.pow(elsooldal,2) + Math.pow(masodikoldal,2) == Math.pow(atfogo,2) ){
        alert("A derékszögű háromszög megszerkeszthető!");
    }
    else{
        alert("A derékszögű háromszög NEM szerkeszthető meg!");
    }
}


function harmadik(){
    var elsooldal2 = document.getElementById("elsooldal").value;
    var masodikoldal2 = document.getElementById("masodikoldal").value;
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(elsooldal2,2) + Math.pow(masodikoldal2,2));
}
function random(){
    document.getElementById("elsooldal").value =  Math.random() * 100;
    document.getElementById("masodikoldal").value =  Math.random() * 100;
    document.getElementById("atfogo").value =  Math.random() * 100;
}