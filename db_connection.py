import pymongo

url='mongodb+srv://techshar:Alliswell1@cinema.ysuxqk8.mongodb.net/?retryWrites=true&w=majority&appName=Cinema'
client = pymongo.MongoClient(url)

db = client['movie_ticket_booking']