import React from 'react';
import { Navigate } from 'react-router-dom';

export default function StudentPortal() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');

  // جلب البيانات المخزنة من localStorage
  const userName =
    localStorage.getItem('userName') || 'طالب مستجد';

  const userEmail =
    localStorage.getItem('userEmail') ||
    'example@college.edu';

  // بيانات ثابتة للمناقشة (سيتم استبدالها لاحقاً بالباك إند)
  const academicInfo = {
    id: '202110542',
    major: 'تمريض - سنة ثالثة',
    expiry: 'يونيو 2026',
  };

  if (!isLoggedIn) return <Navigate to="/login" />;

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

        {/* هيدر الصفحة (البطاقة الشخصية) */}
        <div
          className="bg-white shadow-lg overflow-hidden mb-5"
          style={{
            border: '1px solid #f3f4f6',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              backgroundColor: '#4A0404',
              height: '96px',
              position: 'relative',
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center text-white shadow"
              style={{
                position: 'absolute',
                bottom: '-48px',
                right: '40px',
                width: '96px',
                height: '96px',
                backgroundColor: '#ca8a04',
                borderRadius: '50%',
                border: '4px solid white',
                fontSize: '40px',
              }}
            >
              {userRole === 'librarian' ? '🛠️' : '🎓'}
            </div>
          </div>

          <div className="pt-5 pb-4 px-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div>
              <h1
                className="fw-bold mb-1"
                style={{
                  fontSize: '32px',
                  color: '#4A0404',
                }}
              >
                {userRole === 'librarian'
                  ? 'لوحة تحكم أمين المكتبة'
                  : userName}
              </h1>

              <p
                className="text-secondary fw-medium text-end"
              >
                {userRole === 'librarian'
                  ? 'المسؤول عن إدارة المراجع'
                  : `${academicInfo.major} | الرقم الجامعي: ${academicInfo.id}`}
              </p>
            </div>

            <div
              className="mt-3 mt-md-0 text-end bg-light p-3"
              style={{
                border: '1px solid #f3f4f6',
                borderRadius: '4px',
              }}
            >
              <p
                className="text-muted text-uppercase mb-1"
                style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                }}
              >
                البريد الإلكتروني
              </p>

              <p
                className="fw-bold mb-0"
                style={{ color: '#4A0404' }}
              >
                {userEmail}
              </p>
            </div>
          </div>
        </div>

        {/* محتوى الصفحة بناءً على الصلاحية */}
        {userRole === 'librarian' ? (
          /* واجهة الإدارة (أمين المكتبة) */
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div
                className="bg-white p-4 text-center shadow-sm h-100"
                style={{
                  borderTop: '4px solid #ca8a04',
                }}
              >
                <h3
                  className="fw-bold mb-2"
                  style={{
                    fontSize: '22px',
                    color: '#4A0404',
                  }}
                >
                  إدارة الفهرس
                </h3>

                <p className="text-secondary mb-4">
                  تحديث بيانات الكتب، إضافة مراجع جديدة،
                  أو حذف كتب قديمة.
                </p>

                <button
                  onClick={() =>
                    (window.location.href =
                      '/admin/add-book')
                  }
                  className="btn text-white fw-bold shadow-sm"
                  style={{
                    backgroundColor: '#4A0404',
                    padding: '12px 32px',
                    border: 'none',
                  }}
                >
                  إضافة كتاب جديد
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div
                className="bg-white p-4 text-center shadow-sm h-100"
                style={{
                  borderTop: '4px solid #2563eb',
                }}
              >
                <h3
                  className="fw-bold mb-2"
                  style={{
                    fontSize: '22px',
                    color: '#4A0404',
                  }}
                >
                  طلبات الاستعارة
                </h3>

                <p className="text-secondary mb-4">
                  مراجعة طلبات الحجز المقدمة من الطلاب
                  (3 طلبات جديدة).
                </p>

                <button
                  onClick={() =>
                    (window.location.href =
                      '/admin/manage-requests')
                  }
                  className="btn text-white fw-bold shadow-sm"
                  style={{
                    backgroundColor: '#1d4ed8',
                    padding: '12px 32px',
                    border: 'none',
                  }}
                >
                  عرض الطلبات الواردة
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* واجهة الطالب (السجل الشخصي) */
          <div className="row g-4 text-end">

            {/* إحصائيات سريعة */}
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-4">

                <div
                  className="bg-white p-4 shadow-sm"
                  style={{
                    borderRight: '4px solid #16a34a',
                  }}
                >
                  <h3
                    className="text-muted fw-bold text-uppercase mb-1"
                    style={{ fontSize: '12px' }}
                  >
                    كتب بحوزتك الآن
                  </h3>

                  <p
                    className="fw-bold mb-0"
                    style={{
                      fontSize: '36px',
                      color: '#4A0404',
                    }}
                  >
                    2
                  </p>
                </div>

                <div
                  className="bg-white p-4 shadow-sm"
                  style={{
                    borderRight: '4px solid #eab308',
                  }}
                >
                  <h3
                    className="text-muted fw-bold text-uppercase mb-1"
                    style={{ fontSize: '12px' }}
                  >
                    تاريخ انتهاء العضوية
                  </h3>

                  <p
                    className="fw-bold mb-0 text-secondary"
                    style={{ fontSize: '22px' }}
                  >
                    {academicInfo.expiry}
                  </p>
                </div>
              </div>
            </div>

            {/* سجل النشاط */}
            <div className="col-12 col-lg-8">
              <div
                className="bg-white shadow-lg p-4"
                style={{
                  border: '1px solid #f9fafb',
                }}
              >
                <h3
                  className="fw-bold mb-4 pb-3 d-flex justify-content-between align-items-center"
                  style={{
                    color: '#4A0404',
                    borderBottom: '1px solid #dee2e6',
                  }}
                >
                  <span
                    className="fw-normal text-muted fst-italic"
                    style={{ fontSize: '14px' }}
                  >
                    آخر تحديث: اليوم
                  </span>

                  <span>سجل الاستعارات النشط</span>
                </h3>

                <div className="d-flex flex-column gap-3">

                  <div
                    className="d-flex justify-content-between align-items-center p-4"
                    style={{
                      backgroundColor: '#fffdfa',
                      border: '1px solid #f3f4f6',
                      borderRadius: '4px',
                    }}
                  >
                    <span
                      className="fw-bold"
                      style={{
                        backgroundColor: '#f0fdf4',
                        color: '#15803d',
                        padding: '6px 16px',
                        borderRadius: '999px',
                        border: '1px solid #dcfce7',
                        fontSize: '12px',
                      }}
                    >
                      تحت يدك
                    </span>

                    <div className="text-end">
                      <h4
                        className="fw-bold"
                        style={{ color: '#4A0404' }}
                      >
                        أساسيات التمريض السريري
                      </h4>

                      <p
                        className="text-muted mt-1 mb-0"
                        style={{ fontSize: '12px' }}
                      >
                        تاريخ الاستلام: 14/05/2026
                      </p>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between align-items-center p-4"
                    style={{
                      backgroundColor: '#fffdfa',
                      border: '1px solid #f3f4f6',
                      borderRadius: '4px',
                      opacity: '0.7',
                    }}
                  >
                    <span
                      className="fw-bold"
                      style={{
                        backgroundColor: '#fefce8',
                        color: '#a16207',
                        padding: '6px 16px',
                        borderRadius: '999px',
                        border: '1px solid #fef08a',
                        fontSize: '12px',
                      }}
                    >
                      قيد المعالجة
                    </span>

                    <div className="text-end">
                      <h4
                        className="fw-bold"
                        style={{ color: '#4A0404' }}
                      >
                        علم الأدوية التمريضي
                      </h4>

                      <p
                        className="text-muted mt-1 mb-0"
                        style={{ fontSize: '12px' }}
                      >
                        طلب حجز مقدم إلكترونياً
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    (window.location.href = '/catalog')
                  }
                  className="btn w-100 fw-bold mt-4"
                  style={{
                    padding: '16px',
                    border: '2px dashed #e5e7eb',
                    color: '#9ca3af',
                    backgroundColor: 'transparent',
                  }}
                >
                  + تصفح الفهرس لإضافة المزيد
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}