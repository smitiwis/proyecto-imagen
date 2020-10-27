

let galeria = document.getElementsByClassName("imagen__galeria-ind");
let img_principal = document.getElementById("img__select-0");


for (let i = 0; i < galeria.length; i++) {
  const element = galeria[i];
  let img = element.children;
  let element_img = img[0];

  let getClassBorde = () => {
    if (element_img.classList[1] == "img_selecionada") {
      element_img.classList.remove("img_selecionada")
    } else {
      for (let j = 0; j < galeria.length; j++) {
        galeria[j].children[0].classList.remove("img_selecionada");
      }
    
      img_principal.attributes[2].value = element_img.attributes[2].value;

      element_img.classList.add("img_selecionada");
    }
  }


  element.addEventListener('click', getClassBorde);
}



