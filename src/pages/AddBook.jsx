import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const [acquisitionType, setAcquisitionType] = useState('purchase');

  if (userRole !== 'librarian') {
    return (
      <div
        className="text-center fw-bold text-danger"
        style={{
          paddingTop: '160px',
          fontSize: '28px',
          minHeight: '100vh',
          backgroundColor: '#fffdfa',
        }}
      >
        عذراً، لا تملك صلاحية الوصول لهذه الصفحة!
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('تم حفظ الكتاب وتوثيق بيانات المالية/التبرع بنجاح');
    navigate('/catalog');
  };

  return (
    <div
      className="min-vh-100 pb-5"
      dir="rtl"
      style={{
        backgroundColor: '#fffdfa',
        paddingTop: '130px',
        fontFamily: 'serif',
      }}
    >
      <div className="container">
        <div
          className="bg-white p-4 p-md-5 shadow-lg mx-auto"
          style={{
            maxWidth: '900px',
            borderTop: '8px solid #ca8a04',
            borderRadius: '6px',
          }}
        >
          <h2
            className="fw-bold mb-5 pb-4 border-bottom text-end"
            style={{
              color: '#4A0404',
              fontSize: '32px',
            }}
          >
            إضافة مرجع جديد للفهرس 📚
          </h2>

          <form onSubmit={handleSubmit} className="row g-4 text-end">

            <div className="col-12">
              <label className="form-label fw-bold">
                عنوان الكتاب
              </label>

              <input
                type="text"
                required
                className="form-control text-end"
                placeholder="مثلاً: تمريض العناية المركزة"
                style={{
                  padding: '14px',
                  borderColor: '#e5e7eb',
                  boxShadow: 'none',
                }}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">
                المؤلف
              </label>

              <input
                type="text"
                required
                className="form-control text-end"
                placeholder="اسم المؤلف"
                style={{
                  padding: '14px',
                  borderColor: '#e5e7eb',
                  boxShadow: 'none',
                }}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">
                التصنيف الأكاديمي
              </label>

              <select
                className="form-select text-end"
                style={{
                  padding: '14px',
                  borderColor: '#e5e7eb',
                  boxShadow: 'none',
                }}
              >
                <option>تمريض</option>
                <option>قبالة</option>
                <option>صيدلة</option>
                <option>طب عام</option>
              </select>
            </div>

            <div className="col-12 border-top pt-5 mt-4">
              <h3
                className="fw-bold text-center mb-5"
                style={{
                  color: '#4A0404',
                  fontSize: '32px',
                }}
              >
                تفاصيل الحيازة
              </h3>

              <div className="row g-4 align-items-end">
                <div className="col-12 col-md-6">
                  <label className="form-label fw-bold mb-3">
                    طريقة الحيازة
                  </label>

                  <select
                    value={acquisitionType}
                    onChange={(e) => setAcquisitionType(e.target.value)}
                    className="form-select text-end"
                    style={{
                      padding: '14px',
                      backgroundColor: '#fffbea',
                      border: '1px solid #fde68a',
                      boxShadow: 'none',
                      minHeight: '58px',
                    }}
                  >
                    <option value="purchase">شراء (فاتورة)</option>
                    <option value="donation">تبرع خارجي</option>
                  </select>
                </div>

                <div className="col-12 col-md-6">
                  {acquisitionType === 'purchase' ? (
                    <>
                      <label className="form-label fw-bold mb-3">
                        سعر الشراء
                      </label>

                      <input
                        type="number"
                        required
                        className="form-control text-end"
                        placeholder="0.00"
                        style={{
                          padding: '14px',
                          borderColor: '#e5e7eb',
                          boxShadow: 'none',
                          minHeight: '58px',
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <label className="form-label fw-bold mb-3">
                        اسم المتبرع
                      </label>

                      <input
                        type="text"
                        required
                        className="form-control text-end"
                        placeholder="اسم الشخص أو المؤسسة"
                        style={{
                          padding: '14px',
                          borderColor: '#e5e7eb',
                          boxShadow: 'none',
                          minHeight: '58px',
                        }}
                      />
                    </>
                  )}
                </div>

                {acquisitionType === 'purchase' && (
                  <div className="col-12">
                    <label className="form-label fw-bold mb-3">
                      اسم المورد / المكتبة
                    </label>

                    <input
                      type="text"
                      className="form-control text-end"
                      placeholder="مثلاً: مكتبة الجامعة"
                      style={{
                        padding: '14px',
                        borderColor: '#e5e7eb',
                        boxShadow: 'none',
                        minHeight: '58px',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="col-12">
              <label className="form-label fw-bold">
                وصف قصير
              </label>

              <textarea
                rows="4"
                className="form-control text-end"
                placeholder="اكتب نبذة عن محتوى الكتاب..."
                style={{
                  padding: '14px',
                  borderColor: '#e5e7eb',
                  boxShadow: 'none',
                }}
              ></textarea>
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn w-100 text-white fw-bold shadow mt-3"
                style={{
                  padding: '16px',
                  fontSize: '20px',
                  backgroundColor: '#4A0404',
                  border: 'none',
                  transition: '0.3s',
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = '#ca8a04')
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = '#4A0404')
                }
              >
                تأكيد الإضافة للفهرس والسجلات
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}