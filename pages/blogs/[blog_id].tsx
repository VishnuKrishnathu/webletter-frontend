import type { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const BlogsPage :NextPage= () => {
    const router = useRouter()
    const { blog_id } = router.query
    return (
        <React.Fragment>
            { blog_id }
        </React.Fragment>
    )
}

export default BlogsPage;