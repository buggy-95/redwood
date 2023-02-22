import { FC, useState, ChangeEventHandler, MouseEventHandler } from 'react';
import './App.css';

export interface StickProps {}

export interface Cood {
  x: number,
  y: number,
}

const Stick: FC<StickProps> = (props) => {
  const [moving, setMoving] = useState(false);
  const [start, setStart] = useState<Cood>({
    x: 0,
    y: 0,
  });
  const [content, setContent] = useState('');
  const [cood, setCood] = useState<Cood>({
    x: 0,
    y: 0,
  });

  const handleDown: MouseEventHandler = (event) => {
    console.log(event)
    setMoving(true);
    setStart({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleUp: MouseEventHandler = (event) => {
    setMoving(false);
  };

  const handleMove: MouseEventHandler = (event) => {
    if (!moving) return;
    setCood((old) => ({
      x: old.x + event.movementX,
      y: old.y + event.movementY,
    }));
  };

  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="stick" style={{ left: cood.x, top: cood.y }}>
      <div
        className="stick-bar"
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseMove={handleMove}
      ></div>
      <textarea name="stick" id="stick" cols={30} rows={10} className="stick-content" value={content} onChange={handleContentChange}></textarea>
    </div>
  );
}

function App() {
  return (
    <div className='App'><Stick /></div>
  );
}

export default App;
