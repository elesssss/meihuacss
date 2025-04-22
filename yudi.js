(function rainEffect() {
  const COUNT = 100; // 雨滴数量
  const container = document.createElement('div');
  container.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;";
  document.body.appendChild(container);

  for (let i = 0; i < COUNT; i++) {
    const drop = document.createElement('div');
    drop.style.cssText = `
      position:absolute;
      width:1px;
      height:${Math.random() * 20 + 10}px;
      background:rgba(174,194,224,0.5);
      top:${-Math.random() * 100}px;
      left:${Math.random() * window.innerWidth}px;
      animation: fall ${Math.random() * 1 + 0.5}s linear infinite;
    `;
    container.appendChild(drop);
  }

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fall {
      to {
        transform: translateY(110vh);
      }
    }
  `;
  document.head.appendChild(style);
})();
