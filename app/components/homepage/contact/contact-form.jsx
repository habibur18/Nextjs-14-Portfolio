"use client";
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [error, setError] = useState({
    email: false,
    required: false,
  });

  // Helper function for validation
  const validateFields = () => {
    const isAllFilled = input.user_name && input.user_email && input.message;
    const isValid = isValidEmail(input.user_email);
    setError({ email: !isValid, required: !isAllFilled });
    return isAllFilled && isValid;
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!validateFields()) {
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setInput({ user_name: "", user_email: "", message: "" });
      } else {
        const errorData = await res.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don&apos;t hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
        <form onSubmit={handleSendMail}>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name:</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                maxLength="100"
                value={input.user_name}
                onChange={(e) =>
                  setInput({ ...input, user_name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Email:</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                maxLength="100"
                value={input.user_email}
                onChange={(e) =>
                  setInput({ ...input, user_email: e.target.value })
                }
                onBlur={() => validateFields()}
              />
              {error.email && (
                <p className="text-sm text-red-400">
                  Please provide a valid email!
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Message:</label>
              <textarea
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                maxLength="500"
                rows="4"
                value={input.message}
                onChange={(e) =>
                  setInput({ ...input, message: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              {error.required && (
                <p className="text-sm text-red-400">All fields are required!</p>
              )}
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                type="submit"
              >
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
