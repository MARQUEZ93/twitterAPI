export const twitterCall = () => (
  $.ajax({
    url:'/api/tweets',
    method: 'GET'
  })
);

export const flickrCall = () => (
  $.ajax({
    url:'/api/flicks',
    method: 'GET'
  })
);
