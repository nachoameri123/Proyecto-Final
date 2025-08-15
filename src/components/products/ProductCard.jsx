export function ProductCard({ params }) {
  const { id, title, image, description } = params;
  console.log(params)
  return (
    <div className="card shadow-sm border-0 h-100">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          height: "200px",
          objectFit: "cover",
          width: "100%"
        }}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted flex-grow-1">
          {description || "No hay descripción disponible."}
        </p>
        <a href={"#"} className="btn btn-primary mt-auto">
          Ver más
        </a>
      </div>
    </div>
  );
}