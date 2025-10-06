import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ThreadList() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(response => response.json())
      .then(data => setThreads(data));
  }, []);

  return (
    <div>
      <h2>新着スレッド</h2>
      <Link to="/threads/new">スレッドを新規作成する</Link>
      <div className="thread-list">
        <ul>
          {threads.map((thread) => (
            <li key={thread.id} className="thread-item">
              <Link to={`/threads/${thread.id}`}>
                {thread.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThreadList;