import RPi.GPIO as GPIO
import time

LedPin = 11    # pin11

GPIO.setmode(GPIO.BOARD)       # referera till GPIO-pinnarnas fysisk plats
GPIO.setup(LedPin, GPIO.OUT)   # anvand LedPin som output

while True:
    GPIO.output(LedPin, GPIO.HIGH)  # led on
    time.sleep(1)
    GPIO.output(LedPin, GPIO.LOW) # led off
    time.sleep(1)