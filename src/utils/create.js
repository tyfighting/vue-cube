import Vue from "vue";

export default function(Component) {
  // 生成一个虚拟dom
  const instance = new Vue({
    render: (h) => h(Component),
  }).$mount(); 

  // 把生成的追加到body中
  document.body.appendChild(instance.$el);

  //添加一个销毁方法
  const comp = instance.$children[0];
  comp.remove = function() {
    document.body.removeChild(instance.$el);
    instance.$destroy();
  };
  return comp;
}
