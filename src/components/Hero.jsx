import Button from './ui/Button';

export default function Hero({ title, subtitle, ctaLabel }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="embedded-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/pTyE-PvgB-A"
            title="Vídeo de apresentação"
            allowFullScreen
          />
        </div>

        <div className="hero-copy">
          <span className="eyebrow">{subtitle}</span>
          <h1>{title}</h1>
          <p>
            Plataforma simples para acompanhar aulas, módulos e exercícios de matemática em um só lugar.
          </p>
          <Button to="/curso">{ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
