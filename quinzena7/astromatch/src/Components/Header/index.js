import React from 'react';
import {HeaderContainer, HeaderImg, Astro} from './styled'
import changePageImg from '../../Assets/changePage.svg'
export default function Header(props) {
  
    return (
      <HeaderContainer>
        <h3> astromatch</h3>
          <HeaderImg src={changePageImg} onClick = {props.setPage}/>
      </HeaderContainer>
    )
}