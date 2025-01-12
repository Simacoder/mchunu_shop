# Mchunu Shop 🛒

Welcome to Mchunu Shop, an Angular-based e-commerce platform that provides seamless management of products and users. This project is designed to showcase key Angular concepts such as routing, guards, reactive forms, and HTTP client integration with a mock API

# Table of Contents
- Features
- Tech Stack
- Setup and Installation
- Folder Structure
- Usage
- Development
- Contributing
- License

# Features

- **Authentication System:**

  - Login page with form validation.
  - AuthGuard for route protection.
- **Dashboard:**

    - Navigate between product and user management.
- **Product Management:**

    - View product list.
    - Add, edit, and delete products.
- **User Management:**

    - View user list.
    - Manage user information.
- **Responsive UI:**

- Built with Angular Material for a clean and responsive design.

## Tech Stack
- **Frontend:** Angular, Angular Material
- **Backend:** Mock API using [Fake Store API](https://fakestoreapi.com/)
- **Styling:** SCSS, Angular Material components
- **Tooling:** TypeScript, RxJS
  
## Setup and Installation
Follow these steps to set up the project locally:
1. **Clone the Repository:**
   
   ```bash
        git clone https://github.com/Simacoder/mchunu_shop.git
        cd mchunu_shop

   ```
2. **Install Dependencies:** Make sure you have Node.js and npm installed. Then run:
   ```bash
        npm install

   ```
3. **Run the Application:** Start the Angular development server:
 ```bash
        ng serve

 ```
The application will be accessible at http://localhost:4200

## Folder Structure
```bash
    src/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── login/        # Login page component
│   │   ├── product-list/ # Product list page component
│   │   └── user-list/    # User list page component
│   ├── guards/           # Route guards
│   ├── models/           # TypeScript interfaces and models
│   ├── services/         # API services
│   ├── app-routing.module.ts # Application routes
│   └── app.module.ts     # Root module
├── assets/               # Static assets
├── environments/         # Environment-specific configurations
└── index.html            # Main HTML entry point

``` 
# Usage

- Navigate to /login to log in to the application.
- Access /products for product management.
- Access /users for user management.
- Modify the apiUrl in product.service.ts if you wish to connect to a different API.

# License
This project is licensed under the MIT License

# AUTHOR
- Simanga Mchunu

