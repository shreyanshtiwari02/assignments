
// POST /admin/signup Description: Creates a new admin account. Input Body: { username: 'admin', password: 'pass' } Output: { message: 'Admin created successfully' }
// POST /admin/courses Description: Creates a new course. Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' } Output: { message: 'Course created successfully', courseId: "new course id" }
// GET /admin/courses Description: Returns all the courses. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
  const createdUser = { username: 'admin', password: 'pass' }
  // save to mongodb now
  // .... code to save in mongodb
  
  //send a response
  res.json({ message: 'Admin created successfully' }).send();
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
  const courseHeaders =  { username: 'username', password: 'password' };  
  //using the courseHeaders I know the user whose course i need to create

  //this is course body so like courses : [course]
  const courseBody =  { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' } ;
  //save it in mongodb

  //respond
  const output =  { message: 'Course created successfully', courseId: "new course id" }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    //here we need to fetch the courses array from mongodb of the user
    //passed in headers

    const comments = await Users.find({});
    console.log(comments);
    res.json(comments);
    
  
});

module.exports = router;