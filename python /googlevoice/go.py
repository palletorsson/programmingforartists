import speech_recognition as sr
import time
r = sr.Recognizer()
mic = sr.Microphone(device_index=1)
mi = sr.Microphone.list_microphone_names()
print(mi)

def listen_for_voice():
    text = "silence"
    print("--- talk window start --")
    with mic as source:
        audio = r.listen(mic, phrase_time_limit=5)
        print (audio)
    print("--- talk window end --")
    try:
        text = r.recognize_google(audio)
        print("you said" + text)
    except sr.UnknownValueError:
        print("error")
    except sr.RequestError as e:
        print("no request")
    return text

def find_the_word(words):
    answer = False
    for word in words:
        if answer == False:
            if word == “on":
                time.sleep(5)
                print("on")
                answer = True
            elif word == "off":
                answer = True
    time.sleep(1)

try:
    while True:
        text = listen_for_voice()
        print(text)
        words = text.split()
        find_the_word(words)
except KeyboardInterrupt:
  p.stop()
  GPIO.cleanup()
