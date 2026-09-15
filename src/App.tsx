const services = [
  ['01', 'Software a medida', 'Aplicaciones y plataformas construidas alrededor de tu operación, sin forzar tu negocio a adaptarse a una herramienta genérica.'],
  ['02', 'Automatización', 'WhatsApp Business, APIs, webhooks e integraciones para eliminar tareas repetitivas y conectar procesos.'],
  ['03', 'Modernización', 'Ordeno y evoluciono sistemas existentes: arquitectura, experiencia de usuario, seguridad, despliegues y mantenimiento.'],
  ['04', 'Infraestructura', 'Linux, Nginx, HTTPS, backups y ambientes de prueba y producción preparados para operar con confianza.'],
]

const projects = [
  { name: 'Daniel Yorio Platform', eyebrow: 'Operación comercial · En desarrollo', text: 'Una operación comercial multimarca llevada a una plataforma propia: clientes, catálogos, pedidos, administración y automatización de conversaciones por WhatsApp.', result: 'De procesos dispersos a una operación digital centralizada.', stack: 'Java · Spring Boot · Angular · MySQL · WhatsApp Cloud API · Linux', featured: true },
  { name: 'Adorable Puente', eyebrow: 'Producto digital', text: 'Una aplicación que simplifica la organización de juntadas: participantes, gastos compartidos y liquidación automática de saldos.', result: 'Menos cuentas manuales. Una experiencia simple para el grupo.', stack: 'React · TypeScript · MySQL · Firebase' },
  { name: 'MultasLibres', eyebrow: 'Captación y conversión', text: 'Una experiencia web enfocada en convertir visitas en consultas, conectando formularios, WhatsApp y medición del origen de campañas QR.', result: 'Captación medible y un recorrido directo hacia la consulta.', stack: 'React · Vite · Tailwind · PHP · MySQL' },
]

const steps = [['01','Entender','Objetivo, usuarios y problema real.'],['02','Diseñar','Flujos, alcance y arquitectura.'],['03','Construir','Producto usable, mantenible y probado.'],['04','Publicar','Infraestructura, seguridad y despliegue.'],['05','Evolucionar','Medir, aprender y mejorar.']]

