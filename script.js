console.log("hello world");

const url = 'https://cat-fact.herokuapp.com/facts/random'
function fetch_fact() {
  $.get(url, function(data, status) {
    console.log(data);
    display_fact(data);
  });
}

function display_fact(data) {
  console.log($(".Section-Fact"));
  $(".Section-Lang").removeAttr("hidden");
  console.log(($(".Section-Fact")).text(data.text));
  console.log($(".Section-Fact"));
  console.log("test");
}

function change_lang(data) {
  $("[name='cur_language']")[0].textContent = data.textContent;
}

function lang_short(lang) {
  lang = lang.toString();
  console.log(lang);
  if (lang.toLowerCase() == 'english') {
    return 'en';
  } else if (lang.toLowerCase() == 'spanish') {
    return 'es';
  } else if (lang.toLowerCase() == 'portuguese') {
    return 'pt';
  } else if (lang.toLowerCase() == 'french') {
    return 'fr';
  } else if (lang.toLowerCase() == 'italian') {
    return 'it'
  } else if (lang.toLowerCase() == 'german') {
    return 'de'
  } else if (lang.toLowerCase() == 'Spanish') {
    
  } else if (lang.toLowerCase() == 'Spanish') {
    
  } else if (lang.toLowerCase() == 'Spanish') {
    
  } else {
    // return english by default
    console.log("returning default");
    return 'en';
  }
}

function req_translation() {
    
  var key_var = 'da58897a53434d539dec3813276dba52';
  
  var endpoint_var = 'https://api.cognitive.microsofttranslator.com/';
  
  $.ajax({
    url: endpoint_var + 'translate?api-version=3.0&to=' + lang_short($("[name='cur_language']")[0].textContent),
    type: 'POST',
    method: 'POST',
    //data: '[{\'Text\':\'' + ($(".Section-Fact")).text() + '\'}]',
    data: '[{\'Text\':\'' + ($(".Section-Fact")).text().replace(/'/g, "\\'") + '\'}]',
    headers: {
      'Ocp-Apim-Subscription-Key': key_var,
      'Ocp-Apim-Subscription-Region': 'westeurope',
      'Content-type': 'application/json',
      'X-ClientTraceId': 'bbd9d0b3-4467-4932-b1fd-2d69f8ed73df'
    },
    accept: '*/*',
    contentType: 'application/json',
    success: function (data) {
      console.log(data[0]);
        $(".Section-Translation").text(data[0].translations[0].text);
        console.log(data.translations);
    },
    error: function(data) {
      console.log("failed");
      console.log(data);
    }
  });
}

$( document ).ready(function() {
  console.log("ready!");

  
});

