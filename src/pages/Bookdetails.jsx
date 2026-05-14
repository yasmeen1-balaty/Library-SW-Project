import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allBooks } from '../data/bookData';

export default function BookDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const book = allBooks.find((b) => b.id === id);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!book) {
    return (
      <div className="container text-center py-5 mt-5">
        <h2>عذراً، الكتاب غير موجود</h2>
      </div>
    );
  }

  const handleAction = () => {

    if (!isLoggedIn) {
      alert('🔒 يجب تسجيل الدخول كعضو في الكلية لتتمكن من حجز الكتب.');
      navigate('/login');

    } else {

      alert(`✅ تم إرسال طلب حجز كتاب (${book.title}) بنجاح.`);
    }
  };

  return (

    <div
      className="py-5"
      dir="rtl"
      style={{
        backgroundColor: '#fffdfa',
        minHeight: '100vh',
        marginTop: '90px'
      }}
    >

      <div className="container">

        <div
          className="row bg-white shadow-lg overflow-hidden"
          style={{
            borderBottom: '8px solid #d4a017',
            borderRadius: '10px'
          }}
        >

          {/* صورة الكتاب */}
          <div className="col-md-6 p-0 position-relative">

            <img
              src={book.image}
              alt={book.title}
              className="img-fluid w-100 h-100"
              style={{
                objectFit: 'cover',
                minHeight: '500px'
              }}
            />

            <div
              className="position-absolute top-0 start-0 m-3 text-white fw-bold px-3 py-2 rounded shadow"
              style={{
                backgroundColor:
                  book.source === 'online'
                    ? '#0d6efd'
                    : '#761212'
              }}
            >
              {book.source === 'online'
                ? 'إلكتروني PDF'
                : 'نسخة ورقية'}
            </div>

          </div>

          {/* معلومات الكتاب */}
          <div className="col-md-6 p-5 d-flex flex-column justify-content-center text-end">

            <span
              className="fw-bold mb-2"
              style={{
                color: '#d4a017',
                letterSpacing: '2px'
              }}
            >
              قسم {book.category}
            </span>

            <h1
              className="fw-bold mb-4"
              style={{
                color: '#761212',
                lineHeight: '1.4'
              }}
            >
              {book.title}
            </h1>

            <div className="mb-4 text-secondary">

              <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
                <span className="fw-bold" style={{ color: '#761212' }}>
                  المؤلف:
                </span>
                <span>{book.author}</span>
              </div>

              <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
                <span className="fw-bold" style={{ color: '#761212' }}>
                  سنة النشر:
                </span>
                <span>{book.year}</span>
              </div>

              <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
                <span className="fw-bold" style={{ color: '#761212' }}>
                  ISBN:
                </span>
                <span>{book.isbn}</span>
              </div>

              <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
                <span className="fw-bold" style={{ color: '#761212' }}>
                  لغة المرجع:
                </span>

                <span>
                  {book.lang === 'ar'
                    ? 'العربية'
                    : 'English'}
                </span>
              </div>

            </div>

            <p
              className="text-secondary fst-italic mb-5"
              style={{ lineHeight: '2' }}
            >
              {book.description}
            </p>

            {/* الأزرار */}
            <div className="mt-auto">

              {book.source === 'online' ? (

                <a
                  href={book.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-100 text-white fw-bold py-3"
                  style={{
                    backgroundColor: '#198754',
                    fontSize: '18px'
                  }}
                >
                  تحميل الكتاب المباشر ⬇️
                </a>

              ) : (

                <button
                  onClick={handleAction}
                  className="btn w-100 text-white fw-bold py-3"
                  style={{
                    backgroundColor: '#761212',
                    fontSize: '18px'
                  }}
                >
                  حجز موعد لاستعارة الكتاب 🏛️
                </button>

              )}

            </div>

          </div>

        </div>

        {/* العودة */}
        <div className="text-center mt-5">

          <button
            onClick={() => navigate('/catalog')}
            className="btn fw-bold"
            style={{
              color: '#761212',
              borderBottom: '2px solid #761212'
            }}
          >
            ← العودة إلى فهرس المراجع
          </button>

        </div>

      </div>

    </div>
  );
}