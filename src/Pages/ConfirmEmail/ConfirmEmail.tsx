import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmEmail = () => {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md text-center dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Confirm your email
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A confirmation email has been sent to{" "}
          <span className="font-medium text-primary-600 dark:text-blue-400">
            {email}
          </span>. Please check your inbox and click the verification link to complete your registration.
        </p>
        <button
          className="w-full text-white bg-lightGreen hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
          onClick={() => {
            // Optional: logic to resend email
            alert("Resend confirmation link functionality not implemented.");
          }}
        >
          Resend Email
        </button>
      </div>
    </section>
  );
};

export default ConfirmEmail;
