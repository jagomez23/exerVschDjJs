var theBox = document.getElementById("box")

theBox.addEventListener("mouseover", function() {
    theBox.style.backgroundColor = "blue"
    }
);

theBox.addEventListener("mouseout", function() {
    theBox.style.backgroundColor = "black"
    }
);
theBox.addEventListener("mousedown", function() {
    theBox.style.backgroundColor = "red"
    }
);
theBox.addEventListener("mouseup", function() {
    theBox.style.backgroundColor = "yellow"
    }
);
theBox.addEventListener("dblclick", function() {
    theBox.style.backgroundColor = "green"
    }
);
document.addEventListener("scroll", function() {
    theBox.style.backgroundColor = "orange"
    }
);

document.addEventListener("keydown", function(event) {
  var colorpush = event.key
  console.log(colorpush)
  if(colorpush === "b"){theBox.style.backgroundColor = "blue"}
  else if(colorpush === "r"){theBox.style.backgroundColor = "red"}
  else if(colorpush === "y"){theBox.style.backgroundColor = "yellow"}
  else if(colorpush === "g"){theBox.style.backgroundColor = "green"}
  else if(colorpush === "o"){theBox.style.backgroundColor = "orange"}
  else{theBox.style.backgroundColor = "black"} 
    }
  )