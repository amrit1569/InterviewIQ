# InterviewIQ 🧠🎙️

**InterviewIQ** is an AI-powered smart interview platform designed to help users practice role-based mock interviews with smart follow-ups, adaptive difficulty, and real-time performance evaluation.

## 🚀 Features

- **🤖 AI Answer Evaluation:** Scores communication, technical accuracy, and confidence based on your answers.
- **📄 Resume-Based Interview:** Generates project-specific questions based on the uploaded resume using OpenRouter AI.
- **📊 History & Analytics:** Tracks progress with performance graphs and topic analysis (using Recharts).
- **📝 Downloadable PDF Reports:** Generates detailed reports highlighting strengths, weaknesses, and improvement insights (using jsPDF).
- **🧑‍💼 Multiple Interview Modes:** Supports both HR and Technical interview modes.
- **🗣️ Smart Voice Interview:** Dynamic follow-up questions based on real-time voice recognition and Text-to-Speech capabilities.
- **⏳ Timer-Based Simulation:** Replicates real interview pressure with strict time tracking.
- **💳 Credits System:** Unlock premium interview sessions using Razorpay integration.

---

## 🛠️ Tech Stack

**Frontend (Client):**
- React 19 + Vite
- Tailwind CSS
- Redux Toolkit (State Management)
- Firebase (Authentication)
- Recharts (Data Visualization)
- jsPDF & jsPDF-AutoTable (PDF Generation)
- Framer Motion (Animations)
- React Router DOM (Routing)
- React Circular Progressbar

**Backend (Server):**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT) & Cookie Parser (Authentication)
- Razorpay (Payment Gateway)
- OpenRouter API (AI Question Generation & Evaluation)
- Multer & PDF.js (Resume Parsing)
- CORS & Dotenv

---

## 🏗️ Project Structure

```bash
interviewIQ/
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components (Navbar, Timer, etc.)
│   │   ├── pages/       # Application pages (Home, InterviewPage, Auth, etc.)
│   │   ├── redux/       # Redux slices and store setup
│   │   ├── utils/       # Helper functions
│   │   └── assets/      # Images, videos, and icons
│   ├── package.json
│   └── vite.config.js
│
├── server/              # Express Backend
│   ├── config/          # Database configuration
│   ├── controllers/     # Route logic (auth, user, interview, payment)
│   ├── models/          # Mongoose database schemas
│   ├── routes/          # Express API routes
│   ├── middlewares/     # Custom middlewares
│   ├── package.json
│   └── index.js         # Entry point of the server
└── README.md
```

---

## ⚙️ Local Setup & Installation

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd interviewIQ
```

### 2. Setup the Server (Backend)
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following variables:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Setup the Client (Frontend)
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory and add the following variables:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Access the App
Open your browser and navigate to `http://localhost:5173` to see the application in action.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License
This project is licensed under the ISC License.
