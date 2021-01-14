import React from "react";

import { Container, HastagIcon, InviteIcon, SettingsIcon } from "./style";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HastagIcon />
        <span>Chat-livre</span>
      </div>
      <div className='icons-right'>
        <InviteIcon className='icons' />
        <SettingsIcon className='icons'/>
      </div>
    </Container>
  );
};

export default ChannelButton;
