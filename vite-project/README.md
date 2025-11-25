# 🚗 Vehicle Fleet Management System

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)


A **modern, responsive web application** to manage and monitor a fleet of vehicles. Users can **search, filter, sort, edit, and track vehicles**, with real-time telemetry and activity logs.

**Live Demo:** [🚀 View on Vercel](https://vehiclefleetwebapp.vercel.app/)

---

## ✨ Features

- 🔍 **Search Vehicles** – Quickly find vehicles by name  
- 🎛 **Filter & Sort** – View vehicles by online/offline status or last seen  
- ✏️ **Edit Vehicle Details** – Update name or status easily  
- 📊 **Telemetry & Activity Logs** – Monitor speed, battery, and logs  
- 📁 **Export CSV** – Download vehicle data for reporting  
- 🌐 **Responsive Design** – Works seamlessly on desktop & mobile  
- 🟢🔴 **Status Indicators** – Online/Offline vehicles highlighted with colors  
- ✅ **Modern UI** – Professional fonts, hover effects, and clean layout  

---

## 🛠 Technologies Used

- **Frontend:** React.js, HTML, CSS  
- **State Management:** React Context API  
- **Icons:** Lucide Icons  
- **Deployment:** Vercel  
- **Utilities:** CSV Export  

---

## 🚀 Installation & Setup

1. **Clone the repository**

```bash
git clone <YOUR_REPO_URL>
```

2. **Navigate to the project folder**

```bash
cd vehicle-fleet-management
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```




🎯 How to Use

1.Open the app in your browser

2.View the list of vehicles

3.Use the search bar to find vehicles by name
<img width="627" height="129" alt="image" src="https://github.com/user-attachments/assets/14dbe479-0ebf-42d5-8c6b-01eb11bbda60" />


4.Apply filters to view online/offline vehicles
<img width="643" height="220" alt="image" src="https://github.com/user-attachments/assets/2082eb55-7f24-4fbf-a5dd-9881635364d9" />


5.Sort vehicles by name or last seen
<img width="634" height="167" alt="image" src="https://github.com/user-attachments/assets/ca961e3d-9d4b-482e-aa0a-2cc4a98c24af" />


6.Click a vehicle row to see details, telemetry, and activity logs
<img width="1246" height="146" alt="image" src="https://github.com/user-attachments/assets/0d8ec4a4-cac6-4a5e-b48b-8f3cf3064114" />


7.Click Edit to update vehicle details
<img width="630" height="110" alt="image" src="https://github.com/user-attachments/assets/b58c86bf-718e-4e54-bae4-790a3af685fe" />



8.Click Save to apply changes or Cancel to discard
<img width="515" height="216" alt="image" src="https://github.com/user-attachments/assets/5824afdd-d2e5-4237-8e35-8bc1b17d29a9" />


9.Export the vehicle list using Export CSV
<img width="665" height="95" alt="image" src="https://github.com/user-attachments/assets/51b75b4c-7eb8-4822-9eec-eaa907a6219d" />




#📂 Folder Structure
```bash
vehicle-fleet-management/
│
├─ public/                      
│
├─ src/
│   ├─ components/              # Reusable React components
│   │   ├─ Search.jsx
│   │   ├─ Filter.jsx
│   │   ├─ Sort.jsx
│   │   ├─ VehicleList.jsx
│   │   ├─ VehicleDetails.jsx
│   │   └─ VehicleEdit.jsx
│   │
│   ├─ context/                 # React Context API for state management
│   │   └─ VehicleContext.jsx
│   │
│   ├─ utils/                   # Utility functions
│   │   └─ csvExporter.js
│   │
│   ├─ App.jsx                  # Main App component
│   └─ index.js                 
│
├─ package.json
├─ package-lock.json
└─ README.md
```




📌 Notes
All components are responsive and user-friendly, 
Status icons use green/red Lucide icons for clarity, 
Exported CSV preserves all vehicle data, 
Design uses modern fonts and hover effects for a polished UI.


