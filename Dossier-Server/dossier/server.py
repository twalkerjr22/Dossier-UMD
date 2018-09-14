#server.py


import os
import twitter
from flask import Flask
from flask import request
from flask_dynamo import Dynamo
from flask_cors import CORS, cross_origin
from flask import jsonify
import boto3

from boto3.dynamodb.conditions import Key, Attr


api = twitter.Api(consumer_key="26OEaP2P81tb9nxbttp1FPRwi",
                  consumer_secret="4Cto7USB9jjoMw9oLiMQm1oLusd2ZsqTzurBnMUooEsNXfUMrh",
                  access_token_key="473043430-tT6GX1Wt3WgLfpn5XCiIloLSDiZCFzZw6inkkVCn",
                  access_token_secret="5O6kGkLI1rf4TYlvH3npeu2TOWNyLa7wbCYYkncvFfpFx")


os.environ["AWS_ACCESS_KEY_ID"] = "AKIAI76VR6GFA5QA5G2Q";
os.environ["AWS_SECRET_ACCESS_KEY"] = "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";

rds = boto3.client('rds');
dynamodb = boto3.resource('dynamodb');

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
dynamo = Dynamo(app)

#API hook function that is called when we want to create a new project
#We post the new project to our dynamodb databse
@app.route('/create_project',methods = ['GET', 'POST', 'DELETE'])
def create_project():
    table = dynamodb.Table('UserProjects');
    table.put_item(
        Item={
        'UserID': str(request.json['name']),
        'ProjectID': str(request.json['projectId']),
        'Organization': str(request.json['Organization']),
        'Keywords': str(request.json['Keywords'])
        }
        )
    #dynamo.tables['users'].put_item(TableName='Dossier',
    		##Item={ 'userId': str(request.json['name']), 'projectId': str(request.json['projectId']),'Organization': str(request.json['Organization']),
        	#'Keywords': str(request.json['Keywords']),
        	#'created-date': '5-26-2018'});

    return 'done';

@app.route('/get_projects',methods = ['GET', 'POST', 'DELETE'])
def get_projects():
        response = dynamo.tables['UserProjects'].query(KeyConditionExpression=Key('UserID').eq('twalke1000'))
        print(response);

        return jsonify(response);

@app.route('/searchKeyword', methods = ['GET', 'POST', 'DELETE'])
def hello_world():
    response = api.GetSearch(term=request.args.get('searchTerm'), count=10,return_json=True);
    return jsonify(response);
