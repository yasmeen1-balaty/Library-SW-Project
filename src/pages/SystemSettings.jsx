import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Settings() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (userRole !== 'librarian') return <Navigate to="/" />;

  const [borrowDays, setBorrowDays] = useState(
    localStorage.getItem('borrowDays') || '14'
  );

  const [maxBooks, setMaxBooks] = useState(
    localStorage.getItem('maxBooks') || '3'
  );

  const [dailyFine, setDailyFine] = useState(
    localStorage.getItem('dailyFine') || '1'
  );

  const [workHours, setWorkHours] = useState(
    localStorage.getItem('workHours') || '8:00 AM - 3:00 PM'
  );

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem('borrowDays', borrowDays);
    localStorage.setItem('maxBooks', maxBooks);
    localStorage.setItem('dailyFine', dailyFine);
    localStorage.setItem('workHours', workHours);

    alert('تم حفظ إعدادات المكتبة بنجاح');
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
          className="bg-white shadow-lg p-4 p-md-5 mx-auto"
          style={{
            maxWidth: '850px',
            borderTop: '8px solid #ca8a04',
            borderRadius: '6px',
          }}
        >
          <h1
            className="fw-bold mb-5 pb-4 border-bottom"
            style={{ color: '#4A0404' }}
          >
            إعدادات المكتبة ⚙️
          </h1>

          <form onSubmit={handleSave} className="row g-4 text-end">
            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">
                عدد أيام الاستعارة
              </label>
              <input
                type="number"
                className="form-control text-end"
                value={borrowDays}
                onChange={(e) => setBorrowDays(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">
                الحد الأقصى للكتب
              </label>
              <input
                type="number"
                className="form-control text-end"
                value={maxBooks}
                onChange={(e) => setMaxBooks(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">
                الغرامة اليومية
              </label>
              <input
                type="number"
                className="form-control text-end"
                value={dailyFine}
                onChange={(e) => setDailyFine(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">
                أوقات الدوام
              </label>
              <input
                type="text"
                className="form-control text-end"
                value={workHours}
                onChange={(e) => setWorkHours(e.target.value)}
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn w-100 text-white fw-bold mt-3"
                style={{
                  backgroundColor: '#4A0404',
                  padding: '14px',
                  fontSize: '18px',
                }}
              >
                حفظ الإعدادات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}