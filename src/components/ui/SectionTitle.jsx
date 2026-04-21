export default function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'section-title centered' : 'section-title'}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
