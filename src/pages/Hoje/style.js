import styled from "styled-components";

export const Activity = styled.li`
    display: flex;
    
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 0.5em;
    margin-bottom: 0.5em;

    background-color: ${props => props.check == true ? '#3a3838' : '#848383'};

    transform: ${props => props.check == true ? 'scale(0.9)' : 'scale(1)'};

    transition: all 0.2s ease;

    // Classes
        .title-todo{
            width: 65%;
        }

        .data-hour-todo{
            width: 25%;

            text-align: center;
            background: rgba(196, 196, 196, 0.5);
            padding: 0.5em;
        }
`