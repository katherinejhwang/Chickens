var term = "";
var startDate = "";
var endDate = "";

// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=06makQClV3neByeJ0Ed9B5eKzZRK3vW8";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=06makQClV3neByeJ0Ed9B5eKzZRK3vW8";



var records;

$("#search").on("click", function() {

  term = $("#term").val();
  console.log(term);

  records = $("#records").val();
  console.log(records);


  startDate = $("#startDate").val();
  console.log(startDate);

  endDate = $("#endDate").val();
  console.log(endDate);


  queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=06makQClV3neByeJ0Ed9B5eKzZRK3vW8";

  if (startDate != "") {
    queryURL = queryURL + "&begin_date=" + startDate;
    console.log(queryURL);
  }
  if (endDate != "") {
    queryURL = queryURL + "&end_date=" + endDate;
    console.log(queryURL);
  }

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(article) {
      console.log(article);

      for (var i = 0; i < records; i++) {
        var author = article.response.docs[i].byline.original;
        console.log(author);
        var title = article.response.docs[i].headline.main;
        console.log(title);
      }

    });
})
