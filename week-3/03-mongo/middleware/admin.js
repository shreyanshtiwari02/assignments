const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  // simply get admin from the mongodb and check if both the fields match or not

  // { username: 'admin', password: 'pass' }
  const { username, password } = req.headers;
  async function verify(){
    try{
    const user = await Admin.findOne({ username });

        if (!user) {
          return res.status(401).json({ message: 'Authentication failed. User not found.' });
        }

        // Compare passwords
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
        }

        // Authentication successful
        return res.status(200).json({ message: 'Authentication successful' });
      } catch (error) {
        console.error('Error authenticating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  
  verify()
  
}

module.exports = adminMiddleware;
