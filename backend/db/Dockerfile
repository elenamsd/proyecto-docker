FROM postgres:17

# Establecer variables de entorno para PostgreSQL
ENV POSTGRES_USER=admin \
    POSTGRES_PASSWORD=admin \
    POSTGRES_DB=test

# Copiar el script de inicialización al contenedor
COPY ./db/init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto 5432 para conexiones externas
EXPOSE 5432