import Button from './ui/Button';

export default function PdfModal({ pdfUrl, title, onClose }) {
  if (!pdfUrl) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div
        className="pdf-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pdf-modal-header">
          <h2>{title}</h2>

          <button
            type="button"
            className="pdf-modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="pdf-modal-content">
          <iframe
            src={pdfUrl}
            title={title}
          />
        </div>
      </div>
    </div>
  );
}