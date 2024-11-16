// app/layout.js
import '../styles/globals.css';  // Add this line to your _app.js or layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}