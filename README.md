<body>

  <h1>京东反馈粘贴上传助手（最终修复版）</h1>

  <p>💡 一款适用于 <a href="https://feedback.jd.com/" target="_blank">京东反馈页面</a> 的 Tampermonkey 用户脚本，支持粘贴截图自动上传并复制 HTTPS 图片链接，提升图片反馈效率。</p>

  <hr>

  <h2>📌 功能介绍</h2>
  <ul>
    <li>🖼️ 支持直接在页面按 <code>Ctrl+V</code> 粘贴截图</li>
    <li>🔄 自动填充上传控件并触发上传</li>
    <li>🔍 监听图片上传完成事件</li>
    <li>🔗 自动复制 <strong>HTTPS</strong> 图片链接到剪贴板</li>
    <li>⚡ 完美适配京东反馈页面 <code>.img-item</code> 区域</li>
  </ul>

  <hr>

  <h2>📷 效果演示</h2>
  <p><img src="https://user-images.githubusercontent.com/your-demo.gif" alt="效果演示图"></p>
  <p><em>支持截图粘贴 ➝ 自动上传 ➝ 自动复制链接</em></p>

  <hr>

  <h2>🚀 使用方法</h2>
  <ol>
    <li>安装 <a href="https://www.tampermonkey.net/" target="_blank">Tampermonkey 浏览器插件</a></li>
    <li>点击安装此脚本：  
      👉 <a href="https://github.com/344LTD/JingDongIMG/raw/main/jd-feedback.user.js">点此安装</a>
    </li>
    <li>打开 <a href="https://feedback.jd.com/" target="_blank">https://feedback.jd.com/</a></li>
    <li>粘贴截图（按下 <code>Ctrl+V</code>）</li>
    <li>上传成功后，链接会自动复制到剪贴板</li>
  </ol>

  <hr>

  <h2>🔧 技术说明</h2>
  <ul>
    <li>使用 <code>MutationObserver</code> 监听 <code>.img-list</code> 区域内的图片上传变化</li>
    <li>自动替换 <code>http://</code> 链接为 <code>https://</code></li>
    <li>兼容 <code>GM_setClipboard</code> 或浏览器原生剪贴板 API</li>
  </ul>

  <hr>

  <h2>🧑‍💻 作者</h2>
  <p>作者主页：<a href="https://github.com/344LTD" target="_blank">github.com/344LTD</a></p>
  <p>欢迎 Issue / PR / Star ⭐</p>

  <hr>

  <h2>📄 License</h2>
  <p>MIT License</p>

</body>
