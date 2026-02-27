import type { Metadata } from "next";
import activity from "../../../content/activity.json";

export const metadata: Metadata = {
  title: "Our Activity",
  description: "Learn about the Safor Ali Foundation's main activity and the impact we're making in the community.",
};

export default function ActivityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{activity.title}</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Making a real difference in the lives of those who need it most.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {activity.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {activity.images.length > 0 && (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.images.map((img, index) => (
                  <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt={`${activity.title} image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {activity.impactPoints.length > 0 && (
              <div className="mt-12 bg-primary-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
                <ul className="space-y-4">
                  {activity.impactPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
