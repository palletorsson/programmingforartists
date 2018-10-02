# importera 4 bibliotek BeautifulSoup, re, requests och urllib. 
from bs4 import BeautifulSoup
import re
import requests
import urllib

# som variabler ett counterindex och url som vi skall hämta bilder från.
index = 1; 
url = "https://en.wikipedia.org/wiki/Modern_art"

# sen gör vi en webrequest 
r  = requests.get(url)

# och tar ut själva sidans innehåll som vi kallar data
data = r.text
# med BeautifulSoup får vi tillgång till alla taggar i DOM:en
soup = BeautifulSoup(data)
# med soupobjektet kan vi sedan hämta de aktuella bilderna 
for thumb in soup.find_all('img'):
    # kolla att bilden har en lank
    if thumb.parent.name == 'a':
        imglink = thumb.get('src')
        imglink = "https:"+imglink
        # ta bort temp i lanken 
        # här måste jag kolla hur dom:en ser ut på wikipedia
        imglink = re.sub(r'/thumb', '', imglink)
        # dela upp lanken i tva delar fran sista slashen
        parts = imglink.rsplit('/',1)
        # ta den forsta delen
        imglink = parts[0]
        print imglink

        if len(imglink) > 20: 
            filename = "img" + str(index) + ".jpg"
            filepath = "img/"+filename
            urllib.urlretrieve(imglink, filepath)
            index = index + 1

    if index > 10: 
        break
