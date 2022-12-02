//Profile picture function
const loadFile = function (event) {
  const image = document.getElementById("image_input");
  image_input.addEventListener("change", function() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        localStorage.setItem("img", JSON.stringify(reader.result))
        let img = localStorage.getItem("img")
        let photo = JSON.parse(img)
        console.log(reader.results)
       let png = document.querySelector("#image_input") 
        png.src= reader.results//`url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
    
    });
  //image.src = URL.createObjectURL(event.target.files[0]);
}

function loadImage(){
  let img = localStorage.getItem("img")
  let photo = JSON.parse(img)
  let image_input = document.getElementById("image_input")
  image_input.src= photo
  }
  
  loadImage();

// const image_input = document.querySelector("#image-input");
// image_input.addEventListener("change", function() {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     localStorage.setItem("img", JSON.stringify(reader.result))
//     let img = localStorage.getItem("img")
//     let photo = JSON.parse(img)
//     console.log(photo)
//     document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });