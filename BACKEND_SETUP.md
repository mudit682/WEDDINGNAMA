# Backend Setup Guide

This guide will help you set up the backend server for the WeddingNama website.

## Prerequisites

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** - Choose one:
   - **Local MongoDB**: [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - **MongoDB Atlas** (Cloud): [Sign up for free](https://www.mongodb.com/cloud/atlas/register)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- express
- mongoose
- cors
- dotenv

### 2. Set Up MongoDB

#### Option A: Local MongoDB

1. Install MongoDB Community Server on your machine
2. Start MongoDB service:
   - **Windows**: MongoDB should start automatically as a service
   - **macOS**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`
3. Verify MongoDB is running:
   ```bash
   mongosh
   ```
4. Use connection string: `mongodb://localhost:27017/weddingnama`

#### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is fine)
3. Create a database user:
   - Go to "Database Access" → "Add New Database User"
   - Set username and password
4. Whitelist your IP address:
   - Go to "Network Access" → "Add IP Address"
   - Add `0.0.0.0/0` for development (or your specific IP)
5. Get your connection string:
   - Go to "Clusters" → "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/weddingnama`

### 3. Configure Environment Variables

1. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

2. Add the following content to `.env`:
   ```env
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/weddingnama

   # For MongoDB Atlas (replace with your connection string)
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/weddingnama

   # Server Port
   PORT=5000

   # Environment
   NODE_ENV=development
   ```

3. Replace `MONGODB_URI` with your actual MongoDB connection string

### 4. Configure Frontend API URL

1. Create a `.env` file in the root directory (if not already created)
2. Add the backend API URL:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

   For production, update this to your production backend URL.

### 5. Start the Backend Server

```bash
npm run server
```

You should see:
```
✅ Connected to MongoDB
🚀 Server is running on port 5000
```

### 6. Start the Frontend (in a new terminal)

```bash
npm run dev
```

## Testing the Backend

### Test Health Endpoint

Open your browser or use curl:
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Test Contact Form Submission

1. Navigate to the Contact page in your frontend
2. Fill out the form and submit
3. Check the browser console for success/error messages
4. Verify data in MongoDB:
   ```bash
   mongosh
   use weddingnama
   db.contacts.find().pretty()
   ```

## API Endpoints

### POST /api/contact
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "sessionType": "Wedding",
  "where": "Mumbai, India",
  "message": "Looking for wedding photography",
  "story": "We met in college...",
  "hearAbout": "Social Media",
  "recommendedBy": "Jane Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your submission! We will get back to you soon.",
  "data": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "sessionType": "Wedding",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/contact
Get all contact submissions (with pagination).

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 10)
- `sort` (default: "-createdAt")

**Example:**
```
GET /api/contact?page=1&limit=10&sort=-createdAt
```

### GET /api/contact/:id
Get a specific contact submission by ID.

### DELETE /api/contact/:id
Delete a contact submission by ID.

## Troubleshooting

### MongoDB Connection Issues

1. **"MongoNetworkError"**: Check if MongoDB is running
   - Local: `mongosh` to test connection
   - Atlas: Check network access settings

2. **"Authentication failed"**: Verify username and password in connection string

3. **"Database not found"**: MongoDB will create the database automatically on first write

### Port Already in Use

If port 5000 is already in use:
1. Change `PORT` in `.env` file
2. Update `VITE_API_URL` in frontend `.env` to match

### CORS Errors

If you see CORS errors in the browser:
- The backend already includes CORS middleware
- Make sure the frontend is using the correct API URL
- Check that both servers are running

## Production Deployment

For production:

1. Set `NODE_ENV=production` in `.env`
2. Use MongoDB Atlas or a production MongoDB instance
3. Update `VITE_API_URL` to your production backend URL
4. Use environment variables for sensitive data
5. Consider adding authentication for admin endpoints
6. Set up proper error logging and monitoring

## Next Steps

- Add authentication for admin endpoints
- Implement email notifications for new submissions
- Add rate limiting to prevent spam
- Set up database backups
- Add input validation and sanitization
- Implement admin dashboard for viewing submissions

