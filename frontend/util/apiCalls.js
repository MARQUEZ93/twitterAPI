import React from 'react';

export const getTweets = () => {
  console.log("fuck");
};

export const getTweet = () => (
  $.ajax({
    url:'/api/tweets',
    method: 'GET'
  })
);

export const getFlicks = () => (
  $.ajax({
    url:'/api/flicks',
    method: 'GET'
  })
);
