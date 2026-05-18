import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // محاكاة تسجيل دخول: إذا الإيميل يحتوي على "admin" يدخل كأمين مكتبة
    const role = email.includes('admin') ? 'librarian' : 'student';

    localStorage.setItem('userRole', role);
    localStorage.setItem('isLoggedIn', 'true');

    alert(
      `مرحباً بك! تم تسجيل الدخول بصلاحية: ${
        role === 'librarian' ? 'أمين مكتبة' : 'طالب'
      }`
    );

    navigate('/');
    window.location.reload(); // لتحديث الهيدر وإظهار الصلاحيات الجديدة
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center pt-5 px-3"
      style={{
        backgroundColor: '#fffdfa',
        fontFamily: 'serif',
      }}
    >
      <div
        className="w-100 bg-white shadow-lg p-4"
        style={{
          maxWidth: '450px',
          borderTop: '8px solid #4A0404',
          borderRadius: '4px',
        }}
      >
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              fontSize: '32px',
              color: '#4A0404',
            }}
          >
            تسجيل الدخول
          </h2>

          <p className="text-secondary mt-2">
            مكتبة كلية الحاجة عندليب العمد
          </p>
        </div>

        <form onSubmit={handleLogin} className="text-end">
          <div className="mb-4">
            <label className="form-label fw-bold text-secondary">
              البريد الإلكتروني أو الرقم الجامعي
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control text-end"
              placeholder="example@student.com"
              style={{
                padding: '12px',
                borderColor: '#e5e7eb',
                boxShadow: 'none',
              }}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold text-secondary">
              كلمة المرور
            </label>

            <input
              type="password"
              required
              className="form-control text-end"
              placeholder="**"
              style={{
                padding: '12px',
                borderColor: '#e5e7eb',
                boxShadow: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-bold shadow-lg"
            style={{
              padding: '12px',
              fontSize: '18px',
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
            دخول للمكتبة
          </button>
        </form>

        <p className="text-center mt-4 text-secondary">
          ليس لديك حساب؟{' '}
          <Link
            to="/register"
            className="fw-bold text-decoration-none"
            style={{ color: '#800020' }}
          >
            إنشاء حساب جديد
          </Link>
        </p>
      </div>
    </div>
  );
}