import {onMounted, ref} from "vue";

let bindEvent = (e) => {
  const con = e;

  // 定义两个函数开关（门）
  let isIn = true;      //鼠标进去的门，默认打开
  let isOut = false;    //鼠标出去的门，默认关闭

  let span;           //给未出生的元素取个名字

  //监听鼠标进去的事件+进去的方法
  con.addEventListener('mouseenter', (e) => {
    if (isIn) {//如果进去的门时打开的，就可以执行这个函数

      //获取进入的鼠标位置
      //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
      let inx = e.clientX - e.target.offsetLeft;
      let iny = e.clientY - e.target.offsetTop;

      //创建一个span元素，并且给它对应的出生坐标
      let el = document.createElement('span');
      el.style.left = inx + 'px';
      el.style.top = iny + 'px';
      con.appendChild(el);//添加到con对应的父元素，即container

      el.classList.remove("out")
      el.classList.add('in');
      span = el;
      isIn = false; //关闭进来的门（不能使用进入的方法）
      isOut = true; //打开出去的门（可以使用出去的方法）
    }
  })
  //监听鼠标出来的事件+出来的方法
  con.addEventListener('mouseleave', (e) => {
    if (isOut) {
      //获取出去的鼠标位置
      //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
      let inx = e.clientX - e.target.offsetLeft;
      let iny = e.clientY - e.target.offsetTop;

      span.classList.remove('in');//移除进入的动画
      span.classList.add('out');//添加出去的动画
      span.style.left =  inx + 'px'//添加出去的坐标
      span.style.top = iny + 'px'

      isOut = false;//关闭出去的大门

      //当动画结束后再删除元素
      setTimeout(() => {
        con.removeChild(span);//删除元素
        isIn = true;//打开进来的大门
      }, 500)

    }
  })
}

export default function () {
  let loginBox = ref(null);
  onMounted(() => {
    if (!loginBox?.value) {
      return;
    }
        console.log(loginBox.value)

    bindEvent(loginBox.value)
  })

  return {loginBox};
}
