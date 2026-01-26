import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale, locales } from '@/dictionaries';
import ReviewableSection from '@/components/ReviewableSection';

export default async function DonatePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);
  const d = dict.donate;

  const donationTiers = [
    { amount: '₹10', voters: '1', key: 'tier1', color: 'from-green-400 to-green-500' },
    { amount: '₹100', voters: '10', key: 'tier2', color: 'from-blue-400 to-blue-500' },
    { amount: '₹500', voters: '50', key: 'tier3', color: 'from-purple-400 to-purple-500' },
    { amount: '₹1,000', voters: '100', key: 'tier4', color: 'from-orange-400 to-orange-500' },
    { amount: '₹5,000', voters: '500', key: 'tier5', color: 'from-red-400 to-red-500' },
    { amount: '₹10,000', voters: '1,000', key: 'tier6', color: 'from-yellow-500 to-orange-500' },
  ];

  const sponsorTiers = [
    { amount: '₹50 Lakhs', key: 'title', slots: '1', highlight: true },
    { amount: '₹25 Lakhs', key: 'pillar', slots: '5', highlight: false },
    { amount: '₹10 Lakhs', key: 'ministry', slots: '8', highlight: false },
    { amount: '₹5 Lakhs', key: 'content', slots: '10', highlight: false },
    { amount: '₹2 Lakhs', key: 'friend', slots: '∞', highlight: false },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ReviewableSection sectionId="donate-hero" sectionName="Donate Hero">
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
              {d.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="gradient-text">{d.heroTitle}</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
            {d.heroSubtitle}
          </p>

          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-10">
            {d.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#donate-now"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {d.donateNow}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <div className="text-white font-bold text-2xl md:text-3xl bg-white/10 px-6 py-3 rounded-full">
              {d.impactFormula}
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* What is DPGP Section */}
      <ReviewableSection sectionId="donate-whatisdpgp" sectionName="What is DPGP">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              {d.whatIsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {d.whatIsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{d.coreMessage}</h3>
                <p className="text-4xl font-bold text-orange-500 mb-4">{d.taglineBengali}</p>
                <p className="text-xl text-gray-700 mb-6">{d.taglineEnglish}</p>
                <p className="text-gray-600 leading-relaxed">{d.coreExplanation}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                    🏛️
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">{d.keyPoint1Title}</h4>
                    <p className="text-gray-600">{d.keyPoint1}</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">{d.keyPoint2Title}</h4>
                    <p className="text-gray-600">{d.keyPoint2}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">{d.keyPoint3Title}</h4>
                    <p className="text-gray-600">{d.keyPoint3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Why Ministers Matter Section */}
      <ReviewableSection sectionId="donate-ministers" sectionName="Why Ministers Matter">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              {d.whyMinistersTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {d.whyMinistersSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">❌</span> {d.wrongWay}
                </h3>
                <p className="text-gray-700">{d.wrongWayDesc}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span> {d.rightWay}
                </h3>
                <p className="text-gray-700">{d.rightWayDesc}</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-900 rounded-2xl text-white text-center">
              <p className="text-xl md:text-2xl font-medium italic">
                &quot;{d.paradigmQuote}&quot;
              </p>
              <p className="text-orange-400 mt-4 font-semibold">— Mahacharya Sourabh J Sarkar</p>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* AI Cost Advantage Section */}
      <ReviewableSection sectionId="donate-aiadvantage" sectionName="AI Cost Advantage">
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {d.aiAdvantageTitle}
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              {d.aiAdvantageSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-400 mb-6">{d.traditionalMethod}</h3>
              <div className="text-6xl font-bold mb-4">₹50-100</div>
              <p className="text-blue-200">{d.perVoter}</p>
              <ul className="mt-6 space-y-3 text-blue-200">
                <li>• {d.traditional1}</li>
                <li>• {d.traditional2}</li>
                <li>• {d.traditional3}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">{d.aiMethod}</h3>
              <div className="text-6xl font-bold mb-4">₹1</div>
              <p className="text-orange-100">{d.perVoter}</p>
              <ul className="mt-6 space-y-3">
                <li>• {d.ai1}</li>
                <li>• {d.ai2}</li>
                <li>• {d.ai3}</li>
              </ul>
              <div className="mt-6 p-4 bg-white/20 rounded-xl text-center">
                <span className="text-2xl font-bold">50x {d.savings}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Donation Tiers Section */}
      <ReviewableSection sectionId="donate-tiers" sectionName="Donation Tiers & QR">
      <section id="donate-now" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              {d.chooseTierTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {d.chooseTierSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {donationTiers.map((tier) => (
              <div
                key={tier.key}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.amount}
                </div>
                <div className="text-gray-600 mb-4">
                  <span className="text-2xl font-bold text-blue-900">{tier.voters}</span>
                  <br />
                  <span className="text-sm">{d.votersEducated}</span>
                </div>
                <p className="text-xs text-gray-500">{d.tiers[tier.key as keyof typeof d.tiers]}</p>
              </div>
            ))}
          </div>

          {/* QR Code and Payment Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{d.scanToDonate}</h3>
                <div className="bg-white w-72 mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                  <object
                    data="/images/karmyog-qr-code.pdf"
                    type="application/pdf"
                    className="w-full h-80"
                  >
                    <div className="p-4 text-center">
                      <a
                        href="/images/karmyog-qr-code.pdf"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {d.downloadQR}
                      </a>
                    </div>
                  </object>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">UPI ID:</p>
                  <p className="text-lg font-bold text-blue-900 font-mono">230608554002875@cnrb</p>
                  <p className="text-xs text-gray-500 mt-1">Canara Bank</p>
                </div>
                <p className="text-gray-600 mt-4">{d.scanInstructions}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{d.donationDetails}</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500">{d.donateToLabel}</p>
                    <p className="text-xl font-bold text-blue-900">KarmYog for 21st Century Foundation</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-sm text-green-600 font-medium">✅ {d.taxBenefit}</p>
                    <p className="text-green-700">{d.taxBenefitDesc}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500">{d.websiteLabel}</p>
                    <a href="https://www.dpgp.in" className="text-xl font-bold text-blue-600 hover:text-blue-800">www.dpgp.in</a>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500">{d.phoneLabel}</p>
                    <a href="tel:+919167719898" className="text-xl font-bold text-blue-600 hover:text-blue-800">+91 91677 19898</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Sponsorship Section */}
      <ReviewableSection sectionId="donate-sponsorship" sectionName="Corporate Sponsorship">
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {d.sponsorTitle}
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              {d.sponsorSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.key}
                className={`rounded-2xl p-6 ${
                  tier.highlight
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 transform scale-105'
                    : 'bg-white/10 backdrop-blur-sm'
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs font-bold uppercase tracking-wide mb-2 text-orange-200">
                    {d.mostPopular}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{d.sponsorTiers[tier.key as keyof typeof d.sponsorTiers].name}</h3>
                <div className="text-3xl font-bold mb-4">{tier.amount}</div>
                <p className="text-blue-200 mb-4 text-sm">
                  {d.sponsorTiers[tier.key as keyof typeof d.sponsorTiers].desc}
                </p>
                <div className="text-sm opacity-80">
                  {tier.slots} {d.slotsAvailable}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:donate@dpgp.in"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              {d.contactForSponsorship}
            </a>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* About KarmYog Section */}
      <ReviewableSection sectionId="donate-aboutorg" sectionName="About Organization">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              {d.aboutTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {d.aboutSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{d.founderTitle}</h3>
                <p className="text-xl font-semibold text-blue-800 mb-2">Mahacharya Sourabh J Sarkar</p>
                <p className="text-gray-600 mb-4">{d.founderRole}</p>
                <p className="text-gray-700">{d.founderBio}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-blue-900 mb-4">{d.trackRecord}</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {d.track1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {d.track2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {d.track3}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {d.track4}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-orange-50 p-8 rounded-3xl border border-orange-200 mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{d.orgTitle}</h3>
                <p className="text-xl font-semibold text-orange-600 mb-2">KarmYog for 21st Century Foundation</p>
                <p className="text-gray-700 mb-6">{d.orgDescription}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                    <span className="text-gray-700">{d.registered}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                    <span className="text-gray-700">{d.taxExempt}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                    <span className="text-gray-700">{d.nonPartisan}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 p-6 rounded-2xl text-white">
                <h4 className="font-bold mb-4">{d.contactUs}</h4>
                <div className="space-y-3">
                  <p>📧 donate@dpgp.in</p>
                  <p>📞 +91 91677 19898</p>
                  <p>🌐 www.dpgp.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* FAQ Section */}
      <ReviewableSection sectionId="donate-faq" sectionName="FAQ Section">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              {d.faqTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {Object.entries(d.faqs).map(([key, faq]) => (
              <details key={key} className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                <summary className="p-6 cursor-pointer font-semibold text-blue-900 flex justify-between items-center">
                  {(faq as { q: string; a: string }).q}
                  <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {(faq as { q: string; a: string }).a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Final CTA Section */}
      <ReviewableSection sectionId="donate-cta" sectionName="Final Call to Action">
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {d.finalCtaTitle}
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            {d.finalCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#donate-now"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-orange-500 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              {d.donateNow}
            </a>
            <a
              href={`/${lang}`}
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {d.learnMore}
            </a>
          </div>

          <div className="mt-12 text-orange-200">
            <p>{d.everyRupee}</p>
          </div>
        </div>
      </section>
      </ReviewableSection>
    </div>
  );
}
