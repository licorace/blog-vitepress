//codebox.js是一个方法用来在所有的代码块里增加一个copy按钮,点击这个按钮可以复制代码块里的内容到剪贴板
const codebox = () => {
  //选择所有的div下面的pre元素放到一个数组中,这个数组就是currentDiv
  let currentDiv = document.querySelectorAll("div pre")
  currentDiv.forEach((item) => {
    //创建一个按钮
    let newButton = document.createElement("button");
    // 给它一些内容
    let newContent = document.createTextNode("copy");
    // 添加文本节点 到这个新的 button 元素
    newButton.appendChild(newContent);
    
    //找到当前这个pre元素的父节点parent
    let parent = item.parentNode
    
    //在这个pre元素前插入刚刚创建的button按钮
    parent.insertBefore(newButton,item);

    let code_content = item.querySelector("code")


    newButton.addEventListener('click',async (e) => {
      try {
        await navigator.clipboard.writeText(code_content.textContent);
        console.log('Page URL copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    })
  })
}

export default codebox


