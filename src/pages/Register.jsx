import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  
  // 1. تعريف الـ States لتخزين ما يكتبه المستخدم
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // 2. التعديل المطلوب: تخزين الاسم الكامل في ذاكرة المتصفح
    const fullName = firstName + ' ' + lastName;
    localStorage.setItem('userName', fullName);
    localStorage.setItem('userEmail', email);
    
    alert(`أهلاً يا ${firstName}! تم إنشاء حسابك بنجاح. يمكنك الآن تسجيل الدخول.`);
    
    // التوجه لصفحة تسجيل الدخول
    navigate('/login');
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
          maxWidth: '550px',
          borderTop: '8px solid #ca8a04',
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
            عضوية جديدة
          </h2>

          <p
            className="mt-2 text-secondary"
            style={{ fontSize: '16px' }}
          >
            انضم لمجتمع مكتبة الكلية الرقمي
          </p>
        </div>

        <form onSubmit={handleRegister} className="text-end">
          <div className="row g-3 mb-3">
            <div className="col-6">
              <label className="form-label fw-bold text-secondary">
                الاسم الأخير
              </label>

              <input
                type="text"
                required
                className="form-control text-end"
                style={{
                  padding: '12px',
                  borderColor: '#e5e7eb',
                  boxShadow: 'none',
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="col-6">
              <label className="form-label fw-bold text-secondary">
                الاسم الأول
              </label>

              <input
                type="text"
                required
                className="form-control text-end"
                style={{
                  padding: '12px',
                  borderColor: '#e5e7eb',
                  boxShadow: 'none',
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-secondary">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              required
              className="form-control text-end"
              style={{
                padding: '12px',
                borderColor: '#e5e7eb',
                boxShadow: 'none',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-secondary">
              كلمة المرور
            </label>

            <input
              type="password"
              required
              className="form-control text-end"
              style={{
                padding: '12px',
                borderColor: '#e5e7eb',
                boxShadow: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold mt-3 text-white"
            style={{
              padding: '16px',
              fontSize: '18px',
              backgroundColor: '#ca8a04',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = '#4A0404')
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = '#ca8a04')
            }
          >
            تأكيد التسجيل
          </button>
        </form>

        <p className="text-center mt-4 text-secondary">
          لديك حساب بالفعل؟{' '}
          <Link
            to="/login"
            className="fw-bold text-decoration-none"
            style={{ color: '#a16207' }}
          >
            سجل دخولك هنا
          </Link>
        </p>
      </div>
    </div>
  );
}