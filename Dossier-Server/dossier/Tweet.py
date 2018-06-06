from flask import Flask
import twitter
from flask_cors import CORS
from flask import jsonify
import json
from flask import request

api = twitter.Api(consumer_key="26OEaP2P81tb9nxbttp1FPRwi",
                  consumer_secret="4Cto7USB9jjoMw9oLiMQm1oLusd2ZsqTzurBnMUooEsNXfUMrh",
                  access_token_key="473043430-tT6GX1Wt3WgLfpn5XCiIloLSDiZCFzZw6inkkVCn",
                  access_token_secret="5O6kGkLI1rf4TYlvH3npeu2TOWNyLa7wbCYYkncvFfpFx")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/searchKeyword', methods = ['GET', 'POST', 'DELETE'])
def hello_world():
    response = api.GetSearch(term=request.args.get('searchTerm'), count=20,return_json=True);
    return jsonify(response);
