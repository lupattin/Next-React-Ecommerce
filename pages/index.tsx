import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import {Example} from "ui/slyder/slyder"
const Home: NextPage = () => {
  return (
    <Layout>
      <div style={{height: "80vh"}}>
        <Example ></Example>
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}