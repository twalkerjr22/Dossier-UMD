import tweepy
import csv
import pandas as pd

import boto3
import datetime
####input your credentials here
consumer_key="26OEaP2P81tb9nxbttp1FPRwi";
consumer_secret="4Cto7USB9jjoMw9oLiMQm1oLusd2ZsqTzurBnMUooEsNXfUMrh";
access_token="473043430-tT6GX1Wt3WgLfpn5XCiIloLSDiZCFzZw6inkkVCn";
access_token_secret="5O6kGkLI1rf4TYlvH3npeu2TOWNyLa7wbCYYkncvFfpFx";

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth,wait_on_rate_limit=True)

dynamodb = boto3.resource('dynamodb');

table_projects = dynamodb.Table('UserProjects2');
table_tweets = dynamodb.Table('Tweets');

response = table_projects.scan()

data = response['Items']
for i in data:
    keyword = i['Keywords'];
    #####United Airlines
    # Open/Create a file to append data
    csvFile = open('ua_'+keyword+'.csv', 'a')
    #Use csv Writer
    csvWriter = csv.writer(csvFile)
    searchTerm = keyword
    with table_tweets.batch_writer() as batch:
        for tweet in tweepy.Cursor(api.search,q=searchTerm,count=100,
                lang="en",
                since="2017-04-03").items():
                batch.put_item(
                    Item={
                    'Keyword': keyword,
                    'Tweet': tweet.text,
                    'DateAdded': str(datetime.datetime.now()),
                    'Tweet Date':str(tweet.created_at)
                    })
