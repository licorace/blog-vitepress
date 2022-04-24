import { darkthememap,lightthememap,darkmode,lightmode }  from './themefunc.js'

export default function changecolor(){
  const mode = document.querySelector(".area i")
  // console.log(mode.classList.value);
  const modevalue = mode.classList.value

  if (modevalue === 'fa-moon'){
    console.log("darkmode");
    darkmode(darkthememap)
  }else{
    console.log("lightmode");
    lightmode(lightthememap)
  }
}
