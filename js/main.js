function formulario(elEvento){
    elEvento.preventDefault();

    var  nombre1 = document.querySelector("#priNombre").value;
    var  nombre2 = document.querySelector("#SeNombre").value;
    var  apellido = document.querySelector("#apellido").value;
    
    var  correo = document.querySelector("#correo").value;
    var  contraseña = document.querySelector("#contraseña").value;
    var  SegContraseña = document.querySelector("#SegContraseña").value;
    
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    if(contraseña == SegContraseña ){
      respuestas.innerHTML=' <h3>"Tu contraseña es correcta"</h3>';
      respuestas.style.color = 'green';
      
    }else {
      respuestas.innerHTML = " Tu contraseña es incorrecta";
      respuestas.style.color = 'red';
    }

}
var boton = document.querySelector("#boton");
boton.addEventListener("submit",formulario)