# GDGoC UGM Frontend Assignment

A frontend web application for the **Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada** community, built according to Google's design standards. It features Live API integration, advanced frontend logic, and robust state management (Loading, Error, and Empty State Fallbacks).

---

##  Important Links
-**Live Demo (Vercel):** [https://gdgoc-frontend-five.vercel.app/](https://gdgoc-ugm-frontend.vercel.app) 
- **GitHub Repository:** [https://github.com/ken30may2008-cell/gdgoc-frontend.git](https://github.com/ken30may2008-cell/gdgoc-frontend)

---

##  Tech Stack & Tools
- **Framework:** React (Vite)
- **Routing:** React Router DOM (Single Page Application / SPA)
- **Styling:** Tailwind CSS
- **Typography:** Google Sans (CDN Integration)
- **Deployment:** Vercel

---

##  Key Features
1. **Landing & Overview Pages:** Responsive landing page with precise typography alongside an interactive overview section.
2. **Live API Integration:** Dynamically fetches data from the official community endpoint (`https://gdgoc-ugm-api.vercel.app/api/tracks`).
3. **Advanced Frontend Logic & States:**
   - **Loading State:** Smooth spinner animation while fetching data from the server.
   - **Error State:** Custom alert card for handling network failures or broken endpoints.
   - **Empty State Fallback:** Dedicated fallback UI with a reset button when search results return no items.
   - **Real-time Search Filter:** Instantly filters learning tracks based on user input.
4. **SPA Routing Optimization:** Includes a `vercel.json` configuration to prevent 404 Not Found errors on Vercel.

---

## ⚙️ Setup Instructions (Local Development)

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ken30may2008-cell/gdgoc-frontend.git](https://github.com/ken30may2008-cell/gdgoc-frontend.git)
   cd gdgoc-frontend
