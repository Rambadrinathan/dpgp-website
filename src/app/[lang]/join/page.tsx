import { getDictionary, Locale, locales } from '@/dictionaries';

export default async function JoinPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.join.title}</h1>
          <p className="text-xl text-orange-100">{dict.join.subtitle}</p>
        </div>
      </section>

      {/* Ways to Join */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Volunteer */}
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-900 transition-colors">
              <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{dict.join.volunteer}</h2>
              <p className="text-gray-600 mb-6">{dict.join.volunteerDesc}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  {lang === 'bn' ? 'আপনার এলাকায় সচেতনতা ছড়ান' : lang === 'hi' ? 'अपने क्षेत्र में जागरूकता फैलाएं' : 'Spread awareness in your area'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  {lang === 'bn' ? 'কমিউনিটি আলোচনা আয়োজন করুন' : lang === 'hi' ? 'सामुदायिक चर्चाएं आयोजित करें' : 'Organize community discussions'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  {lang === 'bn' ? 'মন্ত্রণালয় শিক্ষা সেশন চালান' : lang === 'hi' ? 'मंत्रालय शिक्षा सत्र चलाएं' : 'Run ministry education sessions'}
                </li>
              </ul>
            </div>

            {/* Amplifier */}
            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{dict.join.amplifier}</h2>
              <p className="text-gray-600 mb-6">{dict.join.amplifierDesc}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  {lang === 'bn' ? 'প্রতিদিন ৫+ গ্রুপে শেয়ার করুন' : lang === 'hi' ? 'रोजाना 5+ समूहों में शेयर करें' : 'Share to 5+ groups daily'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  {lang === 'bn' ? 'দিনে মাত্র ৫ মিনিট প্রয়োজন' : lang === 'hi' ? 'दिन में सिर्फ 5 मिनट चाहिए' : 'Just 5 minutes per day'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  {lang === 'bn' ? 'হাজার হাজার মানুষের কাছে পৌঁছান' : lang === 'hi' ? 'हजारों लोगों तक पहुंचें' : 'Reach thousands of people'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{dict.join.contact}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{dict.join.whatsapp}</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bn' ? 'আমাদের চ্যানেলে যোগ দিন' : lang === 'hi' ? 'हमारे चैनल से जुड़ें' : 'Join our channel'}
                </p>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{dict.join.youtube}</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bn' ? 'সাবস্ক্রাইব করুন' : lang === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{dict.join.facebook}</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bn' ? 'পেজ ফলো করুন' : lang === 'hi' ? 'पेज फॉलो करें' : 'Follow the page'}
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{dict.join.instagram}</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bn' ? 'ফলো করুন' : lang === 'hi' ? 'फॉलो करें' : 'Follow us'}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === 'bn' ? 'বাংলা বদলাবে আপনার হাতে' : lang === 'hi' ? 'बंगाल बदलेगा आपके हाथों से' : 'Bengal will change through your hands'}
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            {lang === 'bn'
              ? 'আজই যোগ দিন ঐতিহাসিক গণশিক্ষা অভিযানে।'
              : lang === 'hi'
              ? 'आज ही जुड़ें ऐतिहासिक जन शिक्षा अभियान में।'
              : 'Join the historic mass education campaign today.'}
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-500 px-8 py-4 rounded-full font-semibold">
            <span className="text-2xl">🙏</span>
            <span>
              {lang === 'bn' ? 'তথ্য জানুন। সিদ্ধান্ত নিন।' : lang === 'hi' ? 'जानकारी लें। निर्णय आपका।' : 'Learn. Decide.'}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
