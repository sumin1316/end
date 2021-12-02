function doTWO () {
    strip2.setMatrixColor(0, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 1, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 3, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 3, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Red))
}
function doSomething2 (num: number) {
    if (num == 1) {
        doONE4()
    } else if (num == 2) {
        doTWO()
    } else if (num == 3) {
        doTHREE()
    } else {
    	
    }
}
function doTHREE () {
    strip2.setMatrixColor(0, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 1, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 3, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 3, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Red))
}
function doONE4 () {
    strip2.setMatrixColor(0, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 0, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 3, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(0, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Red))
    strip2.setMatrixColor(4, 4, neopixel.colors(NeoPixelColors.Red))
}
let strip2: neopixel.Strip = null
strip2 = neopixel.create(DigitalPin.P15, 25, NeoPixelMode.RGB)
strip2.setMatrixWidth(5)
strip2.setBrightness(30)
basic.forever(function () {
    strip2.clear()
    doSomething2(2)
    basic.pause(100)
    strip2.show()
})
