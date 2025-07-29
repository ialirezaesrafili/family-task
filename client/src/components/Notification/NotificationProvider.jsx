import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { NotificationContext } from "./NotificationContext"

export const NotificationProvider = ({ children }) => {
  const notificationFunctions = {
    showSuccessToast: (message, options) => toast.success(message, options),

    showErrorToast: (message, options) => toast.error(message, options),

    showWarningToast: (message, options) => toast.warn(message, options),

    showInfoToast: (message, options) => toast.info(message, options),

    showToast: (message, options) => toast(message, options),
  }

  return (
    <NotificationContext.Provider value={notificationFunctions}>
      {children}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={true} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </NotificationContext.Provider>
  )
}
