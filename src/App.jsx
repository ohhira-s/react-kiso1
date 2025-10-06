import { Routes, Route, Link } from 'react-router-dom';
import ThreadList from './ThreadList';
import NewThread from './NewThread';
import ThreadPosts from './ThreadPosts';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1><Link to="/">掲示板</Link></h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<NewThread />} />
          <Route path="/threads/:thread_id" element={<ThreadPosts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;