const express = require('express');

const router = express.Router();


const app = express();
router.use((req, res, next)=>{
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);

  req.res = res;
  res.req = req;
  next();
})

router.get('/posts', (req, res)=>{
   console.log(`All the posts`);
   res.json({message: 'All the posts'});
})

module.exports = {
  path: '/api',
  handler: router
}
