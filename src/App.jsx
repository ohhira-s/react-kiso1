import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setThreads(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>掲示板</h1>
      </header>
      <main>
        <h2>新着スレッド</h2>
        <div className="thread-list">
          <ul>
            {threads.map((thread) => (
              <li key={thread.id} className="thread-item">
                {thread.title}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;