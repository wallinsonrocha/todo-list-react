import styled from 'styled-components';

export const Menu = styled.div`
    z-index: 1;
    margin-left: ${props => props.active == true ? '0' : '-100%'};

    position: absolute;

    background-color: #041C2B;
    height: 100%;

    color: #fff;

    transition: all ease .5s;
`

export const Option = styled.p`
    position: relative;

    padding: 1em;

    width: 15em;

    &:before{
        position: absolute;

        content: '';
        border-bottom: .3em solid #fff;

        bottom: 0;
        left: 0;

        width: 0%;
        transition: all ease .2s;
    }

    &:hover{
        &:before{
            width: 100%;
        }        
    }
`