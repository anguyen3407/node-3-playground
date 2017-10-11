# Node 3

## What is middleware?

Middleware is code that sits in between two other pieces of code. It is able to monitor and possibly modify the communication in both directions. 

## When do we use app.use() vs inline middleware?

App.use() runs the middleware for every single request to our server which is sometimes desirable like with bodyParser. We use inline middleware when we want the middleware to run for just a single/endpoint.

## What is the 'next' parameter in a middleware function? What makes it useful, say, compared to if you were expect to use a return statement?

The next parameter is called only when our middleware is done. It allows us to do asyn operations, like looking up data in our database, or perhaps making a request to another server. 

## What's an HTTP session?

An on-going conversation between client and server.

