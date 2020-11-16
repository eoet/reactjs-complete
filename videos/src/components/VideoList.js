import React, { Component } from 'react';
import { render } from 'react-dom';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map(video => {
    return <VideoItem
      onVideoSelect={onVideoSelect}
      video={video}/>;
  });
  return <div className="ui relaxed divided list">
    {renderedList}
  </div>;
}

export default VideoList;