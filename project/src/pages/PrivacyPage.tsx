export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-gray-700">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you fill out a form, submit an inquiry, or contact us for services. This may include your name, email address, phone number, company information, and any other details you choose to provide.
              </p>
              <p className="leading-relaxed">
                We also automatically collect certain information about your device and browsing activities, including IP address, browser type, pages visited, and referring URLs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>To provide and improve our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To send you promotional materials and updates</li>
                <li>To analyze website usage and optimize performance</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent or harmful activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies to enhance your experience on our website. You can control cookie settings through your browser preferences. Some cookies are essential for website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">HalalPharmaCare</p>
                <p className="text-gray-600">Email: privacy@halalpharmacare.com</p>
                <p className="text-gray-600">Phone: +1 (234) 567-8900</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                This privacy policy may be updated from time to time. We will notify you of significant changes by posting the updated policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
