const darkthememap = {
  'c-brand':'#31b27a',                     
  'color-container-p':'#eee',            
  'c-text-light':'#d9d9d9',              
  'color-container':'#eee',              
  'c-text':'#eee',                       
  'color-table-tr':'#333',               
  'color-table-tr2n':'#393939',          
  'color-tip':'#252525',                 
  'color-demobg':'#363636',              
  'color-demo':'#eee',                   
  'color-main':'rgba(0: 255: 255: 0.93,',
  'color-pcode':'#91ef6e',
}

const lightthememap = {
  'c-brand':'',
  'color-container-p':'',
  'c-text-light':'',
  'color-container':'',
  'c-text':'',
  'color-table-tr':'',
  'color-table-tr2n':'',
  'color-tip':'',
  'color-demobg':'',
  'color-demo':'',
  'color-main':'',
  'color-pcode':'', 
}

function darkmode(darkthememap){
  const body = document.body
  Object.keys(darkthememap).forEach( key => {
    body.style.setProperty(`--${key}`,darkthememap[key])
  })
  // body.style.setProperty('background-color','rgba(0, 0, 0, 0.86)')
  body.style.setProperty('background-color','#343434')
  const navbar = document.querySelector('.nav-bar')
  navbar.style.setProperty('background-color','#343434')
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.setProperty('background-color','#343434')
  const dialog_bgcolor = document.querySelectorAll('body ul.dialog')
  dialog_bgcolor.forEach(item => item.style.setProperty('background-color','#333'))
}


function lightmode(lightthememap){
  const body = document.body
  Object.keys(lightthememap).forEach(key => {
    body.style.setProperty(`--${key}`,lightthememap[key])
  })
  body.style.setProperty('background-color','')
  const navbar = document.querySelector('.nav-bar')
  navbar.style.setProperty('background-color','')
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.setProperty('background-color','')
  const dialog_color = document.querySelectorAll('body ul.dialog')
  dialog_color.forEach(item => item.style.setProperty('background-color',''))
}

export {
  darkthememap,
  lightthememap,
  darkmode,
  lightmode
}

