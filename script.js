function toggleMode(){
  const html = document.documentElement

  html.classList.toggle("light")

  // Get the target img
  const img = document.querySelector("#profile img");

  
  

  //replace the image light
  if (html.classList.contains("light")) {
    // if have the light mode
    img.setAttribute('src','./assets/avatar-light.png');
    img.setAttribute("alt", "image Wallace Passon make in lensa app light mode");
  } else {
    // if not keep the image normal
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "image Wallace Passon make in lensa app dark mode");
  }
}