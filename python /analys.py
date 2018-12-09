import operator
# Get raw text as string.
with open("yayfile.txt") as f:
    text = f.read()

wordcount = {} 
words = text.lower().split() 

# make freq dict
for word in words:
    word = word.replace(".","")
    word = word.replace(",","")
    word = word.replace(":","")
    word = word.replace("\"","")
    word = word.replace("!","")
    word = word.replace("*","")
    if word not in wordcount:
        wordcount[word] = 1
    else:
        wordcount[word] += 1

print wordcount
wordcountpairs = {} 

# sort 

sorted_text = sorted(wordcount.items(), key=operator.itemgetter(1), reverse=True)
print type(sorted_text)

for value in sorted_text:
    pass    #print value 
    # for each top word in wordcount dict 
    # look at text 

for word in words:
    if word not in wordcount:
        wordcount[word] = 1
    else:
        wordcount[word] += 1



def printWords(): 
	# Build the model.
    text_model = markovify.Text(text)



	# Print five randomly-generated sentences
    for i in range(4000):
        n = text_model.make_sentence()
        if n != None: 
            print(n)
            time.sleep(len(n)/60)
