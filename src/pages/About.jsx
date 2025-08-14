export default function About() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Sobre nosotros</h1>

      <section className="mb-4">
        <h2 className="h4 mb-2">De qué trata el proyecto</h2>
        <p className="lead">
          Nuestro proyecto está enfocado en <strong>vender productos</strong> de forma sencilla,
          rápida y accesible para todos, ofreciendo una experiencia de compra confiable y segura.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-2">A quién está dirigido</h2>
        <p className="lead">
          Está dirigido a <strong>todo el público</strong>, pero si te registras y
          accedes a tu cuenta, podrás disfrutar de <strong>beneficios exclusivos</strong>
          como descuentos y ofertas especiales.
        </p>
      </section>

      <section>
        <h2 className="h4 mb-2">Qué tecnologías o enfoques se usaron</h2>
        <p className="lead">
          Para el desarrollo utilizamos <strong>HTML</strong>, <strong>CSS</strong> y <strong>JSX</strong> (JavaScript con sintaxis de React),
          lo que nos permite crear interfaces dinámicas y modernas.
        </p>
      </section>
    </div>

  );
}

