const services = [
  ['01', 'Aplicaciones a medida', 'Productos web pensados alrededor de un problema real de negocio, desde la arquitectura hasta la experiencia de uso.'],
  ['02', 'Automatización e integraciones', 'APIs, webhooks, WhatsApp Business y flujos que reducen tareas manuales y conectan sistemas.'],
  ['03', 'Infraestructura y Cloud', 'Servidores Linux, Nginx, HTTPS, despliegues, backups y ambientes preparados para operar de verdad.'],
  ['04', 'IA aplicada', 'Inteligencia artificial incorporada cuando aporta valor concreto a usuarios, procesos y equipos.'],
]

const projects = [
  { name: 'Daniel Yorio Platform', eyebrow: 'Plataforma comercial', text: 'Digitalización de un proceso comercial multimarca mediante plataforma web, backend, clientes, catálogos, pedidos y automatización con WhatsApp Business.', stack: 'Java · Spring Boot · Angular · MySQL · WhatsApp Cloud API · Linux', featured: true },
  { name: 'Adorable Puente', eyebrow: 'Producto colaborativo', text: 'Aplicación para organizar juntadas, registrar gastos y calcular automáticamente quién debe pagarle a quién.', stack: 'React · TypeScript · MySQL · Firebase' },
  { name: 'MultasLibres', eyebrow: 'Captación digital', text: 'Landing orientada a conversión con formularios, WhatsApp y seguimiento del origen de campañas mediante códigos QR.', stack: 'React · Vite · Tailwind · PHP · MySQL' },
]

const steps = ['Descubrimiento', 'Diseño', 'Desarrollo', 'Testing', 'Deploy', 'Evolución']

const techGroups = [
  ['Frontend', 'React · Angular · TypeScript · Tailwind · PrimeNG'],
  ['Backend', 'Java · Spring Boot · REST APIs · PHP'],
  ['Datos & Integraciones', 'MySQL · PostgreSQL · WhatsApp Business · Firebase'],
  ['Infraestructura', 'Linux · Nginx · Docker · Kubernetes · Google Cloud · GitHub Actions'],
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">MAXI<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a className="nav-cta" href="#contacto">Contacto</a>
        </nav>
      </header>
      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Ingeniería de Software · Desarrollo Full Stack</p>
            <h1>Transformo ideas en <span>soluciones digitales reales.</span></h1>
            <p className="hero-lead">Diseño y desarrollo aplicaciones, plataformas y automatizaciones a medida, desde la idea inicial hasta su puesta en producción.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contacto">Hablemos de tu proyecto</a><a className="button button-ghost" href="#proyectos">Ver proyectos ↓</a></div>
          </div>
          <div className="hero-visual" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="flow-card"><span>IDEA</span><i/><span>ARQUITECTURA</span><i/><span>PRODUCTO</span><i/><strong>PRODUCCIÓN</strong></div></div>
        </section>

        <section className="statement section-narrow"><p>No necesitás saber qué tecnología usar.</p><h2>Podés llegar con un problema, un proceso manual o simplemente una idea.</h2><span>Mi trabajo es convertirlo en una solución que podamos construir.</span></section>

        <section className="section" id="servicios">
          <div className="section-heading"><p className="eyebrow">Qué puedo hacer por tu proyecto</p><h2>Soluciones que conectan negocio, producto y tecnología.</h2></div>
          <div className="service-grid">{services.map(([number,title,text]) => <article className="service-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="section-heading split-heading"><div><p className="eyebrow">Proyectos</p><h2>Casos reales, construidos de punta a punta.</h2></div><p>No sólo código: producto, arquitectura, infraestructura y evolución.</p></div>
          <div className="project-grid">{projects.map(project => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.name}><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p className="project-copy">{project.text}</p><div className="project-footer"><span>{project.stack}</span><span className="project-link">Caso de estudio →</span></div></article>)}</div>
        </section>

        <section className="section process"><div className="section-heading"><p className="eyebrow">Cómo trabajo</p><h2>Una sola mirada sobre todo el producto.</h2></div><div className="process-line">{steps.map((step,index)=><div className="process-step" key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></div>)}</div><p className="process-copy">No me limito a escribir código. Puedo participar desde la definición del problema hasta la arquitectura, desarrollo, infraestructura, automatización de despliegues y evolución del producto.</p></section>

        <section className="section technology"><div className="section-heading"><p className="eyebrow">Tecnologías</p><h2>Herramientas elegidas por lo que el proyecto necesita.</h2></div><div className="tech-grid">{techGroups.map(([title,items])=><div className="tech-row" key={title}><strong>{title}</strong><span>{items}</span></div>)}</div><blockquote>La tecnología es una herramienta. El objetivo es resolver el problema correcto.</blockquote></section>

        <section className="section about" id="sobre-mi"><div className="portrait-placeholder" aria-label="Espacio reservado para fotografía profesional"><span>MA</span></div><div className="about-copy"><p className="eyebrow">Sobre mí</p><h2>Ingeniería detrás del código.</h2><p>Soy Maxi Aringoli. Desarrollo software y soluciones digitales buscando entender primero el problema que hay detrás de cada proyecto.</p><p>Mi experiencia abarca frontend, backend, arquitectura, bases de datos e infraestructura, lo que me permite trabajar sobre el producto como un conjunto y no solamente sobre una parte de él.</p><p>Me interesa especialmente convertir procesos complejos o manuales en herramientas simples que las personas realmente puedan utilizar.</p></div></section>

        <section className="contact section-narrow" id="contacto"><p className="eyebrow">¿Tenés una idea dando vueltas?</p><h2>Contame el problema.<br/><span>La parte técnica la resolvemos después.</span></h2><p>Podemos analizar tu proyecto, una automatización que necesitás o un sistema que quieras mejorar.</p><a className="button button-primary" href="mailto:maxiaringoli@gmail.com">Hablemos</a></section>
      </main>
      <footer><span>Maxi Aringoli · Villa Carlos Paz, Córdoba, Argentina</span><span>Ingeniería de Software · Desarrollo de soluciones digitales</span></footer>
    </div>
  )
}

export default App
