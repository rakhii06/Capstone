import axios from 'axios'

// Axios instance for dummyjson API
const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
})

// Allowed categories — ONLY tech gadgets
export const ALLOWED_CATEGORIES = ['smartphones', 'laptops', 'tablets']

// Fetch all products, then filter to only tech gadget categories
export const fetchTechProducts = async () => {
  // dummyjson returns 30 products by default; we ask for more then filter
  const { data } = await api.get('/products?limit=100')
  return data.products.filter((p) =>
    ALLOWED_CATEGORIES.includes(p.category)
  )
}

// Fetch a single product by id
export const fetchProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`)
  return data
}

export default api
