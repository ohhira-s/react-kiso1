import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewThread() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const createThread = () => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title }),
    })
    .then(response => {
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to create thread');
      }
    });
  };

  return (
    <div>
      <h2>スレッドを新規作成</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="スレッドのタイトル"
      />
      <button onClick={createThread}>作成</button>
    </div>
  );
}

export default NewThread;