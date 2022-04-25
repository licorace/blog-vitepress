const codebox = () => {
  //找到所有div下面的pre元素,放到数组currentDiv中
  let currentDiv = document.querySelectorAll("div pre")
  currentDiv.forEach((item) => {
    //创建一个新按钮
    let newButton = document.createElement("button");
    // 给它一些内容
    let newContent = document.createTextNode("copy");
    // 添加文本节点 到这个新的 button 元素
    newButton.appendChild(newContent);

    //找到这个pre元素的父节点
    let parent = item.parentNode

    parent.insertBefore(newButton, item);

    let code_content = item.querySelector("code")
    // document.execCommand方法已经被弃用了,最好不要用

    // newButton.addEventListener('click',copy)
    function copy(){
      let input = document.createElement('input')
      input.value = code_content.textContent
      document.body.appendChild(input);
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      console.log('Page URL copied to clipboard');
    }

    newButton.addEventListener('click', () => {
      navigator.clipboard.writeText(code_content.textContent).then(
        () => {
          console.log('Page URL copied to clipboard')
        }).catch((err) => {
        console.error('Failed to copy: ', err);
        if(err){
          newButton.addEventListener('click',copy)
        } 
      })
    })


    // async (e) => {
    //   try {
    //     await navigator.clipboard.writeText(code_content.textContent);
    //     console.log('Page URL copied to clipboard');
    //   } catch (err) {
    //     console.error('Failed to copy: ', err);
    //   }
    // })
  })
}

export default codebox