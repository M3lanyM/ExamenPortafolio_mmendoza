import { useState, useEffect } from "react"
import Data from "./data"
import Perfil from "./perfil"
import Inform from "./components/inform"
import PageFooter from "./components/pageFooter"

function App() {
  const [items, setItems] = useState([])
  const [user] = useState("M3lanyM")

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
      <header>
        <h1 className="name_port">  Portfolio Web
        </h1>

      </header>
      <nav>
        <Inform />
      </nav>

      <section className="conf-repos">
        <div>
          <h1 className="text-conf">
            Aqui te muestro mis repositorios
          </h1>
        </div>

        {!items ? (
          <Data />
        ) : (
          <div className="carrucel">
            {items.map((item) => (
              <div className="perfil">
                <Perfil key={item.id} {...item} />
              </div>
            ))}
          </div>
        )}
      </section>

      <footer>
        <PageFooter />
      </footer>


    </>
  )
}

export default App

