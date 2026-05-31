// 主页面所有可点击模块跳转功能
document.querySelectorAll('.skill, .item-card').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', function() {
    const link = this.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});