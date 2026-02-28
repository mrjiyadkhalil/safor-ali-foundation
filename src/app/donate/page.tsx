import type { Metadata } from "next";
import donation from "../../../content/donation.json";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the Safar Ali Foundation. Find out how you can contribute through bKash, Nagad, or bank transfer.",
};

export default function DonatePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Your generosity can change lives. Every contribution makes a difference.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              {donation.instructions}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h2>
            <div className="space-y-6 mb-12">
              {donation.methods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      {method.type === "bKash" && (
                        <span className="text-primary-700 font-bold text-sm">bK</span>
                      )}
                      {method.type === "Nagad" && (
                        <span className="text-primary-700 font-bold text-sm">N</span>
                      )}
                      {method.type === "Bank Transfer" && (
                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{method.type}</h3>
                  </div>
                  <p className="text-gray-600 whitespace-pre-line">{method.details}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">Transparency Promise</h3>
                  <p className="text-gray-700 leading-relaxed">{donation.transparencyNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
