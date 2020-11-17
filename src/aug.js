const cv = require("opencv4nodejs");

exports.blur = (img, kernalSize, stddev) => {
    return img.gaussianBlur(new cv.Size(kernalSize, kernalSize), stddev, stddev)
}

exports.intensity = (img, alpha, beta) => {
    const betaMask = new cv.Mat(img.rows, img.cols, img.type, Array(img.channels).fill(Math.abs(beta)))
    const result = img.mul(alpha)
    return beta < 0 ? result.sub(betaMask) : result.add(betaMask)
}

exports.flip = (img) => {
    return img.flip(1)
}

exports.gray = (img) => {
    return img.channels === 3 ? img.cvtColor(cv.COLOR_BGR2GRAY) : img
}
  
exports.rotate = (img, angle) => {
    const ct = new cv.Point2(img.cols / 2, img.rows / 2)
    const rot = cv.getRotationMatrix2D(ct, angle, 1.0)
  
    const bbox = new cv.RotatedRect(new cv.Point2(0, 0), new cv.Size(img.cols, img.rows), angle).boundingRect()
    rot.set(0, 2, rot.at(0, 2) + (bbox.width / 2) - (img.cols / 2))
    rot.set(1, 2, rot.at(1, 2) + (bbox.height / 2) - (img.rows / 2))
  
    return img.warpAffine(rot, new cv.Size(bbox.width, bbox.height))
}

exports.zoom = (img, roi) => {
    const x = Math.max(0, roi.x0) * img.cols
    const y = Math.max(0, roi.y0) * img.rows
    const maxX = Math.min(img.cols, x + Math.max(0, (roi.x1 * img.cols) - x))
    const maxY = Math.min(img.rows, y + Math.max(0, (roi.y1 * img.rows) - y))
  
    const x0 = Math.random() * x
    const y0 = Math.random() * y
    const x1 = (Math.random() * Math.abs(img.cols - maxX)) + maxX
    const y1 = (Math.random() * Math.abs(img.rows - maxY)) + maxY
  
    return (img.getRegion(new cv.Rect(x0, y0, x1 - x0, y1 - y0)).copy()).resize(img.rows, img.cols) 
}

exports.crop = (img, roi) => {
    const x = Math.max(0, roi.x0) * img.cols
    const y = Math.max(0, roi.y0) * img.rows
    const maxX = Math.min(img.cols, x + Math.max(0, (roi.x1 * img.cols) - x))
    const maxY = Math.min(img.rows, y + Math.max(0, (roi.y1 * img.rows) - y))
  
    const x0 = Math.random() * x
    const y0 = Math.random() * y
    const x1 = (Math.random() * Math.abs(img.cols - maxX)) + maxX
    const y1 = (Math.random() * Math.abs(img.rows - maxY)) + maxY
  
    return img.getRegion(new cv.Rect(x0, y0, x1 - x0, y1 - y0)).copy()
}

exports.padding = (img, padHeight, padWidth, centerContent) => {
    const maxRow = Math.max(img.rows)
    const maxCols = Math.max(img.cols)
    const square = new cv.Mat(maxRow + padHeight, maxCols + padWidth, img.type, Array(img.channels).fill(Math.abs(0)))
  
    const dx = centerContent ? Math.abs(square.cols - img.cols) / 2 : 0
    const dy = centerContent ? Math.abs(square.rows - img.rows) / 2 : 0
    img.copyTo(square.getRegion(new cv.Rect(dx, dy, img.cols, img.rows)))
  
    return square
}