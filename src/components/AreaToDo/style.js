import styled from 'styled-components';

export const Area = styled.div`        
    margin-top: 2em
`

export const AreaAdd = styled.div`    
    box-shadow: 0 0 4px #000;
    
    width: 28em;

    border-radius: 3em 3em 0 0;
    padding: 2em;

    margin: 0 auto;

    //Mobile
    @media only screen and (max-width:768px) {
        width: 80%;
    }
`

export const TitleAdd = styled.div`
    display:flex;

    margin: 0 auto;

    padding: 0.6em;

    background-color: #fff;
    border-radius: 1em;

    //Mobile
    @media only screen and (max-width:768px) {
        padding: .8em;
    }
`

export const Input = styled.input`
    background: transparent;
    border: 0;
    outline: 0;

    flex: 1;
`

export const DHAdd = styled.div`
    display: flex;
    justify-content: space-around;

    margin-bottom: 2em;
`

export const InputDH = styled.input`
    border-radius: 1em;
    padding: .2em;
    background-color: #fff;
`