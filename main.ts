input.onButtonPressed(Button.A, function () {
    clints = clints - 1
    basic.showNumber(clints)
    basic.showString("tinda vacia")
})
input.onButtonPressed(Button.AB, function () {
    clints = 0
    basic.showNumber(clints)
})
input.onButtonPressed(Button.B, function () {
    clints = clints + 1
    basic.showNumber(clints)
})
let clints = 0
let tinda = 0
