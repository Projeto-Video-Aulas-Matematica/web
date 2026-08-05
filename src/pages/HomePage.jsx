import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import SectionTitle from '../components/ui/SectionTitle';
import { course, highlights } from '../data/courseData';

export default function HomePage() {
  return (
    <>
      <Hero title={course.title} subtitle={course.subtitle} ctaLabel={course.ctaLabel} />

      <section className="section">
        <div className="container one-column-text">
          <div>
            <SectionTitle title="Aprenda no seu ritmo" description={course.introText} />
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionTitle title="Destaques do curso" centered />
          <FeatureCards items={highlights} />
        </div>
      </section>
    </>
  );
}
