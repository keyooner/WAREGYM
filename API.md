## API REST Documentation

### Activity 

A continuación se muestran consultas relativas a la entidad actividad. Estas han de ir precedidas de /api.
Todos los métodos ligados a Comentario devolverán las mismas respuestas a excepción de los indicados.

* ##### Success Response:

	* HttpStatus.OK

* ##### Error Response:

	* Code: 404 NOT FOUND
        * Code: 401 Unauthorized

### OBTENER DATOS DE TODAS LAS CLASES

Muestra todos los datos de todas las clases con sus usuarios inscritos.

* ##### URL

	< /clases >

* ##### Método:

	`GET`

* ##### Success Response:

      {
        "id": 1,
        "name": "Zumba",
        "image1": "image-Zumba-1.jpg",
        "image2": "image-Zumba-2.jpg",
        "image3": "image-Zumba-3.jpg",
        "description": "La mejor clase de zumba",
        "development": "Clases de 45 minutos.",
        "benefit": "Consigue un cuerpo 10 de forma divertida.",
        "schedule": [
            [
                "X",
                "",
                "X"
            ],
            [
                "",
                "X",
                ""
            ],
            [
                "X",
                "",
                "X"
            ],
            [
                "",
                "X",
                ""
            ],
            [
                "X",
                "",
                "X"
            ]
        ],
        "inscribed": 0,
        "users": []
       }

### OBTENER DATOS DE UNA CLASE

Muestra todos los datos de una clase en función de su id.

* ##### URL

	< /clases >

* ##### Método:

	`GET`

* ##### URL Params

	* Required:

	   `{id}`

* ##### Success Response:

      {
        "id": 1,
        "name": "Zumba",
        "image1": "image-Zumba-1.jpg",
        "image2": "image-Zumba-2.jpg",
        "image3": "image-Zumba-3.jpg",
        "description": "La mejor clase de zumba",
        "development": "Clases de 45 minutos.",
        "benefit": "Consigue un cuerpo 10 de forma divertida.",
        "schedule": [
            [
                "X",
                "",
                "X"
            ],
            [
                "",
                "X",
                ""
            ],
            [
                "X",
                "",
                "X"
            ],
            [
                "",
                "X",
                ""
            ],
            [
                "X",
                "",
                "X"
            ]
        ],
        "inscribed": 0,
        "users": []
       }
  
### AÑADIR UNA CLASE

Añadir una clase a la lista de clases.

* ##### URL

	< /clases >

* ##### Método:

	`POST`

* ##### Entry Data:

      {
        "id": 2,
        "name": "Spinning",
        "image1": "image-Spinning-1.jpg",
        "image2": "image-Spinning-2.jpg",
        "image3": "image-Spinning-3.jpg",
        "description": "La mejor clase de Spinning",
        "development": "Clases de 45 minutos.",
        "benefit": "Consigue un cuerpo 10 de forma divertida.",
        "schedule": [
        [
            "X",
            "",
            "X"
        ],
        [
            "",
            "X",
            ""
        ],
        [
            "X",
            "",
            "X"
        ],
        [
            "",
            "X",
            ""
        ],
        [
            "X",
            "",
            "X"
        ]
      ],
      "inscribed": 0,
      "users": []
      }
     
* ##### Success Response:

      {
        "id": 2,
        "name": "Spinning",
        "image1": "image-Spinning-1.jpg",
        "image2": "image-Spinning-2.jpg",
        "image3": "image-Spinning-3.jpg",
        "description": "La mejor clase de Spinning",
        "development": "Clases de 45 minutos.",
        "benefit": "Consigue un cuerpo 10 de forma divertida.",
        "schedule": [
        [
            "X",
            "",
            "X"
        ],
        [
            "",
            "X",
            ""
        ],
        [
            "X",
            "",
            "X"
        ],
        [
            "",
            "X",
            ""
        ],
        [
            "X",
            "",
            "X"
        ]
      ],
      "inscribed": 0,
      "users": []
      }     

* 201 CREATED OK

### Comment
  
A continuación se muestran consultas relativas a la entidad comentario. Estas han de ir precedidas de /api.
Todos los métodos ligados a Comentario devolverán las mismas respuestas a excepción de los indicados.

* ##### Success Response:

	* HttpStatus.OK

* ##### Error Response:

	* Code: 404 NOT FOUND
        * Code: 401 Unauthorized

### OBTENER DATOS DE TODOS LOS COMENTARIOS

Muestra todos los datos de todos los comentarios.

* ##### URL

	< /contactos >

* ##### Método:

	`GET`

