# Interactive Web OS 🖥️

A browser-based operating system simulation built with React, Vite, and Node.js/Express REST API.

## 🚀 Features

- **Frontend**: React + TypeScript with Vite
- **Backend**: Express.js REST API
- **Deployment**: GitHub Pages for frontend, REST API hosting ready
- **Responsive Design**: Works on desktop and mobile

## 📁 Project Structure

```
interactive-web-os/
├── frontend/          # React + Vite frontend app
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
├── backend/           # Express.js REST API server
│   ├── src/
│   │   └── index.js
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment
├── package.json       # Root monorepo config
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server (frontend + backend)
npm run dev

# Or run frontend only
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
# Install backend dependencies
cd backend
npm install

# Start backend development server
npm run dev
```

The API will be available at `http://localhost:5000`

### Build for Production

```bash
# Build both frontend and backend
npm run build

# Or build individually
npm run build:frontend
npm run build:backend
```

## 🌐 GitHub Pages Deployment

This project is configured for automatic GitHub Pages deployment via GitHub Actions.

### Setup Steps:

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"
   - Branch: `main`

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Monitor deployment**
   - Go to Actions tab to see deployment progress
   - Frontend will be deployed to: `https://[username].github.io/interactive-web-os/`

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```
Response:
```json
{
  "status": "ok",
  "message": "Web OS API is running"
}
```

### System Information
```
GET /api/system/info
```
Response:
```json
{
  "os": "Web OS",
  "version": "1.0.0",
  "timestamp": "2024-05-11T10:30:00.000Z"
}
```

### Execute Command
```
POST /api/system/command
Content-Type: application/json

{
  "command": "echo hello"
}
```

Response:
```json
{
  "command": "echo hello",
  "output": "Executed: echo hello",
  "status": "success"
}
```

## 📝 Development

### Frontend Development
- Edit files in `frontend/src/`
- Changes auto-reload in browser

### Backend Development
- Edit files in `backend/src/`
- Server restarts automatically with `npm run dev`

### API Proxy
- Frontend development server proxies API calls to backend
- Requests to `/api/*` are forwarded to `http://localhost:5000`

## 🚢 Deployment Options for Backend

### Option 1: Railway.app (Recommended)
```bash
npm install -g railway
railway init
railway up
```

### Option 2: Render.com
1. Create new Web Service
2. Connect GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `node src/index.js`

### Option 3: Heroku
```bash
heroku create app-name
git push heroku main
```

### Option 4: Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY backend/ .
RUN npm install
CMD ["npm", "start"]
```

## 🔧 Environment Variables

Create `.env` files for development:

**frontend/.env.local**
```
VITE_API_URL=http://localhost:5000
```

**backend/.env**
```
PORT=5000
NODE_ENV=development
```

## 📦 Dependencies

### Frontend
- react ^18.2.0
- react-dom ^18.2.0
- vite ^5.0.0
- typescript ^5.3.0

### Backend
- express ^4.18.2
- cors ^2.8.5

## 📄 License

MIT

## 🤝 Contributing

Feel free to fork, create branches, and submit pull requests!

---

**Ready to deploy?** Push to `main` branch and GitHub Actions will handle the rest! 🚀