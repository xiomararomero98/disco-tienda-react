export default function ContactoPage() {
  return (
    <main className="contacto-page">
      <section className="contacto-container">
        <h2>Contacto</h2>

        <div className="contacto-grid">
          <div className="contacto-form">
            <h3>Escríbenos</h3>
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo" required />
              <textarea placeholder="Mensaje" rows={4} />
              <button className="btn">Enviar</button>
            </form>
          </div>

          <div className="contacto-info">
            <h3>Información</h3>
            <p>📍 Santiago, Chile</p>
            <p>📧 contacto@discotienda.cl</p>
            <p>📞 +56 9 1234 5678</p>

            <div className="contacto-mapa">
              <iframe
                title="mapa"
                src="https://maps.google.com/maps?q=Santiago%20Chile&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
