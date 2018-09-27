#!/usr/bin/python
# -*- coding: UTF-8 -*-

print('Hello, World.')

# skapa en variabel och initiera den "hello", 4 - dynamiskt typat, underscore
hello_text = "hello"
my_int = 4
my_float = 2.3

# definiera en funktion, indentering, underscore
def int_print():
    print "Printing " + str(my_int) + " " + hello_text

int_print()

# funktion som tar argument
# funktion som returnerar ett varde
def add (a, b): 
    return a+b

# använd funktionen och skriv ut dess värd
r = add(my_int, my_float)
print "Printing result from add function "  + str(r)

# importera och använd ett bibliotek
from datetime import date
from datetime import datetime

today = datetime.now()
print  ("The current date and time is ", today)

# funktion med villkorligt flöde - if, elif, else
def is_it_monday(): 
    if date.today().weekday() == 0:
        return "It is Monday"
    elif date.today().weekday() == 4:
        return "But it is Friday"
    else:
        return "It not Monday"

print is_it_monday()

# funktion med standardvärdet för ett argument
import random 

def is_the_world_ending (answer="yes"): 
    r = random.random() 
    #print r
    if answer == "yes": 
        if r < 0.5:
            ret = "The world is not ending but life is"
        else:
            ret = "Try again"
    else: 
        ret = "There is still hope"
    return ret

print is_the_world_ending()
print is_the_world_ending("no")

# skapa list och läs med while
words = ['one', 'two', 'three', 'four', 'five']

n = 0
while(n < 5):
    print(words[n])
    n += 1

# skapa list och läs den med for-loop
my_list_1 = ["dog", "cat", "mouse"]
my_list_2 = ["tiger", "bear", "monky"]

print my_list_1[0] + "" + my_list_2[2]  

for i in range(0,2):
    print my_list_1[i] + "" + my_list_2[i]

# läs webbsida och kolla vilka ord som är vanligast
import urllib
from bs4 import BeautifulSoup

link = "http://www.nettime.org/nettime/DOCS/3/andreas.html"
f = urllib.urlopen(link)
myfile = f.read()

cleantext = BeautifulSoup(myfile, "lxml").text

word_list = cleantext.split()

word_counter = {}
for word in word_list:
    if word in word_counter:
        word_counter[word] += 1
    else:
        word_counter[word] = 1

popular_words = sorted(word_counter, key = word_counter.get, reverse = True)
top_60 = popular_words[:60]
for w in top_60: 
    print(w); 