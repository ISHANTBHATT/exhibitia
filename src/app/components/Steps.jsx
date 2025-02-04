import React from "react";

const ProcessStep = ({ number, title, description, color, position }) => (
  <div
    className={`flex flex-col items-center text-center max-w-sm ${
      position === "bottom"
        ? "lg:-translate-y-full lg:mt-48"
        : "lg:-translate-y-full"
    }`}
  >
    <div
      className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center mb-4`}
    >
      <span className="text-white text-2xl font-bold">{number}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

function Steps() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Timeline Line with Steps */}
        <div className="hidden lg:block relative mt-64">
          {/* Dashed Line */}
          <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-300"></div>

          {/* Icons and Steps */}
          <div className="grid grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <ProcessStep
                number="1"
                title="Brainstorming Session"
                description="With our industry expert, we together will discuss your breakthrough ideas in initiative sessions."
                color="bg-[#F85C3A]"
                position="top"
              />
              <div className="w-16 h-16 bg-[#F85C3A] rounded-lg flex items-center justify-center">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'/%3E%3C/svg%3E"
                  alt="Brainstorming"
                  className="w-8 h-8"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 bg-[#0088FF] rounded-lg flex items-center justify-center">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/%3E%3C/svg%3E"
                  alt="Design"
                  className="w-8 h-8"
                />
              </div>
              <ProcessStep
                number="2"
                title="Design/Prototyping"
                description="We engage the highly creative mind in designing the first look of your breakthrough ideas after researching on attractive color pallets and modern trends."
                color="bg-[#0088FF]"
                position="bottom"
              />
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <ProcessStep
                number="3"
                title="Implementation"
                description="Innovative development and seamless implementation, delivering cutting-edge solutions that redefine technological landscapes for clients globally."
                color="bg-[#00C853]"
                position="top"
              />
              <div className="w-16 h-16 bg-[#00C853] rounded-lg flex items-center justify-center">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'/%3E%3C/svg%3E"
                  alt="Implementation"
                  className="w-8 h-8"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 bg-[#8833FF] rounded-lg flex items-center justify-center">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'/%3E%3C/svg%3E"
                  alt="Testing"
                  className="w-8 h-8"
                />
              </div>
              <ProcessStep
                number="4"
                title="Testing & Deployment"
                description="Strengthen your software user-friendliness, compatibility, and responsiveness with our human and Automation Testing solutions"
                color="bg-[#8833FF]"
                position="bottom"
              />
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col items-center">
              <ProcessStep
                number="5"
                title="Product launch and Growth Hacking"
                description="Depex Technologies leverages strategic product launches and growth hacking techniques to propel rapid expansion, ensuring market dominance and sustained success."
                color="bg-[#1B3F77]"
                position="top"
              />
              <div className="w-16 h-16 bg-[#1B3F77] rounded-lg flex items-center justify-center">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/%3E%3C/svg%3E"
                  alt="Launch"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden grid grid-cols-1 gap-8">
          {/* Mobile steps here (same content, different layout) */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default Steps;
