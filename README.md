## WAREGYM
### Integrantes del equipo de desarrollo:
       Nombre y Apellidos           Correo Electrónico               Id(GITHUB)
    Christian Agredano Momblan    c.agredano@alumnos.urjc.es         keyooner
    Christian Alcaide Moreno      c.alcaidemor@alumnos.urjc.es       chrtistianam7
    Adrián Cortés Pinto           a.cortespi@alumnos.urjc.es         adricp22
    Eduardo Cabrera Garcerán      e.cabrerag@alumnos.urjc.es         educg97
    Daniel Hervás García          d.hervasg@alumnos.urjc.es          hervaspe
 
### Trello: 
- https://trello.com/b/1TCBvDJM/waregym
 
### Entidades: 
- Usuario  
- Clases  
- Entrenamiento  
- Dieta
- Producto
 
### Funcionalidad avanzada:
- Usuario: Registro, apuntarse a clases, selección y seguimiento de entrenamiento y dietas.
- Administrador: Registro, dar de alta clases, modificar clases, modificar horarios, crear entrenamientos, crear dietas e introducir productos.
- App: Envio de correos para incentivar, clases recomendadas, entrenamientos recomendados.

### Información de los gráficos:
- Asistencia a clases
- Partes del cuerpo ejercitadas en función del entrenamiento

### Tecnología que no se va a ver en el material:
- Captcha
- Registro con cuenta de google
- Correo electronico

### Capturas de pantalla de la Web:
![Se muestra diferente información de interés para el usuario anonimo](https://github.com/keyooner/WAREGYM/blob/master/Inicio.PNG "Página principal")
- Se muestra diferente información de interés para el usuario anonimo

![Se muestra muestra información sobre una clase además de sus horarios para el usuario anonimo](https://github.com/keyooner/WAREGYM/blob/master/Clases.PNG "Clases Disponibles")
- Se muestra muestra información sobre una clase además de sus horarios para el usuario anonimo

![Se muestra información de contacto del gimnasio](https://github.com/keyooner/WAREGYM/blob/master/Contacto.PNG "Contacta con el gimnasio")
- Se muestra información de contacto del gimnasio

![Se muestran videos de formas de entrenar según el nivel a los usuarios registrados](https://github.com/keyooner/WAREGYM/blob/master/Entrenamientos.PNG "Diferentes Entrenamientos")
- Se muestran videos de formas de entrenar según el nivel a los usuarios registrados

![Se muestra un seguimiento de tus entrenamientos si eres usuario registrado](https://github.com/keyooner/WAREGYM/blob/master/Entrenamiento-seguimiento.PNG "Entrenamiento Personalizado")
- Se muestra un seguimiento de tus entrenamientos si eres usuario registrado

![Se muestra las diferentes clases colectivas con sus horarios correspondientes para apuntarse si estás registrado](https://github.com/keyooner/WAREGYM/blob/master/Gestion-clases.PNG "Diferentes Clases")7
- Se muestra las diferentes clases colectivas con sus horarios correspondientes para apuntarse si estás registrado

![Se muestra diferente información de interés para el usuario anonimo](https://github.com/keyooner/WAREGYM/blob/master/Informacion-gimnasio.PNG "Informacion sobre el gimnasio")
- Se muestra diferente información de interés para el usuario anonimo

![El usuario podrá loguearse o registrarse en el sistema](https://github.com/keyooner/WAREGYM/blob/master/LogIn.PNG "LogIn - Registro")
- El usuario podrá loguearse o registrarse en el sistema

![Cualquier usuario podrá ver los productos mejor valorizados y vendidos](https://github.com/keyooner/WAREGYM/blob/master/Productos.PNG "Productos")
- Cualquier usuario podrá ver los productos mejor valorizados y vendidos

### Diagrama de navegación:
Header único y común a todas las páginas html de la aplicación, y por tanto accesible, con la siguiente jerarquía:
- index
- clases (desplegable, no página)
       - inscripcion
       - spinning
       - body-combat
       - moi-thai
       - kick-boxing
- entrenamientos (desplegable, no página)
       - entrenamiento
       - principiante
       - medio
       - avanzado
       - experto
- waregym
- productos
- contacto
- login
