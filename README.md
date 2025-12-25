# WeddingNama React Website

A modern React.js replica of the WeddingNama website, built with Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and elegant design matching the original WeddingNama website
- **Hero Slider**: Auto-playing image slider with navigation controls
- **Portfolio Grid**: Beautiful grid layout showcasing photography work
- **Multiple Pages**: Home, About, Portfolio, Contact, Couple Stories, and Blog
- **Smooth Navigation**: React Router for seamless page transitions
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Vite
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/weddingnama
   PORT=5000
   NODE_ENV=development
   ```
   - For MongoDB Atlas, use: `mongodb+srv://username:password@cluster.mongodb.net/weddingnama`

3. Start the backend server:
```bash
npm run server
```
   Or with auto-reload (requires nodemon):
```bash
npm run dev:server
```

4. Start the frontend development server (in a new terminal):
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory with the following:

```
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/weddingnama

# Server Port
PORT=5000

# Environment
NODE_ENV=development
```

For production, use MongoDB Atlas or your production MongoDB instance.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── backend/
│   ├── models/
│   │   └── Contact.js      # MongoDB schema for contact submissions
│   └── routes/
│       └── contactRoutes.js # API routes for contact form
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── HeroSlider.jsx      # Hero image slider
│   │   ├── Footer.jsx          # Footer component
│   │   └── sections/           # Section components
│   │       ├── WelcomeSection.jsx
│   │       ├── PhilosophySection.jsx
│   │       ├── PortfolioGrid.jsx
│   │       ├── QuoteSection.jsx
│   │       └── InstagramSection.jsx
│   ├── pages/                  # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx         # Contact form with backend integration
│   │   ├── CoupleStories.jsx
│   │   └── Blog.jsx
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css              # Global styles and Tailwind imports
├── server.js                   # Express server entry point
├── .env                        # Environment variables (create this)
└── package.json
```

## Pages

- **Home**: Hero slider, welcome section, philosophy, portfolio grid, quote, and Instagram feed
- **About**: Information about WeddingNama
- **Portfolio**: Gallery of photography work
- **Contact**: Contact form with backend integration (saves submissions to MongoDB)
- **Couple Stories**: Showcase of couple stories
- **Blog**: Blog posts and articles

## Backend API

### Contact Form Endpoints

- `POST /api/contact` - Submit a contact form
  - Body: `{ name, email, phone, sessionType, where, message, story, hearAbout, recommendedBy }`
  - Returns: Success message and submission details

- `GET /api/contact` - Get all contact submissions (with pagination)
  - Query params: `page`, `limit`, `sort`
  - Returns: List of submissions with pagination info

- `GET /api/contact/:id` - Get a specific contact submission
  - Returns: Single submission details

- `DELETE /api/contact/:id` - Delete a contact submission
  - Returns: Success message

- `GET /api/health` - Health check endpoint
  - Returns: Server status

## Customization

You can customize the website by:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Fonts**: Update font imports in `index.html` and `tailwind.config.js`
3. **Content**: Modify the content in each component file
4. **Images**: Replace placeholder images with your own

## License

This project is for educational purposes.

