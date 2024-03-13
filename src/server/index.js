const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js')

const app = express();

// body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cross-origin
const cors = require('cors');
const { stringify } = require('querystring');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

var textapi = {
    application_key: process.env.API_KEY,
};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});


let input_data;

let analysis_data;

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `Write a short summary based on the ${input_data.type} given also analyse the sentiment. the ${input_data.type} is : ${input_data.text}`;
  // console.log(prompt);
  const result = await model.generateContent(prompt);
  const response = await result.response;
  analysis_data = response.text();
  console.log(analysis_data);
}
  
app.post('/send_sample', (req, res) => {
    const data = req.body;
    // console.log(data);
    input_data = data;
});
  
app.get('/get_analysis', function (req, res) {
  run().then(() => {
    res.send(analysis_data);
  });
});