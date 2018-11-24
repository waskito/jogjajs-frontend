/* layouts/Main.js */

import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ children, title = 'JogjaJS Blog' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      Made with love from Jogja
    </Footer>
  </Wrapper>
)