const techGroups = [
  ['Producto & Frontend', 'React · Angular · TypeScript · Vite · Tailwind · PrimeNG'],
  ['Backend & Datos', 'Java · Spring Boot · REST APIs · PHP · MySQL · PostgreSQL'],
  ['Integraciones', 'WhatsApp Business · Firebase · Webhooks · APIs de terceros'],
  ['Operación', 'Linux · Nginx · Docker · GitHub Actions · Backups · SSL/TLS'],
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">MAXI<span>.</span></a>
        <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#proyectos">Trabajo</a><a href="#sobre-mi">Sobre mí</a><a className="nav-cta" href="#contacto">Hablemos</a></nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"/> Disponible para nuevos proyectos</p>
            <h1>Construyo software que <span>resuelve problemas reales.</span></h1>
            <p className="hero-lead">Soy Maxi Aringoli, ingeniero y desarrollador Full Stack. Diseño, construyo y pongo en producción soluciones digitales para profesionales, comercios y empresas que necesitan algo más que una web.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contacto">Contame tu proyecto <b>↗</b></a><a className="button button-ghost" href="#proyectos">Ver trabajo</a></div>
            <div className="hero-proof"><span>01<br/><strong>Idea → producción</strong></span><span>02<br/><strong>Una mirada integral</strong></span><span>03<br/><strong>Soluciones a medida</strong></span></div>
          </div>
          <div className="hero-visual" aria-hidden="true"><div className="signal signal-a"/><div className="signal signal-b"/><div className="console-card"><div className="console-top"><i/><i/><i/><span>product.system</span></div><p><em>01</em> entender problema</p><p><em>02</em> diseñar solución</p><p><em>03</em> construir producto</p><p className="console-active"><em>04</em> <strong>poner en producción</strong><b>✓</b></p></div></div>
        </section>

        <section className="trust-strip"><span>PRODUCTO</span><i/> <span>SOFTWARE</span><i/> <span>AUTOMATIZACIÓN</span><i/> <span>INFRAESTRUCTURA</span><i/> <span>IA APLICADA</span></section>

        <section className="statement section-narrow"><p className="eyebrow">El punto de partida</p><h2>No hace falta que llegues con una especificación técnica.</h2><p>Podés llegar con un proceso que te hace perder tiempo, una idea que querés validar o un sistema que ya no acompaña a tu negocio. <strong>Empezamos por entender eso.</strong></p></section>

        <section className="section" id="servicios">
          <div className="section-heading split-heading"><div><p className="eyebrow">Servicios</p><h2>De la necesidad al sistema funcionando.</h2></div><p>Trabajo sobre el producto completo para que las decisiones técnicas acompañen al objetivo de negocio.</p></div>
          <div className="service-grid">{services.map(([number,title,text]) => <article className="service-card" key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}</div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="section-heading"><p className="eyebrow">Trabajo seleccionado</p><h2>Problemas concretos.<br/>Productos reales.</h2></div>
          <div className="project-grid">{projects.map(project => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.name}><div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p className="project-copy">{project.text}</p></div><div className="project-result"><small>IMPACTO</small><strong>{project.result}</strong></div><div className="project-footer"><span>{project.stack}</span></div></article>)}</div>
        </section>

        <section className="section process"><div className="section-heading"><p className="eyebrow">Método</p><h2>Menos misterio.<br/>Más claridad.</h2></div><div className="process-list">{steps.map(([number,title,text])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="section technology"><div className="section-heading"><p className="eyebrow">Tecnología</p><h2>El stack se elige después del problema.</h2></div><div className="tech-grid">{techGroups.map(([title,items])=><div className="tech-row" key={title}><strong>{title}</strong><span>{items}</span></div>)}</div><blockquote>“No vendo una tecnología específica. Construyo la solución que el proyecto necesita.”</blockquote></section>

        <section className="section about" id="sobre-mi"><div className="portrait-placeholder"><span>MA</span><small>FOTO<br/>PRÓXIMAMENTE</small></div><div className="about-copy"><p className="eyebrow">Sobre mí</p><h2>Ingeniería detrás del código.</h2><p className="about-lead">Soy Maxi Aringoli. Me gusta entrar a un proyecto entendiendo el problema completo, no solamente la pantalla que hay que programar.</p><p>Trabajo entre producto, frontend, backend, datos e infraestructura. Esa visión me permite tomar decisiones pensando en cómo se va a usar, mantener y operar una solución una vez que deja de ser una idea.</p><div className="about-values"><span><b>Full Stack</b>Producto completo</span><span><b>End-to-end</b>Idea a producción</span><span><b>Argentina</b>Trabajo remoto</span></div></div></section>

        <section className="contact section-narrow" id="contacto"><p className="eyebrow">Empecemos una conversación</p><h2>¿Hay algo que tu negocio podría hacer <span>mejor con software?</span></h2><p>Contame qué necesitás resolver. No hace falta tener definido el sistema ni la tecnología.</p><div className="contact-actions"><a className="button button-primary" href="mailto:maxiaringoli@gmail.com">Escribime por email <b>↗</b></a><a className="button button-ghost" href="https://github.com/MaxiAringoli" target="_blank" rel="noreferrer">Ver GitHub</a></div><small>Villa Carlos Paz · Córdoba · Argentina · Disponible para trabajo remoto</small></section>
      </main>
      <footer><a className="brand" href="#inicio">MAXI<span>.</span></a><span>Ingeniería de Software · Desarrollo de soluciones digitales</span><span>© 2026 Maxi Aringoli</span></footer>
    </div>
  )
}

export default App
