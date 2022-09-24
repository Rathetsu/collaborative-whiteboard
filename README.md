# Collaborative Whiteboard

As the name suggests, this project is an online collaborative whiteboard that allows many users to draw simultaneously on a large virtual board.
The board is updated in real time for all connected users, and its state is always persisted. It can be used for many different purposes, including art, entertainment, design, teaching.

A demonstration will be available soon!

<!-- ## Screenshots -->

### Running the code

You can run the code with [node.js](https://nodejs.org/) directly.

First, download the sources:
```
git clone https://github.com/Rathetsu/collaborative-whiteboard.git
cd collaborative-whiteboard
```

Then [install node.js](https://nodejs.org/en/download/) (v12.0 or superior), then install dependencies:

```
npm i
```

Finally, you can start the server:
```
PORT=5001 npm start
```

This will run the whiteboard directly on your machine, on port 5001, without any isolation from the other services.
