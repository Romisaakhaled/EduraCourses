 Edura - Online Course Explorer

**Edura** is a modern, responsive E-learning platform built with **React.js** and **Tailwind CSS**. It allows users to explore popular courses, filter them by categories, and manage a personalized wishlist.

---

 Features

- **Course Exploration:** Browse through a variety of professional courses.
- **Dynamic Filtering:** Filter courses by category (Design, Development, Marketing , Data Science).
- **Wishlist System:** Add your favorite courses to a wishlist (Persisted via JSON Server).
- **Smooth Navigation:** Single-page navigation with smooth scrolling.
- **Real-time Search:** Search for courses instantly from the navbar.
- **Responsive Design:** Fully optimized for all screen sizes.

---

## 🚀 Technologies Used

* **Frontend:** React.js (Powered by Vite), Tailwind CSS.
* **Routing:** React Router DOM.
* State Management: React Hooks (useState, useEffect, Context API)
* **Backend (Mock):** JSON Server 
* **HTTP Client:** Axios.

---


## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
     git clone [https://github.com/Romisaakhaled/EduraCourses.git](https://github.com/Romisaakhaled/EduraCourses.git)
    

2.  **Navigate to the project folder:**
    ```bash
    cd EduraCourses
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the JSON Server (Backend):**
    Make sure you have `json-server` installed, then run:
    ```bash
    json-server --watch db.json --port 5000
    ```

5.  **Run the React App:**
    ```bash
    npm run dev
    ```
## 📦 Project Structure

```text
src/
├── assets/              
├── components/          # Reusable UI Components
│   ├── layout/          # Navbar, Footer, etc.
│   └── CourseCard.jsx   # Individual course card logic and style
├── context/             # Global State Management
│   └── WishlistContext.js
├── pages/               # Main Application Pages
│   ├── Home.jsx         # Landing page
│   ├── CourseExplorer.jsx
│   ├── Wishlist.jsx     # Saved courses page
│   ├── Login.jsx
│   └── SignUp.jsx
├── App.jsx               # Main routing and provider setup
└── index.js             # Entry point
---



