import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 40px;
  border-radius: 40px;
  border: none;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  /* width: 100%; */
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  .card-title {
    padding: 1rem 1.25rem 0rem;

    @media screen and (max-width: 790px) {
      padding: 1rem .5rem 0;
    }

    margin-bottom: 0;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: #48465b;
    }

    .tools {
      @media screen and (max-width: 790px) {
        span {
          display: none;
        }
      }
      button, a {
        margin: 0 3px;
        cursor: pointer;
        font-size: 12px;
        background: #b20710;
        padding: 8px 10px;
        border-radius: 6px;
        color: #fff;
        border: none;
        font-weight: bold;
        /* line-height: 1px; */
        /* border: 1px solid #999; */
        transition: all 0.2s;

        &:hover {
            filter: brightness(90%);
          /* opacity: 0.95; */
          /* box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; */
        }
      }
    }
  }

  .card-body {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.5rem 1.25rem;

    @media screen and (max-width: 790px) {
      padding: 1.5rem .5rem;
    }

    &.light-text {
        p {
            color: #777;
        }
    }
  }

  .card-actions {
    padding: 0 1.25rem 1.25rem 1.25rem;
    display: flex;

    &.flex-end {
        justify-content: flex-end;
    }

    &.center {
        justify-content: center;
    }

    &.flex-start {
        justify-content: flex-start;
    }
  }
`;

export const CardDashboard = styled.div`
  margin-top: 40px;
  border-radius: 40px;
  border: none;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  /* width: 100%; */
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  &.red {
    border-left: 1.25rem solid #f64e60;
    color: #f64e60;
  }

  &.green {
    border-left: 1.25rem solid #1cc88a !important;
    color: #1cc88a !important;
  }

  &.blue {
    border-left: 1.25rem solid #36b9cc !important;
    color: #36b9cc !important;
  }

  &.orange {
    border-left: 1.25rem solid #f6c23e !important;
    color: #f6c23e !important;
  }

  .card-body {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.5rem 1.25rem;
    @media screen and (max-width: 790px) {
      padding: 1.5rem .5rem;
    }

    .row {
      align-items: center;
    }

    .col {
      flex-basis: 0;
      -webkit-box-flex: 1;
      flex-grow: 1;
      max-width: 100%;

      .title {
        color: #5a5c69 !important;
        font-size: .7rem;
        text-transform: uppercase!important;
        margin-bottom: .25rem!important;
      }

      .number {
        font-size: 1.125rem;
        font-weight: 700!important;
      }
    }

    .col-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;

      svg {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
    }
  }
`;
