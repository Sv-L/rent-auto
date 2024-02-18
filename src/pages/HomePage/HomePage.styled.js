import styled from 'styled-components';

export const HomePageStyles = styled.div`
h2,p{
    text-align: center;
}


li{
    border: 1px solid var(--accent-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;

    & p{
    text-align:justify;
    font-size: 14px;
}

    & svg{
        color: var(--accent-color);
        width: 24px;
        height: 24px;
    }
}

span{
    font-weight: bold;
}

a{
    margin:0 auto;
    display:flex;
    justify-content:center;
    text-align:center;
    padding:10px;
    width: 174px;
    height: 44px;
    border-radius: 12px;
    background-color:var(--accent-color);
    color:var(--white-color);
}

@media screen and (max-width: 319px) {
  
  }

  @media screen and (max-width: 767px) {
    li{
        margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
  ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 30px;
  }
  li{
    width:300px;
  }
  }

  @media screen and (min-width: 1240px) {
    
  }
`