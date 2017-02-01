import React, { Component } from 'react';
import { PostList, MdEditor, NewPost } from '../components';
import Collapse from 'react-collapse';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';

export default function Main(props) {
  return (
    <div className="flow vertical container">
      <div className="flow horizontal main-content">
        <PostList
          activePostTitle={props.editingPost && props.editingPost.title}
          restorePost={props.restorePost}
          posts={props.posts} />
        <aside className="flow vertical edit-preview-container">
          <Collapse className="new-post-container" isOpened={!props.zen}>
            <NewPost
            edit={props.edit}
            dirty={props.dirty}
            clearInputs={props.clearInputs}
            editingPost={props.editingPost}
            savePost={props.savePost}
            deletePost={props.deletePost}
            handleTitleChange={props.handleTitleChange}
            postTitle={props.postTitle}
            handleContentChange={props.handleContentChange}
            postContent={props.postContent} />
          </Collapse>
          <div className="hr-divider">
            <div className="hr half" />
            { 
              props.zen ? <FaArrowCircleDown className="toggleZen" color="#198665" size={40} onClick={() => props.toggleZen(!props.zen)} /> : <FaArrowCircleUp className="toggleZen" size={40} color="#198665" onClick={() => props.toggleZen(!props.zen)} />
            }
          <div className="hr half" />
          </div>
          <div className="md-editor">
            {props.zen && <h2 className="zen-title">{props.postTitle}</h2>}
            <MdEditor content={props.content} />
          </div>
        </aside>
      </div>
      <footer className="footer">
        <p className="text-muted">Damian Lajara | Yashi Coding Challenge</p>
      </footer>
    </div>
  );
}