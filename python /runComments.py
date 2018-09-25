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


# importera lista från annan fil


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
top_3 = popular_words[:60]
print top_3


# spara json


# läs json
# 
# Example file for parsing and processing JSON
#

import urllib.request # instead of urllib2 like in Python 2.7
import json

def printResults(data):
  # Use the json module to load the string data into a dictionary
  theJSON = json.loads(data)
  
  # now we can access the contents of the JSON like any other Python object
  if "title" in theJSON["metadata"]:
    print (theJSON["metadata"]["title"])
  
  # output the number of events, plus the magnitude and each event name  
  count = theJSON["metadata"]["count"];
  print (str(count) + " events recorded")
  
  # for each event, print the place where it occurred
  for i in theJSON["features"]:
    print (i["properties"]["place"])
  print ("--------------\n")

  # print the events that only have a magnitude greater than 4
  for i in theJSON["features"]:
    if i["properties"]["mag"] >= 4.0:
      print ("%2.1f" % i["properties"]["mag"], i["properties"]["place"])
  print ("--------------\n")

  # print only the events where at least 1 person reported feeling something
  print ("\n\nEvents that were felt:")
  for i in theJSON["features"]:
    feltReports = i["properties"]["felt"]
    if (feltReports != None):
      if (feltReports > 0):
        print ("%2.1f" % i["properties"]["mag"], i["properties"]["place"], " reported " + str(feltReports) + " times")
  
  
def main():
  # define a variable to hold the source URL
  # In this case we'll use the free data feed from the USGS
  # This feed lists all earthquakes for the last day larger than Mag 2.5
  urlData = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"
  
  # Open the URL and read the data
  webUrl = urllib.request.urlopen(urlData)
  print ("result code: " + str(webUrl.getcode()))
  if (webUrl.getcode() == 200):
    data = webUrl.read()
    # print out our customized results
    printResults(data)
  else:
    print ("Received an error from server, cannot retrieve results " + str(webUrl.getcode()))

if __name__ == "__main__":
  main()




# classkonstruktion
class Duck:
    sound = 'Quack quack.'
    movement = 'Walks like a duck.'

    def quack(self):
        print(self.sound)

    def move(self):
        print(self.movement)

def main():
    donald = Duck()
    donald.quack()
    donald.move()

if __name__ == '__main__': main()