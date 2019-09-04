'use strict';

let myInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/JSON'
  },
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('./data.json', myInit);

fetch(myRequest)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
  });
