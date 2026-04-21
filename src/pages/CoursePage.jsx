import ModuleCard from '../components/ModuleCard';
import SectionTitle from '../components/ui/SectionTitle';
import { course, modules } from '../data/courseData';

export default function CoursePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Curso"
          title={course.title}
          description={course.description}
          centered
        />

        <SectionTitle eyebrow="Módulos" title="Do básico ao avançado" />
        <div className="module-grid">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}
