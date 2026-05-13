import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { allBooks } from "../data/bookData";

export default function Catalog() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialSearch =
    new URLSearchParams(location.search).get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState("جميع التصنيفات");
  const [viewType, setViewType] = useState("all");
  const [selectedLang, setSelectedLang] = useState("all");

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "جميع التصنيفات" ||
      book.category === selectedCategory;

    const matchesType = viewType === "all" || book.source === viewType;
    const matchesLang = selectedLang === "all" || book.lang === selectedLang;

    return matchesSearch && matchesCategory && matchesType && matchesLang;
  });

  const activeStyle = { backgroundColor: "#800020", color: "white" };

  return (
    <div className="bg-light pb-5" style={{ fontFamily: "serif", minHeight: "100vh" }}>
      <header className="text-white text-center py-5" style={{ backgroundColor: "#4A0404" }}>
        <div className="container py-5">
          <h1 className="display-5 fw-bold mb-3">فهرس المراجع الطبية</h1>
          <div className="mx-auto mb-3 bg-warning" style={{ width: "100px", height: "4px" }}></div>
          <p className="fs-5 fst-italic mb-0">مكتبة كلية الحاجة عندليب العمد - نابلس</p>
        </div>
      </header>

      <section className="container position-relative" style={{ marginTop: "-45px" }}>
        <div className="bg-white shadow-lg p-4 border-bottom border-5 border-warning">
          <div className="row g-3">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="ابحث عن كتاب، مؤلف، أو موضوع..."
                className="form-control form-control-lg text-end"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select form-select-lg fw-bold"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="جميع التصنيفات">كل الأقسام</option>
                <option value="تمريض">تمريض</option>
                <option value="قبالة">قبالة</option>
                <option value="طب عام">طب عام</option>
                <option value="صيدلة">صيدلة</option>
                <option value="علوم طبية">علوم طبية</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-end align-items-center gap-2 mt-3">
          <span className="text-muted">لغة الكتاب:</span>

          <button
            onClick={() => setSelectedLang("all")}
            className="btn border shadow-sm fw-bold px-4"
            style={selectedLang === "all" ? activeStyle : {}}
          >
            الكل
          </button>

          <button
            onClick={() => setSelectedLang("ar")}
            className="btn border shadow-sm fw-bold px-4"
            style={selectedLang === "ar" ? activeStyle : {}}
          >
            العربية
          </button>

          <button
            onClick={() => setSelectedLang("en")}
            className="btn border shadow-sm fw-bold px-4"
            style={selectedLang === "en" ? activeStyle : {}}
          >
            English
          </button>
        </div>
      </section>

      <section className="container mt-5">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button
            onClick={() => setViewType("all")}
            className="btn border shadow-sm fw-bold px-4"
            style={viewType === "all" ? activeStyle : {}}
          >
            الكل
          </button>

          <button
            onClick={() => setViewType("local")}
            className="btn border shadow-sm fw-bold px-4"
            style={viewType === "local" ? activeStyle : {}}
          >
            مراجع المكتبة 🏛️
          </button>

          <button
            onClick={() => setViewType("online")}
            className="btn border shadow-sm fw-bold px-4"
            style={viewType === "online" ? activeStyle : {}}
          >
            كتب إلكترونية 🌐
          </button>
        </div>
      </section>

      <section className="container mt-5">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
          <span className="text-muted">نتائج البحث: {filteredBooks.length}</span>
          <h2 className="h3 fw-bold mb-0" style={{ color: "#4A0404" }}>
            {selectedLang === "en" ? "English References" : "المراجع المتاحة"}
          </h2>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="row g-4">
            {filteredBooks.map((book) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={book.id}>
                <div className="card book-card h-100 border-0 shadow-sm overflow-hidden">
                  <div className=" book-img-box position-relative" style={{ height: "280px" }}>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-100 h-100 object-fit-cover book-img"
                    />

                    <span
                      className="position-absolute top-0 end-0 text-white small fw-bold px-3 py-1"
                      style={{
                        backgroundColor: book.source === "online" ? "#0d6efd" : "#800020",
                      }}
                    >
                      {book.source === "online" ? "PDF 🌐" : "مكتبة 🏛️"}
                    </span>

                    <span className="position-absolute top-0 start-0 bg-warning text-white small fw-bold px-2 py-1">
                      {book.lang === "en" ? "EN" : "AR"}
                    </span>
                  </div>

                  <div className="card-body d-flex flex-column text-end">
                    <h3
                      className={`book-title fw-bold mb-2 ${book.lang === "en" ? "text-start" : ""}`}
                      style={{ color: "#2D0A0A", minHeight: "55px" }}
                    >
                      {book.title}
                    </h3>

                    <p
                      className={`text-muted small fst-italic mb-4 ${
                        book.lang === "en" ? "text-start" : ""
                      }`}
                    >
                      {book.lang === "en" ? "Author: " : "تأليف: "}
                      {book.author}
                    </p>

                    <div className="mt-auto d-grid gap-2">
                      <button
                        onClick={() => navigate(`/book/${book.id}`)}
                        className="btn fw-bold details-btn"
                      >
                        {book.lang === "en" ? "View Details" : "عرض التفاصيل"}
                      </button>

                      {book.source === "online" && (
                        <a
                          href={book.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success fw-bold download-btn"
                        >
                          {book.lang === "en" ? "Download PDF ⬇️" : "تحميل الكتاب ⬇️"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="display-1 mb-3">📜</div>
            <p className="fs-3 text-muted">
              لا توجد نتائج تطابق خيارات البحث باللغة المختارة
            </p>
          </div>
        )}
      </section>
    </div>
  );
}