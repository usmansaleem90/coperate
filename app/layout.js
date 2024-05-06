"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ToastContainer />

          </body>
      </html>
      </>
    </Provider>
  );
}
