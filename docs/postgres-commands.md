# Cheatsheet de comandos de PostgreSQL

## Conexión y Desconexión

- Conectar a una base de datos:
```sql
  psql -U nombre_usuario -d nombre_base_de_datos
```

- Acceder a otra base de datos desde la consola de PostgreSQL:
```sql
  \c otra_base_de_datos
```

- Desconectar de la base de datos actual:
```sql
  \q
```

## Consultas básicas

- Mostrar todas las bases de datos:
```sql
  \l
```

- Mostrar todas las tablas de la base de datos actual:
```sql
  \dt
```

- Mostrar la estructura de una tabla:
```sql
  \d nombre_tabla
```
