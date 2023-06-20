import json
from pymongo import MongoClient, InsertOne


client = MongoClient('mongodb://localhost:27017')
db = client.Alura_Series
collection = db.series
requesting = []

with open('series.json') as f:
    # usage for jason lines
    # for dict in f:
    #     myDict = json.loads(dict)
    #     requesting.append(InsertOne(myDict))

    # usage for list of dicts
    myList = json.load(f)
    for dict in myList:
        requesting.append(InsertOne(dict))

result = collection.bulk_write(requesting)
client.close()