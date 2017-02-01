import React, { Component } from 'react';
import { Header } from '../components';
import MdClose from 'react-icons/lib/md/close';
import Markdown from 'react-markdown';

export default function Zen({ post: { title, content, timestamp }, onClose : toggleZen }) {
  return (
    <div>
      <Header />
      <div className="container-view">
        <div className="main-content">
          <div className="close-icon">
            <MdClose size={35} onClick={() => toggleZen(false)} />
          </div>
          <div className="title">
            <h1>{title}</h1>
            <span className="date">{new Date(timestamp).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
          </div>
          <Markdown className="description" source={content} />
        </div>
      </div>
    </div>
  );
}
