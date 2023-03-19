def on_pin_released_p0():
    pass
input.on_pin_released(TouchPin.P0, on_pin_released_p0)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p1():
    basic.show_icon(IconNames.GHOST)
    basic.pause(100)
    music.play_tone(988, music.beat(BeatFraction.WHOLE))
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
