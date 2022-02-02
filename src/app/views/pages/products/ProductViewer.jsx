import React, { useState } from 'react'
import { Card, Divider, Grid, Icon } from '@mui/material'
import { AddToCartButton, Breadcrumb } from 'app/components'
import { styled, useTheme } from '@mui/system'
import { H4, H5, Paragraph, Span } from 'app/components/Typography'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const ProductCard = styled(Card)(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
}))

const IMG = styled('img')(() => ({
    marginBottom: 32,
    maxWidth: '100%',
    maxHeight: '100%',
}))

const PriceBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const CallBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
}))

const ProductViewer = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary
    const primary = theme.palette.primary.main

    const [selectedImage, setSelectedImage] = useState(
        '/assets/images/laptop-2.png'
    )
    const StyledImg = styled('img')(({ imgUrl }) => ({
        width: 80,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: '4px',
        border:
            selectedImage === imgUrl && '2px solid rgba(var(--primary), 0.67)',
    }))

    return (
        <Container>
            <Container>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'View Project' },
                    ]}
                />
            </Container>

            <Card sx={{ px: 4, py: 4 }} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <ProductCard>
                            <IMG src={selectedImage} alt="laptop" />
                            <PriceBox>
                                {imageList.map((imgUrl) => (
                                    <StyledImg
                                        src={imgUrl}
                                        alt="laptop"
                                        key={imgUrl}
                                        imgUrl={imgUrl}
                                        onClick={() => setSelectedImage(imgUrl)}
                                    />
                                ))}
                            </PriceBox>
                        </ProductCard>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <H4 sx={{ mt: 0, mb: 2 }}>
                            Hospital Project
                        </H4>
                        <Paragraph
                            sx={{
                                mt: 0,
                                mb: 2,
                                color: secondary,
                            }}
                        >
                            Company: VSTCE
                        </Paragraph>
                        <Paragraph
                            sx={{
                                mt: 0,
                                mb: 2,
                                color: secondary,
                            }}
                        >
                            Project Number: 55-PROJ-H-22
                        </Paragraph>
                        <Paragraph sx={{ mt: 0, mb: 2 }}>
                            <Span sx={{ color: secondary }}>Start Date: 16/07/22 </Span>
                        </Paragraph>
                            <Paragraph sx={{ mt: 0, mb: 2 }}>
                            <Span sx={{ color: secondary }}>End Date: 12/08/22 </Span>
                        </Paragraph>


                        <Divider sx={{ mb: 2 }} />
                        <AddToCartButton propStyle={{ mb: 2 }} amount={0} />

                        <Divider sx={{ mb: 2 }} />
                        <Paragraph
                            sx={{
                                mt: 0,
                                mb: 1,
                                color: secondary,
                                fontWeight: '500',
                            }}
                        >
                            
                        </Paragraph>
                          {/* <Paragraph
                            sx={{
                                mt: 0,
                                mb: 2,
                                color: primary,
                            }}
                        >
                            Location: 44 Road Street Areaville
                        </Paragraph> */}
                        <CallBox>
                            <Icon
                                sx={{ mr: 1 }}
                                fontSize="small"
                                color="primary"
                            >
                                edit_location
                            </Icon>
                            <H5 sx={{ m: 0, color: primary }}>Location: 44 Road Street Areaville</H5>
                        </CallBox>
                        <Divider sx={{ mb: 2 }} />

                        <H4 sx={{ mt: 0, mb: 2 }}>Description</H4>
                        <p>
                           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on t
                        </p>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

const imageList = [
    '/assets/images/laptop-1.png',
    '/assets/images/laptop-2.png',
    '/assets/images/laptop-3.png',
]
export default ProductViewer
