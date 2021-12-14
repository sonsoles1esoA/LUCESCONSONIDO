let luz = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onSound(DetectedSound.Loud, function () {
    if (true) {
        luz = 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        luz = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
