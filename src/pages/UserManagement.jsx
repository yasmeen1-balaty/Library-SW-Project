import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function UserManagement() {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true";

    const userRole =
        localStorage.getItem("userRole");

    if (!isLoggedIn)
        return <Navigate to="/login" />;

    if (userRole !== "librarian")
        return <Navigate to="/" />;
    
    const [users] = useState([
        {
            id: 1,
            name: "أحمد محمد",
            email: "ahmad@andaleeb.edu.ps",
            role: "student",
            status: "active",
            borrowedBooks: 2
        },
        {
            id: 2,
            name: "سارة محمود",
            email: "sara@andaleeb.edu.ps",
            role: "student",
            status: "suspended",
            borrowedBooks: 0
        },
    ]);

    return (
        <div
            className="min-vh-100 py-5"
            dir="rtl"
            style={{ backgroundColor: "#fcfaf7", marginTop: "100px" }}
        >
            <div className="container">

                {/* العنوان */}
                <h1
                    className="fw-bold mb-4 border-end border-4 pe-3"
                    style={{ color: "#4A0404" }}
                >
                    إدارة مستخدمي النظام 👥
                </h1>

                {/* الجدول */}
                <div className="card shadow-lg border-0">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover text-end mb-0">

                                <thead className="table-light">
                                    <tr>
                                        <th className="p-3">الاسم</th>
                                        <th className="p-3">البريد الإلكتروني</th>
                                        <th className="p-3">الكتب المستعارة</th>
                                        <th className="p-3">الحالة</th>
                                        <th className="p-3 text-center">إجراءات</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>

                                            <td className="p-3 fw-bold">
                                                {user.name}
                                            </td>

                                            <td className="p-3 text-muted">
                                                {user.email}
                                            </td>

                                            <td className="p-3">
                                                {user.borrowedBooks}
                                            </td>

                                            <td className="p-3">
                                                <span
                                                    className={`badge rounded-pill px-3 py-2 ${user.status === "active"
                                                            ? "bg-success-subtle text-success"
                                                            : "bg-danger-subtle text-danger"
                                                        }`}
                                                >
                                                    {user.status === "active" ? "نشط" : "موقوف"}
                                                </span>
                                            </td>

                                            <td className="p-3 text-center">
                                                <button className="btn btn-link text-primary text-decoration-none me-2">
                                                    تعديل
                                                </button>

                                                <button className="btn btn-link text-danger text-decoration-none">
                                                    تعطيل
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
