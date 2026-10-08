
function Footer() {
  const integrantes = [
    {
      nombre: "Integrante 1",
      rol: "Diseño y desarrollo",
    },
    {
      nombre: "Integrante 2",
      rol: "Catálogo de productos",
    },
    {
      nombre: "Integrante 3",
      rol: "Experiencia de usuario",
    },
  ];

  return (
    <footer className="footer">
      <h2>📚 Papel & Sueños</h2>

      <p>
        Librería y papelería creativa.
        Un espacio para imaginar, crear y soñar.
      </p>

      <h3>Nuestro equipo</h3>

      <div className="footer-equipo">
        {integrantes.map((persona) => (
          <div className="tarjeta-integrante" key={persona.nombre}>
            <div className="integrante-avatar">🌸</div>
            <h4>{persona.nombre}</h4>
            <p>{persona.rol}</p>
          </div>
        ))}
      </div>

      <p className="footer-copy">
        © 2026 Papel & Sueños. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
