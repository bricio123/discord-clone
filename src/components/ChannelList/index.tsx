import React from 'react';

import {Container, Category, AddCategoryIcon} from './style';

import ChannelButton from '../ChannelButton';


const ServerName: React.FC = () => {
    return(
       <Container>
          <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon/>
          </Category>
          <ChannelButton channelName='chat-livre'/>
          <ChannelButton channelName='unidos-do-avai'/>
          <ChannelButton channelName='bot-livre'/>
          <ChannelButton channelName='IA-livre'/>
          <ChannelButton channelName='Nosso-mundo'/>
          <ChannelButton channelName='Ate-proxima'/> 
       </Container>
    )
};

export default ServerName;