'use strict';
//this detects if there is a face present
const request = require('request');
//subscription key
const subscriptionKey = '9fb27bc0632449fbacb669460d1b0fc1';
//Location for REST call
const uriBase = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect';
var imageUrl = 'https://raw.githubusercontent.com/hannabeasiam/soflonucleus/master/images/team/Tangy.jpg';

// Request parameters.
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};
//What to pass to the api
const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};
//Get Results
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});