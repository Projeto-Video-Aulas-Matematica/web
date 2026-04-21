import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import SectionTitle from '../components/ui/SectionTitle';
import { course, highlights } from '../data/courseData';

export default function HomePage() {
  return (
    <>
      <Hero title={course.title} subtitle={course.subtitle} ctaLabel={course.ctaLabel} />

      <section className="section">
        <div className="container two-column-text">
          <div>
            <SectionTitle title="Aprenda no seu ritmo" description={course.introText} />
          </div>
          <div>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis mauris a mauris lacinia laoreet quis in nunc. Sed quis tristique sem. Donec sapien orci, molestie varius elementum ultricies, laoreet at nisi. Vivamus odio nisi, pharetra nec accumsan quis, varius ac sem. Sed vel congue purus. Sed sollicitudin, justo non condimentum vulputate.
            </p>
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
