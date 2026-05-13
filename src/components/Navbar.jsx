import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
      <div className="container-fluid px-5">

        <Link to="/login" className="btn text-white login-btn fw-bold px-4"
          style={{ backgroundColor: " #761212" }}>
          دخول الأعضاء
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
          <ul className="navbar-nav gap-4 fw-bold">
            <li className="nav-item">
              <Link to="/" className="nav-link">الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link">الفهرس</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">عن المكتبة</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">اتصل بنا</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 m-0 text-decoration-none">
          <div className="text-end">
            <div className="fw-bold" style={{ color: " #761212" }}>مكتبة الكلية</div>
            <small className="text-muted" style={{ letterSpacing: "1px" }}>
              ANDALEEB AMAD
            </small>
          </div>

          <div className="text-white fw-bold px-3 py-2 rounded logo-box"
            style={{ backgroundColor: "#761212"}}>
            العمد
          </div>
        </Link>

      </div>
    </nav>
  );
}