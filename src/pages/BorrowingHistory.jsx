import React from 'react';
import { Navigate } from 'react-router-dom';

export default function BorrowingHistory() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');

    if (!isLoggedIn) return <Navigate to="/login" />;
    if (userRole !== 'librarian') return <Navigate to="/" />;

    const reservations =
        JSON.parse(localStorage.getItem('reservations')) || [];

    return (
        <div
            className="min-vh-100 pb-5"
            dir="rtl"
            style={{
                backgroundColor: '#fcfaf7',
                paddingTop: '130px',
                fontFamily: 'serif',
            }}
        >
            <div className="container">
                <h1
                    className="fw-bold mb-5 pe-4"
                    style={{
                        color: '#4A0404',
                        fontSize: '36px',
                        borderRight: '8px solid #ca8a04',
                    }}
                >
                    سجل حركة الاستعارات 📖
                </h1>

                {reservations.length === 0 ? (
                    <div className="bg-white shadow p-5 text-center">
                        <h4 className="text-muted mb-0">
                            لا توجد طلبات استعارة حالياً
                        </h4>
                    </div>
                ) : (
                    <div className="row g-4">
                        {reservations.map((item) => (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                <div
                                    className="bg-white p-4 shadow h-100"
                                    style={{
                                        borderTop: '4px solid #ca8a04',
                                        borderRadius: '6px',
                                    }}
                                >
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <h3 className="fw-bold mb-0" style={{ fontSize: '22px' }}>
                                            {localStorage.getItem('userName') || 'طالب'}
                                        </h3>

                                        <span
                                            className="fw-bold"
                                            style={{
                                                fontSize: '11px',
                                                padding: '6px 12px',
                                                borderRadius: '999px',
                                                backgroundColor: '#fefce8',
                                                color: '#a16207',
                                                border: '1px solid #fef08a',
                                            }}
                                        >
                                            {item.status || 'قيد المعالجة'}
                                        </span>
                                    </div>

                                    <p style={{ color: '#374151', fontSize: '16px' }}>
                                        📘 {item.title}
                                    </p>

                                    <p className="text-muted mb-1" style={{ fontSize: '13px' }}>
                                        المؤلف: {item.author}
                                    </p>

                                    <p className="text-muted mb-1" style={{ fontSize: '13px' }}>
                                        التصنيف: {item.category}
                                    </p>

                                    <p className="text-muted mb-0" style={{ fontSize: '13px' }}>
                                        الطلب مقدم إلكترونياً
                                    </p>

                                    <button
                                        onClick={() =>
                                            window.location.href = '/manage-requests'
                                        }
                                        className="btn w-100 fw-bold mt-4"
                                        style={{
                                            backgroundColor: '#4A0404',
                                            color: 'white',
                                        }}
                                    >
                                        مراجعة الطلب
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}