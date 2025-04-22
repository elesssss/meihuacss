(function rainEffect() {
  const COUNT = 100; // 雨滴数量
  const container = document.createElement('div');
  container.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;";
  document.body.appendChild(container);

  for (let i = 0; i < COUNT; i++) {
    const drop = document.createElement('div');
    const dropHeight = Math.random() * 30 + 20; // 雨滴长度
    const fallTime = Math.random() * 2 + 2.5;   // 下落时间更慢

    drop.style.cssText = `
      position: absolute;
      width: 2px;
      height: ${dropHeight}px;
      background: rgba(174,194,224,0.6);
      top: ${-Math.random() * 100}px;
      left: ${Math.random() * window.innerWidth}px;
      animation: fall ${fallTime}s linear infinite;
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
