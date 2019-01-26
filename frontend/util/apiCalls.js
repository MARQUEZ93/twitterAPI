export const getTweets = () => (
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
