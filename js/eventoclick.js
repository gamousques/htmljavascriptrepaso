function docall() {
    alert('Hello World!');
}

function docallalert() {
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    alert(txt);
}

function changeColor () {
    var dd1 = document.getElementById("di1");
    var dd2 = document.getElementById("di2");

    dd1.className = "blueback"
    dd2.className = "yellowback"

    var textH1 = document.getElementById("h1div2");

    textH1.innerText = "HOLA BOBO"
}
