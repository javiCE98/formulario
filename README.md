# formulario
El formulario lo he realizado jugando con los displays ocultando o mostrando las partes en función de la parte que tengo que realizar.
Son tres formularios distintos,cada uno con su div,y en función de la parte que queramos mostrar o utilizar voy ocultando y mostrando
cada uno de los divs.
Además he añadido párrafos que he rellenado con innerHTML,dándoles estilos cuando la parte concreta se ha realizado de forma correcta.

Lo primero que aparece es la parte del login que no funcionará hasta que el registro se haya realizado correctamente,una vez realizado
correctamente el registro aparecerá un mensaje de que se ha completado correctamente el registro en la parte del login.Además
se habrán creado las cookies de usuario y de contraseña del formulario.

Al realizar el login el usuario introducido y la contraseña introducida deberá coincidir con los valores de las cookies del registro para
que se inicie la sesión,si coinciden entrará y se crearán dos cookies más con el nombre de usuario correspondiente a la cookie de sesión
de usuario y otra cookie con la contraseña de ese usuario.

Una vez se haya iniciado la sesión,aparecerá un texto de bienvenida con el texto Bienvenido y el nombre de usuario(ya sea un correo
electrónico o un teléfono móvil).

En la parte de la página de la sesión iniciada,hay un botón de logout que nos permite al pulsarlo eliminar las dos cookies la de usuario
correspondiente a la sesión y la de la contraseña.Además se borrarán también las otras dos cookies creadas cuando se realizó el registro.

Y es entonces cuando tendremos que realizar un nuevo registro de forma correcta para poder hacer el login y iniciar la sesión.

Las cookies las he creado con cuatro funciones que saque de W3Schools que son setCookie,getCookie,checkCookie y delete_cookie.

SI NO SE REALIZA ANTES DE FORMA CORRECTA EL REGISTRO NO SE PODRÁ INICIAR SESIÓN

![alt text](https://raw.githubusercontent.com/javiCE98/formulario/master/capturas/Captura1.png)

SI NO SE RELLENAN LOS CAMPOS NO DEJA REALIZAR EL REGISTRO

https://raw.githubusercontent.com/javiCE98/formulario/master/capturas/Captura2.png

SI LA CONFIRMACIÓN DE LA CONTRASEÑA NO COINCIDE CON LA CONTRASEÑA NO PERMITE REALIZAR EL REGISTRO

https://raw.githubusercontent.com/javiCE98/formulario/master/capturas/Captura3.png

SI EL REGISTRO SE REALIZA CORRECTAMENTE APARERERÁ EL MENSAJE EN VERDE DE SE HA REGISTRADO CORRECTAMENTE
https://raw.githubusercontent.com/javiCE98/formulario/master/capturas/Captura4.png

SI EL LOGIN COINCIDE CON EL REGISTRO SE HABRÁ INICIADO ENTONCES LA SESIÓN Y APARECERÁ UN MENSAJE DE BIENVENIDA

https://raw.githubusercontent.com/javiCE98/formulario/master/capturas/Captura5.png

SI SE PULSA EL BOTÓN DE LOGOUT LA SESIÓN ENTONCES SE CERRARÁ

https://raw.githubusercontent.com/javiCE98/formulario/master/capturas/Captura6.png
