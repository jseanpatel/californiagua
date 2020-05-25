import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'
import '../styles/global.scss'

const MainLayout = ({ children }) => (
  <>
    <Header></Header>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
    <Footer></Footer>
  </>
)

export default MainLayout
