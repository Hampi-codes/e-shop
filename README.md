# 🛍️ E-Shop – React + TypeScript + Vite E-Commerce Application

A minimal yet functional e-commerce web application where users can browse products, view detailed information, and manage their shopping cart — all built with modern frontend technologies.

---

## 🚀 Live Demo https://e-shop-ky.netlify.app

>

---

## 📦 Tech Stack

- **React** with **Functional Components**
- **TypeScript**
- **Vite** – for lightning-fast development
- **Ant Design** – sleek and responsive UI
- **React Router** – for client-side navigation
- **localStorage** + **Context API** – for global cart state management
- **Cypress** – for end-to-end testing
- **FakestoreAPI** – for product and category data

---

## 🔧 Getting Started

Follow the steps below to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/e-shop.git
cd e-shop

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev

```

## 🧪 Testing (E2E with Cypress)

Used Cypress to test key user flows such as:

1. Browsing product list
2. Viewing product details
3. Adding items to the cart
4. Updating cart quantities
5. Navigating between pages

## Run Tests

```bash
npx cypress run
```

🎯 Features

✅ Home Page (Product Listing)
1. Displays a grid of products

2. Filters products by category using dynamic API fetching

3. Responsive design with scrollable container

✅ Product Details Page
1. Uses dynamic routing to show product info

2. Displays image, title, description, price

3. “Add to Cart” functionality

✅ Cart Page
1. Displays items added to the cart

2. Quantity controls using "+" and "–" buttons

3. Shows total cart value

4. Responsive and scrollable layout

✅ Navigation
1. Seamless routing between Home, Product Details, and Cart

2. "Back" button navigation handled via router


🧩 API
All product and category data is fetched using:
👉 https://fakestoreapi.com/
1. Filters are server-driven, not local
2. Query parameters used to fetch filtered data

## 📚 What I Learned During This Assessment

This project provided a great opportunity to sharpen my frontend development skills while also diving into areas I hadn’t worked with before. Some key takeaways:

---

### 🔍 1. Cypress – End-to-End Testing

While I was already familiar with **React Testing Library** for unit and integration testing, **Cypress** was a new and exciting experience. Through this assessment, I learned:

- How to set up and configure Cypress in a Vite + React + TypeScript project
- Writing **E2E tests** that simulate real user interactions (navigation, clicks, assertions)
- Adding `data-testid` attributes to make component testing more robust and maintainable
- Understanding the difference between component testing and full browser-based testing
- Handling edge cases like testing `window.history.back()` behavior and working with route-based testing

This gave me a much clearer picture of **testing from a user's perspective**, which is often overlooked in unit tests.

---

### 🛒 2. E-Commerce Flow

Building an e-commerce app helped reinforce several architectural and UI/UX patterns:

- Dynamic routing for product detail pages using URL parameters
- Implementing a real-time cart system with **MobX** and **React Context API**
- Using a scrollable layout and responsive grid to accommodate a variety of devices
- Fetching and filtering data from a remote API ([fakestoreapi.com](https://fakestoreapi.com/)) using query params
- Understanding how cart and UI state can be persisted, managed, and tested


👨‍💻 Author
Yogesh
Frontend Developer
LinkedIn | Portfolio
