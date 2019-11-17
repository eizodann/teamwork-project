/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyparser from 'body-parser';
import ErrorHandler from './Utils/feedbackHandler';
// import EmployeeRoute from './routes/employeeRoute';
// import GifRoute from './routes/gifRoute';
// import ArticleRoute from './routes/articleRoute';
// import CommentRoute from './routes/commentRoute';
import helper from './Utils/helper';

const app = express();

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  }),
);

// added by me for testing
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});
// app.use('/api/v1', EmployeeRoute);
// app.use('/api/v1', GifRoute);
// app.use('/api/v1', ArticleRoute);
// app.use('/api/v1', CommentRoute);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-type');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE',
  );
  next();
});

app.use(ErrorHandler.error);
app.set('port', helper.PORT);
app.listen(helper.PORT, () => {
  console.log('app is running on port ', helper.PORT);
});

export default app;
