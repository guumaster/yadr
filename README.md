# Yet Another Dice Roller (yadr)

## Description 

This is a simple dice roller made with ES6, works as module, as a global command line and in the browser. 

## Installation

```
npm install [-g] yadr
```

## Usage

### As a system command

```
$> yadr 3d6
//=> 6 from 3d6. [ from (2,1,3)]

$> yadr best 2 of 4d10
//=> 18 from 4d10. [ best 2 (10,8) from (10,6,7,8)]

```

### In the browser 

First install with `bower`: 

```
$> bower install yadr
```

Then include it in your html file: 

``` 
<script src="bower_components/dist/yadr.js"></script>
<script>
console.log(yadr('4d6-1+3'));
</script>
```
