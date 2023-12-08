input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (randint(1, 6)))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("" + (randint(1, 6)))
    basic.clearScreen()
})
