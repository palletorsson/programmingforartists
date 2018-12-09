import praw
import time 

mySecret = 'tUGaHnB7NJuScEEAjLAleIHf0A8'
myId = 'ItkweWHT3XQJoA'
myUser = '----------' # make your own
myPass = '----------' # make your own
myAgent = 'yay'
yayId = 'day4i'
fullText = ''

reddit = praw.Reddit(	client_id = myId, 
						client_secret = mySecret,
						username = myUser,
						password = myPass, 
						user_agent = myAgent
						)

post = reddit.submission(id=yayId)  # if you have the ID
# Iterate over all of the top-level comments on the post:
for comment in post.comments:
    # do something, for example:
    # access the replies of a comment
    
    comments = post.comments
    comments.replace_more(limit=0)
    for comment in comments.list():
    	if comment.author == 'YAYVIDEOGAMES': 
    	    
            fullText = fullText + comment.body

f = open("yayfile.txt", "a")
f.write(fullText)
import markovify

# Get raw text as string.
with open("yayfile.txt") as f:
    text = f.read()

# Build the model.
text_model = markovify.Text(text)

# Print five randomly-generated sentences
for i in range(4000):
    n = text_model.make_sentence()
    if n != None: 
        print(n)

        time.sleep(len(n)/60)

      


