import ScrollArtifact from './components/ScrollArtifact';
import ScrollProgress from './components/ScrollProgress';

const experience = [
  {
    period: 'SEP 2025 — ACTUALIDAD',
    role: 'Técnico de Soporte N1 y Desarrollador',
    company: 'Empresa confidencial · Sistemas en producción',
    detail: 'Diagnóstico y seguimiento de incidencias, validación de soluciones y desarrollo de mejoras con Java, Python y tecnologías frontend. IA generativa aplicada al análisis y la documentación, siempre con revisión técnica.',
    current: true,
  },
  {
    period: 'MAR 2025 — JUN 2025',
    role: 'Desarrollador Full-Stack',
    company: 'MADOC (Ejército de Tierra) · Granada',
    detail: 'Desarrollo de aplicaciones internas con C#, .NET 7, TypeScript, HTML y CSS. Participación en migración de datos, integración de sistemas y mejora de procesos.',
  },
  {
    period: 'OCT 2018 — ENE 2025',
    role: 'Atención al Cliente y Operaciones',
    company: 'Abonos Bolívar · Armilla',
    detail: 'Resolución directa de consultas, orientación al cliente y gestión de inventario. Una etapa que reforzó mi comunicación, criterio y capacidad para responder con calma.',
  },
  {
    period: 'MAR 2018 — JUN 2018',
    role: 'Técnico de Sistemas y Redes',
    company: 'Horizontes Informática S.L. · Granada',
    detail: 'Instalación y configuración de sistemas operativos, equipos y redes; diagnóstico, reparación y mantenimiento para asegurar la continuidad del servicio.',
  },
];

const education = [
  {
    period: '2023 — 2025',
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    place: 'Técnico Superior · MEDAC Nevada, Granada',
  },
  {
    period: '2016 — 2018',
    title: 'Sistemas Microinformáticos y Redes',
    place: 'Técnico · I.E.S. Hermenegildo Lanz, Granada',
  },
];

