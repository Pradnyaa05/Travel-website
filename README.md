# Airbnb-Inspired Full-Stack Web Application

A feature-rich full-stack web platform inspired by Airbnb, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables users to explore travel listings, add new properties, write and view reviews, and manage bookings. It includes robust features such as user authentication, secure data handling, and a highly interactive user experience.

## 🛠️ Technologies & Packages Used

### Backend:
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building the backend API.
- **MongoDB**: NoSQL database for storing user data and travel listings.
- **Mongoose**: Object modeling tool for MongoDB.
  
### Frontend:
- **EJS**: Template engine for rendering dynamic HTML pages.

### Authentication & Security:
- **Passport.js**: Authentication middleware.
- **Passport Local**: Local authentication strategy.
- **Passport Local Mongoose**: Mongoose-specific authentication middleware.
- **Express Session**: For managing user sessions.
- **Connect Mongo**: Session storage using MongoDB.
- **Connect Flash**: Flash messaging for user notifications.
- **Cookie Parser**: Parsing cookies for session management.
- **Joi**: Data validation.
- **Dotenv**: Environment variable management.
- **Password Hashing and Encryption**: To secure user passwords.

### File & Media Handling:
- **Multer**: Middleware for file uploads.
- **Cloudinary**: For storing uploaded images.

### Maps & Visualization:
- **Mapbox**: For interactive map features.

### Deployment:
- **Render**: For UI deployment.
- **MongoDB Atlas**: Database hosting.

### Other:
- **Session Handling**: Manage user login sessions with cookies and MongoDB storage.

## 🌟 Key Features

- **User Authentication**:
  - User registration, login, and logout functionality.
  - User profile section for account management.
  - Password security using hashing and encryption.
  
- **CRUD Operations**:
  - Add, edit, and delete travel listings.
  
- **Review System**:
  - Add and delete user reviews for listings.
  
- **Account Management**:
  - Update user profile information and change passwords.
  
- **Interactive Maps**:
  - Utilize **Mapbox** for location-based visualizations on listings.

- **Image Management**:
  - Upload and manage images with **Cloudinary**.

- **Data Validation**:
  - Form data validation using **Joi** to ensure data integrity.

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites:
- Ensure you have **Node.js** and **MongoDB** installed.
- Obtain API keys for **Mapbox** and **Cloudinary**.
  
### Installation:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Pradnyaa05/Travel-website
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Travel-website
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your **MongoDB**, **Mapbox**, and **Cloudinary** API keys and other sensitive data in the following format:
     ```
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_KEY=your_cloudinary_key
     CLOUDINARY_SECRET=your_cloudinary_secret
     MAPBOX_TOKEN=your_mapbox_token
     SECRET=your_session_secret
     ```

5. **Seed the Database** (optional):
   - Run the seeder file if you have one for adding initial data to your MongoDB database:
     ```bash
     node seeds/index.js
     ```

6. **Start the Application**:
   ```bash
   node app.js
   ```

7. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---
