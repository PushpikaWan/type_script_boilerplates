#  Ts Configurations

- compile code - 
```
tsc index.ts
```

we can make project structure and all the configuration in tsconfig file

1. can intitalise tsconfig file using below command 

```
 tsc --init
```
2. we can edit src and target directry in there 

```
  "outDir": "./build",                     
  "rootDir": "./src",         
```
3. then we can directly run below command to compile 

```
tsc
tsc -W #to watch

```

4. to run

```
node ./build/index.js
```

# Concurrent running

1. initalise npm 

```
npm init -y
```

2. install nodemon and concurrently

```
npm install nodemon concurrently
```

3. add scripts

```
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:*"
```
npm start will concurrently run theses two and provide hot deploy here

# notes 

can use  two type guards 
 - typeof -> narrow types as primitive
 - instanceof -> narrow down every other types
 - Enums
 - Abstract classes and Interfaces
 - Generics
 