'use strict';
const { isPrime, randomArray, squareArea } = require('./utils/math_functions');

module.exports.landingPage = (event, context, callback) => {
  let dynamicHtml = '<p>Hey! Please provide a number as a query parameter (e.g ?number=12)</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.number) {
    dynamicHtml = `<p>The number you chose is ${event.queryStringParameters.number}! If you chose a negative number, we'll be using the absolute value.</p>
    <p>Is the number you provided a prime number? ${isPrime(event.queryStringParameters.number)}.</p>
    <p>With the number you provided as the side length, the area of a square would be: ${squareArea(event.queryStringParameters.number)} (unitless).</p>
    <p>Here is an array of length number you provided, with random numbers. [${randomArray(event.queryStringParameters.number)}]</p>`;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>Simple Number Application</h1>
      ${dynamicHtml}
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // callback is sending HTML back
  callback(null, response);
};