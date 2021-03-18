// import dependencies and initialize express
const express = require('express');
const path = require('path');
const errorHandler = require('./handlers/error-handler');

const healthRoutes = require('./routes/health-route');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// routes and api calls
app.use('/health', healthRoutes);


// default path to serve up index.html (single page application)
app.get('/', (req, res, next) => {
  res.json({
    Endpoints: {
      '/': { GET: 'Information about app endpoints' },
      '/tone': {
        POST: {
          description: 'Get tone of text input',
          body: 'content: String',
        },
      },
    },
  });
});


// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available on Port ${port}`);
});

// error handler for unmatched routes or api calls
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;

