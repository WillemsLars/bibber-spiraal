let Tellen = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Ghost)
        music.playTone(988, music.beat(BeatFraction.Whole))
        Tellen += 1
        basic.showNumber(Tellen)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Tellen = 0
        basic.showNumber(Tellen)
    }
})
