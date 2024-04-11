const {Schema,mongoose} = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shreyanshtiwari:aF3AMWxPao67lBx1@cluster0.81twfdh.mongodb.net/week4",
  )
  .then((e) => console.log("MongoDB Connected"));

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      id: {
        type: String,
        required: true,
        unique: true
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      price: {
        type: int,
        required: true,
      },
      imageLink: {
        type: String,
        required: false,
      },
      published:{
        type: Boolean;
        required: false,
        default: true
      }
    },
  ],
  
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
      type: String,
      required: true,
    unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    purchasedCourses: [
      {
        id: {
          type: String,
          required: true,
          unique: true
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: false,
        },
        price: {
          type: Number,
          required: true,
        },
        imageLink: {
          type: String,
          required: false,
        },
        published:{
          type: Boolean;
          required: false,
          default: true
        }
      },
    ],
  
  });

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
    required: false,
  },
  published:{
    type: Boolean;
    required: false,
    default: true
  }
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
