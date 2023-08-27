import React from 'react'
// images
import US from '../../../../public/assets/images/Icon/US.png'
// style
import Style from './style'
import Container from '../../atoms/Container'
import Typography from '../../atoms/Typography'
import Image from 'next/image'
const Copyright = () => {
    return (
        <Style>
            <Container >
                <div className="stack">
                    <Typography as='p' variant="default-muted">
                        © 2023 Ecommerce.
                    </Typography>
                    <Typography as='p' variant="default-muted">
                        <Image src={US} alt="US" className='footer__image' /> English 
                    </Typography>
                </div>
            </Container>
        </Style>
    )
}

export default Copyright