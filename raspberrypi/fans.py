#!/usr/bin/python
import RPi.GPIO as GPIO
import time
from subprocess import Popen

# pin-number to relay
relay_pin_in1 = 14
relay_pin_in2 = 15
relay_pin_in3 = 17
relay_pin_in4 = 18
relay_pin_in5 = 27
relay_pin_in6 = 22
relay_pin_in7 = 23
relay_pin_in8 = 24

GPIO.setmode(GPIO.BCM)

GPIO.setup(relay_pin_in1, GPIO.OUT)
GPIO.setup(relay_pin_in2, GPIO.OUT)

inbetweens = [relay_pin_in1, 3, 30, relay_pin_in2, 4, 29]

def turnoff(pin):
    print "turning off " + str(pin)
    GPIO.output(pin, GPIO.HIGH) 

def turnon(pin):
    print "turniyng on " + str(pin)
    GPIO.output(pin, GPIO.LOW)

print "Starting program waiting 30 sec ...  "
time.sleep(30)

print "Starting process... "

turnoff(relay_pin_in1)
turnoff(relay_pin_in2)

        
def seq():
    print "starting sound .......... "
    Popen(["omxplayer", "-o", "local", "/home/pi/fans/godsplan.mp3"])        
    print "turning on pumps in 3 ..."
    time.sleep(3)
    turnon(relay_pin_in1)
    time.sleep(2)
    turnon(relay_pin_in2)
    time.sleep(60)
    print "turning of pumps ... "
    turnoff(relay_pin_in1)
    time.sleep(2)
    turnoff(relay_pin_in2)
    print "sleep 16 hour ..."
    
    time.sleep(57600)

while True:
    seq()
