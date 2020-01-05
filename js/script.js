/*var nombre=document.getElementById("nombre").value;
var apellidos=document.getElementById("apellidos").value;
var email=document.getElementById("email").value;
var movil=document.getElementById("movil").value;
var pass1=document.getElementById("pass1").value;
var usuario=document.getElementById("usuario").value;
var contrasena=document.getElementById("contrasena").value;
var pass2=document.getElementById("pass2").value;*/



function iniciarSesion(){


  document.getElementById("ok").style.display="none";
    if(document.getElementById("usuario").value==document.getElementById("contact").value
    &&document.getElementById("contrasena").value==document.getElementById("pass1").value){
    
     

      setCookie("usuario",document.getElementById("contact").value, 1);
      setCookie("contrasena",document.getElementById("pass1").value, 1);  
    document.getElementById("conexion").style.display="block";
    document.getElementById("inicio").style.display="none";
    document.getElementById("hola").innerHTML="Bienvenido "+document.getElementById("usuario").value+" estás conectado";

  }

  

}

function registrar(){
    if(document.getElementById("pass1").value!=document.getElementById("pass2").value){
        alert("La confirmación de contraseña ha de coincidir con la contraseña");
        

    }
    else{
      document.getElementById("ok").style.display="block";
      var user = document.getElementById("contact").value;
      var pass = document.getElementById("pass1").value;
      
     
      setCookie("contact",user, 1);
      setCookie("pass1",pass, 1); 
 
      document.getElementById("hola").innerHTML="Bienvenido "+getCookie(usuario)+" estás conectado";
      document.getElementById("ok").innerHTML="<i><b>Se registró correctamente</b></i>";
      document.getElementById("ok").style.color="green";
      document.getElementById("registro").style.display="none";
      document.getElementById("inicio").style.display="block";
      
    }

}

document.getElementById("registrarme").addEventListener("click",function(){

    document.getElementById("inicio").style.display="none";
    document.getElementById("registro").style.display="block";
});


document.getElementById("logout").addEventListener("click",function(){

  delete_cookie("usuario");
  delete_cookie("contrasena");
  delete_cookie("contact");
  delete_cookie("pass1");
  document.getElementById("myForm1").reset();
  document.getElementById("myForm2").reset();
  document.getElementById("myForm3").reset();
 

  document.getElementById("conexion").style.display="none";
  document.getElementById("inicio").style.display="block";


  //document.cookie("usuario="+document.getElementById("correo")+";Expires=Thu, 01 Jan 1970 00:00:01 GMT;");
  //document.cookie("contrasena="+document.getElementById("pass1")+";Expires=Thu, 01 Jan 1970 00:00:01 GMT;");
  
});


/*document.getElementById("envioDatos").addEventListener("onsubmit",function(){
    document.getElementById("registro").style.display="none";
    document.getElementById("inicio").style.display="block";
});*/

document.getElementById("volverInicio").addEventListener("click",function(){
    document.getElementById("registro").style.display="none";
    document.getElementById("inicio").style.display="block";
});



document.getElementById("mostrarOcultar").addEventListener("click",function(){

//MOSTRAR/OCULTAR CONTRASEÑA

      var tipo = document.getElementById("contrasena");

      if(tipo.type == "password"){

          tipo.type = "text";


      }else{

          tipo.type = "password";


      }


});

document.getElementById("showPass1").addEventListener("click",function(){

       var tipo = document.getElementById("pass1");
       

      if(tipo.type == "password"){

          tipo.type = "text";


      }else{

          tipo.type = "password";


      }

});


document.getElementById("showPass2").addEventListener("click",function(){

	     var tipo = document.getElementById("pass2");

      if(tipo.type == "password"){

          tipo.type = "text";


      }else{

          tipo.type = "password";


      }

});


window.addEventListener('load',function(){

    document.getElementById('fechaNacimiento').type= 'text';
    
    document.getElementById('fechaNacimiento').addEventListener('blur',function(){
    
    document.getElementById('fechaNacimiento').type= 'text';
    
    });
    
    document.getElementById('fechaNacimiento').addEventListener('focus',function(){
    
    document.getElementById('fechaNacimiento').type= 'date';
    
    });
    
    });

    /*Cookies*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
  }
  
  function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ')
        c = c.substring(1)
      if (c.indexOf(name) == 0)
        return c.substring(name.length, c.length)
    }
    return "";
  }
  
  function checkCookie() {
    var user = getCookie("usuario");
    if (user != "")
      alert("Welcome again " + user)
    else{
      user = prompt("Please enter your name:", "")
      if (user != "" && user != null)
        setCookie("username", user, 365)
    }
  }

  function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }

