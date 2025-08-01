// ==UserScript==
// @name         京东反馈 - 粘贴图片上传并复制链接（最终修复版）
// @namespace    https://github.com/344LTD
// @version      1.4
// @description  支持在京东反馈页面直接粘贴图片自动上传，并复制图片链接为 HTTPS 格式到剪贴板，简化反馈流程。
// @author       github.com/344LTD
// @match        https://feedback.jd.com/*
// @grant        GM_setClipboard
// @license      Apache-2.0
// ==/UserScript==

(function () {
  'use strict';

  console.log("✅ 京东反馈粘贴上传脚本已加载");

  // 监听 Ctrl+V 粘贴图片
  document.addEventListener('paste', function (e) {
    const items = e.clipboardData.items;
    for (let item of items) {
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        const fileInput = document.querySelector('input[type="file"]');
        if (!fileInput) {
          alert("❌ 未找到上传控件！");
          return;
        }

        const dt = new DataTransfer();
        dt.items.add(file);
        fileInput.files = dt.files;

        fileInput.dispatchEvent(new Event('change', { bubbles: true }));
        console.log("📤 粘贴上传已触发");

        // 监听图片上传结果
        observeImageUpload();
        break;
      }
    }
  });

  function observeImageUpload() {
    // 父容器实际是：图片上传区域的父节点（包含多个 .img-item）
    const container = document.querySelector('.img-list'); // ✅ 正确选择

    if (!container) {
      console.warn("⚠️ 没有找到 .img-list 图片区域！");
      return;
    }

    const observer = new MutationObserver(() => {
      const images = container.querySelectorAll('.img-item img[src*="360buyimg.com"]');
      if (images.length > 0) {
        const latestImg = images[images.length - 1];
        const imgUrl = latestImg.src.replace(/^http:\/\//, 'https://');

        console.log("✅ 上传成功，复制链接：", imgUrl);
        copyToClipboard(imgUrl);
        observer.disconnect(); // 停止监听
      }
    });

    observer.observe(container, { childList: true, subtree: true });
  }

  function copyToClipboard(text) {
    if (typeof GM_setClipboard !== 'undefined') {
      GM_setClipboard(text, 'text');
      alert("✅ 图片链接已复制到剪贴板：\n" + text);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert("✅ 图片链接已复制到剪贴板：\n" + text);
      }).catch(err => {
        alert("❌ 复制失败：" + err);
      });
    } else {
      alert("❌ 无法访问剪贴板");
    }
  }

})();
