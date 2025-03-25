import styled from 'styled-components';

export const OptionSelectionStyle = styled.div`
    background: var(--lightgrey);
    margin: 5px 0;
    padding: 5px;
    display: flex;
    label {
        text-align: left;
        width: 50%;
    }
    span {
        text-align: left;
        width: 50%;
    }
`

export const WomenFinderStyle = styled.div`
    margin: 2rem;
    border: 1px solid var(--lightgrey);
    border-radius: 5px;
    h2 {
        margin: 1rem 1rem 2rem;
        padding: 10px;
        background: var(--lightgrey);
        border: 1px solid var(--lightgrey);
        border-radius: 5px;
    }
    button {
        background: var(--mediumgrey);
        color: white;
        display: block;
        width: 100%;
    }

`

export const StepFinder = styled.div`
    display: flex;
    gap: 10px;
`

export const ShapeStyle = styled.div`
    display: grid;
    border: 1px solid var(--mediumgrey);
    border-radius: 5px;
    padding:10px;
    width: 30%;
    position: relative;
    height: 140px;
    input {
        grid-row: 2;
        position: absolute;
        bottom: 7px;
        left: 10px
    }
`

export const DimensionStyle = styled.div`
    input {
        padding: 7px;
        margin: 5px 5px 5px;
    }
    .field {
        margin-top: 20px;
    }
`