* ##### Success Response:

    	{
          "id": 1,
          "name": "Pepe",
          "email": "pp@gmail.com",
          "number": 123456789,
          "message": "Comentario 1"
          },
        {
          "id": 2,
          "name": "Juan",
          "email": "juan@gmail.com",
          "number": 123456789,
          "message": "Comentario 2"
        }

### OBTENER DATOS DE UN COMENTARIO

Muestra todos los datos de un comentario en función de su id.

* ##### URL

	< /contactos >

* ##### Método:

	`GET`

* ##### URL Params

	* Required:

	   `{id}`

* ##### Success Response:

      {
       "id": 1,
       "name": "Pepe",
       "email": "pp@gmail.com",
       "number": 123456789,
       "message": "Comentario 1"
      }
 
### AÑADIR UN COMENTARIO

Añadir un comentario a la lista de comentarios.

* ##### URL

	< /contactos >

* ##### Método:

	`POST`

* ##### Entry Data:

      {
       "id": 3,
       "name": "Arturo",
       "email": "Arturo@gmail.com",
       "number": 626326126,
       "message": "Comentario 3"
      }

* ##### Success Response:

      {
       "id": 3,
       "name": "Arturo",
       "email": "Arturo@gmail.com",
       "number": 626326126,
       "message": "Comentario 3"
      }
      
* 201 CREATED OK 

### ELIMINAR UN COMENTARIO

Permite la eliminación de un comentario en función de su id.

* ##### URL

	< /contactos >

* ##### Método:

	`DELETE`

* ##### URL Params

	* Required:

	   `{id}`

* ##### Success Response:

      {
       "id": 3,
       "name": "Arturo",
       "email": "Arturo@gmail.com",
       "number": 626326126,
       "message": "Comentario 3"
      }
   
### MODIFICAR UN COMENTARIO

Permite la modificación de un comentario en función de su id.

* ##### URL

	< /contactos >

* ##### Método:

	`PUt`

* ##### URL Params

	* Required:

	   `{id}`

* ##### Entry Data:

	  {
    	    "id": 4,
     	    "name": "Juan",
    	    "email": "Juan@gmail.com",
    	    "number": 626326126,
    	    "message": "Comentario 4"
	  }

* ##### Success Response:

	  {
    	    "id": 4,
     	    "name": "Juan",
    	    "email": "Juan@gmail.com",
    	    "number": 626326126,
    	    "message": "Comentario 4"
	  }

### Exercise

A continuación se muestran consultas relativas a la entidad ejercicio. Estas han de ir precedidas de /api.
Todos los métodos ligados a Ejercicio devolverán las mismas respuestas a excepción de los indicados.

* ##### Success Response:

	* HttpStatus.OK

* ##### Error Response:

	* Code: 404 NOT FOUND
        * Code: 401 Unauthorized

### OBTENER DATOS DE TODOS LOS EJERCICIOS

Muestra todos los datos de todos los ejercicios asociados a su id.

* ##### URL

	< /ejercicios >

* ##### Método:

	`GET`

* ##### Success Response:

       {
         "id": 1,
         "name": "Flexiones",
         "weight": 0,
         "reps": 10
         },
       {
         "id": 2,
         "name": "Press de Banca",
         "weight": 50,
         "reps": 5
        },
      {
         "id": 3,
         "name": "Abdominales",
         "weight": 0,
         "reps": 15
       }

### OBTENER DATOS DE UN EJERCICIO EN CONCRETO

Muestra todos los datos de un ejercicio concreto en función de su id.

* ##### URL

	< /ejercicios >

* ##### Método:

	`GET`
  
* ##### URL Params

	* Required:

	   `{id}`

* ##### Success Response:

      {
       "id": 1,
       "name": "Flexiones",
       "weight": 0,
       "reps": 10
      }

### AÑADIR EJERCICIOS

Añadir ejercicios introduciendo los datos.

* ##### URL

	< /ejercicios >

* ##### Método:

	`POST`

* ##### Entry Data:

      {
       "id": 4,
       "name": "Press",
       "weight": 0,
       "reps": 15
       }

* ##### Success Response:

      {
       "id": 4,
       "name": "Press",
       "weight": 0,
       "reps": 15
      }

* 201 CREATED OK

### Product

A continuación se muestran consultas relativas a la entidad producto. Estas han de ir precedidas de /api.
Todos los métodos ligados a Producto devolverán las mismas respuestas a excepción de los indicados.

* ##### Success Response:

	* HttpStatus.OK

* ##### Error Response:

	* Code: 404 NOT FOUND
  * Code: 401 Unauthorized

### OBTENER DATOS DE TODOS LOS PRODUCTOS

Muestra todos los datos de todos los entrenamientos asociados a los usuarios por su id.

