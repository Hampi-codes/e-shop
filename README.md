# 🛍️ E-Shop – React + TypeScript + Vite E-Commerce Application

A minimal yet functional e-commerce web application where users can browse products, view detailed information, and manage their shopping cart — all built with modern frontend technologies.

---

## 🚀 Live Demo

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

Filters are server-driven, not local

Query parameters used to fetch filtered data

👨‍💻 Author
Yogesh
Frontend Developer
LinkedIn | Portfolio
