import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadPhoneIcon,
  SettingsIcon,
} from "./style";

const ServerName: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
           <strong>Fabricio de sousa</strong>
           <span>#25253</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default ServerName;
