import styled from 'styled-components';

export const Table = styled.table`
  overflow-x: scroll;
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 1px;
  border-color: grey;

  @media screen and (max-width: 790px) {
    display: block !important;
    /* width: 100%; */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
    }

    th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
      padding: .75rem;
    }

    font-size: 7px;
    color: #444;
  }

  tbody {
    font-size: 8px;
    color: #464e5f;

    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;

    td {
      display: table-cell;
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
  }

  .edit, .eraser, .info {
    margin: 0 3px;
    cursor: pointer;
    font-size: 12px;
    padding: 8px 10px;
    border-radius: 60px;
    color: #fff;
    border: none;
    font-weight: 400;
    transition: all 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
