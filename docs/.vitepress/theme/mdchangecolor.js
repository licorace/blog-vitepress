export default () => {
  const mode = document.querySelector(".demo-area i")
  console.log(mode.classList.value);
  const modevalue = mode.classList.value
  if(modevalue === 'fa-lightbulb'){
    // console.log("darkmode");
    const body = document.body
    body.style.setProperty('--c-brand','#31b27a')
    body.style.setProperty('background-color','rgba(0, 0, 0, 0.86)')

    const navbar = document.querySelector('.nav-bar')
    navbar.style.setProperty('background-color','#212121')
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.setProperty('background-color','#212121')
    const font_dark_color = document.querySelectorAll('.container p,h1,h2,h3,h4,h5,h6,a,span.button-text')
    font_dark_color.forEach(item => item.style.setProperty('color','#fff'))
    const p_code_color = document.querySelectorAll('body p code,li,li code')
    p_code_color.forEach(item => item.style.setProperty('color','#33CCFF'))
    const dialog_bgcolor = document.querySelectorAll('body ul.dialog')
    dialog_bgcolor.forEach(item => item.style.setProperty('background-color','#333'))
    const tip_bgcolor = document.querySelectorAll('body div.tip')
    tip_bgcolor.forEach(item => item.style.setProperty('background-color','#333'))
  }else{
    // console.log("lightmode");
    const body = document.body
    body.style.setProperty('--c-brand','')
    body.style.setProperty('background-color','')

    const navbar = document.querySelector('.nav-bar')
    navbar.style.setProperty('background-color','')
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.setProperty('background-color','')
    const font_dark_color = document.querySelectorAll('body p,h1,h2,h3,h4,h5,h6,a,span.button-text')
    font_dark_color.forEach(item => item.style.setProperty('color',''))
    const p_code_color = document.querySelectorAll('body p code,li,li code')
    p_code_color.forEach(item => item.style.setProperty('color',''))
    const dialog_color = document.querySelectorAll('body ul.dialog')
    dialog_color.forEach(item => item.style.setProperty('background-color',''))
    const tip_bgcolor = document.querySelectorAll('body div.tip')
    tip_bgcolor.forEach(item => item.style.setProperty('background-color',''))
  }
}