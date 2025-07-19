import React, { useState } from "react";

const ScheduleAppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    datetime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your appointment request has been sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          datetime: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.datetime;

  return (
    <div
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        minHeight: "600px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="font-gilroy-bold text-h2 text-gray-100">
              Schedule Your Appointment
            </h2>

            {/* Description */}
            <p
              className="font-gilroy-medium text-body text-white"
              style={{
                maxWidth: "500px",
              }}
            >
              We're not the biggest. We're not the flashiest. But we are
              relentless when it comes to delivering value.With Visionex
              Solutions, you're not just hiring a service—you're building a
              strategic partnership, fully committed to your business growth.
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={() =>
                  document
                    .getElementById("appointment-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 bg-white text-black font-gilroy-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Book an appointment
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Image */}
            <div className="pt-8">
              <img
                src="/banners/lft-bn1.svg"
                alt="Appointment Calendar"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Form Container */}
            <div
              id="appointment-form"
              className="relative p-6"
              style={{
                width: "100%",
                maxWidth: "671px",
                minHeight: "467px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            >
              {/* Form Title */}
              <h3
                className="font-gilroy-medium mb-6"
                style={{
                  fontSize: "24px",
                  lineHeight: "31px",
                  color: "#F0F0F0",
                  textAlign: "left",
                }}
              >
                Provide the following details to contact us
              </h3>

              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`mb-4 p-3 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-900/20 border border-green-500/30 text-green-400"
                      : "bg-red-900/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name *"
                    required
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium text-white placeholder-gray-500 focus:placeholder-gray-400"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Email Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    required
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium text-white placeholder-gray-500 focus:placeholder-gray-400"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Company Name Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium text-white placeholder-gray-500 focus:placeholder-gray-400"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Phone Number Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium text-white placeholder-gray-500 focus:placeholder-gray-400"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Date and Time Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="datetime-local"
                    name="datetime"
                    value={formData.datetime}
                    onChange={handleInputChange}
                    placeholder="Select Date and Time *"
                    required
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium text-white placeholder-gray-500 focus:placeholder-gray-400"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                      colorScheme: "dark",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 font-gilroy-semibold transition-all duration-200 ${
                      !isFormValid || isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
                    style={{
                      height: "48px",
                      background: "#FFFFFF",
                      border: "1px solid #FFFFFF",
                      borderRadius: "58px",
                      fontSize: "16px",
                      lineHeight: "27px",
                      color: "#000000",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Contact us
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33 8H12.67M9.33 4.67L12.67 8L9.33 11.33"
                            stroke="#000000"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Required fields note */}
              <p className="text-gray-400 text-sm mt-3 text-center">
                * Required fields
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointmentSection;
