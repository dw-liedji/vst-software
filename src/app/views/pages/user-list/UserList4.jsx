import {
    Grid,
    Card,
    Avatar,
    Divider,
    Button,
    Icon,
    TablePagination,
} from '@mui/material'
import Axios from 'axios'
import { Breadcrumb } from 'app/components'
import ProfileCard2 from './ProfileCard2'
import React, { useState, useEffect } from 'react'
import { Box, styled } from '@mui/system'
import { H5, Paragraph } from 'app/components/Typography'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const StyledButton = styled(Button)(() => ({
    width: '100%',
    paddingLeft: '12px',
    paddingRight: '12px',
    display: 'flex',
    justifyContent: 'flex-start',
    '& span': {
        marginLeft: '8px',
    },
}))

const StyledP = styled(Paragraph)(({ theme }) => ({
    color: theme.palette.text.secondary,
}))

const UserList4 = () => {
    const [isAlive, setIsAlive] = useState(true)
    const [userList, setUserList] = useState([])

    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    useEffect(() => {
        Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) setUserList(data)
        })
        return () => setIsAlive(false)
    }, [isAlive])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'Projects' },
                    ]}
                />
            </div>
            
            <Grid container spacing={2}>
                <Grid item md={3} sm={12} xs={12}>
                    <Card sx={{ pb: 4 }}>
                        <FlexBox p={4} flexDirection="column">
                            <Avatar
                                sx={{ mb: 3, width: 56, height: 56 }}
                                src="/assets/images/face-1.png"
                            />
                            <StyledP
                                sx={{
                                    mb: 1,
                                    fontWeight: 'normal',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Project Administrator
                            </StyledP>
                            <H5>Benjamin Franklin</H5>
                        </FlexBox>
                        <Divider sx={{ mb: 4 }} />
                        <Box mb={4}>
                            <StyledP sx={{ mb: '12px', ml: '12px' }}>
                                Projects
                            </StyledP>
                            <StyledButton variant="text">
                                <Icon fontSize="small">blur_linear</Icon>
                                <span>Project Roads</span>
                            </StyledButton>
                            <StyledButton variant="text">
                                <Icon fontSize="small">blur_linear</Icon>
                                <span>Software Project</span>
                            </StyledButton>
                            <StyledButton variant="text">
                                <Icon fontSize="small">blur_linear</Icon>
                                <span>Sales</span>
                            </StyledButton>
                           
                        </Box>
                        <div>
                               
                            <StyledP sx={{ mb: '12px', ml: '12px' }}>
                                New Project
                            </StyledP>
                            <StyledButton variant="text">
                                <Icon fontSize="small">add</Icon>
                                <span>New Project</span>
                            </StyledButton>
                        </div>
                    </Card>
                </Grid>
                
                <Grid item md={9} sm={12} xs={12}>
                     <StyledButton variant="text">
            <Icon fontSize="small">add</Icon>
            <span>Add Member</span>
            </StyledButton>
                    {userList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((user, ind) => (
                            <ProfileCard2 key={user.id} user={user} />
                        ))}
                    <Box mt={2}>
                        <TablePagination
                            sx={{ px: 2 }}
                            rowsPerPageOptions={[10, 25, 50]}
                            component="div"
                            count={userList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserList4
