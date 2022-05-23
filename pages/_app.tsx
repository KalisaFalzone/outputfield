import React from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'

type Props = {
  Component: React.FC,
  pageProps: any
}

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
