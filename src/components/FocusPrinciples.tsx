import './FocusPrinciples.css'

const principles = [
  {
    number: '01',
    title: 'Facilitador tecnológico',
    description:
      'Construyo puentes entre la arquitectura y las personas: resuelvo fricción técnica y transformo problemas complejos en herramientas simples.',
  },
  {
    number: '02',
    title: 'Criterio antes que automatismo',
    description:
      'La IA como acelerador, el criterio humano como guía: no viene a reemplazarnos, sino a multiplicar nuestro alcance.',
  },
  {
    number: '03',
    title: 'Adaptabilidad y disrupción',
    description:
      'Cada revolución redefine las reglas de juego. Entender la inteligencia artificial hoy es la diferencia entre quedar al margen o liderar la transformación.',
  },
  {
    number: '04',
    title: 'Mindset técnico',
    description:
      'A la inteligencia artificial no hay que temerle; hay que entenderla, respetarla y dominarla.',
  },
]

function FocusPrinciples() {
  return (
    <section className="focus section" id="enfoque" aria-labelledby="focus-title">
      <div className="focus__heading">
        <p className="eyebrow">Enfoque &amp; Principios</p>
        <h2 id="focus-title">La tecnología amplifica el criterio.</h2>
        <p className="focus__intro">
          Cómo entiendo el trabajo con tecnología y la transformación que estamos viviendo.
        </p>
      </div>

      <div className="focus__grid">
        {principles.map(({ number, title, description }) => (
          <article className="focus__card" key={title}>
            <span className="focus__number" aria-hidden="true">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FocusPrinciples
