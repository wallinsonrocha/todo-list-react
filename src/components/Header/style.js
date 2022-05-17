import styled from 'styled-components';

export const Container = styled.div`
    padding: 1em;
    display: flex;

    align-items: center;
    box-shadow: 0 0 4px #000;

    @media only screen and (max-width:768px) {
        padding: 2em;
    }
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
`