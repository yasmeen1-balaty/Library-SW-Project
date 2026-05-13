import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="bg-light text-dark" style={{ fontFamily: "serif" }}>
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white text-center"
        style={{ minHeight: "85vh" }}
      >
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1500&q=80"
          alt="Library"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(74, 4, 4, 0.7)" }}
        ></div>

        <div className="position-relative z-1 container px-4">
          <span className="d-block text-warning fw-bold text-uppercase mb-3">
            مرحباً بكم في
          </span>

          <h1
            className="display-3 fw-bold pb-4 mb-4 d-inline-block border-bottom border-4 border-warning"
            style={{ color: "white" }}
          >
            مكتبة كلية الحاجة عندليب العمد
          </h1>

          <p className="fs-4 mb-5 text-light fst-italic">
            "نبراس العلم في صرح التميز"
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button
              onClick={() => navigate("/catalog")}
              className="btn btn-warning text-white fw-bold px-5 py-3 shadow"
            >
              استكشف الكتب 📚
            </button>

            <button
              onClick={() => navigate("/about")}
              className="btn btn-outline-light fw-bold px-5 py-3"
            >
              عن الكلية
            </button>
          </div>
        </div>
      </section>

      <section
        className="container position-relative z-2"
        style={{ marginTop: "-80px" }}
      >
        <div className="row g-4">
          <div className="col-md-4">
            <div
              onClick={() => navigate("/catalog")}
              className="card feature-card h-100 text-center shadow-lg border-0 border-top border-4 p-4"
              style={{ borderTopColor: "#800020", cursor: "pointer" }}
            >
              <div className="fs-1 mb-3">📖</div>
              <h3 className="h5 fw-bold" style={{ color: "#4A0404" }}>
                فهرس الكتب
              </h3>
              <p className="text-muted small">
                تصفح مجموعة واسعة من الكتب العلمية والأدبية المتوفرة في مكتبتنا.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => navigate("/about")}
              className="card feature-card h-100 text-center shadow-lg border-0 p-4 text-white"
              style={{ backgroundColor: "#800020", cursor: "pointer" }}
            >
              <div className="fs-1 mb-3">🏛️</div>
              <h3 className="h5 fw-bold text-warning">مرافق الكلية</h3>
              <p className="small text-light">
                بيئة هادئة ومجهزة بأحدث الوسائل لضمان أفضل تجربة دراسية للطلاب.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card feature-card h-100 text-center shadow-lg border-0 border-top border-4 p-4"
              style={{ borderTopColor: "#800020" }}
            >
              <div className="fs-1 mb-2">🔍</div>
              <h3 className="h5 fw-bold mb-3" style={{ color: "#4A0404" }}>
                بحث سريع
              </h3>

              <form onSubmit={handleSearch} className="d-flex flex-column gap-2">
                <input
                  type="text"
                  placeholder="اسم الكتاب..."
                  className="form-control text-end"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn text-white fw-bold"
                  style={{ backgroundColor: "#800020" }}
                >
                  إبحث الآن
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 mt-5">
        <div className="container">
          <div className="d-flex align-items-center mb-4">
            <h2 className="fw-bold mb-0" style={{ color: "#4A0404" }}>
              معرض المكتبة
            </h2>
            <div
              className="flex-grow-1 mx-4 bg-warning"
              style={{ height: "4px" }}
            ></div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="gallery-img" style={{ height: "260px" }}>
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
                  alt="Library gallery"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="gallery-img" style={{ height: "260px" }}>
                <img
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80"
                  alt="Books"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="gallery-img" style={{ height: "260px" }}>
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80"
                  alt="Bookshelves"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}