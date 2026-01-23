import Layout from '@/components/Dashboard/Layout'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <Layout>
                {children}
            </Layout>
        </div>
    )
}

export default layout