# Task Manager

A modern, responsive task management application built with React and TypeScript. Features a beautiful dark theme with animated gradients and smooth hover effects.

---

## ✨ Features

- **Task Management:** Add, complete, and delete tasks  
- **Priority Levels:** Set Low, Medium, or High priority for each task  
- **Smart Filtering:** Filter tasks by All, Active, or Completed status  
- **Input Validation:** Prevents empty tasks and ensures minimum length  
- **Beautiful UI:** Dark theme with animated gradient header and hover effects  
- **Responsive Design:** Works perfectly on desktop, tablet, and mobile devices  
- **Real-time Updates:** Live task counter and progress tracking  

---

## 🎨 Design Highlights

- Animated rainbow gradient header  
- Smooth hover animations and transitions  
- Color-coded priority system  
- ✅ Green indicators for completed tasks  
- ⚠️ Yellow indicators for pending tasks  
- Professional dark theme with purple accents  

---

## 🛠️ Technologies Used

- **React 18** – Modern React with hooks  
- **TypeScript** – Type-safe development  
- **CSS3** – Custom styling with animations  
- **Create React App** – Project setup and build tools  

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)  
- npm or yarn package manager  

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Kuraz-frontend.git
cd Kuraz-frontend

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📱 Usage

- **Add Tasks:** Enter a task title and select priority level, then click "Add Task"  
- **Complete Tasks:** Click the circle button next to any task to mark it as completed  
- **Filter Tasks:** Use the filter buttons (All, Active, Completed) to view specific task types  
- **Delete Tasks:** Click the × button to remove any task  
- **Change Priority:** Hover over the priority badge to change task priority  

---

## 🎯 Project Structure

```
task-manager/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Styling and animations
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

---

## 🌟 Key Components

- **Task Interface:** TypeScript interface for type safety  
- **State Management:** React hooks for managing tasks and UI state  
- **Filtering Logic:** Dynamic task filtering based on completion status  
- **Validation System:** Input validation with error handling  
- **Animation System:** CSS animations for smooth user interactions  

---

## 🎨 Color Scheme

| Purpose     | Color         | Hex       |
|-------------|---------------|-----------|
| Background  | Deep black    | `#121212` |
| Cards       | Dark gray     | `#1e1e1e` |
| Text        | Light gray    | `#f8f8f2` |
| Accent      | Purple        | `#bd93f9` |
| Success     | Green         | `#50fa7b` |
| Warning     | Yellow        | `#feca57` |
| Danger      | Red           | `#ff5555` |

---

## 📈 Future Enhancements

- [ ] Local storage persistence  
- [ ] Task search functionality  
- [ ] Due dates with calendar picker  
- [ ] Task categories/tags  
- [ ] Dark/light theme toggle  
- [ ] Drag and drop reordering  
- [ ] Task editing capabilities  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch  
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch  
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**  
GitHub: [@yourusername](https://github.com/yourusername)  
LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-linkedin)

---

## 🙏 Acknowledgments

- Built as part of frontend development learning  
- Inspired by modern task management applications  
- Uses React best practices and TypeScript for type safety  

⭐️ **Star this repository if you found it helpful!**

---

## 📋 Additional Tips

### Before pushing, make sure you have:

1. ✅ Replaced placeholders (`yourusername`, `Your Name`, etc.)  
2. ✅ Added your actual contact details  
3. ✅ Tested the app  
4. ✅ Cleaned up code (removed `console.log`s, etc.)

---

### Optional: Add a `.gitignore` file

```gitignore
# Dependencies
node_modules/

# Production build
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```
