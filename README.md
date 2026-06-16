# 🍳 SMART CHEF

### *Your Personal AI-Powered Culinary Assistant*

Transform ingredients into delicious meals with the power of Artificial Intelligence.

---

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" />
</p>

<p align="center">
  <strong>Upload • Detect • Generate • Cook</strong>
</p>

---

## 🌟 Overview

**Smart Chef** is an AI-powered recipe generation platform that helps users create delicious recipes from ingredients they already have.

Simply upload an image of ingredients or food items, and Smart Chef uses **Google Gemini AI** to identify ingredients, generate personalized recipes, provide nutritional insights, and recommend meal ideas tailored to dietary preferences.

---

## ✨ Key Features

### 🤖 AI Ingredient Recognition

* Upload food or ingredient images
* Automatic ingredient detection using AI
* Manual ingredient editing and management

### 🍽️ Smart Recipe Generation

* Generate complete recipes instantly
* Personalized cooking instructions
* Preparation and cooking time estimation
* Serving size recommendations

### 🥗 Dietary Preferences

Supports:

* Vegan
* Vegetarian
* Keto
* Gluten-Free
* Dairy-Free
* Low Carb
* High Protein
* Paleo

### 💡 AI Recipe Suggestions

* Alternative meal recommendations
* Ingredient-based recipe discovery
* Multiple cooking options

### ❤️ Save Favorite Recipes

* Store recipes permanently
* View detailed recipe information
* Manage saved recipes effortlessly

### 📊 Nutrition Insights

* Calories
* Protein
* Carbohydrates
* Fat
* Fiber

---

## 🖼️ Application Flow

```text
Upload Image
      ↓
AI Detects Ingredients
      ↓
Select Dietary Preference
      ↓
Generate Recipe
      ↓
View Instructions & Nutrition
      ↓
Save Recipe
```

---

## 🏗️ Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Vite
* Context API
* Modern CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Artificial Intelligence

* Google Gemini AI

---

## 📂 Project Structure

```bash
ai-recipe-generator/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/shubha229/ai-recipe-generator.git

cd ai-recipe-generator
```

### Install Frontend Dependencies

```bash
cd client

npm install
```

### Install Backend Dependencies

```bash
cd ../server

npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Run Locally

### Start Backend Server

```bash
cd server

npm start
```

### Start Frontend Application

```bash
cd client

npm run dev
```

---

## 🌐 Local Development

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5000 |

---

## 📸 User Workflow

1. Upload an ingredient image
2. AI identifies ingredients automatically
3. Modify ingredients if required
4. Choose dietary preferences
5. Generate a personalized recipe
6. View cooking instructions and nutrition details
7. Save favorite recipes

---

## 🚀 Future Enhancements

* 🎙️ Voice-Based Cooking Assistant
* 🛒 Smart Grocery List Generator
* 📅 Weekly Meal Planning
* 👤 User Authentication & Profiles
* 🌍 Multi-Language Support
* ⭐ Community Ratings & Reviews
* 🌙 Dark / Light Mode Toggle
* 📱 Progressive Web App (PWA)
* 🔗 Recipe Sharing

---

## 🔒 Security

* Environment variables protected via `.env`
* Sensitive credentials excluded using `.gitignore`
* API keys stored securely on the server
* MongoDB credentials never exposed publicly

---

## 🤝 Contributing

Contributions are always welcome.

```bash
# Create a feature branch
git checkout -b feature/new-feature

# Commit changes
git commit -m "Add awesome feature"

# Push changes
git push origin feature/new-feature
```

Then open a Pull Request.

---

## 👨‍💻 Author

### Shubha

Built with ❤️ using React, Node.js, MongoDB, and Google Gemini AI.

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

<p align="center">
  <strong>🍳 SMART CHEF</strong><br>
  <em>From Ingredients to Inspiration</em>
</p>
