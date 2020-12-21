import styled from 'styled-components';

export const Side = styled.div`
    transition: all 0.5s;
    background: #212121;

    .logo {
        background: #212121;
        padding: 2px !important;
        width: 100%;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 40%;
            height: auto;
        }
    }

    ul {
        list-style: none;
        margin-top: 20px;

        li {

            cursor: pointer;

            display: flex;

            a{
                padding: 13px 25px;
                display: flex;
                flex: 1;
            }

            .icon {
                color: #494b74;
                flex: 0 0 33px;
                font-size: 1rem;
            }

            .item {
                font-size: 13px;
                font-weight: 500;
                line-height: 20px;
                color: #a2a3b7;

                display: flex;
                align-items: center;
            }

            &.active {
                border-left: 5px solid #3699ff;
                border-right: 5px solid #3699ff;

            }

            &.active, &:hover {
                background: #121212;

                .icon {
                    color: #3699ff;
                }

                .item {
                    color: #fff;
                }
            }


        }
    }

    @media screen and (max-width: 1200px) {
        position: ${props => props.drag ? 'absolute' : 'inherit'};
        height: ${props => props.drag ? '100vh' : 'inherit'};
        width: ${props => props.drag ? '185px' : '0'};
        overflow: hidden;
        z-index: 999;
    }
`;
