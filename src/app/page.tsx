import Image from "next/image";

const brandMarks = [
  {
    name: "مرسى",
    category: "مطاعم ومأكولات بحرية",
    image: "/brands/marsa.jpg",
  },
  {
    name: "هليل",
    category: "علامة غذائية سعودية",
    image: "/brands/haleel.jpg",
  },
  {
    name: "غزول",
    category: "حلويات ومأكولات محلية",
    image: "/brands/gazool.jpg",
  },
  {
    name: "جمر",
    category: "مشاوي وتجربة طعام ساخنة",
    image: "/brands/jamar.jpg",
  },
  {
    name: "هندسة المعصوب",
    category: "مخبوزات وحلويات شعبية",
    image: "/brands/almaqsoob.png",
  },
  {
    name: "مفرزن",
    category: "منتجات غذائية مجمدة",
    image: "/brands/muferzn.jpg",
  },
];

const pillars = [
  {
    title: "استثمار ذكي",
    copy: "نختار فرص الأغذية والمشروبات القابلة للنمو، ونبني معها نموذج تشغيل واضح ومربح.",
  },
  {
    title: "تشغيل المطاعم",
    copy: "نساند العلامات في تطوير القوائم، التجربة، الموردين، الجودة، والتوسع متعدد الفروع.",
  },
  {
    title: "بناء العلامات",
    copy: "نحول الأفكار الواعدة إلى علامات مميزة في السوق السعودي بتصميم وتجربة قابلة للتذكر.",
  },
];

const stats = [
  { value: "SME", label: "تركيز على المنشآت الصغيرة والمتوسطة" },
  { value: "F&B", label: "استثمارات في الأغذية والمشروبات" },
  { value: "KSA", label: "نمو من السوق السعودي" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="m4.93 4.93 3.54 3.54" />
      <path d="m15.53 15.53 3.54 3.54" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="m4.93 19.07 3.54-3.54" />
      <path d="m15.53 8.47 3.54-3.54" />
    </svg>
  );
}

