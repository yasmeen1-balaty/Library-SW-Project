import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const userRole =
    localStorage.getItem("userRole");

  const isLibrarian =
    userRole === "librarian";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("reservations");

    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm border-bottom py-2">
      <div className="container-fluid px-5">

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn btn-sm text-white fw-bold px-4 py-2 order-lg-1"
            style={{
              backgroundColor: "#761212",
              borderRadius: "8px"
            }}
          >
            تسجيل خروج
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm text-white fw-bold px-4 py-2 order-lg-1"
            style={{
              backgroundColor: "#761212",
              borderRadius: "8px"
            }}
          >
            دخول الأعضاء
          </Link>
        )}

        <div
          className="collapse navbar-collapse justify-content-center order-lg-2"
          id="mainNavbar"
        >
          <ul className="navbar-nav gap-lg-4 fw-bold">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                الرئيسية
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/catalog" className="nav-link">
                الفهرس
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                عن المكتبة
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                اتصل بنا
              </Link>
            </li>

            {isLibrarian && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-danger fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  لوحة التحكم
                </a>

                <ul className="dropdown-menu text-end">

                  <li>
                    <Link to="/financial" className="dropdown-item">
                      التقارير المالية
                    </Link>
                  </li>

                  <li>
                    <Link to="/settings" className="dropdown-item">
                      إعدادات المكتبة
                    </Link>
                  </li>

                  <li>
                    <Link to="/users" className="dropdown-item">
                      المستخدمين
                    </Link>
                  </li>

                </ul>
              </li>
            )}

          </ul>
        </div>

        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2 m-0 text-decoration-none order-lg-3"
        >
          <div className="text-end">
            <div
              className="fw-bold"
              style={{
                color: "#761212",
                fontSize: "16px"
              }}
            >
              مكتبة الكلية
            </div>

            <small
              className="text-muted"
              style={{
                letterSpacing: "1px",
                fontSize: "11px"
              }}
            >
              ANDALEEB AMAD
            </small>
          </div>

          <div
            className="text-white fw-bold px-3 py-2 rounded logo-box"
            style={{
              backgroundColor: "#761212",
              fontSize: "15px"
            }}
          >
            العمد
          </div>
        </Link>

        <button
          className="navbar-toggler order-lg-4 ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>
  );
}