import { useRef, useState, useEffect } from "react";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

/* ─── Navigation ─── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-navy font-bold text-lg no-underline">
          <span className="text-2xl">🛡️</span>
          <span>保單健檢助理</span>
        </a>
        <a
          href="#pricing"
          className="hidden sm:inline-flex items-center px-5 py-2 bg-gold text-white font-semibold rounded-full text-sm hover:bg-gold-dark transition-colors no-underline shadow-sm"
        >
          立即加入早鳥
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          早鳥限時優惠中
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight">
          每個客戶的保單健檢
          <br className="hidden sm:block" />
          要輸入{" "}
          <span className="relative inline-block">
            <span className="relative z-10">1 小時</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-gold/30 -z-0 rounded"></span>
          </span>
          ？
          <br />
          讓「保單健檢助理」
          <span className="text-gold-dark">一鍵幫你完成</span>。
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          專業不該浪費在重複的手工輸入。把行政庶務交給 AI，
          <br className="hidden sm:block" />
          把最有溫度的時間留給客戶，傳遞正確的保險觀念。
        </p>

        <a
          href="#pricing"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold text-lg rounded-full hover:bg-navy-light transition-all no-underline shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5"
        >
          立即成為早鳥創始夥伴
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <p className="mt-4 text-sm text-gray-400">名額有限，額滿即止</p>
      </div>
    </section>
  );
}

/* ─── Pain Points ─── */
function PainPoints() {
  const pains = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      text: "手動輸入條款到眼花繚亂？",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      text: "為了算保障缺口，熬夜整晚做報表？",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "想多關心客戶，卻被瑣碎行政壓得喘不過氣？",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center leading-snug">
          您是否常覺得，
          <br className="sm:hidden" />
          花在整理保單的時間，
          <br />
          比真正<span className="text-gold-dark">陪伴客戶</span>的時間還多？
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-cream border border-navy/5 hover:border-gold/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-4">
                {pain.icon}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold-dark tracking-wide uppercase">核心功能</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
            讓效率與溫度兼具的兩大武器
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-navy/5 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-white mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">上傳保單，光速產生健檢項目</h3>
            <p className="text-gray-600 leading-relaxed">
              一鍵上傳，AI 自動辨識保障項目。省下大量輸入時間，讓您工作更優雅。
            </p>
            <div className="mt-6 p-4 rounded-xl bg-cream-dark border border-gold/10">
              <div className="flex items-center gap-3 text-sm text-navy/70">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                過去 1 小時的苦工 → 現在 1 分鐘搞定
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-navy/5 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center text-white mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">能與客戶互動的 AI 窗口</h3>
            <p className="text-gray-600 leading-relaxed">
              提供專屬 AI 諮詢介面，及時分析客戶保障缺口並建立正確觀念，在互動中增加您的成交機率。
            </p>
            <div className="mt-6 p-4 rounded-xl bg-cream-dark border border-gold/10">
              <div className="flex items-center gap-3 text-sm text-navy/70">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                攻克愛自己做功課的理性型客戶
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HowItWorks ─── */
function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "上傳保單資料",
      desc: "拖放或點選上傳保單 PDF、照片、截圖，系統自動辨識並建立客戶資料。",
      img: "upload-example.png",
    },
    {
      step: "2",
      title: "AI 產出健檢報告",
      desc: "自動分析保障項目、額度與缺口，產生一目了然的健檢報告。",
      img: "report-example.png",
    },
    {
      step: "3",
      title: "客戶 AI 互動諮詢",
      desc: "客戶可透過專屬 AI 窗口即時提問，深入了解自身保障狀況。",
      img: "ai-chat-example.png",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold-dark tracking-wide uppercase">產品實際畫面</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">三步驟，完成保單健檢</h2>
          <p className="mt-3 text-gray-500">從上傳到互動，全程 AI 輔助</p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col gap-8 md:gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center`}
            >
              {/* Screenshot */}
              <div className="w-full md:w-3/5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-navy/5">
                  <img
                    src={`${import.meta.env.BASE_URL}${s.img}`}
                    alt={s.title}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-2/5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white font-bold text-sm mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial ─── */
function Testimonial() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        <svg className="w-12 h-12 mx-auto text-gold/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
        </svg>
        <blockquote className="text-xl sm:text-2xl text-white/95 font-medium leading-relaxed">
          「有了這個工具，客戶每年的保單健檢提醒都變得更容易了。它也幫助我攻克工程師這類喜歡自己做功課的客戶。」
        </blockquote>
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center text-gold font-bold text-lg">
            洪
          </div>
          <div>
            <p className="text-white font-semibold">洪肇辰</p>
            <p className="text-white/60 text-sm">南山人壽 區經理</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const plans = [
    {
      badge: null,
      title: "正式上線預定價",
      price: "999",
      unit: "/ 每月",
      note: "上線後標準定價",
      highlight: false,
      availableLabel: "正式上線後開放",
      features: ["完整保單健檢功能", "AI 客戶互動窗口", "標準客服支援"],
    },
    {
      badge: "最推薦",
      title: "過年前限時衝刺",
      price: "1,000",
      unit: "/ 三個月",
      note: "即日起至 2/16（除夕前夕）",
      highlight: true,
      availableLabel: null,
      features: ["完整保單健檢功能", "AI 客戶互動窗口", "創始夥伴專屬群組"],
    },
    {
      badge: null,
      title: "過年後早鳥方案",
      price: "1,500",
      unit: "/ 三個月",
      note: "2/17（大年初一）起",
      highlight: false,
      availableLabel: "2/17（大年初一）起開放",
      features: ["完整保單健檢功能", "AI 客戶互動窗口", "會員專屬群組"],
    },
  ];

  // Scroll to center card on mount (mobile only)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Wait for layout
    requestAnimationFrame(() => {
      const card = el.children[1];
      if (card) {
        el.scrollLeft = card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2;
      }
    });
  }, []);

  // Track active index on scroll for dot indicators
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      for (let i = 0; i < el.children.length; i++) {
        const child = el.children[i];
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      }
      setActiveIndex(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const renderCard = (plan, i) => (
    <div
      key={i}
      className={`relative rounded-3xl p-8 transition-shadow ${
        plan.highlight
          ? "bg-navy text-white shadow-2xl shadow-navy/30 ring-2 ring-gold md:scale-105 md:-my-4"
          : "bg-cream border border-navy/10 shadow-sm hover:shadow-lg"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
          {plan.badge}
        </div>
      )}

      <h3 className={`text-lg font-bold mt-2 ${plan.highlight ? "text-white" : "text-navy"}`}>
        {plan.title}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>NT$</span>
        <span className={`text-4xl font-black ${plan.highlight ? "text-gold-light" : "text-navy"}`}>
          {plan.price}
        </span>
        <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.unit}</span>
      </div>

      <p className={`mt-2 text-sm ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.note}</p>

      <hr className={`my-6 ${plan.highlight ? "border-white/10" : "border-navy/10"}`} />

      <ul className="space-y-3">
        {plan.features.map((f, j) => (
          <li key={j} className="flex items-start gap-2.5 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-gold-light" : "text-gold"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={plan.highlight ? "text-white/90" : "text-gray-700"}>{f}</span>
          </li>
        ))}
      </ul>

      {plan.highlight ? (
        <a
          href="https://forms.gle/sn8hC3zV82u4LUdi6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block text-center py-3.5 rounded-full font-bold text-sm no-underline transition-all bg-gold text-white hover:bg-gold-light shadow-lg shadow-gold/30"
        >
          立即搶先加入
        </a>
      ) : (
        <div className="mt-8 flex items-center justify-center gap-2 py-3.5 rounded-full border-2 border-dashed border-navy/15 text-navy/40 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {plan.availableLabel}
        </div>
      )}
    </div>
  );

  return (
    <section id="pricing" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold-dark tracking-wide uppercase">階梯式早鳥計畫</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">限時限量，把握最佳時機</h2>
          <p className="mt-3 text-gray-500">越早加入，享受越多優惠</p>
        </div>
      </div>

      {/* Mobile: horizontal scroll carousel */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[15%] pt-6 pb-4"
          style={{ clipPath: "inset(-16px -100% -16px -100%)" }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[75%] transition-transform duration-300"
              style={{ transform: i === activeIndex ? "scale(1.03)" : "scale(0.97)" }}
            >
              {renderCard(plan, i)}
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {plans.map((_, i) => (
            <button
              key={i}
              aria-label={`方案 ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? "bg-navy w-5" : "bg-navy/20"
              }`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const card = el.children[i];
                if (card) {
                  el.scrollTo({
                    left: card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden md:block px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3 items-start">
            {plans.map((plan, i) => renderCard(plan, i))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="mt-10 text-center text-sm text-gray-400">
          早鳥成員享有<span className="text-gold-dark font-semibold">創始夥伴專屬群組</span>與
          <span className="text-gold-dark font-semibold">早鳥優惠價格</span>。
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 bg-cream border-t border-navy/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 保單健檢助理. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default App;
