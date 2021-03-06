import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Jane Tracy, a front end developer learning React and Gatsby.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage