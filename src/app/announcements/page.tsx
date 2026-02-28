import type { Metadata } from "next";
import announcements from "../../../content/announcements.json";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Stay updated with the latest announcements and news from the Safar Ali Foundation.",
};

export default function AnnouncementsPage() {
  const sorted = [...announcements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Announcements</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Stay informed about our latest updates and upcoming events.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {sorted.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Announcements Yet</h3>
                <p className="text-gray-500">Check back soon for updates from our foundation.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {sorted.map((item, index) => (
                  <article
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors"
                  >
                    <time className="text-sm text-primary-600 font-medium">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{item.summary}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
