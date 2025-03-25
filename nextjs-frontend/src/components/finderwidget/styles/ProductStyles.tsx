import styled from "styled-components";

export const ProductStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 80px;
    margin: 2rem;
    border: 1px solid var(--lightgrey);
    border-radius: 5px;
    .board-type {
        margin: 1rem;
        .title {
            text-align: center;
            margin: 15px 0;
            padding-bottom: 10px;
            display: block;
            border-bottom: 1px solid grey;
        }
    }
    img {
        width: 300px;
    }
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

export const ColourStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    .colour {
        border: 1px solid var(--lightgrey);
        padding: 2rem;
        border-radius: 10px;
    }
`
