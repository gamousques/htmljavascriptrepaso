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
