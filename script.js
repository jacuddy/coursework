console.log("hello world");

const url = 'https://cat-fact.herokuapp.com/facts/random'
function fetch_fact() {
  $.get(url, function(data, status) {
    console.log(data);
  });
}
