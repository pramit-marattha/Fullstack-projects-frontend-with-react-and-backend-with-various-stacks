import React,{ useCallback ,useState  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';
import Moodboard from './components/Moodboard';
import MoodboardImage from "./components/MoodboardImage";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import update from "immutability-helper";
import { isTouchDevice } from "./utils/isTouchDevice";


const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

function App() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImages(prevState => [
          ...prevState,
          { id: uuidv4(), src: e.target.result }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
      update(images, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedImage]]
      })
    );
  };

  return (
    <main className="App">
      <h1 className="moodboard-center">MoodBoard</h1>
      {images && images.length > 0 && (
        <h3 className="moodboard-center">Add and drag several images</h3>
      )}
      <DndProvider backend={backendForDND}>
        <MoodboardImage images={images} moveImage={moveImage} />
      </DndProvider>
      <Moodboard onDrop={onDrop} accept={"image/*"} />
    </main>
  );
}

export default App;