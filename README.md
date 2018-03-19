## WAREGYM
### Development team members:
       Name and Last name                  Email                     Id(GITHUB)
    Christian Agredano Momblan    c.agredano@alumnos.urjc.es         keyooner
    Christian Alcaide Moreno      c.alcaidemor@alumnos.urjc.es       chrtistianam7
    Adrián Cortés Pinto           a.cortespi@alumnos.urjc.es         adricp22
    Eduardo Cabrera Garcerán      e.cabrerag@alumnos.urjc.es         educg97
    Daniel Hervás García          d.hervasg@alumnos.urjc.es          hervaspe
 
### Trello: 
- https://trello.com/b/1TCBvDJM/waregym
 
### Entities: 
- User  
- Classes  
- Training  
- Activity
- Products
 
### Advanced users funcionality:
- User: Sign up, sign on classes, selection and follow-up of trainings.
- Admin: Sign up, create new classes, modify classes, modify schedules, create new trainings and introduce new products.
- Teacher: Sign up, create new classes, modify classes, modify schedules, create new trainings.

### Graphic´s information:
- Class assistance
- Body parts trained depending on de training.

### Technology that is not being on the final product:
- Captcha
- Google´s account register
- Electronic mail

### Web´s screenshots:
![It shows varied interesting information for anonymous user](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Inicio.PNG "Página principal")
- It shows varied interesting information for anonymous user

![It shows information about a class in addition to its schedules for anonymou users](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Clases.PNG "Clases Disponibles")
- It shows information about a class in addition to its schedules for anonymou users

![t shows gym´s contact information](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Contacto.PNG "Contacta con el gimnasio")
- t shows gym´s contact information

![It shows videos of types of trainings depending on the level of the logged users](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Entrenamientos.PNG "Diferentes Entrenamientos")
- It shows videos of types of trainings depending on the level of the logged users

![It shows a tracing of your trainings if you are a logged user](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Entrenamiento-seguimiento.PNG "Entrenamiento Personalizado")
- It shows a tracing of your trainings if you´re a logged user

![It shows the differet collective classes with its schedules to sign up if you´re registered](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Clases.PNG "Diferentes Clases")7
- It shows the differet collective classes with its schedules to sign up if you´re registered

![It shows interesting information of the gym for anonymous users](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Informacion-gimnasio.PNG "Informacion sobre el gimnasio")
- It shows interesting information of the gym for anonymous users

![Users could log in or sign up in the system](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/LogIn.PNG "LogIn - Registro")
- Users could log in or sign up in the system

![Any user could see the most valued and selled products](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Productos.PNG "Productos")
- Any user could see the most valued and selled products

### Navegation diagram:
Unique and common Header for all the html pages of the application and therefore accesible with the following hierarchy:
- index
- classes (dropdown, not a page)
       - inscription
       - spinning
       - body-combat
       - moi-thai
       - kick-boxing
- trainings (dropdown, not a page)
       - training
       - principiante
       - medio
       - avanzado
       - experto
- waregym
- products
- contacts
- login

### Class diagram:
![It shows the class diagram](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/class_diagram.png "Diagrama de Clases")
- It shows the class diagram

### Templates diagram:
![It shows the templates diagram](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/templates_diagram.png "Diagrama de Templates")
![It shows the security diagram](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/security_diagram.png "Diagrama de Seguridad")
- It shows the templates diagram

### Database model:
![It shows the database entities](https://github.com/keyooner/WAREGYM/blob/master/Images_readme/Database-Entities.PNG "Diagrama de entidades en la BD")


### Development Environment configuration:
- Spring Framework provides several data access methods, we use data access via JPA to a MySQL database using Hibernate. First we create the project, modifying the pom.xml file so that it contains the dependencies and configurations for JPA and MySQL.
To indicate to Spring how to access the Database, we need to create the configuration file: application.properties located in src / main / resources.
We have to create a JPA entity, making a relationship with a relational database. Using the CrudRepository interface we can delete, create, edit or search elements in our data set. We add the main class in the MySQL database.

### API REST Documentation:
[API.md](https://github.com/keyooner/WAREGYM/blob/master/API.md "API.md")

### Prepare development environment:
- You need install Docker Client in your SO. In these case Ubuntu.

      sudo apt-get update
      sudo apt-get install docker-ee

- Download docker_compose file:

      wget https://github.com/keyooner/WAREGYM/blob/master/docker/docker-compose.yml

- Go to directory where file was be downloaded:
     
      cd /home/downloads

- Execute docker-compose:

      docker-compose up docker-compose.yml

### Development instructions:
- You need created a new directory (/docker) in GitHub Repository. It contains:

     - DockerFile: New file to create the docker web image 
     - create_image.sh: Script to build app on command line using maven container

           cd /project_location
           mvn dockerfile:build

     - publish_image.sh: Script to publish the image on DockerHub.
     - docker_compose.yml: Execute these file with docker-compose up to download all necesary images on DockerHub and run the application. 

### Docker:
This app could be execute with this instrucctions about Docker:
[docker-compose.yml](https://github.com/keyooner/waregym/blob/master/docker/docker-compose.yml)
