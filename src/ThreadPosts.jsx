import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ThreadPosts() {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');
  const { thread_id } = useParams();
  const [threadTitle, setThreadTitle] = useState('');

  const fetchPosts = () => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  };

  useEffect(() => {
    fetchPosts();
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}`)
      .then(response => response.json())
      .then(data => setThreadTitle(data.title));
  }, [thread_id]);

  const createPost = () => {
    if (!postContent) return;

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: postContent }),
    })
    .then(response => {
      if (response.ok) {
        setPostContent('');
        fetchPosts();
      } else {
        console.error('Failed to create post');
      }
    });
  };

  return (
    <div>
      <h2 className="page-title">{threadTitle}</h2>
      <div className="posts-container">
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              {post.post}
            </li>
          ))}
        </ul>
      <div className="post-form">
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="投稿内容"
        />
        <button onClick={createPost}>投稿</button>
      </div>
      </div>
    </div>
  );
}

export default ThreadPosts;