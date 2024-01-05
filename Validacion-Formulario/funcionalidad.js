let users = [
    {
        nombre: "Carlos",
        correo: "carlos.121@gmail.com",
        password: "123",
        genero: "masculino"
    }

    ,{
        nombre: "Andrea",
        correo: "andrea.121@gmail.com",
        password: "321",
        genero: "femenino"
    }
];

function verification() {
    let correoElement = document.getElementById("objCorreo");
    let passwordElement = document.getElementById("objpassword");

    let correo = correoElement.value;
    let password = passwordElement.value;



    users.forEach(function (user) {
        if (correo === user.correo && password === user.password && user.genero ==="masculino") {
            correoElement.classList.add("is-valid");
            passwordElement.classList.add("is-valid");
         
            sessionStorage.setItem("nombre", user.nombre);
            window.location.href = "homeMan.html";
        }else if (correo === user.correo && password === user.password && user.genero ==="femenino") {
            correoElement.classList.add("is-valid");
            passwordElement.classList.add("is-valid");
         
            sessionStorage.setItem("nombre", user.nombre);
            window.location.href = "homeWoman.html";
        }

        else {
            correoElement.classList.add("is-invalid");
            correoElement.classList.remove("is-valid");
            passwordElement.classList.add("is-invalid");
            passwordElement.classList.remove("is-valid");
        }
    });

  
}



