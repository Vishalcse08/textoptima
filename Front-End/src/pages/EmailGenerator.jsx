import { Copy, RefreshCcw, Sparkles } from "lucide-react";
import React, { useState } from "react";

const EmailGenerator = () => {
  const [outputText, setOutputText] = useState("");

  return (
    <div className="md:w-[90%] w-[95%] mx-auto mt-8">
      <h1 className="md:text-4xl text-3xl font-bold tracking-tight">
        Email Generator
      </h1>
      <p className="mb-6">
        Create professional, friendly, or formal emails instantly.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Input */}
        <div>
          <h2 className="font-medium mb-2">Email Details</h2>
          <textarea
            className="w-full h-[280px] border-2 rounded-md p-3 bg-gray-100 resize-none"
            placeholder="Describe the email purpose..."
          />

          <button className="mt-4 w-full flex items-center justify-center gap-2
            bg-gradient-to-r from-blue-500 to-blue-700
            text-white font-medium py-3 rounded-lg hover:scale-[1.01] transition">
            <Sparkles /> Generate Email
          </button>
        </div>

        {/* Output */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium">Generated Email</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                <Copy size={14} /> Copy
              </button>
              <button className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                <RefreshCcw size={14} /> Regenerate
              </button>
            </div>
          </div>

          <textarea
            readOnly
            value={outputText}
            className="w-full h-[350px] border-2 rounded-md p-3 bg-gray-100 cursor-not-allowed"
            placeholder="Generated email will appear here..."
          />
        </div>
      </div>
    </div>
  );
};

export default EmailGenerator;
