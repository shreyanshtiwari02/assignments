// POST /users/signup Description: Creates a new user account. Input: { username: 'user', password: 'pass' } Output: { message: 'User created successfully' }
// GET /users/courses Description: Lists all the courses. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
// POST /users/courses/:courseId Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { message: 'Course purchased successfully' }
// GET /users/purchasedCourses Description: Lists all the courses purchased by the user. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic

//My notes
// so basically list out all the courses that anyone has ever produced therefore i need to make a course collecction as well and simply fetch data from there

  
  
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
  // simply add the course in the courses array of the user in mongodb
  
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
  // simply get all the courses in the courses array of the user 
});

module.exports = router

//End notes:   create two user schema one solely for courses
//             another solely for user ans admin eith each having courses array
//              which is an array of course represented in JSON



