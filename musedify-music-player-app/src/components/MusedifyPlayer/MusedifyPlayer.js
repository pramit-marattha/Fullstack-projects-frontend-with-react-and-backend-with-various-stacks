/** @jsx jsx */
import React,{useReducer,createContext,useRef,useEffect} from 'react'
import { css, jsx } from '@emotion/core';
import Topbar from "./Topbar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Playbar from "./Playbar";
import music from "../../music.json";

export const StoreContext = createContext(null);

const DEFAULT_PLAYLIST = "home";

 const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  music,
  addToPlaylistId: '',
  currentPlaylist: DEFAULT_PLAYLIST,
  currentSongId: '',
  currentTime: 0,
  duration: 0,
  playing: false,
  playlists: {
      home:new Set(music.ids),
      favorites:new Set(),
      RecentlyPlayed:new Set(),
      LikedSongs:new Set(),
      Albums:new Set(),
      artists:new Set(),
      podcasts:new Set()
  },
  volume: 0.60
};

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_PLAYLIST':
      return {...state,playlists: {...state.playlists,[action.playlist]: new Set()}}
      case 'ADD_TO_PLAYLIST':
        return { ...state, addToPlaylistId: action.songId }
      case 'ABORT_ADD_TO_PLAYLIST':
        return { ...state, addToPlaylistId: '' }
    case 'SET_PLAYLIST':
      return {...state,currentPlaylist: action.playlist}
    case 'ADD_FAVORITE':
      state.playlists.favorites.add(action.songId)
      return {...state}
    case 'REMOVE_FAVORITE':
      state.playlists.favorites.delete(action.songId)
      return {...state}
      case 'PLAY':
        return {
          ...state,
          playing: true,
          currentSongId: action.songId || state.currentSongId
        }
      case 'PAUSE':
        return { ...state, playing: false }
        case 'SAVE_TO_PLAYLIST':
          state.playlists[action.playlist].add(state.addToPlaylistId)
          return { ...state, addToPlaylistId: '' }
        case 'SET_CURRENT_TIME':
          return { ...state, currentTime: action.time }
        case 'SET_DURATION':
          return { ...state, duration: action.duration }
        case 'SET_PLAYLIST':
          return { ...state, currentPlaylist: action.playlist }
        case 'SET_VOLUME':
          return { ...state, volume: parseFloat(action.volume) }
  }
    return state
}


const MusedifyPlayer = () => {
  const [state,dispatch] = useReducer(reducer,initialState);

  
const audioRef = useRef()

useEffect(() => {
  if (state.playing) {
    audioRef.current.load()
    audioRef.current.play()
  } else audioRef.current.pause()
}, [state.playing, state.currentSongId])

useEffect(() => {
  audioRef.current.volume = state.volume
}, [state.volume])

const song = state.music[state.currentSongId]

  return (
    <StoreContext.Provider value={{state,dispatch}}>
    <div css={CSS}>
    <Topbar/>
    <Sidebar/>
    <Content/>
    <Playbar/>
    <audio
          ref={audioRef}
          src={
            song && song.title
              ? `./songs/${song.title}.mp3`
              : ''
          }
          onLoadedMetadata={() =>
            dispatch({
              type: 'SET_DURATION',
              duration: audioRef.current.duration
            })
          }
          onTimeUpdate={e =>
            dispatch({ type: 'SET_CURRENT_TIME', time: e.target.currentTime })
          }
        />
    </div>
    </StoreContext.Provider>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  background-color: teal;
  color: white;
`

export default MusedifyPlayer;