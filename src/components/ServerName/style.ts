import styled from "styled-components";

import {ExpandMore} from 'styled-icons/material';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    padding:0 11px 0 16px;
    background-color:var(--secondary);

    box-shadow:rgb(0, 0, 0, 0.2) 0px 1px 0px 0px;


`;
export const Title = styled.h1`
    font-weight:bold;
    font-size:16px;
    color:var(--white);

`;
export const ExpandIcon = styled(ExpandMore)`
    width:28px;
    height:28px;

    color:var(--white);
    cursor:pointer;

`
