export function TermsAndPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Terms & Policy</h1>
          <p className="text-gray-600">Last updated: March 2026</p>
        </div>

        {/* Terms & Conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Terms & Conditions</h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">1. Use of Service</h3>
              <p>
                By using Campushub, you agree to use it responsibly and in accordance with all applicable laws and regulations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">2. User Accounts</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account. You agree to accept responsibility for all activities under your account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">3. Limitation of Liability</h3>
              <p>
                Campushub is provided on an "as is" basis. We are not liable for any damages arising from your use of this service.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Privacy Policy</h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">1. Information We Collect</h3>
              <p>
                We collect your name, email, and password when you sign up.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">2. How We Use Your Information</h3>
              <p>
                We use your information to provide and improve Campushub services and send you important updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">3. Data Security</h3>
              <p>
                We implement security measures to protect your personal information from unauthorized access.
              </p>
            </div>
          </div>
        </section>

        {/* Hackathon Notice */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">🚀 Hackathon Project</h3>
          <p className="text-blue-800">
            Campushub is a hackathon project for campus activities and event management.
          </p>
        </section>

        {/* Back Button */}
        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="text-[#0f3dde] hover:underline font-medium"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
