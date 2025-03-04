# 🚖 Ride-Sharing Application  

A full-featured ride-sharing application with separate interfaces for passengers and drivers (captains). This project includes **real-time location tracking, ride booking, and driver-passenger matching** using modern web technologies.  

---

## 📌 Features  

### **🔑 User Authentication**  
- Separate login/signup for passengers and drivers  
- JWT-based authentication  

### **📍 Real-time Features**  
- Live location tracking using **Leaflet maps**  
- Real-time ride updates with **Socket.io**  
- Driver location updates  

### **🚘 Ride Management**  
- Ride booking with location search  
- Fare calculation based on distance  
- Multiple vehicle options (**Car, Auto, Motorcycle**)  
- OTP verification for ride confirmation  

### **✨ User Experience**  
- Smooth animations using **GSAP**  
- Responsive design with **TailwindCSS**  
- Interactive map interface  

---

## 🛠 Tech Stack  

### **Frontend**  
- React 19 with Vite  
- TailwindCSS for styling  
- React Router for navigation  
- GSAP for animations  

### **Maps & Location**  
- Leaflet for maps  
- OpenRouteService Maps API for geocoding and routing  

### **Real-time Communication**  
- Socket.io for real-time updates  

### **API Communication**  
- Axios for HTTP requests  

---

## 🔗 Prerequisites  

- Node.js (**v18+**)  
- npm or yarn  
- Backend server running (**separate repository**)  
- OpenRouteService Maps API key  

---

## ⚙️ Installation  

1. **Clone the repository:**  
   ```sh
   git clone <repository-url>
   cd frontend-vite
   ```

2. **Install dependencies:**  
   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following variables:  

   ```env
   VITE_BASE_URL=http://localhost:4000
   VITE_OPEN_ROUTE_SERVICE_MAPS_API=your_api_key_here
   ```

4. **Start the development server:**  
   ```sh
   npm run dev
   ```

---

## 🎯 Usage  

### **🚖 Passenger App**  
1. Sign up or log in as a user  
2. Enter pickup and destination locations  
3. Select a vehicle type  
4. Confirm the ride  
5. Track your driver's location in real-time  
6. Complete the ride and make payment  

### **🛠 Captain App (Driver)**  
1. Sign up or log in as a captain  
2. Receive ride requests in real-time  
3. Accept or reject ride requests  
4. Navigate to pickup location  
5. Start and complete rides  
6. Track earnings  

---

## 📁 Project Structure  

```
frontend-vite/
├── components/   # Reusable UI components
├── context/      # React context providers
├── pages/        # Page components for both passenger and captain interfaces
├── assets/       # Static assets and icons
├── .env          # Environment variables
├── package.json  
└── vite.config.js
```

---

## ⚡ Available Scripts  

- `npm run dev` → Start the development server  
- `npm run build` → Build the application for production  
- `npm run preview` → Preview the production build locally  
- `npm run lint` → Run ESLint to check code quality  

---

## 🌍 Environment Variables  

- **VITE_BASE_URL** → API endpoint for the backend server  
- **VITE_OPEN_ROUTE_SERVICE_MAPS_API** → API key for OpenRouteService Maps  

---

## 📜 License  

This project is for **educational purposes only**.  
