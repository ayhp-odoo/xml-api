const express = require('express');

const router = express.Router();
let data = require('./random_data.json')

const myData = []

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running',
  });
});

router.get('/json', (req,res) => {
  //const x = Math.floor(Math.random() * 5)
  const i = Math.floor(Math.random() * 10)
  //if(x == 3 || x ==5) {
    //res.status(500).json({
      //"message": "SOmething went wrong please retry"
    //})
    //return
  //}
  res.status(200).json({
    "contact": data.find(obj => obj.id == i)
  })
})

router.get('/json-all',(req,res) => {
  res.status(200).json({
   data
  })
})

router.post('/json',(req,res)=>{
  if(!req.headers['content-type'] || req.headers['content-type'] != 'application/json') {
  	res.status(406).json({
	  "message": "Wrong or missing Content-Type"
	})
	return
  }
  const formatUser = {
    "username": req.body
  }
  myData.push(formatUser)
  
  res.status(201).json({
    "message": "Data recived",
    "data": req.body
  })
  
})

router.put('/json/:id', (req,res) =>{
  const searchedUser = data.find(user => user.id == req.params.id)
  if (!searchedUser) {
    res.status(404).json({
      "message": `There's no user with that id`
    })
    return 
  }
  const { name, email, phone } = req.body.contact
  data[searchedUser].name = name
  data[searchedUser].email = email
  data[searchedUser].phone = phone
  res.status(201).json({
    "message": "The user has been updated",
    "Updated user": searchedUser
  })
})

router.delete('/json',(req,res) => {
  data = []
  res.status(200).json({
    "message": "All users have been deleted"
  })
})

router.delete('/json/:id', (req,res) => {
  const searchedUserId = data.findIndex(user => user.id == req.params.id)
  if(searchedUserId == -1) {
   res.status(404).json({
    "message": "That user has been deleted already or does not exists"
   })
   return
  }
  data.splice(searchedUserId, 1)
  res.status(200).json({
   "message": "User has been deleted"
  })
})

module.exports = router;