const stack = [
  ['BACKEND & CORE', 'Java 21 · Spring Boot · Python · C# · .NET 7 · REST APIs · Maven'],
  ['FRONTEND & WEB', 'React · TypeScript · JavaScript · Angular · Astro · Blazor · HTML5 · CSS3'],
  ['BASES DE DATOS', 'PostgreSQL · MySQL · Supabase · SQL · Flyway · Modelado relacional'],
  ['QA & TESTING', 'JUnit · Vitest · Pruebas unitarias · Validación de APIs · Depuración'],
  ['CLOUD & ENTREGA', 'Docker · Git · GitHub · CI/CD · AWS (experiencia básica) · Vercel'],
  ['IA GENERATIVA', 'Análisis técnico · Desarrollo asistido · Documentación · Prototipado · Revisión humana'],
];

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>RAÚL GIL</span>
          <span className="brand-index">/ PORTFOLIO 26</span>
        </a>
        <nav className="primary-nav" aria-label="Navegación principal">
          <a className="nav-optional" href="#perfil">Perfil</a>
          <a className="nav-optional" href="#trayectoria">Trayectoria</a>
          <a href="#proyectos">Proyectos</a>
          <a className="nav-optional" href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Desarrollo de software · Soporte N1 · Granada</p>
          <h1 id="hero-title">José Raúl<br />Gil Jiménez</h1>
          <h2>Ingeniería que responde.<br />Software que avanza.</h2>
          <p className="hero-summary">
            Desarrollo aplicaciones y resuelvo incidencias reales en producción.
            Conecto soporte, código y producto para que la tecnología siga funcionando
            cuando más importa.
          </p>
          <div className="hero-actions" aria-label="Enlaces principales">
            <a className="button button-dark" href="mailto:raulgil98@gmail.com">Hablemos <span>↗</span></a>
            <a className="button button-light" href="/CV_Jose_Raul_Gil_ATS.pdf" download>Descargar CV <span>↓</span></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/raulgil2807" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-ra%C3%BAl-gil-jim%C3%A9nez-068019123/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="artifact-column">
          <ScrollArtifact />
          <div className="artifact-caption" aria-hidden="true">
            <span>SISTEMA / 04 CAPAS</span>
            <span>SCROLL PARA EXPLORAR</span>
          </div>
        </div>

        <div className="hero-footer">
          <span>Disponible para desarrollo backend, full-stack y soporte técnico</span>
          <span className="scroll-cue"><i /> Scroll</span>
        </div>
      </section>

      <section className="profile-section section-pad" id="perfil" aria-labelledby="profile-title">
        <div className="section-kicker">
          <p className="section-index">01 / PERFIL</p>
          <span className="section-meta">DESARROLLO + OPERACIÓN</span>
        </div>
        <h2 className="display-heading" id="profile-title">
          No solo escribo código.<br />Entiendo el incidente.
        </h2>
        <div className="profile-grid">
          <p className="profile-lead">
            Puedo investigar un problema, hablar con quien lo sufre y convertir lo aprendido
            en una mejora de producto clara, segura y mantenible.
          </p>
          <div className="profile-copy">
            <p>
              Mi base combina Desarrollo de Aplicaciones Multiplataforma y Sistemas
              Microinformáticos y Redes. Hoy trabajo entre soporte técnico nivel 1 y desarrollo,
              una posición que me obliga a mirar el software desde ambos lados.
            </p>
            <p>
              Me interesan los equipos donde la calidad se nota en producción: código legible,
              pruebas útiles, documentación que ahorra tiempo y comunicación directa cuando algo falla.
            </p>
          </div>
        </div>
        <div className="profile-facts" aria-label="Resumen profesional">
          <div><strong>PROD</strong><span>Experiencia con sistemas activos</span></div>
          <div><strong>N1 + DEV</strong><span>Diagnóstico y entrega de mejoras</span></div>
          <div><strong>ES / EN</strong><span>Español nativo · Inglés intermedio</span></div>
        </div>
      </section>

      <section className="trajectory section-pad" id="trayectoria" aria-labelledby="trajectory-title">
        <div className="section-side">
          <p className="section-index">02 / TRAYECTORIA</p>
          <h2 id="trajectory-title">Experiencia que conecta usuarios y software.</h2>
          <p>De los sistemas y redes al desarrollo full-stack y el soporte sobre producto real.</p>
        </div>
        <div className="timeline-column">
          <h3>EXPERIENCIA</h3>
          <ol className="timeline-list">
            {experience.map((item) => (
              <li className={item.current ? 'is-current' : ''} key={item.role}>
                <div className="timeline-period">{item.period}{item.current && <span> ACTIVO</span>}</div>
                <h4>{item.role}</h4>
                <p className="timeline-company">{item.company}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>

          <h3 className="education-title">FORMACIÓN</h3>
          <ol className="education-list">
            {education.map((item) => (
              <li key={item.title}>
                <span>{item.period}</span>
                <div><h4>{item.title}</h4><p>{item.place}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="production-section" id="produccion" aria-labelledby="production-title">
        <div className="production-intro">
          <p className="section-index">03 / AHORA MISMO</p>
          <h2 id="production-title">Código con contexto.<br />Producto con continuidad.</h2>
          <p>
            Mi trabajo actual ocurre donde una decisión técnica tiene consecuencias:
            sistemas que deben seguir disponibles y un ERP que debe crecer sin perder el control del dato.
          </p>
        </div>
        <div className="production-grid">
          <article>
            <div className="card-top"><span>01 / SISTEMAS EN PRODUCCIÓN</span><strong><i /> ACTIVO</strong></div>
            <h3>Soporte que termina<br />en una solución.</h3>
            <p>Incidencias N1, diagnóstico, priorización, escalado y desarrollo de correcciones o mejoras con Java, Python y frontend.</p>
            <dl>
              <div><dt>ENFOQUE</dt><dd>Usuario · impacto · causa · solución</dd></div>
              <div><dt>APOYO</dt><dd>IA generativa con validación humana</dd></div>
            </dl>
          </article>
          <article className="pera-now">
            <div className="card-top"><span>02 / PERA ERP</span><strong>EN DESARROLLO</strong></div>
            <h3>Un ERP preparado<br />para más de una empresa.</h3>
            <p>Producto horizontal para pymes con servicios de identidad, datos maestros, ventas, finanzas, operaciones, actividad y licencias.</p>
            <dl>
              <div><dt>CORE</dt><dd>Java 21 · Spring Boot · PostgreSQL</dd></div>
              <div><dt>INTERFAZ</dt><dd>React · TypeScript · Vite</dd></div>
            </dl>
            <a href="https://github.com/CODIGOAFRX/PERA" target="_blank" rel="noreferrer">Abrir repositorio ↗</a>
          </article>
        </div>
      </section>

      <section className="projects section-pad" id="proyectos" aria-labelledby="projects-title">
        <div className="section-kicker">
          <p className="section-index">04 / PROYECTOS</p>
          <a href="https://github.com/raulgil2807" target="_blank" rel="noreferrer">VER TODO EN GITHUB ↗</a>
        </div>
        <h2 className="display-heading" id="projects-title">Software que explica<br />cómo pienso.</h2>

        <article className="featured-project">
          <div className="project-number">01</div>
          <div className="project-main">
            <p className="project-label">PROYECTO PRINCIPAL · ERP MULTIEMPRESA</p>
            <h3>PERA ERP</h3>
            <p className="project-summary">
              Un ERP horizontal para pequeñas y medianas empresas, organizado por dominios
              para conectar operaciones críticas sin mezclar la propiedad de los datos.
            </p>
            <div className="project-actions">
              <a className="button button-dark" href="https://github.com/CODIGOAFRX/PERA" target="_blank" rel="noreferrer">Ver código <span>↗</span></a>
              <span className="project-status"><i /> Desarrollo activo</span>
            </div>
          </div>
          <div className="project-spec">
            <dl>
              <div><dt>ARQUITECTURA</dt><dd>Monorepo · API Gateway · servicios con límites de dominio</dd></div>
              <div><dt>BACKEND</dt><dd>Java 21 · Spring Boot · Spring Security · OpenAPI</dd></div>
              <div><dt>DATOS</dt><dd>PostgreSQL 17 · Flyway · aislamiento multiempresa</dd></div>
              <div><dt>CALIDAD</dt><dd>JUnit · Vitest · build Maven · Docker Compose</dd></div>
            </dl>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card">
            <div className="card-top"><span>02 / WEB APP</span><strong>PERSONAL</strong></div>
            <h3>Hucha del viaje</h3>
            <p>
              Miniaplicación compartida con autenticación y una revelación final:
              las aportaciones permanecen privadas hasta que se rompe la hucha.
            </p>
            <div className="tech-line">ASTRO · SUPABASE · RLS · TRIGGERS · REALTIME</div>
            <div className="inline-links">
              <a href="https://huchaviaje.vercel.app" target="_blank" rel="noreferrer">Ver demo ↗</a>
              <a href="https://github.com/raulgil2807/hucha_viaje" target="_blank" rel="noreferrer">Código ↗</a>
            </div>
          </article>
          <article className="project-card">
            <div className="card-top"><span>03 / MOBILE APP</span><strong>COLABORATIVO</strong></div>
            <h3>Guff</h3>
            <p>
              Red social móvil para mascotas con perfiles, publicaciones y una navegación
              pensada para una experiencia consistente en Android e iOS.
            </p>
            <div className="tech-line">REACT NATIVE · EXPO · TYPESCRIPT · REACT NAVIGATION</div>
            <div className="inline-links">
              <a href="https://github.com/Poempollo/Guff" target="_blank" rel="noreferrer">Código ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section className="stack-section section-pad" id="stack" aria-labelledby="stack-title">
        <div className="section-side">
          <p className="section-index">05 / STACK</p>
          <h2 id="stack-title">Herramientas para construir, probar y mantener.</h2>
          <p>No colecciono logos: uso cada tecnología para resolver una parte concreta del sistema.</p>
        </div>
        <div className="stack-list">
          {stack.map(([category, values], index) => (
            <div className="stack-row" key={category}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{category}</h3>
              <p>{values}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <p className="section-index">06 / CONTACTO</p>
        <div className="contact-grid">
          <div>
            <p className="contact-overline">¿BUSCAS A ALGUIEN QUE ENTIENDA EL CÓDIGO Y TAMBIÉN AL USUARIO?</p>
            <h2 id="contact-title">Construyamos<br />lo próximo.</h2>
          </div>
          <div className="contact-details">
            <p>Disponible para oportunidades en desarrollo backend, full-stack, soporte técnico y producto.</p>
            <a className="email-link" href="mailto:raulgil98@gmail.com">raulgil98@gmail.com <span>↗</span></a>
            <div className="contact-links">
              <a href="https://github.com/raulgil2807" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-ra%C3%BAl-gil-jim%C3%A9nez-068019123/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="/CV_Jose_Raul_Gil_ATS.pdf" download>CV ↓</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 JOSÉ RAÚL GIL JIMÉNEZ</span>
        <span>GRANADA · ESPAÑA</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>
    </main>
  );
}
