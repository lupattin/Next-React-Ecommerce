import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
          <SWRConfig>
            <Component {...pageProps} />
          </SWRConfig>
        </RecoilRoot>
    )
}

export default MyApp
