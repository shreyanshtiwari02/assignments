const { User } = require("../db");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
      async function verify(){
        try{
        const user = await User.findOne({ username });

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
}

module.exports = userMiddleware;