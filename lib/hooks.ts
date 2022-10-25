import useSWRInmutable from 'swr/immutable'
import { fetcherGet, fetcherPost } from './api'

export function useProducts(){
    const { data, error } = useSWRInmutable("/api/products/featured-products", fetcherGet)
    
    return data
}
export function useAuth(email){
        
    const { data, error } = useSWRInmutable( email? [ "/api/auth" , {email}] : "", fetcherPost, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return { data, error }
}
export function useCode(email , code){
        
    console.log(email, code);
    
    const { data, error } = useSWRInmutable( code? [ "/api/auth/token" , {email, code:parseInt(code)}] : "", fetcherPost, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return { data, error }
}
