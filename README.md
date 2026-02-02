# React Hooks App

![React Hooks App Screenshot](./Screenshot.png)

A simple React application built to demonstrate core **React Hooks** concepts through small, focused components.  
Clean UI. Clear logic. No unnecessary magic.

---

## ✨ Features

This app showcases three independent components, each highlighting a different React Hook use case:

### 🔢 Counter
- Uses `useState`
- Increment, decrement, and reset functionality
- Demonstrates basic state updates

### ✅ Todo List
- Uses `useState`
- Add tasks dynamically
- Conditional rendering for empty state

### 👤 User Data Fetcher
- Uses `useState` and `useEffect`
- Fetches user data from an external API
- Displays loading state with a spinner
- Graceful handling of async data

---

## 🧠 Hooks Used

- `useState` — for managing component state
- `useEffect` — for handling side effects (API calls)

---

## 🌐 API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - Endpoint: `/users/:id`
  - Used for demo user data fetching

---

## 🛠️ Built With

- React
- JavaScript (ES6+)
- CSS (custom styling)
- JSONPlaceholder API

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/react-hooks-app.git
cd react-hooks-app
npm install
