import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function ManageRequests() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (userRole !== 'librarian') return <Navigate to="/" />;

  const savedReservations =
    JSON.parse(localStorage.getItem('reservations')) || [];

  const [requests, setRequests] = useState(savedReservations);

  const handleAction = (id, newStatus) => {
    const updatedRequests = requests.map((req) =>
      req.id === id
        ? {
            ...req,
            status:
              newStatus === 'approved'
                ? 'تمت الموافقة'
                : 'مرفوض',
          }
        : req
    );

    setRequests(updatedRequests);

    localStorage.setItem(
      'reservations',
      JSON.stringify(updatedRequests)
    );

    alert(
      newStatus === 'approved'
        ? 'تمت الموافقة على الإعارة'
        : 'تم رفض الطلب'
    );
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

        <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
          <h1
            className="fw-bold mb-0"
            style={{ color: '#4A0404' }}
          >
            إدارة طلبات الاستعارة
          </h1>

          <span
            className="text-white fw-bold px-4 py-2 rounded-pill"
            style={{
              backgroundColor: '#ca8a04',
              fontSize: '14px',
            }}
          >
            {
              requests.filter(
                (r) =>
                  r.status === 'قيد الانتظار' ||
                  r.status === 'قيد المعالجة'
              ).length
            } طلبات جديدة
          </span>
        </div>

        <div className="bg-white shadow-lg rounded overflow-hidden border">
          <div className="table-responsive">
            <table className="table table-bordered text-end align-middle mb-0">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#4A0404' }}>
                  <th className="p-3">اسم الطالب</th>
                  <th className="p-3">الكتاب المطلوب</th>
                  <th className="p-3">المؤلف</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3 text-center">الإجراءات</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((req) => (
                  <tr
                    key={req.id}
                    style={{
                      opacity:
                        req.status === 'تمت الموافقة' ||
                        req.status === 'مرفوض'
                          ? 0.65
                          : 1,
                    }}
                  >
                    <td className="p-3 fw-bold text-secondary">
                      {localStorage.getItem('userName') || 'طالب'}
                    </td>

                    <td
                      className="p-3 fst-italic"
                      style={{ color: '#4A0404' }}
                    >
                      "{req.title}"
                    </td>

                    <td className="p-3 text-muted">
                      {req.author || 'غير محدد'}
                    </td>

                    <td className="p-3">
                      <span
                        className="fw-bold px-3 py-1 rounded-pill"
                        style={{
                          fontSize: '12px',
                          backgroundColor:
                            req.status === 'تمت الموافقة'
                              ? '#dcfce7'
                              : req.status === 'مرفوض'
                              ? '#fee2e2'
                              : '#fefce8',
                          color:
                            req.status === 'تمت الموافقة'
                              ? '#15803d'
                              : req.status === 'مرفوض'
                              ? '#b91c1c'
                              : '#a16207',
                        }}
                      >
                        {req.status || 'قيد المعالجة'}
                      </span>
                    </td>

                    <td className="p-3 text-center">
                      {req.status === 'تمت الموافقة' ||
                      req.status === 'مرفوض' ? (
                        <span
                          className="fw-bold"
                          style={{
                            color:
                              req.status === 'تمت الموافقة'
                                ? '#15803d'
                                : '#b91c1c',
                            fontSize: '13px',
                          }}
                        >
                          {req.status === 'تمت الموافقة'
                            ? '✓ تم القبول'
                            : '✕ تم الرفض'}
                        </span>
                      ) : (
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            onClick={() =>
                              handleAction(req.id, 'approved')
                            }
                            className="btn btn-success btn-sm fw-bold px-3"
                          >
                            موافقة
                          </button>

                          <button
                            onClick={() =>
                              handleAction(req.id, 'rejected')
                            }
                            className="btn btn-danger btn-sm fw-bold px-3"
                          >
                            رفض
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {requests.length === 0 && (
            <p className="p-5 text-center text-muted fst-italic mb-0">
              لا توجد طلبات حجز حالياً
            </p>
          )}
        </div>

        <div
          className="mt-4 p-4 text-secondary"
          style={{
            backgroundColor: '#fefce8',
            borderRight: '4px solid #ca8a04',
            fontSize: '14px',
          }}
        >
          <strong>ملاحظة للأمين:</strong> الموافقة على الطلب تعني حجز النسخة الورقية للطالب لمدة 24 ساعة ليقوم باستلامها من المكتبة.
        </div>

      </div>
    </div>
  );
}