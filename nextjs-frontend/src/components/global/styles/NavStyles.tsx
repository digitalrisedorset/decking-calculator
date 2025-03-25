import styled from 'styled-components';
import {StyleProps} from "@/components/global/styles/Global";

const NavStyles = styled.menu<StyleProps>`
    background-color: var(--${(props: StyleProps): string => props.colors?.navBgColour?props.colors?.navBgColour:'#595f39' });
    color: #fff;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 0 40px;
    position: relative;
    a {
        display: inline-block;
        font-size: 16px;
        color: var(--mediumgrey);
        border: none;
        cursor: pointer;
        padding: 8px 12px;
        text-decoration: none;
    }
    ul.solution-category {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 46px;
        left: 40px;
        text-align: left;
        padding: 20px;
        background: white;
        /*border: 1px solid red;*/
        li {
            list-style: none;
            padding: 5px 0;
        }
    }
`;


export default NavStyles;
