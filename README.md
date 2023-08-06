## Descripción
Este proyecto es una Api de prueba que utiliza la API de Marvel para consumir y exponer tres servicios:

```
getAllComics: proporciona una lista de comics desde la API de Marvel

getAllCharacters: proporciona una lista de personajes desde la API de Marvel

getAllCreators: proporciona una lista de creadores de comics desde la API de Marvel

```



## Instalación:
```
$ yarn install
```

## Ejecución:

```
# desarrollo
$ yarn run start
$ yarn run start:dev

# producción
$ yarn run start:prod
```

## Ejecución con docker:

```
$ docker build -t "marvel-api" .

$ docker run -p80:8080 marvel-api
```