* ##### URL

	< /productos >

* ##### Método:

	`GET`

* ##### Success Response:

      {
       "content": [
          {
            "id": 1,
            "type": "Proteínas en polvo",
            "name": "BSN SYNTHA-6 5LB",
            "value": 10,
            "link": "https://zentenoshop.com/suplementos/bsn-syntha-6-5lb-proteinas-de-calidad-ultra-premium-370",
            "image": "Proteinas_3.jpg"
          },
       {
            "id": 2,
            "type": "Proteínas en polvo",
            "name": "OPTIUM NUTRITION GOLD 900G",
            "value": 9.2,
            "link": "https://www.amazon.es/Optimum-Nutrition-Standard-Prote%C3%ADna-Chocolate/dp/B002DYIZHG/ref=sr_1_1?ie=UTF8&qid=1517564704&sr=8-1&keywords=proteinas",
            "image": "Proteinas_0.jpg"
          },
       {
            "id": 3,
            "type": "Proteínas en polvo",
            "name": "WHEY 9 FRESA 900 G APTONIA",
            "value": 9.4,
            "link": "https://www.decathlon.es/proteina-whey-9-fresa-900-g--id_8377278.html",
            "image": "Proteinas_1.jpg"
          },
        {
            "id": 4,
            "type": "Proteínas en polvo",
            "name": "PURE ISOLAT 2KG - 3XL",
            "value": 8,
            "link": "http://peopleandfitness.com/tienda-online/es/944-comprar-proteinas-pure-isolat-2-kg-nutrytec.html0",
            "image": "Proteinas_2.jpg"
        }
       ],
        "last": false,
        "totalElements": 8,
        "totalPages": 2,
        "size": 4,
        "number": 0,
        "sort": null,
        "numberOfElements": 4,
        "first": true
      }
      
### OBTENER DATOS DE UN PRODUCTO CONCRETO

Muestra todos los datos del producto concreto a través de su id.

* ##### URL

	< /productos >

* ##### Método:

	`GET`

* ##### URL Params

	* Required:

		`{id}`

* ##### Success Response:

      {
       "id": 1,
       "type": "Proteínas en polvo",
       "name": "BSN SYNTHA-6 5LB",
       "value": 10,
       "link": "https://zentenoshop.com/suplementos/bsn-syntha-6-5lb-proteinas-de-calidad-ultra-premium-370",
       "image": "Proteinas_3.jpg"
      }

### AÑADIR PRODUCTOS AL SISTEMA

Añadir un producto al sistema

* ##### URL

	< /productos >

* ##### Método:

	`POST`

* ##### Entry Data:

      {
       "id": 4,
       "type": "Aminoácidos",
       "name": "ESENCIALES AAEE",
       "value": 9.5,
       "link": "https://nutrisport.es/aminoacidos-y-peptidos/41-aminoacidos-esenciales.html",
       "image": "aminoacidos_0.jpg"
      }

* ##### Success Response:

      {
       "id": 4,
       "type": "Aminoácidos",
       "name": "ESENCIALES AAEE",
       "value": 9.5,
       "link": "https://nutrisport.es/aminoacidos-y-peptidos/41-aminoacidos-esenciales.html",
       "image": "aminoacidos_0.jpg"
      }

* 201 CREATED OK

### ELIMINAR UN PRODUCTO EN CONCRETO

Se elimina el producto a través de su id.

* ##### URL

	< /productos >

* ##### Método:

	`DELETE`

* ##### URL Params

	* Required:

		`{id}`

* ##### Success Response:

      {
       "id": 5,
       "type": "Aminoácidos",
       "name": "ESENCIALES AAEE",
       "value": 9.5,
       "link": "https://nutrisport.es/aminoacidos-y-peptidos/41-aminoacidos-esenciales.html",
       "image": "aminoacidos_0.jpg"
      }

### Training
 
A continuación se muestran consultas relativas a la entidad entrenamiento. Estas han de ir precedidas de /api.
Todos los métodos ligados a Entrenamiento devolverán las mismas respuestas a excepción de los indicados.

* ##### Success Response:

	* HttpStatus.OK

* ##### Error Response:

	* Code: 404 NOT FOUND
  * Code: 401 Unauthorized

### OBTENER DATOS DE TODOS LOS ENTRENAMIENTOS

Muestra todos los datos de todos los entrenamientos asociados a los usuarios por su id.

* ##### URL

	< /entrenamientos >

* ##### Método:

	`GET`

