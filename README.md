## Descripción
Este proyecto es una Api de prueba que utiliza la API de Marvel para consumir y exponer tres servicios:

```
getAllComics: proporciona una lista de comics desde la API de Marvel
```


[comics.webm](https://github.com/AlonsoVS/marvel-api/assets/70452478/da784168-093c-4012-a3de-c7b2c11c0b08)

```
getAllCharacters: proporciona una lista de personajes desde la API de Marvel
```



[characters_1.webm](https://github.com/AlonsoVS/marvel-api/assets/70452478/9330ebf8-bb64-4165-bd79-47c4763a0bb8)


```

getAllCreators: proporciona una lista de creadores de comics desde la API de Marvel

```
[creators.webm](https://github.com/AlonsoVS/marvel-api/assets/70452478/98235105-99db-4845-b7aa-6168c9eaff52)


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
