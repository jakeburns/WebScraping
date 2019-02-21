var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];
body.after(s);

// run first four lines separately

var academicInfo = d3.selectAll("li a").nodes();
academicInfo.forEach(function(e){console.log(e.innerText)});
