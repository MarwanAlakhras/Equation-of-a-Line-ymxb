input.onPinPressed(TouchPin.P0, function () {
    Slope = (_2nd_Y - _1st_Y) / (_2nd_X - _1st_X)
    basic.showNumber(Slope)
})
input.onButtonPressed(Button.A, function () {
    if (Letter == 0 && State == 0) {
        _1st_X += -1
        basic.showNumber(_1st_X)
    } else if (Letter == 0 && State == 1) {
        _2nd_X += -1
        basic.showNumber(_2nd_X)
    } else if (Letter == 1 && State == 0) {
        _1st_Y += -1
        basic.showNumber(_1st_Y)
    } else if (Letter == 1 && State == 1) {
        _2nd_Y += -1
        basic.showNumber(_2nd_Y)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("y=" + Slope + "x+" + b)
})
input.onButtonPressed(Button.AB, function () {
    if (Letter == 0) {
        Letter = 1
    } else if (Letter == 1) {
        Letter = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Letter == 0 && State == 0) {
        _1st_X += 1
        basic.showNumber(_1st_X)
    } else if (Letter == 0 && State == 1) {
        _2nd_X += 1
        basic.showNumber(_2nd_X)
    } else if (Letter == 1 && State == 0) {
        _1st_Y += 1
        basic.showNumber(_1st_Y)
    } else if (Letter == 1 && State == 1) {
        _2nd_Y += 1
        basic.showNumber(_2nd_Y)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    MX = Slope * _1st_X
    b = _1st_Y - MX
    basic.showNumber(b)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (State == 0) {
        State = 1
    } else if (State == 1) {
        State = 0
    }
})
let MX = 0
let b = 0
let Slope = 0
let _2nd_Y = 0
let _1st_Y = 0
let _2nd_X = 0
let _1st_X = 0
let State = 0
let Letter = 0
Letter = 0
State = 0
_1st_X = 0
_2nd_X = 0
_1st_Y = 0
_2nd_Y = 0
Slope = 0
basic.forever(function () {
	
})
