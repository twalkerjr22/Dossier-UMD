from flask import Flask
import twitter
from flask_cors import CORS
from flask import jsonify
import json
from flask import request
from flask_dynamo import Dynamo
from flask_cors import CORS, cross_origin
import os

api = twitter.Api(consumer_key="26OEaP2P81tb9nxbttp1FPRwi",
                  consumer_secret="4Cto7USB9jjoMw9oLiMQm1oLusd2ZsqTzurBnMUooEsNXfUMrh",
                  access_token_key="473043430-tT6GX1Wt3WgLfpn5XCiIloLSDiZCFzZw6inkkVCn",
                  access_token_secret="5O6kGkLI1rf4TYlvH3npeu2TOWNyLa7wbCYYkncvFfpFx")

from boto3.dynamodb.conditions import Key, Attr

os.environ["AWS_ACCESS_KEY_ID"] = "AKIAI2ESINUVQJEAIR6Q";
os.environ["AWS_SECRET_ACCESS_KEY"] = "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";


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
dynamo = Dynamo(app)

with app.app_context():
    dynamo.create_all()

@app.route('/searchKeyword', methods = ['GET', 'POST', 'DELETE'])
def hello_world():
    response = api.GetSearch(term=request.args.get('searchTerm'), count=10,return_json=True);
    return jsonify(response);

#API hook function that is called when we want to create a new project
#We post the new project to our dynamodb databse
@app.route('/create_project',methods = ['GET', 'POST', 'DELETE'])
def create_project():
    dynamo.tables['users'].put_item(TableName='Dossier',
    		Item={ 'userId': str(request.json['name']), 'projectId': str(request.json['projectId']),'Organization': str(request.json['Organization']),
        	'Keywords': str(request.json['Keywords']),
        	'created-date': '5-26-2018'});
    return 'done';

@app.route('/get_projects',methods = ['GET', 'POST', 'DELETE'])
def get_projects():
        response = dynamo.tables['Dossier'].query(KeyConditionExpression=Key('userId').eq('twalke1000'))
        print(response);

        return jsonify(response);
