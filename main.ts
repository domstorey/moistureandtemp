let reading = 0
led.setBrightness(41)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
    }
    basic.pause(5000)
})
