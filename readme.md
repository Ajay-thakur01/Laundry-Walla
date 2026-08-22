# 🧺 Loundry Valla

A modern and interactive **Laundry Service Booking Website** built using **HTML, CSS, and JavaScript**. The project allows users to browse available laundry services, add or remove services from a cart, view the total amount, and enter their booking details.

## 🚀 Features

* 🏠 Clean and modern landing page
* 🧺 Multiple laundry services with individual prices
* ➕ Add services to the cart
* ➖ Remove services from the cart
* 🛒 Dynamic cart that updates instantly
* 💰 Automatic calculation of the total amount
* 👤 Booking form for customer information
* 📧 Email and phone number input fields
* 📊 Achievement section displaying business statistics
* 📱 Structured and responsive-friendly layout
* 🎨 Modern UI using CSS variables and reusable styling

## 🛠️ Technologies Used

* **HTML5** — Website structure and semantic elements
* **CSS3** — Styling, layout, colors, spacing, and UI design
* **JavaScript** — Cart functionality and DOM manipulation

## 📂 Project Structure

```text
Loundry Valla/
│
├── index.html          # Main HTML page
├── style.css           # Website styling
├── script.js           # Cart and interactive functionality
├── 1.png               # Main website image
└── .vscode/
    └── settings.json   # Live Server configuration
```

## 🧺 Available Services

| Service                  |  Price |
| ------------------------ | -----: |
| Dry Cleaning             |   ₹200 |
| Wash & Fold              |   ₹100 |
| Ironing                  |    ₹30 |
| Stain Removal            |   ₹500 |
| Leather & Suede Cleaning |   ₹999 |
| Wedding Dress Cleaning   | ₹2,800 |

## ⚙️ How It Works

### 1. Browse Services

Users can view the available laundry services along with their prices.

### 2. Add a Service

Clicking **Add Items** adds the selected service to the cart.

The button changes to **Remove Item**, preventing the same service from being added multiple times.

### 3. Remove a Service

Clicking **Remove Item** removes the service from the cart and updates the total amount automatically.

### 4. View Cart

The cart displays:

* Serial number
* Service name
* Service price
* Total amount

### 5. Book a Service

Users can enter their:

* Full Name
* Email
* Phone Number

and proceed with the **Book Now** action.

## 💡 JavaScript Functionality

The project uses JavaScript to dynamically manage the shopping cart.

### Service Data

Services are stored in a JavaScript array:

```javascript
const services = [
    { serviceName: "Dry Cleaning", serviceCost: 200 },
    { serviceName: "Wash & Fold", serviceCost: 100 },
    { serviceName: "Ironing", serviceCost: 30 },
    { serviceName: "Stain Removal", serviceCost: 500 },
    { serviceName: "Leather & Suede Cleaning", serviceCost: 999 },
    { serviceName: "Wedding Dress Cleaning", serviceCost: 2800 }
];
```

### Cart Management

The application maintains a `cartItems` array and dynamically updates the cart whenever a service is added or removed.

The total price is calculated automatically based on the selected services.

## ▶️ How to Run

### Option 1 — Live Server

1. Download or clone this repository.
2. Open the project folder in **Visual Studio Code**.
3. Install the **Live Server** extension if it is not already installed.
4. Open `index.html`.
5. Right-click the file and select **Open with Live Server**.

### Option 2 — Directly in Browser

Simply open `index.html` in any modern web browser.

## 🎯 Project Objective

The main objective of this project is to practice:

* HTML page structuring
* CSS layouts and styling
* JavaScript DOM manipulation
* Event listeners
* Arrays and objects
* Dynamic content rendering
* Cart management logic
* Form design
* Interactive UI development

## 🔮 Future Improvements

Some possible improvements for future versions include:

* [ ] Add a fully functional booking system
* [ ] Add form validation
* [ ] Store cart data using `localStorage`
* [ ] Add user authentication
* [ ] Add a backend using Node.js and Express
* [ ] Connect the application to MongoDB
* [ ] Add online payment integration
* [ ] Add order tracking
* [ ] Add responsive mobile navigation
* [ ] Add booking confirmation notifications

## 👨‍💻 Author

**Ajay Kumar**

Frontend / MERN Stack Developer

---

⭐ If you like this project, consider giving the repository a star!
