function change_theme(){
    let theme =document.getElementById("theme").value;
    let body = document.getElementById("body");

/*     body.classList.toggle('dark'); */

    if(theme ==="oscuro"){
        
        body.classList.add('dark');
        body.classList.remove('light');
        body.classList.remove('free');

    }
    else if(theme == "claro"){
        body.classList.add('light');
        body.classList.remove('dark');
        body.classList.remove('free');
    }
    else if(theme =="rojo"){
        body.classList.add('free');
        body.classList.remove('dark');
        body.classList.remove('light');
    }
}

