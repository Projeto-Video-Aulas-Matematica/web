import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { team } from '../data/courseData';

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Sobre"
          title="Sobre o Projeto"
          description="Projeto universitário pensado para organizar aulas, módulos, vídeo-aulas e exercícios em uma estrutura simples e fácil de evoluir."
          centered
        />

        <div className="team-grid">
          {team.map((person, index) => (
            <article className="team-card" key={person.name}>
              <div className={index % 2 === 0 ? 'team-image accent-green' : 'team-image accent-rose'} />
              <div>
                <h3>{person.name}</h3>
                <strong>{person.role}</strong>
                <p>{person.description}</p>
                <Button variant="secondary">Entrar em contato</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
