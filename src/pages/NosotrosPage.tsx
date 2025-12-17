export default function NosotrosPage() {
  return (
    <main className="nosotros-page">
      <section className="nosotros-hero">
        <h2>Sobre Disco Tienda</h2>
        <p>Tu previa comienza aquí</p>
      </section>

      <section className="nosotros-section">
        <div className="nosotros-texto">
          <h3>¿Quiénes somos?</h3>
          <p>
            Disco Tienda es una plataforma enfocada en la venta de productos y
            experiencias para la noche, ofreciendo entradas, promociones y
            accesorios para eventos.
          </p>
        </div>
        <div className="nosotros-imagen">
          <img src="/img/nosotros-1.png" alt="Equipo Disco Tienda" />
        </div>
      </section>

      <section className="nosotros-section invertida">
        <div className="nosotros-imagen">
          <img src="/img/nosotros-2.png" alt="Nuestra misión" />
        </div>
        <div className="nosotros-texto">
          <h3>Nuestra misión</h3>
          <p>
            Facilitar el acceso a productos y eventos nocturnos mediante una
            plataforma moderna, segura y fácil de usar.
          </p>
          <ul>
            <li>✔️ Compra rápida</li>
            <li>✔️ Seguridad en pagos</li>
            <li>✔️ Experiencia de usuario moderna</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
