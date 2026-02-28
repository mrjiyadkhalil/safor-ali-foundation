import type { Metadata } from "next";
import siteData from "../../../content/site.json";
import committee from "../../../content/committee.json";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Safar Ali Foundation, our mission, vision, and the executive committee members leading our efforts.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Learn about our foundation, our mission, and the people driving change.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{siteData.about}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">{siteData.mission}</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">{siteData.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Executive Committee
          </h2>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            2025-2026
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {committee.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-primary-600">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                {member.bio && (
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
