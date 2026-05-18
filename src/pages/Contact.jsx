import React from 'react';

export default function Contact() {
  return (
    <div
      className="min-vh-100 pt-5 pb-5"
      dir="rtl"
      style={{
        backgroundColor: '#fffdfa',
        fontFamily: 'serif',
        paddingTop: '140px',
      }}
    >
      <div className="container">

        {/* العنوان */}
        <div className="text-center mb-5">
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: '56px',
              color: '#4A0404',
            }}
          >
            اتصل بنا
          </h1>

          <div
            className="mx-auto"
            style={{
              width: '96px',
              height: '4px',
              backgroundColor: '#ca8a04',
            }}
          ></div>

          <p className="mt-4 text-secondary fst-italic">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم
            في الوصول لمصادركم العلمية
          </p>
        </div>

        <div className="row g-5 align-items-start">

          {/* قسم النموذج */}
          <div className="col-12 col-lg-6">
            <div
              className="bg-white p-4 shadow-lg"
              style={{
                borderTop: '8px solid #4A0404',
              }}
            >
              <h3
                className="fw-bold mb-4 pb-2"
                style={{
                  fontSize: '28px',
                  color: '#4A0404',
                  borderBottom: '1px solid #dee2e6',
                }}
              >
                أرسل استفسارك
              </h3>

              <form>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      placeholder="الاسم"
                      className="form-control text-end"
                      style={{
                        padding: '12px',
                        borderColor: '#e5e7eb',
                        boxShadow: 'none',
                      }}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      placeholder="الرقم الجامعي"
                      className="form-control text-end"
                      style={{
                        padding: '12px',
                        borderColor: '#e5e7eb',
                        boxShadow: 'none',
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="form-control text-end"
                    style={{
                      padding: '12px',
                      borderColor: '#e5e7eb',
                      boxShadow: 'none',
                    }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    placeholder="رسالتك أو الكتاب الذي تبحث عنه..."
                    rows="5"
                    className="form-control text-end"
                    style={{
                      padding: '12px',
                      borderColor: '#e5e7eb',
                      boxShadow: 'none',
                    }}
                  ></textarea>
                </div>

                <button
                  className="btn w-100 text-white fw-bold shadow-sm"
                  style={{
                    padding: '16px',
                    fontSize: '18px',
                    backgroundColor: '#4A0404',
                    border: 'none',
                    transition: '0.3s',
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      '#ca8a04')
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      '#4A0404')
                  }
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* قسم المعلومات والخريطة */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-4">

              <div className="row g-4">

                <div className="col-12 col-sm-6">
                  <div
                    className="p-4 text-white shadow h-100"
                    style={{
                      backgroundColor: '#4A0404',
                    }}
                  >
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: '#eab308' }}
                    >
                      📍 الموقع
                    </h4>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                      }}
                    >
                      نابلس، شارع عصيرة، مبنى كلية الحاجة
                      عندليب العمد
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div
                    className="bg-white p-4 shadow h-100"
                    style={{
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: '#4A0404' }}
                    >
                      📞 هاتف المكتبة
                    </h4>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      +970 (9) 238-0000
                    </p>
                  </div>
                </div>
              </div>

              {/* خريطة افتراضية */}
              <div
                className="w-100 overflow-hidden shadow-lg"
                style={{
                  height: '320px',
                  border: '4px solid white',
                }}
              >
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.6!2d35.2!3d32.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEyJzAwLjAiTiAzNcKwMTInMDAuMCJF!5e0!3m2!1sar!2s!4v1625500000000!5m2!1sar!2s"
                  className="w-100 h-100"
                  style={{
                    border: 0,
                    filter: 'grayscale(100%)',
                    opacity: '0.8',
                    transition: '0.3s',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}