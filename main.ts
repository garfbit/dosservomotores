input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
})
