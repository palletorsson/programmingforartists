
import RPi.GPIO as GPIO
import time
import subprocess 
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
print dir_path

led_pin = 11    
led_blink = True
push_button = 12
song_list = ["godsplan.mp3", "waterfalls.mp3"]
index = 0

GPIO.setmode(GPIO.BOARD)       # referera till GPIO-pinnarnas fysisk plats
GPIO.setup(led_pin, GPIO.OUT)   # anvand LedPin som output
GPIO.setup(push_button, GPIO.IN, pull_up_down=GPIO.PUD_UP)   # anvand LedPin som output


def play_song(song):
    track = dir_path+"/data/"+song  
    omx_process = subprocess.Popen(("omxplayer", "-o", "local", track), stdout=subprocess.PIPE)
    output = subprocess.Popen(("sudo", "../PirateRadio/pifm", "-", "107.1", "22050"), stdin=omx_process.stdout)

def stop_omxplayer():
    os.system('killall omxplayer.bin')


while True:
    push_button_value = GPIO.input(push_button)

    if push_button_value == False:
        print("pushed", led_blink)
        if led_blink == True:
            led_blink = False
            play_song(song_list[index])
            index = index + 1
            if index == len(song_list):
                index = 0
        else:
            led_blink = True
            stop_omxplayer()
        time.sleep(1)

    if led_blink == True:
        GPIO.output(led_pin, GPIO.HIGH)  # led on
        time.sleep(0.2)
        GPIO.output(led_pin, GPIO.LOW) # led off
        time.sleep(0.2)

    

