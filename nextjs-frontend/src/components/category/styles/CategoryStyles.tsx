import styled from 'styled-components';

export const MainCategoryStyles = styled.main`
    .logo {
        margin-bottom: 2rem;
    }
`

export const CategoryStyles = styled.main`
    h1 {
        margin: 2rem;
    }
`

export const PreferenceChoice = styled.div`
    /*border: 1px solid var(--mediumgrey);*/
    border: '1px solid var(--red);';
    background: var(--lightgrey);
    margin: 5px 0;
    padding: 5px;
    input {
        visibility: hidden;
    }
`


export const CategoryList = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    .category {
        display: flex;
        border: 1px solid #C2C9CD;
        background: #f9f7f7;
        padding: 20px;
        border-radius: 10px;
        .content {
            h2 {
                display: block;
                margin-bottom: 1rem;
                font-size: 1.2rem;
            }
            a {
                text-align: center;
                display: block;
                margin-top: 1rem;
                text-decoration: none;
                border: 1px solid #C2C9CD;
                border-radius: 5px;
                padding: 3px 10px;
                background: #bab6b6;
            }
            a:hover {
                background: #d8d2d2;
            }
            text-align: left;
            font-size: 0.8rem;
            padding: 0 10px;
            line-height: 1.3rem;
            .description {
                display: block;
                height: 80px;
                overflow: hidden;
            }
        }

    }

    @media (max-width: 600px) {
    }
`

export const Section = styled.section`
    display: grid;
    grid-row: 2;
    grid-column: 2 / -1;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 40px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 0px;
    }
`

export const CategoryLandingStyle = styled.main`
    h2 {
        margin: 2rem;
    }
    .section {
        display: grid;
        gap: 1.6rem;
        width: 80%;
    }
    .content {
        grid-column: 2;
        padding: 0 2rem;
        text-align: left;
        line-height: 1.6rem;
        font-size: 1rem;
    }
    .illustrations {
        grid-column: 1;
        grid-row: 1;
    }
`