function HeroPlate() {
  return (
    <div className="food-scene" aria-label="عرض بصري لاستثمارات يونايتد الغذائية">
      <div className="plate">
        <span className="plate-ring" />
        <span className="plate-core" />
        <span className="ingredient ingredient-one" />
        <span className="ingredient ingredient-two" />
        <span className="ingredient ingredient-three" />
        <span className="ingredient ingredient-four" />
      </div>

      <div className="floating-card card-invest">
        <span>محفظة الاستثمارات</span>
        <strong>Food & Beverage</strong>
      </div>

      <div className="floating-card card-growth">
        <span>نمو العلامات</span>
        <strong>Brand Scaling</strong>
      </div>

      <div className="signal-board">
        <div>
          <span>Concept</span>
          <strong>Market fit</strong>
        </div>
        <div>
          <span>Operations</span>
          <strong>Quality system</strong>
        </div>
        <div>
          <span>Expansion</span>
          <strong>Ready to scale</strong>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f7f9ff] text-[#071b3a]">
      <section className="hero-band relative min-h-screen">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c69a2d]"
          >
            <Image
              src="https://unitedfood.sa/wp-content/uploads/2024/07/logo.png"
              alt="United Food"
              width={1795}
              height={402}
              priority
              className="h-9 w-auto max-w-[150px] object-contain [filter:brightness(0)_saturate(100%)_invert(10%)_sepia(73%)_saturate(1847%)_hue-rotate(196deg)_brightness(89%)_contrast(101%)]"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-[#40557c] md:flex">
            <a className="transition hover:text-[#123e7c]" href="#about">من نحن</a>
            <a className="transition hover:text-[#123e7c]" href="#investments">استثماراتنا</a>
            <a className="transition hover:text-[#123e7c]" href="#brands">العلامات</a>
            <a className="transition hover:text-[#123e7c]" href="#contact">تواصل معنا</a>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#071b3a] px-4 text-sm font-bold text-white transition hover:bg-[#123e7c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c69a2d]"
          >
            ابدأ الشراكة
            <span className="rotate-180">
              <ArrowIcon />
            </span>
          </a>
        </nav>

        <div id="home" className="mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-[8px] border border-[#d8b45a] bg-white/72 px-4 py-2 text-sm font-bold text-[#4d638c] shadow-sm backdrop-blur">
              شركة استثمارية في قطاع الأغذية والمشروبات
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.16] tracking-[0] text-[#071b3a] sm:text-5xl lg:text-6xl">
              نبني علامات غذائية تنمو بثقة وتبقى في ذاكرة السوق.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#40557c] sm:text-lg">
              يونايتد القابضة تستثمر في الأغذية والمشروبات والمطاعم، وتساند المنشآت الصغيرة والمتوسطة بخبرة تشغيلية وتسويقية ورأس مال بشري موهوب لصناعة علامات فريدة ومبتكرة.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#investments"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#123e7c] px-5 text-sm font-black text-white shadow-[0_18px_48px_rgba(18,62,124,0.24)] transition hover:bg-[#0a2f63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#071b3a]"
              >
                اكتشف نموذجنا
                <span className="rotate-180">
                  <ArrowIcon />
                </span>
              </a>
              <a
                href="#brands"
                className="inline-flex h-12 items-center justify-center rounded-[8px] border border-[#d9c589] bg-white/75 px-5 text-sm font-black text-[#071b3a] transition hover:border-[#123e7c] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c69a2d]"
              >
                شاهد العلامات
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-[8px] border border-[#e3d4a0] bg-white/64 p-4 backdrop-blur">
                  <strong className="block text-xl font-black text-[#123e7c]">{stat.value}</strong>
                  <span className="mt-2 block text-sm leading-6 text-[#4a5d7d]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroPlate />
        </div>
      </section>

      <section id="about" className="bg-[#071b3a] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d8b45a]">من نحن</p>
            <h2 className="mt-3 text-3xl font-black leading-tight lg:text-4xl">
              شريك استثماري يفهم تفاصيل المطاعم من الفكرة حتى التوسع.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[8px] border border-white/12 bg-white/[0.07] p-6">
              <h3 className="text-lg font-black text-[#d8b45a]">مهمتنا</h3>
              <p className="mt-3 leading-8 text-white/78">
                تحقيق النجاح المشترك مع الشركاء عبر خبرة فريقنا في قطاعات الأعمال وقطاع التغذية والمطاعم.
              </p>
            </div>
            <div className="rounded-[8px] border border-white/12 bg-white/[0.07] p-6">
              <h3 className="text-lg font-black text-[#d8b45a]">رؤيتنا</h3>
              <p className="mt-3 leading-8 text-white/78">
                تطوير محفظة علامات سعودية مبتكرة قادرة على المنافسة، النمو، وصناعة تجارب ضيافة عالية الجودة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="investments" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#c69a2d]">استثماراتنا</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#071b3a] lg:text-4xl">
                منظومة واحدة تجمع رأس المال، التشغيل، والهوية.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#4a5d7d] lg:text-lg">
              نبحث عن علامات واعدة في الأغذية والمشروبات، ثم نعمل معها على تطوير التجربة، ضبط الجودة، تحسين الربحية، وبناء خط نمو واضح.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group rounded-[8px] border border-[#e3d4a0] bg-[#fbf8ec] p-6 transition hover:-translate-y-1 hover:border-[#123e7c] hover:shadow-[0_24px_60px_rgba(18,62,124,0.13)]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#e8efff] text-[#123e7c] transition group-hover:bg-[#123e7c] group-hover:text-white">
                  <SparkIcon />
                </div>
                <h3 className="text-lg font-black text-[#071b3a]">{pillar.title}</h3>
                <p className="mt-3 leading-8 text-[#4a5d7d]">{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="brand-band py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#c69a2d]">العلامات التجارية</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#071b3a] lg:text-4xl">
                مساحة مصممة لعلامات تتنوع وتتكامل.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {brandMarks.map((brand) => (
              <article
                key={brand.name}
                className="group grid min-h-64 overflow-hidden rounded-[8px] border border-[#d9c589] bg-white shadow-[0_18px_46px_rgba(7,27,58,0.08)] transition hover:-translate-y-1 hover:border-[#123e7c] hover:shadow-[0_28px_70px_rgba(7,27,58,0.14)]"
              >
                <div className="flex min-h-52 items-center justify-center bg-[#f7f9ff] p-8">
                  <Image
                    src={brand.image}
                    alt={`شعار ${brand.name}`}
                    width={500}
                    height={500}
                    loading="eager"
                    className="max-h-40 w-auto object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#c69a2d]">
                    United Brand
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-[#071b3a]">
                    {brand.name}
                  </h3>
                  <p className="mt-3 leading-7 text-[#4a5d7d]">{brand.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 sm:px-8 lg:grid-cols-[0.58fr_1.42fr] lg:px-10">
          <div className="overflow-hidden rounded-[8px] bg-[#123e7c] text-white shadow-[0_24px_70px_rgba(7,27,58,0.18)] lg:max-w-md">
            <div className="relative h-full min-h-[280px] sm:min-h-[320px]">
              <Image
                src="/ceo-mohammed-alqahtani.jpeg"
                alt="م. محمد القحطاني"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b3a]/88 via-[#071b3a]/14 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ead38a]">
                  رسالة المدير التنفيذي
                </p>
                <h2 className="mt-3 text-2xl font-black leading-tight">
                  م. محمد القحطاني
                </h2>
              </div>
            </div>
          </div>
          <div className="flex">
            <blockquote className="flex h-full items-center rounded-[8px] border border-[#e3d4a0] bg-[#fbf8ec] p-7 text-base font-bold leading-8 text-[#071b3a] sm:text-lg lg:leading-9">
              نهدف في يونايتد بشكل أساسي إلى دعم رواد الأعمال وتطوير قطاع التغذية في المملكة كونه عنصر أساسي في أهداف رؤية المملكة ٢٠٣٠ التي تتطلع إلى الريادة في السياحة العالمية، ويعتبر هذا القطاع أحد أهم ركائز السياحة في جميع بلدان العالم. فريق يونايتد يتكون من خبرات كبيرة تمتلك اطلاع كبير على السوق المحلي والخليجي، وعلى دراية كاملة بنبض الأسواق والقوة الشرائية وتطوير المنتجات إلى الحد الذي يرضي العميل. قوتنا تتركز على زيادة قاعدة العملاء باستخدام أحدث وأقوى الأدوات التسويقية وأكثرها انتشار، مما يساهم بشكل أساسي في زيادة الظهور الجيد لكل علامة تجارية على حدا وبالتالي تحقيق المكاسب الكبيرة والنجاح المؤكد.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#071b3a] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d8b45a]">تواصل معنا</p>
            <h2 className="mt-3 text-3xl font-black leading-tight lg:text-4xl">هل لديك علامة أو فرصة استثمارية؟</h2>
            <p className="mt-4 leading-8 text-white/76">
              شاركنا فكرتك، وسنحوّل الحديث الأول إلى مسار واضح للتقييم، الشراكة، والنمو.
            </p>
          </div>

          <form className="grid gap-3 rounded-[8px] border border-white/12 bg-white/[0.07] p-5 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              <input aria-label="الاسم" placeholder="الاسم" className="contact-input" />
              <input aria-label="البريد الالكتروني" placeholder="البريد الالكتروني" className="contact-input" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input aria-label="رقم الجوال" placeholder="رقم الجوال" className="contact-input" />
              <input aria-label="المهنة" placeholder="المهنة" className="contact-input" />
            </div>
            <textarea aria-label="الرسالة" placeholder="الرسالة" className="contact-input min-h-32 resize-none" />
            <button className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[#d8b45a] px-5 text-sm font-black text-[#071b3a] transition hover:bg-[#c69a2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              إرسال
              <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#041126] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d8b45a]">
              تواصل معنا
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight lg:text-3xl">
              لا تتردد في التواصل
            </h2>
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.05] p-5">
            <h3 className="text-lg font-black text-[#ead38a]">بيانات التواصل</h3>
            <div className="mt-4 grid gap-3 text-lg font-bold leading-8">
              <a
                href="tel:+966500215215"
                dir="ltr"
                className="block text-right [unicode-bidi:isolate] transition hover:text-[#d8b45a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
              >
                +966 500 215 215
              </a>
              <a
                href="mailto:investment@fb-united.com"
                className="break-all transition hover:text-[#d8b45a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
              >
                investment@fb-united.com
              </a>
            </div>
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.05] p-5">
            <h3 className="text-lg font-black text-[#ead38a]">أوقات العمل</h3>
            <p className="mt-4 text-lg font-bold leading-8">
              الاحد - الخميس
              <span className="mt-1 block text-white/76">9:00AM - 5:00PM</span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-sm font-bold text-white/58 sm:px-8">
          © 2024 United Investment Group LLC – All Rights Reserved
        </div>
      </footer>
    </main>
  );
}
