
import RPi.GPIO as GPIO
import time

led_pin = 11    # pin11
led_blink = True
push_button = 12

GPIO.setmode(GPIO.BOARD)       # referera till GPIO-pinnarnas fysisk plats
GPIO.setup(led_pin, GPIO.OUT)   # anvand LedPin som output
GPIO.setup(push_button, GPIO.IN, pull_up_down=GPIO.PUD_UP)   # anvand LedPin som output


while True:
    push_button_value = GPIO.input(push_button)

    if push_button_value == False:
        print("pushed", led_blink)
        if led_blink == True:
            led_blink = False
        else:
            led_blink = True
        time.sleep(1)

    if led_blink == True:
        GPIO.output(led_pin, GPIO.HIGH)  # led on
        time.sleep(0.2)
        GPIO.output(led_pin, GPIO.LOW) # led off
        time.sleep(0.2)
