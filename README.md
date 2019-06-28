# barberApp

barber App created during the rocketseat.com.br bootcamp

So far, dependencies:

yarn add express <br>
yarn add nodemon sucrase -D <br>

file package.json changed to include: <br>

```
  "scripts": {
    "dev": "nodemon src/server.js"
  },
```

file nodemon.json changed to include: <br>

```
{
  "execMap": {
    "js": "sucrase-node"
  }
}
```
