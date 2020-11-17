## Basic image augmentation Node.js library for machine learning in Javascript
<br />
A simple and flexible npm library that helps to creates augmentation images for Deep Learning Applications.<br />
Implement with opencv4nodejs.
<br />
<br />

## Installation

`npm i augment-nodejs --save`<br />
`npm i opencv4nodejs --save`
<br />
<br />

## Import
```
const cv = require("opencv4nodejs");
var aug = require("augment-nodejs")(cv);
```
<br />

## API

<font size="3.5px">

+ [**blur**](#blur)
+ [**intensity**](#intensity)
+ [**flip**](#flip)
+ [**gray**](#gray)
+ [**rotate**](#rotate)
+ [**zoom**](#zoom)
+ [**crop**](#crop)
+ [**padding**](#padding)

</font>
<br />

### **blur**
Return, blured image
```
aug.blur(img, kernalSize, stddev);

kernalSize - odd number
stddev - number
```
<br />
<br />

### **intensity**
Return, darked or brighted image
```
aug.intensity(img, alpha, beta);

alpha - number
beta - number
```
<br />
<br />

### **flip**
Return, fliped image
```
aug.flip(img);
```
<br />
<br />

### **gray**
Return, grayed image
```
aug.gray(img);
```
<br />
<br />

### **rotate**
Return, rotated image
```
aug.rotate(img, angle);

angle - number
```
<br />
<br />

### **zoom**
Return, zoomed image
```
const roi = { x0: 0.3, y0: 0.3, x1: 0.8 , y1: 0.8}

aug.zoom(img, roi);
```
<br />
<br />

### **crop**
Return, croped image
```
const roi = { x0: 0.3, y0: 0.3, x1: 0.8 , y1: 0.8}

aug.crop(img, roi);
```
<br />
<br />

### **padding**
Return, padded image
```
aug.padding(img, padHeight, padWidth, centerContent);

centerContent - boolean
padHeight - number
padWidth - number
```
<br />
<br />