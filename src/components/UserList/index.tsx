import React from 'react';

import {Container, Role, UserRow} from './style';




const UserList: React.FC = () =>{
    return(
       <Container>
         <Role>Disponível - 1</Role>
         <UserRow nickname='fabricio de sousa'/>

         <Role>Disponível - 2</Role>
         <UserRow nickname='Mateus oliveira' isbot/>
       </Container>
    )
};

export default UserList;