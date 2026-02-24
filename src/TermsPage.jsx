import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-navy/60 hover:text-navy transition-colors no-underline mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          回首頁
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-navy/5 p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-navy">服務條款</h1>
            <p className="mt-2 text-sm text-gray-500">最後更新日期：2026 年 2 月 23 日</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">一、服務說明</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台為 AI 保單健檢助理，透過人工智慧技術協助使用者解析保險存摺與保單條款，產生保障分析報告。本服務所提供之分析結果僅供參考，不構成任何保險建議、財務建議或專業意見。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">二、AI 分析免責聲明</h2>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>本平台使用 AI 模型解析保單資料，解析結果（包括但不限於保險金額、保障分類、保障範圍）可能存在不準確之處，使用者應自行核實。</li>
              <li>條款文字來源為公開資料，本平台不保證條款下載之完整性與即時性。</li>
              <li>AI 產生之健檢報告僅為輔助參考工具，所有保障內容應以保單條款正本為準。</li>
              <li>使用者不應僅依據本平台之分析結果做出任何保險決策。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">三、禁止事項</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台不提供任何保險商品推薦或銷售服務。如有投保、變更保單或其他保險需求，請洽詢您的保險業務員。使用者不得將本平台之分析結果作為銷售或推薦特定保險商品之依據。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">四、智慧財產權</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台引用之保單條款文字來源為財團法人保險事業發展中心（TII）公開資料。本平台之軟體、介面設計及 AI 分析模型之智慧財產權歸本平台所有。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">五、帳號與使用</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台採用 Google OAuth 登入，不另行儲存使用者密碼。帳號之使用權限由管理員核准與管理。使用者應妥善保管自身 Google 帳號之安全，因帳號遭未授權使用所生之損害，本平台不負賠償責任。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">六、服務變更與終止</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台保留隨時修改、暫停或終止服務之權利，並將於合理期間內通知使用者。服務條款之修改於公告後生效，繼續使用本服務即視為同意修改後之條款。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">七、準據法</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本服務條款之解釋與適用，以中華民國法律為準據法。因本服務所生之爭議，以臺灣臺北地方法院為第一審管轄法院。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
