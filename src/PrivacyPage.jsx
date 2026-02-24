import { Link } from "react-router-dom";

export default function PrivacyPage() {
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
            <h1 className="text-2xl font-bold text-navy">隱私權政策</h1>
            <p className="mt-2 text-sm text-gray-500">最後更新日期：2026 年 2 月 23 日</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">一、蒐集的資料</h2>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>Google 帳號資訊（姓名、電子郵件地址）</li>
              <li>使用者上傳之保險存摺資料及保單相關文件</li>
              <li>AI 分析產生之健檢報告內容</li>
              <li>AI 對話紀錄</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">二、資料用途</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              所蒐集之資料僅用於以下用途：
            </p>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>產生保單健檢分析報告</li>
              <li>提供 AI 對話諮詢服務</li>
              <li>發送通知信件（報告完成通知、邀請連結等）</li>
              <li>系統運作與改善服務品質</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">三、資料儲存與安全措施</h2>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li><strong>資料庫：</strong>採用 Supabase（PostgreSQL），託管於 AWS 基礎設施</li>
              <li><strong>傳輸加密：</strong>全程使用 TLS/HTTPS 加密傳輸</li>
              <li><strong>存取控制：</strong>採用 Row Level Security（RLS），依角色（業務員／客戶／管理員）嚴格區隔資料存取權限</li>
              <li><strong>身分驗證：</strong>採用 Google OAuth 2.0，本平台不儲存任何密碼</li>
              <li><strong>金鑰管理：</strong>伺服器端金鑰以環境變數管理，採 service role 隔離機制</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">四、資料隔離</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              業務員僅能存取自己的客戶資料，客戶僅能查看被邀請之報告。所有資料存取均透過資料庫層級之 Row Level Security（RLS）強制執行，確保資料隔離。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">五、第三方服務</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台使用以下第三方服務：
            </p>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li><strong>Supabase：</strong>資料庫與身分驗證服務</li>
              <li><strong>Google：</strong>OAuth 登入驗證</li>
              <li><strong>Anthropic：</strong>AI 分析引擎（不儲存對話內容）</li>
              <li><strong>Resend：</strong>電子郵件發送服務</li>
              <li><strong>保險事業發展中心（TII）：</strong>保單條款公開資料來源</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">六、資料保留與刪除</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              使用者帳號刪除時，將一併刪除所有關聯資料（個人資料、保單資料、分析報告、對話紀錄）。如需刪除帳號或資料，請聯繫系統管理員。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">七、Cookie 使用</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台僅使用 Supabase 身分驗證所需之 session cookie，不使用任何追蹤型 cookie 或第三方廣告 cookie。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">八、未來加強措施</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              本平台計畫實施以下安全強化措施：
            </p>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>欄位層級加密（針對個人識別資訊欄位）</li>
              <li>資料存取稽核日誌</li>
              <li>自動化資料保留期限管理</li>
              <li>儲存空間靜態加密驗證</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-navy">九、聯絡方式</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              如對本隱私權政策有任何疑問，或需行使資料相關權利，請聯繫系統管理員。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
