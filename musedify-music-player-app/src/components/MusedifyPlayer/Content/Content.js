/** @jsx jsx */
import React,{useContext,useState,useCallback} from 'react'
import { css, jsx } from '@emotion/core';
import {StoreContext} from "../MusedifyPlayer";
import Modal from '../Modal'
import Toast from '../ToastNotification'


const Content = () => {
  const {state,dispatch}= useContext(StoreContext);
  const currentPlaylist = state.currentPlaylist;
  const songIds = Array.from(state.playlists[currentPlaylist])

  const [toast, setToast] = useState('');
  const [playlistSelect, setPlayListSelect] = useState('');
  const [playVisibleId, setPlayVisibleId] = useState(false);

  const playlists = Object.keys(state.playlists).filter(
    list => !['home', 'favorites'].includes(list)
  )

  const handleSelect = useCallback(e => {
    setPlayListSelect(e.target.value)
  })

  return (
    <div className="Content" css={CSS}>
      <div className="playlist-title">{currentPlaylist}</div>

      {songIds.length <= 0 ? (
        <p>Playlist is empty!!. Start adding your awesome songs.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</td>
              <td> </td>
              <td>Title</td>
              <td>Artist</td>
              <td>Album Name</td>
              <td>Track</td>
              <td>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</td>
            </tr>
          </thead>

          <tbody>
            {songIds.map(id => {
              const { title, artist, album,track,year,img_src } = state.music[id];
              const isFavorite = state.playlists.favorites.has(id)

              return (
                <tr key={id}>
                {/* <td
                    onMouseEnter={() =>
                      setPlayVisibleId(id)
                    }
                    onMouseLeave={() =>
                      setPlayVisibleId('')
                    }
                    style={{ width: 75, paddingLeft: 5 }}
                  >
                <td>
                {
                  isFavorite ?  <i className="fa fa-heart" onClick={()=>{dispatch({type:"REMOVE_FAVORITE",songId:id})}}/> : <i className="fa fa-heart-o" onClick={()=>{dispatch({type:"ADD_FAVORITE",songId:id})}}/>
                }
                </td> */}
                <td
                    onMouseEnter={() =>
                      setPlayVisibleId(id)
                    }
                    onMouseLeave={() =>
                      setPlayVisibleId('')
                    }
                    style={{ width: 75, paddingLeft: 11 }}
                  >
                    <PlayPause
                      playing={state.playing}
                      songId={id}
                      isCurrentSong={
                        state.currentSongId === id
                      }
                      visible={playVisibleId === id}
                    />

                    <span style={{ marginRight: 10 }} />

                    <Favorite
                      isFavorite={isFavorite}
                      songId={id}
                    />

                   
                  </td>
                <img src={img_src}/>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{album}</td>
                  <td>{track}</td>

                  {/* <span style={{ marginRight: 10 }} /> */}
                      <td>
                    <i
                      className="fa fa-plus"
                      onClick={() => {
                        dispatch({
                          type: 'ADD_TO_PLAYLIST',
                          songId: id
                        })
                      }}
                    />
                    </td>
                                    </tr>
              )
            })}
          </tbody>
        </table>
      )}
      <Modal
        show={state.addToPlaylistId}
        close={() => {
          dispatch({ type: 'ABORT_ADD_TO_PLAYLIST' })
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 18, marginBottom: 20 }}>
            Add To Playlist
          </div>

          {playlists.length < 1 ? (
            <>
              <p>
                  You don't have any playlist.
                  Please! Create one
              </p>

              <div style={{ marginTop: 15 }}>
                <button>Ok</button>
              </div>
            </>
          ) : (
            <>
              <select
                value={playlistSelect}
                onChange={handleSelect}
                style={{
                  fontSize: 16,
                  textTransform: 'capitalize',
                  width: 115,
                  height: 25
                }}
              >
                <option value="">Select</option>

                {playlists.map(list => (
                  <option
                    key={list}
                    value={list}
                    disabled={state.playlists[list].has(
                      state.addToPlaylistId
                    )}
                  >
                    {list}
                  </option>
                ))}
              </select>

              <div style={{ marginTop: 190 }}>
                <button
                  onClick={() => {
                    if (playlistSelect === '') return
                    
                    dispatch({
                      type: 'SAVE_TO_PLAYLIST',
                      playlist: playlistSelect
                    })

                    setToast(
                      'Successfully added to your playlist.'
                    )

                    setPlayListSelect('')
                  }}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
      <Toast toast={toast} close={() => setToast('')} />
    </div>
  )
}
const Favorite = ({ isFavorite, songId }) => {
  const { dispatch } = useContext(StoreContext)

  return isFavorite ? (
    <i
      className="fa fa-heart"
      onClick={() => dispatch({ type: 'REMOVE_FAVORITE', songId })}
    />
  ) : (
    <i
      className="fa fa-heart-o"
      onClick={() => dispatch({ type: 'ADD_FAVORITE', songId })}
    />
  )
}

const PlayPause = ({ playing, songId, isCurrentSong, visible }) => {
  const { dispatch } = useContext(StoreContext)
  const style = { visibility: visible ? 'visible' : 'hidden' }

  if (isCurrentSong && playing) {
    return (
      <i
        className="fa fa-pause"
        onClick={() => dispatch({ type: 'PAUSE' })}
        style={style}
      />
    )
  } else {
    return (
      <i
        className="fa fa-play"
        onClick={() => dispatch({ type: 'PLAY', songId })}
        style={style}
      />
    )
  }
}

const CSS = css`
     width: calc(100% - 200px);
  height: calc(100% - 75px);
  padding: 20px;
  background: #121212;
  padding-top: 70px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #282828;
  }
  .playlist-title {
    font-size: 20px;
    text-transform: capitalize;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 15px;
    font-size: initial;
  }
  table tr {
    border-bottom: 1px solid #282828;
  }
  table td {
    padding: 10px 0 0 10px;
  }
  i {
    cursor: pointer;
  }
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
  img {
    width: 50px;
  }
`

export default Content;