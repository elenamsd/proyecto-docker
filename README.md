## Proyecto de docker
### Descripción
Este proyecto tiene como objetivo la creación de contenedores en docker, 
uno para el backend, otro para el frontend de una aplicación web y otro para la base de datos.
La aplicación web es un sistema de visualización de datos de una base de datos de PostgreSQL.


### Ejecución
Para ejecutar el proyecto se debe tener instalado docker y docker-compose.
Luego, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:

```
docker-compose up --build
```

Este comando creará las imágenes de los contenedores y los ejecutará.

### Despliegue

```
scp -r ..\proyecto-docker\ usuario@10.6.129.179:/home/usuario
```