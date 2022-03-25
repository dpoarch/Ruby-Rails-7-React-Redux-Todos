import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  
  return <div className="container">
    <h4>Create Task</h4>
    <form>
    <div className="form-group m-5">
    <label>Title</label>
      <input
        type="text"
        className="form-control text-start"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">Write here your task title, or other todos.</small>
      </div>
    <div className="form-group m-5">
    <label>Description</label>
      <textarea
        className="form-control text-start"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">Write your task description(Optional)</small>
        </div>
        <div className="form-group m-5">
        <button
        className="btn btn-primary"
          type="submit"
          onClick={(e) => submitHandler(e)}>Create</button>
          </div>
    </form>
  </div>;
}

export default PostForm;
