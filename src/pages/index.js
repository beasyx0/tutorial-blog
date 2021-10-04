import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Python Logo with cool background"
        src="https://cms.globalacademicresearch.com/IAH_AU/data/image_upload/1478263587maxresdefault-min.jpg"
      />
    </Layout>
  )
}

export default IndexPage
