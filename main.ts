let random_nummer = 0
let Tellen = 0
input.onButtonPressed(Button.B, function () {
    random_nummer = randint(0, 6)
    if (random_nummer == 1) {
        basic.showString("OMTER EERST EEN GLAS WATER LEEG DRINKEN ")
    } else if (random_nummer == 1) {
        basic.showString("PINGPONG, EERST TOT 3")
    } else if (random_nummer == 1) {
        basic.showString("IN DE 20 GOOIEN ")
    } else if (random_nummer == 1) {
        basic.showString("OMTER EERST 6 GOOIEN MET EEN DOBELLESTEEN ")
    } else if (random_nummer == 1) {
        basic.showString("EEN VOORWERP VERSTOPPEN / ZOEKEN ")
    } else if (random_nummer == 1) {
        basic.showString("EEN SLOKJE WATER ")
    }
})
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
