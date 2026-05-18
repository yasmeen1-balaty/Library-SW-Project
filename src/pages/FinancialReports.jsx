import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function FinancialReports() {
    const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true";

    const userRole =
        localStorage.getItem("userRole");

    if (!isLoggedIn)
        return <Navigate to="/login" />;

    if (userRole !== "librarian")
        return <Navigate to="/" />;
    
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const financialData = [
        {
            id: 1,
            title: "تمريض صحة المجتمع",
            type: "purchase",
            amount: 150,
            source: "مكتبة جرير",
            date: "2026-01-10",
            copies: 5,
            invoiceNo: "INV-9920",
            supplierPhone: "09-2384411",
            notes: "تم الاستلام بحالة ممتازة"
        },
        {
            id: 2,
            title: "أساسيات القبالة",
            type: "donation",
            amount: 0,
            source: "د. أحمد علي",
            date: "2026-01-12",
            copies: 2,
            invoiceNo: "N/A",
            supplierPhone: "0599-000111",
            notes: "تبرع شخصي للكلية"
        },
        {
            id: 3,
            title: "علم الأدوية السريري",
            type: "purchase",
            amount: 220,
            source: "دار الشروق",
            date: "2026-01-15",
            copies: 10,
            invoiceNo: "INV-8852",
            supplierPhone: "02-2956633",
            notes: "مستوى ثالث"
        }
    ];

    const totalSpent = financialData.reduce((acc, item) => acc + item.amount, 0);
    const totalDonations = financialData.filter(
        item => item.type === "donation"
    ).length;

    const openDetails = (item) => {
        setSelectedItem(item);
    };

    const handleDelete = (e, id) => {
        e.stopPropagation();

        if (window.confirm("هل أنت متأكد من حذف هذا السجل المالي؟")) {
            alert("سيتم حذف السجل رقم: " + id);
        }
    };

    return (
        <div
            className="min-vh-100 py-5"
            dir="rtl"
            style={{ backgroundColor: "#fcfaf7", marginTop: "100px" }}
        >
            <div className="container">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-end mb-5 border-end border-4 pe-3">
                    <div>
                        <h2 className="fw-bold mb-2" style={{ color: "#4A0404" }}>
                            التقارير المالية والمشتريات 📊
                        </h2>
                        <p className="text-muted mb-0">
                            الإدارة المالية لمقتنيات المكتبة
                        </p>
                    </div>

                    <button className="btn btn-success">
                        تحميل تقرير
                    </button>
                </div>

                {/* Stats */}
                <div className="row g-4 mb-5">

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body">
                                <small className="text-muted">إجمالي المشتريات</small>
                                <h3 className="fw-bold text-success mt-2">
                                    {totalSpent} شيكل
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body">
                                <small className="text-muted">كتب التبرعات</small>
                                <h3 className="fw-bold text-primary mt-2">
                                    {totalDonations} مراجع
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body">
                                <small className="text-muted">سنة التقرير</small>
                                <h3 className="fw-bold text-warning mt-2">
                                    2026
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Filters */}
                <div className="card shadow-sm border-0 mb-4">
                    <div className="card-body">
                        <div className="row g-3">

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="بحث عن كتاب أو فاتورة..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <select className="form-select">
                                    <option>كل الحالات</option>
                                    <option>شراء</option>
                                    <option>تبرع</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <select className="form-select">
                                    <option>2026</option>
                                    <option>2025</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="card shadow-lg border-0">
                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0 text-end">

                            <thead
                                style={{
                                    backgroundColor: "#4A0404",
                                    color: "white"
                                }}
                            >
                                <tr>
                                    <th>الكتاب</th>
                                    <th>الحالة</th>
                                    <th>المصدر</th>
                                    <th className="text-center">إجراءات</th>
                                </tr>
                            </thead>

                            <tbody>
                                {financialData.map((item) => (
                                    <tr
                                        key={item.id}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => openDetails(item)}
                                    >

                                        <td className="fw-bold">
                                            {item.title}
                                        </td>

                                        <td>
                                            <span
                                                className={`badge ${item.type === "purchase"
                                                        ? "bg-success"
                                                        : "bg-primary"
                                                    }`}
                                            >
                                                {item.type === "purchase"
                                                    ? "شراء"
                                                    : "تبرع"}
                                            </span>
                                        </td>

                                        <td className="text-muted">
                                            {item.source}
                                        </td>

                                        <td className="text-center">

                                            <button
                                                className="btn btn-sm btn-outline-primary me-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    alert("صفحة تعديل");
                                                }}
                                            >
                                                تعديل
                                            </button>

                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={(e) =>
                                                    handleDelete(e, item.id)
                                                }
                                            >
                                                حذف
                                            </button>

                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>

                {/* Modal */}
                {selectedItem && (
                    <div
                        className="modal fade show d-block"
                        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
                    >
                        <div className="modal-dialog modal-dialog-centered">

                            <div className="modal-content">

                                <div
                                    className="modal-header"
                                    style={{
                                        backgroundColor: "#4A0404",
                                        color: "white"
                                    }}
                                >
                                    <h5 className="modal-title">
                                        تفاصيل السجل المالي
                                    </h5>

                                    <button
                                        className="btn-close btn-close-white"
                                        onClick={() => setSelectedItem(null)}
                                    ></button>
                                </div>

                                <div className="modal-body">

                                    <p>
                                        <strong>عدد النسخ:</strong>{" "}
                                        {selectedItem.copies}
                                    </p>

                                    <p>
                                        <strong>رقم الفاتورة:</strong>{" "}
                                        {selectedItem.invoiceNo}
                                    </p>

                                    <p>
                                        <strong>المصدر:</strong>{" "}
                                        {selectedItem.source}
                                    </p>

                                    <p>
                                        <strong>الهاتف:</strong>{" "}
                                        {selectedItem.supplierPhone}
                                    </p>

                                    <div className="alert alert-warning mb-0">
                                        {selectedItem.notes}
                                    </div>

                                </div>

                                <div className="modal-footer">
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => setSelectedItem(null)}
                                    >
                                        إغلاق
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}


