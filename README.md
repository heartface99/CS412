# CS412 PS3

To run program locally, run `node app.js`

To run the get request simply type `http://localhost:3000/ps3` in your browser. It should show PS3 hello world!

To run post request you can use postman or curl: 
`curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "text=hello" http://localhost:3000/ps3`
This should return HTML with original string is hello and string length is 5
