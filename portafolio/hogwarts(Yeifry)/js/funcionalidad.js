   
    let estudiante = {
      nombre: '',
      edad: '',
      familia: '',
      linaje: '',
      casa: '',
      patronus: '',
      cualidades: []
    };
  let Profesores = {
    transformaciones: {profesor:"Profesor Kevin Slughorn"},
    herbologia: {profesor:"Profesor Maria Umbridge"},
    pociones: {profesor:"Profesor Liliana McGonagall"},
    encantamientos: {profesor:"Profesora Jackie"},
    defensaContraLasArtesOscuras: {profesor:"Profesor Robinson Snape "},
    animalesMagicos: {profesor:"Profesor David Filch"},
    historiaDeMagia: {profesor:"Profesor Ronald Sprout"}
  };
  
  let CasaHogwarts = {
    Gryffindor: {
      cualidades: ["valor", "fuerza", "audacia"],
      linaje: ["mestizo", "muggle", "sangre pura"]
    },
  
    Hufflepuff: {
      cualidades: ["justicia", "lealtad", "paciencia"],
      linaje: ["mestizo", "muggle"]
    },
  
    Ravenclaw: {
      cualidades: ["creatividad", "erudición", "inteligencia"],
      linaje: ["mestizo", "muggle", "sangre pura"]
    },
  
    Slytherin: {
      cualidades: ["ambición", "determinación", "astucia"],
      linaje: ["sangre pura"]
    }
  };


  
  function llamar() {
    const txtNombre = document.getElementById("objName");
    let strNombre = txtNombre.value;
    estudiante.nombre = strNombre;

    const txtEdad = document.getElementById("objAge");
    let strEdad = txtEdad.value;
    estudiante.edad = strEdad;

    const txtFamilia = document.getElementById("objFamily");
    let strFamilia = txtFamilia.value;
    estudiante.familia = strFamilia;

    const txtLinaje = document.getElementById("objLinaje");
    let strLinaje = txtLinaje.value;
    estudiante.linaje = strLinaje;

    const txtCualidades = document.getElementById("objCualidades");
    let strCualidades = txtCualidades.value;
    let arrayCualidades = strCualidades.split(",");
    estudiante.cualidades = arrayCualidades;

    const divPrueba = document.getElementById("prueba");
    divPrueba.innerHTML = `
        Nombre: ${estudiante.nombre}<br>
        Edad: ${estudiante.edad}<br>
        Familia: ${estudiante.familia}<br>
        Linaje: ${estudiante.linaje}<br>
        Cualidades: ${estudiante.cualidades.join(', ')}<br>
        casa: ${estudiante.casa}
    `;

    let variable = JSON.parse(localStorage.getItem("pruebaCache"));
    console.log(variable);
    console.log(typeof variable);
    console.log(estudiante.cualidades)
console.log(estudiante.cualidades.some((cualidad) => CasaHogwarts.Gryffindor.cualidades.includes(cualidad)))
console.log(CasaHogwarts.Gryffindor.linaje.includes(estudiante.linaje))
console.log(estudiante.cualidades)
console.log(CasaHogwarts.Gryffindor.linaje)


asignarCasa(estudiante)
console.log(estudiante.casa)

    
   
   
}
console.log(estudiante.cualidades.some((cualidad) => CasaHogwarts.Gryffindor.cualidades.includes(cualidad)))

  function asignarCasa(estudiante) {
    if (
      estudiante.cualidades.some((cualidad) => CasaHogwarts.Gryffindor.cualidades.includes(cualidad)) &&
      CasaHogwarts.Gryffindor.linaje.includes(estudiante.linaje)
      
    ) {
      estudiante.casa = "Gryffindor";

    } else if (
      estudiante.cualidades.some((cualidad) => CasaHogwarts.Hufflepuff.cualidades.includes(cualidad)) &&
      CasaHogwarts.Hufflepuff.linaje.includes(estudiante.linaje)
    ) {
      estudiante.casa = "Hufflepuff";
    } else if (
      estudiante.cualidades.some((cualidad) => CasaHogwarts.Ravenclaw.cualidades.includes(cualidad)) &&
      CasaHogwarts.Ravenclaw.linaje.includes(estudiante.linaje)
    ) {
      estudiante.casa = "Ravenclaw";
    } else if (
      estudiante.cualidades.some((cualidad) => CasaHogwarts.Slytherin.cualidades.includes(cualidad)) &&
      CasaHogwarts.Slytherin.linaje.includes(estudiante.linaje)
    ) {
      estudiante.casa = "Slytherin";
    } else {
      console.log("No se pudo asignar una casa.");
    }
  }
  
  asignarCasa(estudiante);
  console.log(`Mi casa de Hogwarts es ${estudiante.casa}`);
 
  let claseTransformaciones={
         nombreProfesor:Profesores.transformaciones.profesor,
         horario:"19:00",
         presenciaDeBogart:"",
         miedo:"araña"

         
    }
   function realizarTransformacionRiddikulus(){
      
    let presencia=Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (presencia==1) {
        claseTransformaciones.presenciaDeBogart="si hay un bogart presente";
        console.log("Hay un boggart presente usa Riddikulus");
        
        enfrentarBoggart()
        
      
   }else{
        claseTransformaciones.presenciaDeBogart="no hay un bogart presente";
        console.log("No hay un boggart presente")
   }
   }
  
   

    function enfrentarBoggart(){

          console.log(`El bogart que te parece es:${claseTransformaciones.miedo}`);
          let UsoDeHechizo=Math.floor(Math.random() * (2 - 1 + 1)) + 1;
          if(UsoDeHechizo==1){
            console.log("Pudiste usar e hechizo Riddikulus el Boggart se transforma en algo ridículo")
          }else{
            console.log(`Te dejaste ganar del miedo y tuvo que ayudarte el profesor ${Profesores.transformaciones.profesor}`)
          }
         }


  claseTransformaciones.batalla=realizarTransformacionRiddikulus()
   let defensaContraLasArtesOscuras={
    nombreProfesor:Profesores.defensaContraLasArtesOscuras.profesor,
    horario:"20:00",
    animalPatronus:GenerarAnimalPatronus()
   }

   function GenerarAnimalPatronus() {
    let animalesPatronus=['Cabra', 'Fenix','Zorro', 'Ciervo','Lobo'];
    return animalesPatronus[Math.floor(Math.random() * animalesPatronus.length)];
   }
   estudiante.patronus=GenerarAnimalPatronus();
   console.log(`Mi Animal Patronus: ${defensaContraLasArtesOscuras.animalPatronus}`);
   console.log("-----------------INFORMACION--------------------------------------------------------------")
   
   console.log(JSON.stringify(estudiante))
   console.log(JSON.stringify(claseTransformaciones))
   console.log(JSON.stringify(defensaContraLasArtesOscuras))
   
    

  
   

  

