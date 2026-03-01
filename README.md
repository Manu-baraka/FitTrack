FitTrack

FitTrack is a React-based nutrition and fitness tracking web application that calculates a user’s Basal Metabolic Rate (BMR) and allows daily and weekly progress tracking.

The goal of this application is to help users understand their daily energy requirements and monitor their health in a structured way.


🚀 Features

👤 User profile creation (Name, Age, Weight, Height, Gender)

🔥 Automatic BMR calculation

📅 Daily tracking page

📊 Weekly tracking overview (last 7 days)

🔐 Authentication (Signup & Login)

🛡 Protected routes

💾 Data persistence using LocalStorage

🎨 Responsive UI styled with Tailwind CSS



🧮 BMR Calculation

The app calculates Basal Metabolic Rate using the Mifflin-St Jeor Equation:

For males:

BMR = (10 × weight) + (6.25 × height) − (5 × age) + 5

For females:

BMR = (10 × weight) + (6.25 × height) − (5 × age) − 161

This value represents the number of calories the body needs per day at rest.



🛠 Tech Stack

React.js

React Router DOM

Tailwind CSS

JavaScript (ES6+)

LocalStorage (for client-side persistence)



🔐 Authentication & Routing

The app uses React Router for navigation.

Protected routes ensure that only authenticated users can access:

Daily tracking page

Weekly tracking page with a weekly chart

User authentication state is managed using React state and persisted in LocalStorage.



💾 Data Persistence

User data is stored in LocalStorage:

Profile information

Daily entries (stored using date as key)

Authentication status

This ensures data remains available even after page refresh.
