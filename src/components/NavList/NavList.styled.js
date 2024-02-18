import styled from 'styled-components';

export const NavListStyles = styled.div`
ul{
    gap: 12px;
}

  @media screen and (min-width: 1240px) {
    
     ul{
    display: flex;
    }
    a{
    color:var(--white-color);
    &:hover{
        color:var(--accent-color);
    }
    &.active{
        color:var(--hover-color);
    }
}

    font-size: 36px;
    ul{
    gap: 48px;
}
  }
`

export const AdresseStyles = styled.address`
a{
font-size: 12px;
}
 
ul{
    gap: 12px;
}
  
  @media screen and (min-width: 1240px) {
    
    a{
        font-size: 18px;
    color:var(--white-color);
    &:hover{
        color:var(--accent-color);
    }
    &.active{
        color:var(--hover-color);
    }
}

    ul{
    gap: 24px;
}
  }
`