# Cheatsheet de comandos de Docker

## Contenedores

- Listar todos los contenedores
```bash
docker ps -a
```

- Crear un contenedor
```bash
docker run -d --name nombre_contenedor nombre_imagen
```

- Iniciar un contenedor
```bash
docker start nombre_contenedor
```

- Detener un contenedor
```bash
docker stop nombre_contenedor
```

- Eliminar un contenedor
```bash
docker rm nombre_contenedor
```

## Imágenes

- Listar todas las imágenes
```bash
docker images
```

- Descargar una imagen
```bash
docker pull nombre_imagen
```

- Crear una imagen a partir de un Dockerfile
```bash
docker build -t nombre_imagen .
```

- Eliminar una imagen
```bash
docker rmi nombre_imagen
```

## Docker Compose

- Iniciar los contenedores
```bash
docker-compose up
```

- Detener los contenedores
```bash
docker-compose down
```

- Ver los logs de los contenedores
```bash
docker-compose logs
```

- Detener y eliminar los contenedores y volúmenes
```bash
docker-compose down -v
```


