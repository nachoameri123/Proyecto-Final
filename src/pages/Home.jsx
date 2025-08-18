import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { ProductCard } from "../components/products/ProductCard"
import { SearchComponent } from "../components/products/buscador"

const Home = () => {
  const [products, setProducts] = useState([])
  const [showPopup, setShowPopup] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")

  // simulando existencia del usuario, proximamente este estado será global
  const { user } = useAuth()

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()
    setProducts(data)
  }

  // El array vacío (dependencias) espera a que ejecute el return del jsx. Si tiene algo, useEffect se va a ejecutar cada vez que se modifique lo que este dentro de la dependencia.
  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id != id))
      // fetchingProducts()
    }
  }

  const handleOpenEdit = (product) => {
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  // petición al backend mediante fetch para modificar-> método PATCH / PUT https://fakeproductapi.com/products
  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prevProduct =>
          prevProduct.map((product) =>
            product.id === productToEdit.id
              ? data
              : product
          ))
        // fetchingProducts()
      }
      setShowPopup(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div>

        <section className="py-5 bg-light text-center">
          <div className="container">
            <h1 className="display-5 fw-bold mb-3">Bienvenido a Nuestra Tienda</h1>
            <p className="lead text-muted">
              Descubrí una selección exclusiva de productos para vos.
              <br />
              Calidad, confianza y atención personalizada.
            </p>
          </div>
        </section>


        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h3 className="card-title mb-3">🚚 Envíos a todo el país</h3>
                    <p className="card-text text-muted">
                      Recibí tu compra en la puerta de tu casa estés donde estés.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h3 className="card-title mb-3">💳 Pagos seguros</h3>
                    <p className="card-text text-muted">
                      Trabajamos con plataformas que garantizan tu seguridad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="card-body">
                    <h3 className="card-title mb-3">🤝 Atención personalizada</h3>
                    <p className="card-text text-muted">
                      Estamos disponibles para ayudarte en todo momento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="container">
          <h2 className="fw-bold mb-3">Nuestros productos</h2>
          <p className="lead text-muted">
            Elegí entre nuestras categorías más populares.
          </p>
          <hr className="mx-auto" style={{ width: "60px", border: "2px solid #0d6efd" }} />
        </div>


        {
          showPopup && <section className="popup-edit">
            <h2>Editando producto.</h2>
            <button onClick={() => setShowPopup(null)}>Cerrar</button>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Ingrese el titulo"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
              />
              <input
                type="number"
                placeholder="Ingrese el precio"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)}
              />
              <textarea
                placeholder="Ingrese la descripción"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)}
              ></textarea>
              <input
                type="text"
                placeholder="Ingrese la categoria"
                value={categoryEdit}
                onChange={(e) => setCategoryEdit(e.target.value)}
              />
              <input
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)}
              />
              <button>Actualizar</button>
            </form>
          </section>
        }

        <SearchComponent products={products} />

      </section>
    </Layout>
  )
}

export { Home }
