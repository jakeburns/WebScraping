var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];
body.after(s);


var academicInfo = d3.selectAll("p a").nodes();
academicInfo.forEach(function(e){console.log(e.innerText)});
