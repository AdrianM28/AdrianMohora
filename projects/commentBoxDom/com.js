function addD() {
    var newdivs = document.getElementById("lista");
    var emails = document.getElementById("email");
    
    var titlu = document.createElement('h1')
    titlu.innerHTML='<img src="Userpic.png" style="width:55px;height:55px;"> ';
    titlu.style.backgroundColor = "blanchedalmond";
    var da = document.createElement("p");
    da.style.fontSize='large'
    da.innerHTML='<button onclick="delet()" id="Dute">Delete</button>'

    titlu.setAttribute('title', email.value)
    da.setAttribute('id', neww.value);

    titlu.appendChild(document.createTextNode(email.value));
    da.appendChild(document.createTextNode(neww.value));
    newdivs.appendChild(titlu);
    newdivs.appendChild(da);
}

