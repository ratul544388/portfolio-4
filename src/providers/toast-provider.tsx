"use client";

import { useTheme } from "next-themes";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  const { theme } = useTheme();
  return <ToastContainer theme={theme === "dark" ? "dark" : "light"} />;
}
