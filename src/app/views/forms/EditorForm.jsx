import React, { useState, useEffect } from "react";
import { Breadcrumb } from 'app/components'
import { ChatEngine } from 'react-chat-engine';
import useAuth from 'app/hooks/useAuth'
import axios from "axios";
import { Span } from 'app/components/Typography'


import { styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    "& .breadcrumb": {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    }
}))
const StyledSpan = styled(Span)(({ bgColor }) => ({
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    background: bgColor,
}))
const Chat = () => {
  const  {user}  = useAuth();
    const [loading, setLoading] = useState(true);
    
    
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();        
        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
        
    }
    
    useEffect(() => {
    //     //  if(user) {
        // console.log(user.email)
        // console.log(user.id)
               //  }
        // if(!user) {
        //     return;
        // }
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project=id": "",
                "user-name": user.email,
                "user-secret": user.id,
            }
        })
        .then(()=> {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret', user.id);
            
            getFile(user.photoURL)
            .then ((avatar) => {
                formdata.append('avatar', avatar, avatar.name);
                axios.post('https://api.chatengine.io/users/', 
                formdata,
                { headers: { "private-key": "1a83b6fa-798c-4906-91ba-8f74af8488bf" }}
                )
                .then(() => setLoading(false))
                .catch((error)=>console.log(error))
            })
        })
    }, [user]);
    

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Communication', path: '/forms' },
                        { name: 'Chat' },
                    ]}
                />
                <h1>Hello</h1>
            </div>
                   <div className="chats-page">

            <ChatEngine 
                renderIceBreaker={(chat) => {
                   
                }}
                height="calc(100vh-66px)"
                projectID="35879bf9-c632-4dec-b696-822624c17d5c"
                userName={user.email}
                userSecret={user.id}
              
                />
                        </div>

        </Container>
    )
}

export default Chat
