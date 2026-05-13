import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image1.png";

export default function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{
        backgroundColor: "#4A0404",
        borderTop: "4px solid #d4a017",
        fontFamily: "serif",
      }}
    >
      <div className="container" dir="rtl">
        <div className="row g-5 text-end">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-start">
              <img
                src={logo}
                alt="Logo"
                className="bg-white p-1 rounded-circle mb-3 shadow"
                style={{
                  width: "80px",
                  height: "80px",
                  border: "1px solid #d4a017",
                  objectFit: "cover",
                }}
              />

              <h3 className="h5 fw-bold mb-2">كلية الحاجة عندليب العمد</h3>

              <p className="small lh-lg mb-0" style={{ color: "#cfcfcf" }}>
                مؤسسة تعليمية تابعة لجمعية الاتحاد النسائي العربي بنابلس.
                توفر مكتبتنا وصولاً شاملاً للمراجع الورقية والكتب الإلكترونية.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <h4
              className="h5 fw-bold pb-2 mb-4"
              style={{
                color: "#d4a017",
                borderBottom: "1px solid rgba(212,160,23,0.35)",
              }}
            >
              روابط الوصول
            </h4>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <Link to="/catalog" className="footer-link">
                  <span className="ms-2" style={{ color: "#d4a017" }}>←</span>
                  الفهرس (ورقي + PDF)
                </Link>
              </li>

              <li>
                <Link to="/about" className="footer-link">
                  <span className="ms-2" style={{ color: "#d4a017" }}>←</span>
                  عن الكلية و المكتبة
                </Link>
              </li>

              <li>
                <Link to="/student-portal" className="footer-link">
                  <span className="ms-2" style={{ color: "#d4a017" }}>←</span>
                  بوابة العضو
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4
              className="h5 fw-bold pb-2 mb-4"
              style={{
                color: "#d4a017",
                borderBottom: "1px solid rgba(212,160,23,0.35)",
              }}
            >
              معلومات الاتصال
            </h4>

            <p className="footer-contact mb-3">
              <span className="ms-2">📍</span>
              نابلس - الجبل الشمالي - خلف مستشفى الاتحاد
            </p>

            <a href="tel:092378143" className="footer-link d-block mb-3">
              <span className="ms-2">📞</span>
              092378143
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@andaleebamad.edu.ps"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-block"
            >
              <span className="ms-2">✉️</span>
              info@andaleebamad.edu.ps
            </a>
          </div>
        </div>

        <div
          className="text-center small mt-5 pt-4"
          style={{
            color: "#9d9d9d",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          جميع الحقوق محفوظة ©️ {new Date().getFullYear()} كلية الحاجة عندليب
          العمد للتمريض والقبالة
        </div>
      </div>
    </footer>
  );
}