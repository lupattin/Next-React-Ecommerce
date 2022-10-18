import useSWRInmutable from 'swr/immutable'
import { fetcher } from './api'

export function useProducts(){
    const { data, error } = useSWRInmutable("/api/products/featured-products", fetcher)
    
    
    return data
}