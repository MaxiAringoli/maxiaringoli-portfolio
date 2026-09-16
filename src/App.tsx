import { trackEvent } from './analytics'

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

const experience = [
  { company: 'Epson', duration: '4 años', detail: 'Desarrollador Senior' },
  { company: 'BCRA', duration: '3 años', detail: 'Desarrollador Senior' },
  { company: 'INVAP', duration: '7 años', detail: 'Desarrollador Senior · Sede central, Bariloche' },
  { company: 'Flux IT', duration: '1 año', detail: 'Desarrollador Senior · Proyecto para Federación Patronal' },
  { company: 'Coderio', duration: '1 año', detail: 'Desarrollador Senior · Proyecto para Interbanking' },
  { company: 'Mercado Libre', duration: 'Actualidad · casi 4 años', detail: 'Desarrollador Senior' },
]

const steps = [['01','Entender','Objetivo, usuarios y problema real.'],['02','Diseñar','Flujos, alcance y arquitectura.'],['03','Construir','Producto usable, mantenible y probado.'],['04','Publicar','Infraestructura, seguridad y despliegue.'],['05','Evolucionar','Medir, aprender y mejorar.']]

const techGroups = [
  ['Producto & Frontend', 'React · Angular · TypeScript · Vite · Tailwind · PrimeNG'],
  ['Backend & Datos', 'Java · Spring Boot · REST APIs · PHP · MySQL · PostgreSQL'],
  ['Integraciones', 'WhatsApp Business · Firebase · Webhooks · APIs de terceros'],
  ['Operación', 'Linux · Nginx · Docker · GitHub Actions · Backups · SSL/TLS'],
]

