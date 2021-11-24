basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(2, 2)
        basic.pause(300)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(2, 2)
        basic.pause(300)
    }
})
