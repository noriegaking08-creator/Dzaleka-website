# Dzaleka Community Day Secondary School (CDSS) Website

A full-stack web application built with Flask (backend) and React (frontend) for Dzaleka Community Day Secondary School in Malawi.

## 🏫 About the Project

Dzaleka CDSS provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa District, Malawi. This website serves as an official online presence to showcase the school's achievements, supporters, and activities.

### Features
- Responsive React frontend with smooth animations
- Gallery with automatic slideshow
- Interactive contact form
- Information pages: About, Achievements, Supporters, and more
- Dark/light mode toggle
- Mobile-friendly design

## 🛠️ Tech Stack

- **Backend**: Flask Python framework
- **Frontend**: React with TypeScript
- **Styling**: CSS with custom properties, Bootstrap
- **Animations**: Framer Motion
- **API**: RESTful endpoints with JSON responses

## 📋 Prerequisites

- Python 3.8+
- Node.js (LTS version recommended)
- npm package manager
- Git (optional but recommended)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd dzaleka-cdss-website
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### 4. Add Images
Place the four required images in `backend/static/images/` folder as:
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`
- `image4.jpg`

## 🚀 Running the Application

### Development Mode

#### Option 1: Separate Servers (Recommended for Development)

1. **Start Backend Server** (in `backend/` directory):
```bash
# Make sure your virtual environment is activated
python app.py
# Backend will run on http://localhost:5000
```

2. **Start Frontend Server** (in new terminal, in `frontend/` directory):
```bash
npm start
# Frontend will run on http://localhost:3000 and connect to backend at http://localhost:5000
```

#### Option 2: Production Build

1. **Build Frontend**:
```bash
cd frontend
npm run build
```

2. **Serve from Backend**:
```bash
# Copy build output to backend
# On Windows:
xcopy build ..\backend\static\frontend\ /E /I
# On macOS/Linux:
cp -r build/* ../backend/static/frontend/
```

3. **Run Backend**:
```bash
cd backend
python app.py
# Visit http://localhost:5000 to see the application
```

## 🌐 Vercel Deployment (Next.js Version)

This project also includes a Next.js version that can be deployed directly to Vercel. The Next.js version combines frontend and backend functionality into a single application that works perfectly on Vercel's platform.

### Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in**
2. **Click "New Project"**
3. **Choose your repository:** `noriegaking08-creator/Dzaleka-website`
4. **IMPORTANT: Set Root Directory to** `nextjs-frontend`
5. **Click "Deploy"**

### Vercel Deployment Settings

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `nextjs-frontend`
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### Alternative: Using vercel.json for subdirectory deployment

If you're deploying the entire repository but want to serve the Next.js app from the subdirectory, use the root-level vercel.json file. This approach tells Vercel to build and serve the Next.js application from the `nextjs-frontend` directory.

### Next.js Version Features

The Next.js version includes all functionality of the original Flask/React app:
- All frontend components with animations and theme switching
- All API endpoints converted to Next.js API routes:
  - `/api/about` - School information
  - `/api/achievements` - School achievements
  - `/api/supporters` - School supporters
  - `/api/gallery` - Gallery with image URLs
  - `/api/contact` - Contact form with file storage
- Same styling and responsive design
- Same TypeScript type safety

## 🌐 API Endpoints

| Method | Endpoint           | Description                           |
|--------|--------------------|---------------------------------------|
| GET    | `/api/about`       | Get information about the school      |
| GET    | `/api/achievements`| Get list of school achievements       |
| GET    | `/api/supporters`  | Get list of school supporters         |
| GET    | `/api/gallery`     | Get gallery images with URLs          |
| POST   | `/api/contact`     | Submit contact form data              |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

- **Developer**: Ndizeye Noriega
- **Email**: ndizeyenoriega@gmail.com
- **Phone**: +265 995 208 178

### Supporting Organizations

- UNHCR Malawi (Camp & education support)
- European Union (EU) (Funding)
- Jesuit Refugee Service (JRS) (Education partner)
- Malawian Government (Ministry of Education)

## ⚠️ Notes

- Contact form submissions are stored in `backend/contacts.json` for demo purposes
- For production deployment, implement proper email integration or database storage
- The application follows accessibility guidelines and responsive design principles