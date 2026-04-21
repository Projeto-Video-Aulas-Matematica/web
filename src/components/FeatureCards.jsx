export default function FeatureCards({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <article className="feature-card" key={item.title}>
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
