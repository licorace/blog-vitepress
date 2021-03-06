const codebox = () => {
  //找到所有div下面的pre元素,放到数组currentDiv中
  let currentDiv = document.querySelectorAll("div pre");
  currentDiv.forEach((item) => {
    // let currentItem = document.getElementById("copycode");
    // console.log(currentItem);
    // if (currentItem) {
    //   currentItem.remove();
    // }

    //创建一个新按钮
    let newButton = document.createElement("button");
    // 给它一些内容
    let newContent = document.createTextNode("copy");
    // 添加文本节点 到这个新的 button 元素
    newButton.appendChild(newContent);

    newButton.setAttribute("class", "copycode");

    //找到这个pre元素的父节点
    let parent = item.parentNode;

    parent.insertBefore(newButton, item);

    let code_content = item.querySelector("code");
    // document.execCommand方法已经被弃用了,最好不要用

    newButton.addEventListener("click", copy);
    function copy() {
      let input = document.createElement("input");
      input.value = code_content.textContent;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      console.log("Page URL copied to clipboard");
    }

    //clipboard只有在localhost中,或者https中才能正常使用,直接用ip地址访问时不可以的呢,所以暂时将使用execCommand来复制
    //后续域名备案成功后将使用下面这个方法

    // newButton.addEventListener('click', () => {
    //   navigator.clipboard.writeText(code_content.textContent).then(
    //     () => {
    //       console.log('Page URL copied to clipboard')
    //     }).catch((err) => {
    //     console.error('Failed to copy: ', err);
    //   })
    // })
  });
};

export default codebox;
