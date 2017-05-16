
# **_DEPRECATED_** in favor of [@guumaster/rpgen](https://github.com/guumaster/rpgen)

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
$> yadr best 1 from 2d20 +1
//=> best 1 from 2d20 +1: rolled [11,6] taking [11] +1 = 12


$> yadr best 2 of 4d10
//=> best 2 of 4d10: rolled [8,2,8,6] taking [8,8]  = 16

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
    var roll4d6 = yadr().roll('4d6+1').make(function(result) {
        console.log('from: ', result.input, 'rolled: ', result.rolls, ' = ', result.total);
    });

    roll4d6(); // from:  4d6+1 rolled:  Array [ 4, 3, 6, 4 ]  =  18
    roll4d6(); // from:  4d6+1 rolled:  Array [ 1, 6, 5, 5 ]  =  18
</script>
```
