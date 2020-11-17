const cv = require("opencv4nodejs");
var aug = require("../src/aug")(cv);

const roi = { x0: 0.3, y0: 0.3, x1: 0.8 , y1: 0.8}
const image = cv.imread("../image/lenna.jpg");

cv.imshow('Image', aug.blur(image, 3, 10));

// Uncoment and use
// cv.imshow('Image', aug.crop(image, roi));
// cv.imshow('Image', aug.flip(image));
// cv.imshow('Image', aug.gray(image));
// cv.imshow('Image', aug.intensity(image, 5, 20));
// cv.imshow('Image', aug.padding(image, 10, 20, true));

cv.waitKey();