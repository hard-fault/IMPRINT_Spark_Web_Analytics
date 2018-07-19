window.onload = function () {
  // All JS goes
  var myDiv_1 = document.getElementById("myDiv_1");
  myDiv_1.classList.add("basic_div");
  var myDiv_2 = document.getElementById("myDiv_2");
  myDiv_2.classList.add("basic_div");

  var button = document.getElementById("plot_button");
  button.classList.add("basic_button");

  //Values for X and Y axis.
  var array_x = ["DMA"]
  var array_y = ["Number of connections","Water consumed (Anually)", "Water consumed (Monthly)", "Type of connections"];

  // Create the selectList for "x axis"
  var selectList = document.createElement("select");
  selectList.classList.add("basic_select");
  selectList.setAttribute("id_1", "mySelect_1");
  myDiv_1.appendChild(selectList);

  // append options for "x axis"
  for (var i = 0; i < array_x.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array_x[i]);
    option.text = array_x[i];
    selectList.appendChild(option);
  }

  // Create the selectList for "y axis"
  var selectList = document.createElement("select");
  selectList.classList.add("basic_select");
  selectList.setAttribute("id_2", "mySelect_2");
  myDiv_2.appendChild(selectList);

  // append options for "y axis"
  for (var i = 0; i < array_y.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array_y[i]);
    option.text = array_y[i];
    selectList.appendChild(option);
  }

  
}

function plotGraph() {

  var x_index = document.getElementById("myDiv_1").children[0].options.selectedIndex;
  var y_index = document.getElementById("myDiv_2").children[0].options.selectedIndex;

  var x = document.getElementById("myDiv_1").children[0].options[x_index].text
  var y = document.getElementById("myDiv_2").children[0].options[y_index].text

  //document.getElementById("x").innerHTML = "You selected x - "+ x;
  //document.getElementById("y").innerHTML = "You selected y - "+ y;

  if (y === "Number of connections") {
     show_image('Spark_Graphs/1_DMA_connections.png', 
                 900, 
                 550, 
                 'Google Logo');

  }
  else if (y === "Water consumed (Anually)") {
     show_image('Spark_Graphs/2_annual_DMA_consumption.png', 
                 900, 
                 550, 
                 'Google Logo');

  }
  else if (y === "Water consumed (Monthly)") {
     show_image('Spark_Graphs/3_one_month_consumption.png', 
                 900, 
                 550, 
                 'Google Logo');

  }
  else if (y === "Type of connections") {
     show_image('Spark_Graphs/6_types_of _connections.png', 
                 900, 
                 550, 
                 'Google Logo');

  }



}


function show_image(src, width, height, alt) {

    
    //var img = document.createElement("img");
    var img = document.getElementById("graph");
    img.classList.add("basic_image");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    //document.getElementById("graph").innerHTML = img;
    //document.body.appendChild(img);
}

