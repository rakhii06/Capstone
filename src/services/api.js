import axios from 'axios'
import { LOCAL_PRODUCTS } from '../data/LocalProduct.js'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
})


export const ALLOWED_CATEGORIES = [
  'smartphones',
  'laptops',
  'tablets',
  'mobile-accessories',
  'audio',
  'cameras',
  'gaming',
  'accessories',
]

export const fetchTechProducts = async () => {

  const { data } = await api.get('/products?limit=200')

  const apiProducts = data.products.filter((p) =>
    ALLOWED_CATEGORIES.includes(p.category)
  )

  return [...apiProducts, ...LOCAL_PRODUCTS]
}

export const fetchProductById = async (id) => {
  const numId = Number(id)

  if (numId >= 10001) {
    const local = LOCAL_PRODUCTS.find((p) => p.id === numId)
    if (local) return local
    throw new Error('Local product not found')
  }

  const { data } = await api.get(`/products/${id}`)
  return data
}

export default api