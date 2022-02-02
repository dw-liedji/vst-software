import {
    Card,
    Button,
    Avatar,
    Grid,
    LinearProgress,
    Divider,
} from '@mui/material'
import React from 'react'
import { GoogleIcon } from 'app/components'
import { Link } from 'react-router-dom'
import { Twitter } from '@mui/icons-material'
import { Box, styled, useTheme } from '@mui/system'
import { H5, Paragraph, Span } from 'app/components/Typography'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const StyledButton = styled(Button)(({ theme }) => ({
    paddingLeft: '20px',
    paddingRight: '20px',
    transition: 'all 250ms',
    background: `rgba(var(--primary), 0.15)`,
    color: theme.palette.primary.main,
    '&:hover': {
        color: '#ffffff',
        fallbacks: [{ color: 'white !important' }],
        background: `${theme.palette.primary.main} !important`,
        backgroundColor: `${theme.palette.primary.main} !important`,
    },
}))

const StyledP = styled(Paragraph)(({ theme }) => ({
    color: theme.palette.text.secondary,
}))

const StyledLink = styled(Link)(() => ({
    display: 'flex',
    alignItems: 'center',
    '& span': { marginLeft: '8px' },
}))

const ProfileCard2 = ({ user }) => {
    const { palette } = useTheme()
    const textMuted = palette.text.secondary

    return (
        
        <Card sx={{ mb: 2, pb: 2 }}>
            
            <Box p="12px">
                
                <Grid container spacing={3} alignItems="center">
                    <Grid item sm={4} xs={12}>
                        <FlexBox m={1}>
                            <Avatar
                                sx={{ width: 56, height: 56 }}
                                src={user.imgUrl}
                            />
                            <Box ml={2}>
                                <H5>{user.name}</H5>
                                <StyledP
                                    sx={{
                                        mt: 1,
                                        fontWeight: 'normal',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {user.company?.toLowerCase()}
                                </StyledP>
                            </Box>
                        </FlexBox>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <FlexBox mb="4px">
                            <StyledP sx={{ fontWeight: '500' }}>
                                Task Completion
                            </StyledP>
                            <StyledP>65%</StyledP>
                        </FlexBox>
                        <div>
                            <LinearProgress
                                color="primary"
                                value={55}
                                variant="determinate"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <StyledLink sx={{ mb: '4px' }} to="/">
                            <GoogleIcon
                                fontSize="small"
                                sx={{ fontSize: '14px', color: '#ec412c' }}
                            />
                            <span>test@email.com</span>
                        </StyledLink>
                        
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <FlexBox m={-1} px="20px" flexWrap="wrap">
                <StyledP sx={{ m: 1 }}>Added 3 mins ago</StyledP>
                <Box m={1} display="flex" flexWrap="wrap">
                    <StyledButton size="small" sx={{ mr: '4px' }}>
                        ROLES
                    </StyledButton>
                    <StyledButton size="small">REMOVE</StyledButton>
                </Box>
            </FlexBox>
        </Card>
    )
}

export default ProfileCard2
