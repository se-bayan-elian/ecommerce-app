import React from 'react'
import Paper from './Paper'
import { AuthPagesCountiner } from './AuthPagesCountiner'
import Footer from './FooterAuth'

const AuthPages = ({ children }) => {
    return (
        <>
            <AuthPagesCountiner>
                <Paper>
                    {children}
                </Paper>
            </AuthPagesCountiner>
            <Footer />
        </>
    )
}

export default AuthPages