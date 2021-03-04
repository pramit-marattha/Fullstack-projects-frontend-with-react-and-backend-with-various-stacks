/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Modal = ({ children, show, close }) => {
  if (!show) return null

  return (
    <div className="Modal" css={CSS}>
      <div className="modal-content">
        <i className="fa fa-times-circle" onClick={close} />
        {children}
      </div>
    </div>
  )
}

const CSS = css`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    position: relative;
    width: 400px;
    background: #211f27;
    border-radius: 4px;
    padding: 25px;
  }
  i {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
`

export default Modal