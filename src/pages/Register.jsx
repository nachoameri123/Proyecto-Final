import { useState } from "react"
import { Layout } from "../components/Layout"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    const newUser = {
      username,
      email,
      password
    }

    await submitUser()
    if (!error) {

      setSuccess("Usuario registrado con éxito")

      setUsername("")
      setEmail("")
      setPassword("")
    }
  }

  const submitUser = async () => {
    const result = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        username: username,
        password: password,
        email: email

      })
    })
    if (!result.ok) {
      setError("error creando el usuario")
    }
    const data = await result.json()
    console.log(data)
  }

  return (
    <Layout>
      <h1 className="text-center my-4">Regístrate</h1>

      <section className="container">
        <h2 className="mb-4">Hola, bienvenido</h2>

        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Ingresa tu nombre de usuario"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico:</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>

        {error && <p className="mt-3 text-danger">{error}</p>}
        {success && <p className="mt-3 text-success">{success}</p>}
      </section>

    </Layout>
  )
}

export { Register }