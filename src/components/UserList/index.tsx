import React from 'react';

import {Container, Role, User, Avatar} from './style';

interface UserProps{
   nickname: string;
   isBot?: boolean;

}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
   return(
      <User>
         <Avatar/>
            <strong>{nickname}</strong>
         {isBot && <span>Bot</span>}
      </User>
   )
}


const UserList: React.FC = () =>{
    return(
       <Container>
         <Role>Disponível - 1</Role>
         <UserRow nickname='fabricio de sousa'/>

         <Role>Disponível - 2</Role>
         <UserRow nickname='Mateus oliveira' isBot/>
       </Container>
    )
};

export default UserList;