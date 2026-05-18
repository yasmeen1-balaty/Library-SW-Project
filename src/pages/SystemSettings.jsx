import React from 'react';

export default function SystemSettings() {
    return (
        <div
            className="min-vh-100 py-5"
            dir="rtl"
            style={{
                backgroundColor: "#fcfaf7",
                marginTop: "100px"
            }}
        >
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7">

                        <div className="card shadow-lg border-0">

                            <div className="card-body p-5">

                                {/* Title */}
                                <h2
                                    className="fw-bold mb-4 pb-3 border-bottom"
                                    style={{ color: "#4A0404" }}
                                >
                                    إعدادات وقوانين المكتبة ⚙️
                                </h2>

                                {/* Max Books */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        الحد الأقصى للكتب المستعارة (لكل طالب)
                                    </label>

                                    <input
                                        type="number"
                                        defaultValue="3"
                                        className="form-control"
                                    />
                                </div>

                                {/* Borrow Period */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        مدة الاستعارة الافتراضية (بالأيام)
                                    </label>

                                    <input
                                        type="number"
                                        defaultValue="14"
                                        className="form-control"
                                    />
                                </div>

                                {/* Late Fee */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        غرامة التأخير اليومية (شيكل)
                                    </label>

                                    <input
                                        type="number"
                                        defaultValue="1"
                                        className="form-control"
                                    />
                                </div>

                                {/* Alert */}
                                <div className="alert alert-primary mb-4">
                                    سيتم تطبيق هذه القوانين تلقائياً على كافة طلاب
                                    كلية عندليب العمد عند ربط النظام مع الباك إيند.
                                </div>

                                {/* Button */}
                                <button
                                    className="btn w-100 text-white fw-bold py-3"
                                    style={{
                                        backgroundColor: "#4A0404"
                                    }}
                                >
                                    حفظ الإعدادات الجديدة
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

