var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];
body.after(s);

// run first four lines separately

var courses = d3.select("#main ul");
var refinedCourses = courses.selectAll("li a").nodes();

refinedCourses.forEach(function(e){console.log(e.innerText)});
