// src/components/ProductTable.jsx
import { useState } from 'react'

const sampleProducts = [
  { id: 1, name: 'Camisa', price: 29.99 },
  { id: 2, name: 'Pantalón', price: 49.99 },
  { id: 3, name: 'Zapatos', price: 89.99 },
  { id: 4, name: 'Chaqueta', price: 120.00 },
]

function ProductTable() {
  const [search, setSearch] = useState('')

  const filteredProducts = sampleProducts.filter(prod =>
    prod.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>${prod.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductTable

  