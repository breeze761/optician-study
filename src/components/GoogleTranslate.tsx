'use client'

import Script from 'next/script'

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages: string
            layout: number
            autoDisplay: boolean
          },
          element: string
        ) => void
      }
    }
    googleTranslateElementInit: () => void
  }
}

export default function GoogleTranslate() {
  return (
    <>
      {/* Google Translate Widget Container */}
      <div
        id="google_translate_element"
        className="fixed top-20 right-4 z-50 bg-white p-1 rounded-lg shadow-lg"
      />

      {/* Google Translate Scripts */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'ar,zh-CN,zh-TW,nl,fr,de,hi,it,ja,ko,pl,pt,ru,es,th,tr,vi,bn,ms,tl,id',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}
      </Script>

      {/* Style overrides for Google Translate */}
      <style jsx global>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
        .goog-te-gadget { font-size: 0 !important; }
        .goog-te-gadget .goog-te-combo {
          font-size: 14px !important;
          padding: 8px 12px !important;
          border-radius: 6px !important;
          border: 1px solid #e5e7eb !important;
          background: white !important;
          cursor: pointer !important;
        }
        .goog-logo-link { display: none !important; }
        .goog-te-gadget > span { display: none !important; }
        #google_translate_element select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 8px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 32px !important;
        }
      `}</style>
    </>
  )
}
