import React, { useState } from 'react';

interface Comment {
  id: number;
  content: string;
  author: string;
}

const CommentBox = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        content: comment,
        author: 'Anonymous', // You can replace 'Anonymous' with a dynamic author name
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="border p-2 w-full mb-2"
        />
      </div>
      <button onClick={handleCommentSubmit} className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>

      <div className="mt-4">
        {comments.length > 0 && (
          <div>
            <h3 className="text-lg font-bold">Comments:</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="border-b py-2">
                  <p><strong>{comment.author}</strong>: {comment.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
