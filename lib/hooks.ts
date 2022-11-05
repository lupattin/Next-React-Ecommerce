import useSWRInmutable from 'swr/immutable'
import { fetcherGet, fetcherPost, fetcherPatch, fetcherPostWithoutBody } from './api'

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

    const { data, error } = useSWRInmutable( code? [ "/api/auth/token" , {email, code:parseInt(code)}] : "", fetcherPost, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    
    return { data, error }
}

export function useMe(token){
    
    const {data, error} = useSWRInmutable( token? ["/api/me", token] : "", fetcherGet, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return { data, error }
}
export function usePatchMe(token, body){
    
    let trigger = ""
  
    if(body.name){
        trigger = "cambio"
    }
    const {data, error} = useSWRInmutable( trigger? ["/api/me", body, token] : "", fetcherPatch, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return { data, error }
}
export function useSearchProducts(query){
    
    const {data, error} = useSWRInmutable( "/api/search?q=" + query + "&limit=100&offset=1", fetcherGet, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return { data, error }
}
export function useGetOrder(productID, token){

    const {data, error} = useSWRInmutable(productID? ["/api/order?productID=" + productID, token] : null, fetcherPostWithoutBody, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return { data, error }
}
export function useGetOneProduct(productID){

    const {data, error} = useSWRInmutable(productID? ["/api/products/" + productID] : null, fetcherGet, {
        shouldRetryOnError:false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return { data, error }
}