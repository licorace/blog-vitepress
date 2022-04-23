export default function changecolor(){
  const mode = document.querySelector(".area i")
  // console.log(mode.classList.value);
  const modevalue = mode.classList.value
  if(modevalue === 'fa-moon'){
    // console.log("darkmode");
    const body = document.body
    body.style.setProperty('--c-brand','#31b27a')
    body.style.setProperty('background-color','rgba(0, 0, 0, 0.86)')
    body.style.setProperty('--color-container-p','#eee')
    body.style.setProperty('--c-text-light','#eee')
    body.style.setProperty('--color-container','#eee')
    body.style.setProperty('--c-text','#eee')
    body.style.setProperty('--color-table-tr','#333')
    body.style.setProperty('--color-table-tr2n','#393939')
    body.style.setProperty('--color-tip','#252525')
    body.style.setProperty('--color-demobg','#363636')
    body.style.setProperty('--color-demo','#eee')
    

  
    //导航栏以及侧边栏的背景值,这是通用的
    const navbar = document.querySelector('.nav-bar')
    navbar.style.setProperty('background-color','#212121')
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.setProperty('background-color','#212121')
    const dialog_bgcolor = document.querySelectorAll('body ul.dialog')
    dialog_bgcolor.forEach(item => item.style.setProperty('background-color','#333'))

    // const font_dark_color = document.querySelectorAll('body p,h1,h2,h3,h4,h5,h6,a,span.button-text')
    // font_dark_color.forEach(item => item.style.setProperty('color','#fff'))
    // const p_code_color = document.querySelectorAll('body p code,li,li code')
    // p_code_color.forEach(item => item.style.setProperty('color','#33CCFF'))
    
    // const tip_bgcolor = document.querySelectorAll('body div.tip')
    // tip_bgcolor.forEach(item => item.style.setProperty('background-color','#333'))

    
    
  
    // const htmlnode = document.querySelector("html")
    // htmlnode.style.setProperty('filter','invert(1) hue-rotate(180deg)')
    // const imgnode = document.querySelector("img")
    // console.log(imgnode)
    // imgnode.style.setProperty('filter','invert(1) hue-rotate(180deg)')
  }else{
    // console.log("lightmode");

    const body = document.body
    body.style.setProperty('--c-brand','')
    body.style.setProperty('background-color','')
    body.style.setProperty('--color-container-p','')
    body.style.setProperty('--c-text-light','')
    body.style.setProperty('--color-container','')
    body.style.setProperty('--c-text','')
    body.style.setProperty('--color-table-tr','')
    body.style.setProperty('--color-table-tr2n','')
    body.style.setProperty('--color-tip','')
    body.style.setProperty('--color-demobg','')
    body.style.setProperty('--color-demo','')


    //导航栏以及侧边栏的背景值,这是通用的
    const navbar = document.querySelector('.nav-bar')
    navbar.style.setProperty('background-color','')
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.setProperty('background-color','')
    const dialog_color = document.querySelectorAll('body ul.dialog')
    dialog_color.forEach(item => item.style.setProperty('background-color',''))


    // const font_dark_color = document.querySelectorAll('body p,h1,h2,h3,h4,h5,h6,a,span.button-text')
    // font_dark_color.forEach(item => item.style.setProperty('color',''))
    // const p_code_color = document.querySelectorAll('body p code,li,li code')
    // p_code_color.forEach(item => item.style.setProperty('color',''))
    
    // const tip_bgcolor = document.querySelectorAll('body div.tip')
    // tip_bgcolor.forEach(item => item.style.setProperty('background-color',''))
  
    

    // const htmlnode = document.querySelector("html")
    // const imgnode = document.querySelector("img")
    // htmlnode.style.setProperty('filter','')
    // imgnode.style.setProperty('filter','')
  }
}