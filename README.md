# 📦 Mobile Order Tracking Screen

A modern, professional mobile Order Tracking interface built for an e-commerce application. This project completely redesigns the standard tracking experience so that the delivery status is instantly clear at a glance.

## ✨ Key Features

- **Clear Visual Delivery Timeline**: An intuitive progress bar that adapts based on the current order status (Processing, Shipped, Out for Delivery, Delivered).
- **Edge Case Handling**: Dynamically adapts to three specific real-world situations:
  - ⏳ **Delayed Order**: Clearly communicates the delay and provides a dedicated alert.
  - 🚨 **Delivered but Not Received**: Alerts the user when the system marks an item as delivered but it hasn't been received, offering an immediate "Report an Issue" action.
  - 🔍 **Tracking Not Available**: Gracefully handles states where the order exists but the tracking information is not yet available from the carrier.
- **Interactive Demo**: Includes an interactive sticky tab bar at the top of the application to seamlessly toggle between the different edge cases (`Normal`, `Delayed`, `Issue`, `No Track`).
- **Fully Responsive Mobile Constraint**: The layout is meticulously constrained for standard mobile viewports (`360-430px`) to provide an exact mobile-app feel on all devices.
- **Clean Architecture**: Highly modular, reusable, and built following strict React best practices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Setup & Run Instructions

To run this project locally, simply follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ashik-Ahammad/order-tracking.git
   cd order-tracking
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Preview the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. You can use the top black demo banner to toggle between the different delivery states.