* ##### Success Response:

       {
        "id": 1,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 2,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 3,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 4,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 5,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 6,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 7,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 8,
        "exercises": [],
        "name": "Ninguno"
        },
       {
        "id": 9,
        "exercises": [
             {
                "id": 1,
                "name": "Flexiones",
                "weight": 0,
                "reps": 10
             },
             {
                "id": 2,
                "name": "Press de Banca",
                "weight": 50,
                "reps": 5
             },
             {
                "id": 3,
                "name": "Abdominales",
                "weight": 0,
                "reps": 15
             }
          ],
         "name": "principiante"
        }

### OBTENER DATOS DE LOS ENTRENAMIENTOS ASOCIADOS A UN USUARIO

Muestra el entrenamiento asociado al usuario por su nombre.

* ##### URL

	< /entrenamientos >

* ##### Método:

	`GET`

* ##### URL Params

	* Required:

		`{name}`

* ##### Success Response:

      {
        "id": 9,
        "exercises": [
          {
              "id": 1,
              "name": "Flexiones",
              "weight": 0,
              "reps": 10
           },
        {
              "id": 2,
              "name": "Press de Banca",
              "weight": 50,
              "reps": 5
            },
        {
             "id": 3,
             "name": "Abdominales",
             "weight": 0,
             "reps": 15
           }
        ],
        "name": "principiante"
       }

## User
A continuación se muestran consultas relativas a la entidad usuario. Estas han de ir precedidas de /api.
Todos los métodos ligados a User devolverán las mismas respuestas a excepción de los indicados.

* ##### Success Response:

	* HttpStatus.OK

* ##### Error Response:

	* Code: 404 NOT FOUND
  * Code: 401 Unauthorized

### OBTENER DATOS DE TODOS LOS USUARIOS

Muestra todos los datos de todos los usuarios

* ##### URL

	< /users >

* ##### Método:

	`GET`

* ##### Success Response:

        {
          "id": 1,
          "name": "user",
          "training": {
              "id": 1,
              "name": "Ninguno"
          },
          "passwordHash": "$2a$10$qfUNpylyZqb3R.44ixVIr.BaPe14Qjs3C1pYo5BgrQf2UV5ixLhwu",
          "activities": [],
          "roles": [
              "ROLE_USER"
           ]
         },
        {
          "id": 2,
          "name": "admin",
          "training": {
              "id": 2,
              "name": "Ninguno"
          },
           "passwordHash": "$2a$10$NtNkeR8dahChy3I1TgduMO8GMUIV/BW9pyWNK5PkYbTFYeYzH29kC",
           "activities": [],
           "roles": [
              "ROLE_ADMIN"
            ]
           },
         {
          "id": 3,
          "name": "teach",
          "training": {
              "id": 3,
              "name": "Ninguno"
         },
           "passwordHash": "$2a$10$4.h3QV1l75Xdhca3mfr4cOyE6gfwtvT8184D3ZbZtEQAoLznv65O2",
           "activities": [],
           "roles": [
              "ROLE_TEACH"
            ]
          },
       {
           "id": 4,
           "name": "carolo",
           "training": {
              "id": 4,
              "name": "Ninguno"
           },
           "passwordHash": "$2a$10$mRSTEhOClykNUWgfrZ8cp.LPIZ.X9aaEVmaUFMAfOEx.A9e3gmR.6",
           "activities": [],
           "roles": [
               "ROLE_ADMIN"
             ]
           },
         {
           "id": 5,
           "name": "adrian",
           "training": {
              "id": 5,
              "name": "Ninguno"
            },
            "passwordHash": "$2a$10$t50DYAQjKurMaQETgLYd7u3kHEyEYOeutWG0BlqHKbiyY.gD4ihZy",
            "activities": [],
            "roles": [
              "ROLE_USER"
            ]
          }

### AÑADIR USUARIOS AL SISTEMA

Añadir un usuario al sistema

* ##### URL

	< /users >

* ##### Método:

	`POST`

* ##### Entry Data:

       {
         "id": 7,
         "name": "Paco",
         "training": {
             "id": 7,
             "name": "Ninguno"
         },
         "passwordHash": "$2a$10$t50DYAQjKurMaQETgLYd7u3kHEyEYOeutWG0BlqHKbiyY.gD4ihZy",
         "activities": [],
         "roles": [
             "ROLE_USER"
         ]
       }

* ##### Success Response:

      {
        "id": 7,
        "name": "Paco",
        "training": {
          "id": 7,
          "exercises": null,
         "name": "Ninguno"
       },
        "passwordHash": "$2a$10$t50DYAQjKurMaQETgLYd7u3kHEyEYOeutWG0BlqHKbiyY.gD4ihZy",
        "activities": [],
        "roles": [
            "ROLE_USER"
          ]
       }
