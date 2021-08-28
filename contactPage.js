var myWindow;

var add = document.querySelector('.add');
var update = document.querySelector('.update');
var BtnSubmit = document.getElementById('btnSubmit')

update.disabled = true;
add.disabled = false;
BtnSubmit.disabled = true;

add.onclick = function() {
    BtnSubmit.disabled = true;
    update.disabled = false;
}

update.onclick = function(){
    BtnSubmit.disabled = false;
    add.disabled = true;
}

BtnSubmit.onclick = function openWindow() {
    myWindow = window.open("", "myWindow", "width=800, height=800");
    myWindow.document.write('<h1>Your message was send!<h1/>');
    myWindow.document.write('<h1>Wait 3 sec!<h1/>');
    setTimeout(close, 3000);

    update.disabled = true;
    add.disabled = true;
}

function close() {
    myWindow.close();
}