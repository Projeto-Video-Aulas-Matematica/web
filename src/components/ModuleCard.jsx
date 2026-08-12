import Button from './ui/Button';

export default function ModuleCard({ module }) {
  return (
    <article className="module-card">
      <div className="module-thumb">
        <img src={module.image} alt="" />
      </div>
      <div className="module-card-body">
        <h3>{module.title}</h3>
        <p>{module.shortDescription}</p>
        <Button to={`/modulo/${module.id}`} variant="secondary">
          Ver módulo
        </Button>
      </div>
    </article>
  );
}