const whatsappUrl = 'https://wa.me/5492944319056?text=Hola%20Maxi%2C%20vi%20tu%20portfolio%20y%20quer%C3%ADa%20consultarte%20por%20un%20proyecto.'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">MAXI ARINGOLI</a>
        <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#proyectos">Trabajo</a><a href="#experiencia">Experiencia</a><a href="#sobre-mi">Sobre mí</a><a className="nav-cta" href="#contacto">Hablemos</a></nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"/> Disponible para nuevos proyectos</p>
            <h1>Construyo software que <span>resuelve problemas reales.</span></h1>
            <p className="hero-lead">Soy Maxi Aringoli, ingeniero y desarrollador Full Stack. Diseño, construyo y pongo en producción soluciones digitales para profesionales, comercios y empresas que necesitan algo más que una web.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contacto">Contame tu proyecto <b>↗</b></a><a className="button button-ghost" href="#proyectos">Ver trabajo</a></div>
            <div className="hero-proof"><span>01<br/><strong>20 años de experiencia</strong></span><span>02<br/><strong>Idea → producción</strong></span><span>03<br/><strong>Soluciones a medida</strong></span></div>
          </div>
          <div className="hero-visual" aria-hidden="true"><div className="signal signal-a"/><div className="signal signal-b"/><div className="console-card"><div className="console-top"><i/><i/><i/><span>product.system</span></div><p><em>01</em> entender problema</p><p><em>02</em> diseñar solución</p><p><em>03</em> construir producto</p><p className="console-active"><em>04</em> <strong>poner en producción</strong><b>✓</b></p></div></div>
        </section>

        <section className="trust-strip"><span>PRODUCTO</span><i/> <span>SOFTWARE</span><i/> <span>AUTOMATIZACIÓN</span><i/> <span>INFRAESTRUCTURA</span><i/> <span>IA APLICADA</span></section>

        <section className="statement section-narrow"><p className="eyebrow">El punto de partida</p><h2>No hace falta que llegues con una especificación técnica.</h2><p>Podés llegar con un proceso que te hace perder tiempo, una idea que querés validar o un sistema que ya no acompaña a tu negocio. <strong>Empezamos por entender eso.</strong></p></section>

        <section className="section" id="servicios"><div className="section-heading split-heading"><div><p className="eyebrow">Servicios</p><h2>De la necesidad al sistema funcionando.</h2></div><p>Trabajo sobre el producto completo para que las decisiones técnicas acompañen al objetivo de negocio.</p></div><div className="service-grid">{services.map(([number,title,text]) => <article className="service-card" key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}</div></section>

        <section className="section projects" id="proyectos"><div className="section-heading"><p className="eyebrow">Trabajo seleccionado</p><h2>Problemas concretos.<br/>Productos reales.</h2></div><div className="project-grid">{projects.map(project => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.name} onClick={() => trackEvent('project_click', project.name, 'projects')}><div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p className="project-copy">{project.text}</p></div><div className="project-result"><small>IMPACTO</small><strong>{project.result}</strong></div><div className="project-footer"><span>{project.stack}</span></div></article>)}</div></section>

        <section className="section experience" id="experiencia">
          <div className="experience-intro"><p className="eyebrow">Trayectoria profesional · Desde 2006</p><h2>20 años construyendo software en equipos reales.</h2><p>Desde 2006 trabajo de manera ininterrumpida en desarrollo de sistemas, participando como Desarrollador Senior en equipos de organizaciones y compañías de primer nivel. Esa experiencia hoy también la pongo al servicio de empresas, profesionales y emprendimientos que necesitan resolver problemas concretos con tecnología.</p></div>
          <div className="experience-list">{experience.map((item,index)=><article key={item.company}><span className="experience-number">{String(index + 1).padStart(2,'0')}</span><div><h3>{item.company}</h3><p>{item.detail}</p></div><strong>{item.duration}</strong></article>)}</div>
          <div className="experience-close"><blockquote>“La escala del cliente puede cambiar. El criterio con el que construyo software, no.”</blockquote><a className="button button-ghost" href="https://www.linkedin.com/in/maxiaringoli/" target="_blank" rel="noreferrer" onClick={() => trackEvent('linkedin_click', undefined, 'experience')}>Ver trayectoria en LinkedIn <b>↗</b></a></div>
        </section>

        <section className="section process"><div className="section-heading"><p className="eyebrow">Método</p><h2>Menos misterio.<br/>Más claridad.</h2></div><div className="process-list">{steps.map(([number,title,text])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="section technology"><div className="section-heading"><p className="eyebrow">Tecnología</p><h2>El stack se elige después del problema.</h2></div><div className="tech-grid">{techGroups.map(([title,items])=><div className="tech-row" key={title}><strong>{title}</strong><span>{items}</span></div>)}</div><blockquote>“No vendo una tecnología específica. Construyo la solución que el proyecto necesita.”</blockquote></section>

        <section className="section about" id="sobre-mi"><div className="portrait"><img src="/images/maxi-aringoli-portfolio.png" alt="Maxi Aringoli, ingeniero y desarrollador Full Stack" loading="lazy" decoding="async"/><span className="portrait-label">MAXI ARINGOLI<br/><small>INGENIERÍA · SOFTWARE</small></span></div><div className="about-copy"><p className="eyebrow">Sobre mí</p><h2>Ingeniería detrás del código.</h2><p className="about-lead">Soy Maxi Aringoli, ingeniero y desarrollador de software. Trabajo profesionalmente en sistemas desde 2006 y durante mi carrera formé parte de equipos de Epson, BCRA, INVAP y Mercado Libre, además de proyectos para Federación Patronal e Interbanking.</p><p>Dos décadas trabajando en equipo y desarrollando sistemas me enseñaron que el software no termina cuando el código funciona. Tiene que poder usarse, mantenerse, evolucionar y acompañar una necesidad real. Hoy llevo ese criterio a cada proyecto, sin importar su escala.</p><div className="about-values"><span><b>20 años</b>Experiencia profesional</span><span><b>Full Stack</b>Producto completo</span><span><b>End-to-end</b>Idea a producción</span></div><a className="about-link" href="https://www.linkedin.com/in/maxiaringoli/" target="_blank" rel="noreferrer" onClick={() => trackEvent('linkedin_click', undefined, 'about')}>LinkedIn ↗</a></div></section>

        <section className="contact section-narrow" id="contacto"><p className="eyebrow">Empecemos una conversación</p><h2>¿Hay algo que tu negocio podría hacer <span>mejor con software?</span></h2><p>Contame qué necesitás resolver. No hace falta tener definido el sistema ni la tecnología. Trabajo con proyectos de distintas escalas, desde profesionales y emprendimientos hasta operaciones empresariales.</p><div className="contact-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', undefined, 'contact')}>Hablemos por WhatsApp <b>↗</b></a><a className="button button-ghost" href="mailto:maxiaringoli@gmail.com">Email</a><a className="button button-ghost" href="https://www.linkedin.com/in/maxiaringoli/" target="_blank" rel="noreferrer" onClick={() => trackEvent('linkedin_click', undefined, 'contact')}>LinkedIn</a><a className="button button-ghost" href="https://github.com/MaxiAringoli" target="_blank" rel="noreferrer" onClick={() => trackEvent('github_click', undefined, 'contact')}>GitHub</a></div><small>Villa Carlos Paz · Córdoba · Argentina · Disponible para trabajo remoto</small></section>
      </main>
      <footer><a className="brand" href="#inicio">MAXI<span>.</span></a><span>Ingeniería de Software · Desarrollo de soluciones digitales</span><span>© 2026 Maxi Aringoli</span></footer>
    </div>
  )
}

export default App
