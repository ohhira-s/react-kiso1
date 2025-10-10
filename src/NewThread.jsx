import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    <div className="new-thread-container">
      <h2 className="page-title">スレッドを新規作成</h2>
      
      <div className="new-thread-form">
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="スレッドタイトル"
        />
        <div className="form-actions">
          <Link to="/" className="back-link">Topに戻る</Link>
          <button onClick={createThread} className="submit-button">作成</button>
        </div>
      </div>
    </div>
  );
}

export default NewThread;