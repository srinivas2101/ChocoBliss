# 🍫 ChocoBliss — Chocolate E-Commerce Website

A fully responsive, multi-page chocolate e-commerce frontend built with **pure HTML, CSS, and vanilla JavaScript** — no frameworks required.

---

## 🚀 Live Demo

Open `index.html` in any modern browser to explore the site. No build step or server needed.

---

## 📁 Folder Structure

```
ChocoBliss/
│
├── index.html                  # Homepage — hero, category grid, features strip
│
├── assets/
│   ├── css/
│   │   └── main.css            # Complete design system — variables, layout, components
│   └── js/
│       ├── cart.js             # Cart logic — localStorage, toast notifications
│       └── products.js         # Product page engine — filter, sort, search
│
└── pages/
    ├── dark.html               # Dark Chocolate (50 products)
    ├── milk.html               # Milk Chocolate (50 products)
    ├── white.html              # White Chocolate (30 products)
    ├── sugarfree.html          # Sugar-Free (30 products)
    ├── diet.html               # Diet Chocolate (30 products)
    ├── ruby.html               # Ruby Chocolate (30 products)
    ├── chocolate.html          # Classic Chocolate (30 products)
    ├── customized.html         # Build-your-own chocolate tool
    ├── cart.html               # Shopping cart with quantity controls
    ├── login.html              # Sign in with live validation
    ├── register.html           # Account creation with validation
    ├── about.html              # Brand story & values
    └── contact.html            # Contact form with validation
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Responsive Design** | Mobile-first, works on all screen sizes |
| **Persistent Cart** | localStorage-powered cart across page navigation |
| **Live Search & Sort** | Instant filter + 4 sort options on every product page |
| **Chocolate Builder** | Step-by-step custom chocolate with dynamic price calculation |
| **Form Validation** | Real-time email, password, and field validation |
| **Toast Notifications** | Non-intrusive add-to-cart feedback |
| **Professional UI** | Playfair Display + DM Sans, chocolate-inspired palette |
| **Online Images** | All images sourced from Unsplash (no local assets needed) |

---

## 🎨 Design System

**Palette**

| Name | Hex | Usage |
|---|---|---|
| Cocoa | `#2B1700` | Primary dark, navbar, footer |
| Espresso | `#4A2000` | Secondary dark, gradients |
| Caramel | `#C4781F` | Accent, buttons, prices |
| Gold | `#E8A838` | Logo, highlights |
| Cream | `#FDF6EE` | Page background |

**Typography**
- Display: `Playfair Display` (headings, logo)
- Body: `DM Sans` (everything else)

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom Properties, Grid, Flexbox, animations
- **Vanilla JS** — Cart logic, search/filter, form validation
- **Unsplash** — Free high-quality chocolate images

---

## 📦 Getting Started

1. Clone / download this repo
2. Open `index.html` in a browser
3. That's it — no install, no build, no server

```bash
git clone https://github.com/yourusername/ChocoBliss.git
cd ChocoBliss
open index.html
```

---

## 📄 Pages Overview

| Page | Purpose |
|---|---|
| `index.html` | Landing page — hero, category cards, features |
| `pages/dark.html` | 50 dark chocolate products with search & sort |
| `pages/milk.html` | 50 milk chocolate products |
| `pages/white.html` | 30 white chocolate products |
| `pages/sugarfree.html` | 30 sugar-free options |
| `pages/diet.html` | 30 diet-friendly chocolates |
| `pages/ruby.html` | 30 ruby chocolate varieties |
| `pages/chocolate.html` | 30 classic chocolate items |
| `pages/customized.html` | Interactive chocolate builder with live pricing |
| `pages/cart.html` | Cart with qty controls, order summary, delivery calc |
| `pages/login.html` | Sign-in with email & password validation |
| `pages/register.html` | Registration with confirm-password check |
| `pages/about.html` | Brand story & values |
| `pages/contact.html` | Contact details + validated contact form |

---

## 👤 Author

Built as part of an MCA academic project — ChocoBliss frontend showcase.

---

## 📜 License

MIT — free to use and modify.
