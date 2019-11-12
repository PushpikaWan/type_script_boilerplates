#  Run local server to serve ts

1. install parcel tool to helps us run typescript code on browser

```
npm install -g parcel-bundler
```

2. need to create basic index.html file and add src script ts file in that file like below

```
<html>
  <body>
    <script src="./src/index.ts"></script>
  </body>
</html>
```
3. run through terminal

```
parcel index.html
```

# How to use external js library in ts
1. we can install modules using npm
2. There can be error like 'could not find declartion file for module ....'. It has happend due to type definitions are not available inside pure Javascript libraries. Therefore we need to include those files there

3. There is a way to include type definition file by using

```
@types/{libraryName}
```

# Type definition files
- extiontion ....d.ts (index.d.ts)
- all type definitions are listed there
- some library contains it with npm packages and some are not. If there is not a type definition file, then we can install it using '@types/...'

# Notes

- can use faker to get random data from apis
