import React from 'react';

export default function About() {
  return (
    <div
      className="min-vh-100 pb-5"
      style={{
        backgroundColor: '#fffdfa',
        fontFamily: 'serif',
      }}
    >

      {/* هيدر الصفحة */}
      <header
        className="text-center text-white position-relative"
        style={{
          backgroundColor: '#4A0404',
          paddingTop: '130px',
          paddingBottom: '80px',
        }}
      >
        <div className="position-relative px-4">
          <h1 className="fw-bold mb-4" style={{ fontSize: '44px' }}>
            عن المكتبة والكلية
          </h1>

          <div
            className="mx-auto mb-4"
            style={{
              width: '96px',
              height: '4px',
              backgroundColor: '#ca8a04',
            }}
          ></div>

          <p className="text-light fw-light fst-italic fs-5">
            الصرح العلمي لكلية الحاجة عندليب العمد - نابلس
          </p>
        </div>
      </header>

      <main
        className="container position-relative text-end"
        dir="rtl"
        style={{
          marginTop: '-40px',
          zIndex: 2,
        }}
      >

        {/* قسم التعريف العام */}
        <section
          className="bg-white shadow-lg p-4 p-md-5 mb-5"
          style={{
            borderBottom: '8px solid #ca8a04',
          }}
        >
          <h2
            className="fw-bold mb-4 d-flex align-items-center gap-3"
            style={{ color: '#4A0404', fontSize: '32px' }}
          >
            <span>🏛️</span> نبذة عن المكتبة
          </h2>

          <p
            className="text-secondary fs-5 mb-5"
            style={{ lineHeight: '2' }}
          >
            مكتبة كلية الحاجة عندليب العمد هي مركز أكاديمي يهدف إلى دعم البحث العلمي والتعليم من خلال توفير مصادر معرفية متنوعة، فضلاً عن بيئة مناسبة للدراسة والتعلم لدعم تخصصات التمريض والقبالة والمهن الطبية المساندة.
          </p>

          <div className="row g-4">
            {[
              { title: "المصادر", desc: "توفير مصادر مطبوعة وإلكترونية عالية الجودة", icon: "📚" },
              { title: "الدعم الأكاديمي", desc: "دعم الطلبة وأعضاء الهيئة التدريسية والباحثين", icon: "🎓" },
              { title: "سهولة الوصول", desc: "تسهيل الوصول للمعلومات بأساليب بحث حديثة", icon: "🔍" },
              { title: "بيئة هادئة", desc: "خلق بيئة تشجع على الدراسة والتركيز العميق", icon: "🤫" }
            ].map((goal, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div
                  className="p-4 h-100"
                  style={{
                    backgroundColor: '#f8f9fa',
                    borderRight: '4px solid #ca8a04',
                  }}
                >
                  <div className="mb-2" style={{ fontSize: '32px' }}>
                    {goal.icon}
                  </div>

                  <h3
                    className="fw-bold mb-2"
                    style={{ color: '#4A0404', fontSize: '18px' }}
                  >
                    {goal.title}
                  </h3>

                  <p
                    className="text-secondary mb-0"
                    style={{ fontSize: '14px', lineHeight: '1.8' }}
                  >
                    {goal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="row g-5">

          {/* العمود الأيمن */}
          <div className="col-12 col-lg-4">

            <section
              className="bg-white shadow p-4 mb-5"
              style={{ borderTop: '4px solid #4A0404' }}
            >
              <h3
                className="fw-bold mb-4 d-flex align-items-center gap-2"
                style={{ color: '#4A0404', fontSize: '22px' }}
              >
                <span>🕰️</span> أوقات العمل
              </h3>

              <p className="text-secondary fw-bold mb-2">
                من الأحد إلى الخميس:
              </p>

              <p
                className="fw-bold mb-4"
                style={{ color: '#a16207', fontSize: '28px' }}
              >
                8:00 AM - 3:00 PM
              </p>

              <p className="text-muted fst-italic mb-0" style={{ fontSize: '12px' }}>
                * قد تتغير الأوقات خلال الإجازات الرسمية والامتحانات.
              </p>
            </section>

            <section
              className="text-white shadow p-4 mb-5"
              style={{ backgroundColor: '#4A0404' }}
            >
              <h3
                className="fw-bold mb-4 d-flex align-items-center gap-2"
                style={{ color: '#eab308', fontSize: '22px' }}
              >
                <span>🎟️</span> سياسة الدخول
              </h3>

              <ul className="list-unstyled text-light">
                <li className="mb-3">• طلبة الكلية</li>
                <li className="mb-3">• أعضاء الهيئة التدريسية والموظفون</li>
                <li className="mb-3">• الزوار وفق سياسات خاصة</li>
              </ul>

              <div
                className="mt-4 p-3"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '14px',
                }}
              >
                🔹 يجب إبراز الهوية الجامعية أو بطاقة الزائر عند الدخول.
              </div>
            </section>

          </div>

          {/* العمود الأوسط والأيسر */}
          <div className="col-12 col-lg-8">

            <section className="bg-white shadow p-4 mb-5">
              <h3
                className="fw-bold mb-4 pb-2 border-bottom"
                style={{ color: '#4A0404', fontSize: '26px' }}
              >
                📖 خدمات المكتبة والمصادر
              </h3>

              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <h4
                    className="fw-bold mb-3"
                    style={{ color: '#a16207', fontSize: '18px' }}
                  >
                    📘 المصادر المتوفرة:
                  </h4>

                  <ul className="text-secondary small lh-lg">
                    <li>كتب مطبوعة مخصصة للتمريض والقبالة</li>
                    <li>مراجع وقواميس طبية</li>
                    <li>رسائل جامعية وأطاريح</li>
                    <li>مصادر إلكترونية (كتب + قواعد بيانات)</li>
                  </ul>
                </div>

                <div className="col-12 col-md-6">
                  <h4
                    className="fw-bold mb-3"
                    style={{ color: '#a16207', fontSize: '18px' }}
                  >
                    🧑‍🏫 الدعم البحثي:
                  </h4>

                  <ul className="text-secondary small lh-lg">
                    <li>جلسات تدريب على البحث العلمي</li>
                    <li>مساعدات في التوثيق (APA / MLA)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white shadow p-4 mb-5">
              <h3
                className="fw-bold mb-4"
                style={{ color: '#4A0404', fontSize: '26px' }}
              >
                📜 قواعد استعارة المواد
              </h3>

              <div className="table-responsive">
                <table className="table table-bordered text-end align-middle">
                  <thead>
                    <tr className="text-white" style={{ backgroundColor: '#4A0404' }}>
                      <th className="p-3">الفئة</th>
                      <th className="p-3">عدد الكتب</th>
                      <th className="p-3">المدة</th>
                    </tr>
                  </thead>

                  <tbody className="text-secondary">
                    <tr className="table-light">
                      <td className="p-3 fw-bold">طلاب البكالوريوس</td>
                      <td className="p-3">3 كتب</td>
                      <td className="p-3">14 يوم</td>
                    </tr>

                    <tr>
                      <td className="p-3 fw-bold">طلاب الماجستير</td>
                      <td className="p-3">5 كتب</td>
                      <td className="p-3">21 يوم</td>
                    </tr>

                    <tr className="table-light">
                      <td className="p-3 fw-bold">الهيئة التدريسية</td>
                      <td className="p-3">10 كتب</td>
                      <td className="p-3">30 يوم</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                className="mt-4 p-4"
                style={{
                  backgroundColor: '#eff6ff',
                  borderRight: '4px solid #3b82f6',
                  color: '#4b5563',
                  fontSize: '14px',
                }}
              >
                <p className="mb-2">
                  💡 <strong>التجديد:</strong> يمكن التجديد مرتين بحد أقصى عبر الموقع أو مكتب الاستعارة.
                </p>

                <p className="mb-0">
                  ⚠️ <strong>تنبيه:</strong> المراجع والقواميس للاستخدام الداخلي فقط ولا تُعار.
                </p>
              </div>
            </section>

            <section
              className="shadow p-4 mb-5"
              style={{
                backgroundColor: '#fef2f2',
                borderRight: '8px solid #b91c1c',
              }}
            >
              <h3
                className="fw-bold mb-4"
                style={{ color: '#7f1d1d', fontSize: '26px' }}
              >
                📍 السلوك والممنوعات
              </h3>

              <div className="row g-4" style={{ color: '#991b1b' }}>
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">❌ الأكل أو الشرب داخل القاعات</li>
                    <li className="mb-2">❌ مكالمات هاتفية بصوت مرتفع</li>
                  </ul>
                </div>

                <div className="col-12 col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">❌ الكتابة أو التظليل على الكتب</li>
                    <li className="mb-2">❌ إخراج الكتب دون تسجيل رسمي</li>
                  </ul>
                </div>
              </div>

              <p
                className="mt-4 mb-0 fw-bold"
                style={{ color: '#15803d', fontSize: '14px' }}
              >
                ✅ يُسمح باستخدام الأجهزة الشخصية (محمول/لاب توب) بوضع الصامت.
              </p>
            </section>

          </div>
        </div>

        {/* تذييل الصفحة */}
        <section
          className="mt-5 text-white p-4 p-md-5 text-center shadow-lg"
          style={{
            backgroundColor: '#ca8a04',
            borderRadius: '4px',
          }}
        >
          <h3 className="fw-bold mb-4" style={{ fontSize: '26px' }}>
            💡 دليل استخدام المكتبة
          </h3>

          <div className="row g-4 small">
            <div className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{ border: '1px solid rgba(255,255,255,0.4)' }}
              >
                1. ابحث أولاً في الفهرس الإلكتروني قبل القدوم
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{ border: '1px solid rgba(255,255,255,0.4)' }}
              >
                2. احترم وقتك ووقت الآخرين في القاعات الدراسية
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{ border: '1px solid rgba(255,255,255,0.4)' }}
              >
                3. استخدم قواعد البيانات للوصول لمراجع حديثة
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}