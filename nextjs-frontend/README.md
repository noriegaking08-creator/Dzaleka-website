# Dzaleka Community Day Secondary School (CDSS) Website - Next.js Version

A modern Next.js web application for Dzaleka Community Day Secondary School in Malawi, deployable on Vercel.

## 🏫 About the Project

Dzaleka CDSS provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa District, Malawi. This website serves as an official online presence to showcase the school's achievements, supporters, and activities.

### Features
- Responsive React frontend with smooth animations powered by Framer Motion
- Gallery with automatic slideshow and swipe gestures
- Interactive contact form
- Information pages: About, Achievements, Supporters, and more
- Dark/light mode toggle
- Mobile-friendly design
- Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React with TypeScript
- **Styling**: CSS with custom properties, Bootstrap
- **Animations**: Framer Motion
- **API**: Next.js API routes with JSON responses
- **Deployment**: Vercel

## 🚀 Development

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. **Open Your Browser**:
Visit [http://localhost:3000](http://localhost:3000) to see the application

## 🌐 Vercel Deployment

This application is designed to be deployed directly to Vercel:

### Deploy with Vercel CLI

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Deploy to Vercel**:
```bash
vercel --cwd .
```

### Deploy from GitHub

1. **Go to [vercel.com](https://vercel.com) and sign in**
2. **Click "New Project"**
3. **Choose your GitHub repository**
4. **Set Root Directory to**: `nextjs-frontend` (if the repo contains the full project)
5. **Click "Deploy"**

### Vercel Deployment Settings

- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: (auto-detected)
- **Install Command**: `npm install` (auto-detected)

## 🌐 API Endpoints

| Method | Endpoint           | Description                           |
|--------|--------------------|---------------------------------------|
| GET    | `/api/about`       | Get information about the school      |
| GET    | `/api/achievements`| Get list of school achievements       |
| GET    | `/api/supporters`  | Get list of school supporters         |
| GET    | `/api/gallery`     | Get gallery images with URLs          |
| POST   | `/api/contact`     | Submit contact form data              |

## 🎨 Animations

The website features rich animations using Framer Motion:
- Page entrance animations
- Interactive hover effects
- Smooth transitions between slides in the gallery
- Card hover animations
- Staggered animations for lists

## 📁 Directory Structure

```
nextjs-frontend/
├── components/     # Reusable React components
├── context/        # React context providers
├── pages/          # Next.js pages and API routes
├── public/         # Static assets
│   └── static/     # Images and other static files
├── utils/          # Utility functions
├── styles.css      # Global styles
└── package.json    # Dependencies and scripts
```

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

- Contact form submissions are logged to the console for demo purposes
- For production deployment, implement proper email integration or database storage
- The application follows accessibility guidelines and responsive design principles