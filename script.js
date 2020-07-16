console.log("hello world");

const url = 'https://cat-fact.herokuapp.com/facts/random'
function fetch_fact() {
  $.get(url, function(data, status) {
    console.log(data);
    display_fact(data);
  });
}

function display_fact(data) {
  $(".Section");
  console.log($(".Section-Lang").removeAttr("hidden"));
  console.log("test");
}

function change_lang(data) {
  $("[name='cur_language']")[0].textContent = data.textContent;
}

$( document ).ready(function() {
  console.log("ready!");
});