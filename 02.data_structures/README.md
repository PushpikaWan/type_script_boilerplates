# Data structures

1. Primitive types
 -  number
 - bollean 
 - void
 - undefined
 - string 
 - symbol
 - null

2. Object types
 - functions
 - arrays 
 - classes
 - objects

# Arrays

# Tuples

Mainly use to represnt properties of object. 

```
let classRoom : [number, number] = [20,40]
# this is hard to identify , therfore we can use following object to provides more readbility

let classRoom = {
  boys: 20,
  girls: 40
}
```

It is hard to read, Use class or interface related object instead of tuples.

# Classes
 
 - access modifier - public (default), private, protected (only child classes can access)
 - 

# Notes

* don't use any type. Always use specific types if we need more types than one use it as follows

```
let varibleExample : string | boolean
```

* There is a special return type call 'never' we can add it as a return type for method which never go to last lines like throwing errors
