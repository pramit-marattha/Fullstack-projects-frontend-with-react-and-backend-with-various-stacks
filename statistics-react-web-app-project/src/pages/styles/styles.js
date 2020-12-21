import styled from 'styled-components';

export const Wrap = styled.div`
    display: grid;
    grid-template-columns: 18% 82%;
    grid-template-rows: 100vh;
`;

export const Main = styled.div`
    @media screen and (max-width: 1200px) {
        grid-row: 1;
        grid-column: 1/3;
    }

    background: url("https://cdn.pixabay.com/photo/2020/04/19/09/03/coronavirus-5062543_1280.png");

    .content {
        height: calc(100vh - 70px);
        overflow-y: auto;
        padding: 30px 0;

        .title {
            h1 {
                color: white;
                font-weight: 300;
            }
        }
    }
`;

export const NavBar = styled.div`
    padding: 0 50px;
    height: 70px;
    color: white;
    background: #275bae;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
        list-style: none;

        li {
            padding: 0 10px;
            border-left: 1px solid #999;
            cursor: pointer;

            font-weight: 400;
            color: white;

        }
    }

    span {
        font-size: 13px;
        color: #b5b5c3;
        font-weight: normal;

        .name {
            font-weight: bold;
        }
    }

    .toggle {
        opacity: 0;
        transition: margin 0.3s;
    }

    @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: space-between;

        ul {
            display: none;
        }


        svg {
            color: #fff;
        }

        .toggle {
            color: #555;
            opacity: 1;
        }

    }
`;

