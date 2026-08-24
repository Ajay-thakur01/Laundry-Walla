# 🧺 LaundryWalla

LaundryWalla is a modern and responsive **laundry service booking website** built using **HTML, CSS, and JavaScript**. It allows users to explore available laundry services, add or remove services from a cart, view the total price, and submit a booking form.

The project also includes a newsletter subscription section and a responsive layout for different screen sizes.

---

## 📌 Features

* 🏠 Modern landing page with hero section
* 🧺 Multiple laundry services
* ➕ Add services to cart
* ➖ Remove services from cart
* 🛒 Dynamic cart management
* 💰 Automatic total price calculation
* 📝 Laundry service booking form
* ✅ Form validation using HTML `required`
* 🎉 Booking confirmation message
* 📧 Newsletter subscription form
* 📱 Fully responsive design
* ✨ Interactive hover effects
* 🔗 Smooth scrolling navigation
* 📱 Mobile, tablet, and desktop layouts
* 🎨 Clean and modern UI

---

## 🛠️ Technologies Used

### Frontend

* **HTML5** — Website structure
* **CSS3** — Styling and responsive design
* **JavaScript** — Dynamic functionality and DOM manipulation

### Libraries / Resources

* **Ionicons** — Social media and interface icons
* Custom responsive CSS media queries
* CSS Grid and Flexbox

---

## 📂 Project Structure

```text
LaundryWalla/
│
├── index.html
│
├── resources/
│   ├── css/
│   │   ├── style.css
│   │   └── queries.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   ├── data/
│   │
│   └── img/
│
└── vendors/
    ├── css/
    │   ├── grid.css
    │   └── normalize.css
    │
    ├── fonts/
    │
    └── js/
```

---

## 🧩 Main Sections

### 🏠 Hero Section

The hero section introduces LaundryWalla and provides a call-to-action for users to book laundry services.

It contains:

* Main heading
* Description
* Call-to-action button
* Laundry-related image

---

### 📊 Service Overview

A quick overview section highlights important information about the service.

Examples include:

* Number of services
* Service availability
* Customer-related information
* Delivery information

---

### 🧺 Laundry Services

Users can choose from several laundry services, including:

| Service                  | Price |
| ------------------------ | ----: |
| Dry Cleaning             |  ₹200 |
| Wash & Fold              |  ₹100 |
| Ironing                  |   ₹30 |
| Stain Removal            |  ₹500 |
| Leather & Suede Cleaning |  ₹999 |
| Wedding Dress Cleaning   | ₹2800 |

Users can click **Add Item** to add a service to their cart.

Once added, the button changes to **Remove Item**, allowing users to remove the service.

---

## 🛒 Dynamic Cart

The cart is handled using JavaScript.

When a user adds a service:

1. The service is added to the cart.
2. The button changes from `Add Item` to `Remove Item`.
3. The cart is updated automatically.
4. The total amount is recalculated.

When a service is removed:

1. The service is removed from the cart.
2. The button returns to `Add Item`.
3. The cart is updated.
4. The total price is recalculated.

The cart initially displays:

```text
Total Amount
₹0.00
```

---

## 💻 JavaScript Functionality

The main JavaScript functionality is implemented in:

```text
resources/js/script.js
```

The project uses DOM manipulation and event listeners to manage the application.

### Service Data

Services are stored inside a JavaScript array:

```javascript
let services = [
    { serviceName: "Dry Cleaning", serviceCost: 200 },
    { serviceName: "Wash & Fold", serviceCost: 100 },
    { serviceName: "Ironing", serviceCost: 30 },
    { serviceName: "Stain Removal", serviceCost: 500 },
    { serviceName: "Leather & Suede Cleaning", serviceCost: 999 },
    { serviceName: "Wedding Dress Cleaning", serviceCost: 2800 }
];
```

### Cart Management

The cart uses an array to keep track of selected services:

```javascript
let cartItems = [];
```

The `cartUpdate()` function dynamically updates:

* Cart items
* Empty cart message
* Total amount
* Booking button state

---

## 📝 Booking Form

The booking section contains a form where users provide:

* Full Name
* Email ID
* Phone Number

The fields use HTML validation:

```html
<input type="text" required>
<input type="email" required>
<input type="tel" required>
```

Users cannot submit the form without entering the required information.

The website also checks whether at least one laundry service has been selected.

If no service is selected, the user receives an alert:

```text
Please add at least one service to your cart before booking.
```

After a successful booking:

* The confirmation message is displayed.
* The form is reset.
* Selected services are removed.
* The cart is cleared.
* The total amount returns to ₹0.00.

---

## 📧 Newsletter Subscription

The website includes a newsletter subscription section.

Users can enter:

* Full Name
* Email Address

After submission:

* The form is reset.
* A confirmation message is displayed.
* The message automatically disappears after a few seconds.

---

## 📱 Responsive Design

LaundryWalla is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

Responsive styles are implemented in:

```text
resources/css/queries.css
```

Different layouts are applied at:

* `900px`
* `700px`
* `480px`

For smaller screens:

* Navigation becomes vertically arranged.
* Hero content stacks vertically.
* Service cards become single-column.
* Booking sections stack vertically.
* Newsletter inputs become full width.
* Footer changes to a responsive grid.

---

## 🎨 Design

The website uses a clean laundry-service theme with:

* Blue primary colors
* White backgrounds
* Soft shadows
* Rounded cards
* Responsive grids
* Smooth hover animations
* Clear call-to-action buttons

The design focuses on providing a simple and user-friendly booking experience.

---

## 🚀 How to Run the Project

### 1. Download or Clone the Repository

Download the project files to your computer.

### 2. Open the Project

Open the project folder in your preferred code editor, such as **Visual Studio Code**.

### 3. Run the Website

Open:

```text
index.html
```

in your browser.

For the best development experience, you can use the **Live Server** extension in VS Code.

---

## 🔮 Future Improvements

The project can be extended with several features in the future:

* 🔐 User authentication
* 💳 Online payment integration
* 📦 Order tracking
* 🗄️ Backend database
* 📱 Customer dashboard
* 👨‍💼 Admin dashboard
* 📧 Real email notifications
* 🧾 Booking/order history
* 🗺️ Pickup and delivery location support
* 💾 Persistent cart using Local Storage
* 🔔 Real-time booking notifications

---

## 👨‍💻 Author

**Ajay Kumar**

Frontend / MERN Stack Developer

---

## 📄 License

This project was created for **learning and educational purposes**.

You are free to modify and improve the project for your own practice and portfolio.
