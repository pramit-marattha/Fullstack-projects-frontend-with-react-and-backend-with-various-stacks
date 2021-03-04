/** @jsx jsx */
import React,{useState,useRef,useContext} from 'react'
import { css, jsx } from '@emotion/core';
import MusedifyLogo from "../../../img/musedify.png";
import Modal from "../Modal";
import ToastNotification from "../ToastNotification";
import {StoreContext} from "../MusedifyPlayer";


/**
 * @function Sidebar
 */
const Sidebar = () => {
  const [sidebar,setSidebar] = useState({
    modal:false,
    toast:""
  });

  const {state,dispatch} = useContext(StoreContext);

  const playlists =Object.keys(state.playlists);
  const newplaylistsRef = useRef(null)

  const newPlaylist = e => {
    e.preventDefault()
    const list = newplaylistsRef.current.value

    dispatch({type:'ADD_PLAYLIST',playlist: list})

    setSidebar({
      ...sidebar,
      modal: false,
      toast: '🎉🎉 Cheers!!  New playlist has been created'
    })
  }

  return (
    <ul className="Sidebar" css={CSS}>
    <img src={MusedifyLogo}/>

    <li className="library">Your Library</li>

    {playlists.map(list => <li key={list} className={list === state.currentPlaylist ? "active" : ""} onClick={()=>{dispatch({type:'SET_PLAYLIST',playlist:list})}}>{list}</li>)} 
    
    {/* setSidebar({...sidebar,currentPlaylist:list }) */}

    <li className="new-playlist" onClick={()=>{setSidebar({...sidebar,modal:!sidebar.modal})}}>
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <span> New Playlist</span>
      </li>

      <Modal show={sidebar.modal} close={()=>{setSidebar({...sidebar,modal:!sidebar.modal})}}>
      <form onSubmit={newPlaylist}>
          <div className="title">Create New Playlist</div>
          {/* <div>Name</div> */}

          <div className="content-wrap" >
            <input
              type="text"
              placeholder="Create Playlist"
              ref={newplaylistsRef}
              required
            />
            <br />
            <div style={{paddingBottom:"70px"}}></div>
            <button type="submit">+ ADD</button>
          </div>
        </form>
      </Modal>

      <ToastNotification toast={sidebar.toast} close={()=>{(setSidebar({...sidebar,toast:""}))}} />
    </ul>
  )
}

const CSS = css`
      width: 200px;
      height: 100%;
      background: #000000;
      padding-top:10px;
      img {
        height: 60px;
        padding-left: 20px;
        padding-bottom:10px;
        margin-bottom:10px;
      }

      li {
    padding-left: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;
  }
  li.active {
    border-left: 2px solid grey;
    padding-left: 18px;
  }
  li.library {
    cursor: unset;
    color: #999;
    text-transform: uppercase;
    font-weight: normal;
  }
  li.new-playlist {
    position: absolute;
    bottom: 80px;
    i {
      margin-right: 5px;
      transform: translateY(1px);
      &:before {
        font-size: 20px;
      }
    }
    span {
      color: #999;
      font-weight: 300;
    }
  }
  form {
    button {
      background-color: #2bcc6c;
      color: white;
      padding: 12.5px 30px;
      border-radius: 25px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      border: none;
      cursor: pointer;
    }
    .title {
      margin: 0;
      margin-bottom: 35px;
    }
    input {
      margin-bottom: 20px;
      height: 35px;
      padding-left: 8px;
      font-size: 16px;
      width: 100%;
      color: black;
    }
    .content-wrap {
      margin: 0px auto;
      max-width: 250px;
      text-align: center;
    }
  }
`

export default Sidebar;