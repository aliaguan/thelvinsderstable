# Netlify 完整使用指南 - The LV Insiders Table

## 📋 目录

1. [如何修改网站内容](#如何修改网站内容)
2. [Netlify 后台功能详解](#netlify-后台功能详解)
3. [三种更新网站的方式](#三种更新网站的方式)
4. [常用操作指南](#常用操作指南)
5. [最佳实践](#最佳实践)

---

## 🔧 如何修改网站内容

### 方法一：手动修改 + 重新上传（最简单）

#### 步骤：

1. **找到并编辑文件**
   - 打开您电脑上的网站文件夹
   - 用任何文本编辑器打开文件：
     - Windows: 记事本、Notepad++、VS Code
     - Mac: TextEdit、VS Code、Sublime Text

2. **修改内容**

   **修改文字内容 (index.html):**
   ```html
   <!-- 例如修改标题 -->
   <h1 class="hero-title">The LV Insiders Table</h1>
   改为：
   <h1 class="hero-title">您想要的新标题</h1>

   <!-- 修改描述 -->
   <p class="hero-description">原来的描述</p>
   改为：
   <p class="hero-description">新的描述</p>
   ```

   **修改颜色 (styles.css):**
   ```css
   :root {
       --accent-color: #d4af37;  /* 金色 */
   }
   改为：
   :root {
       --accent-color: #c0392b;  /* 改为红色 */
   }
   ```

3. **保存文件**
   - 确保保存所有修改

4. **重新部署到 Netlify**
   - 登录 Netlify: https://app.netlify.com
   - 进入您的项目 "thelvinsiderstable"
   - 找到 "Deploys" 页面
   - 将整个文件夹拖拽到部署区域
   - 或点击 "Deploy manually" → "Browse to upload"

5. **等待部署完成**
   - 通常 10-30 秒
   - 刷新网站查看更新

---

### 方法二：使用 Git + GitHub（推荐专业用户）

#### 优势：
- ✅ 自动部署：每次提交代码自动更新网站
- ✅ 版本控制：可以回退到任何历史版本
- ✅ 协作便利：团队成员可以共同编辑

#### 设置步骤：

**1. 创建 GitHub 账号和仓库**

```bash
# 如果还没有 GitHub 账号
访问: https://github.com
注册账号（免费）

# 创建新仓库
点击右上角 "+" → "New repository"
名称: lvinsiderstable-website
选择: Public（公开）
点击: "Create repository"
```

**2. 上传代码到 GitHub**

```bash
# 在本地文件夹中打开终端/命令提示符
cd /path/to/your/website/folder

# 初始化 Git（首次）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - The LV Insiders Table website"

# 连接到 GitHub（替换为您的用户名）
git remote add origin https://github.com/YOUR_USERNAME/lvinsiderstable-website.git

# 推送代码
git branch -M main
git push -u origin main
```

**3. 连接 Netlify 到 GitHub**

在 Netlify 后台：
1. 点击 "Site settings"
2. 选择 "Build & deploy" → "Link repository"
3. 选择 "GitHub"
4. 授权 Netlify 访问您的 GitHub
5. 选择 "lvinsiderstable-website" 仓库
6. 点击 "Deploy site"

**4. 以后每次更新**

```bash
# 修改文件后
git add .
git commit -m "更新描述，例如：更新首页标题"
git push

# Netlify 会自动检测并部署！
```

---

### 方法三：使用 Netlify CLI（命令行工具）

#### 安装：

```bash
# 需要先安装 Node.js
# 访问: https://nodejs.org 下载安装

# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 在项目文件夹中
cd /path/to/your/website

# 首次关联
netlify link

# 部署
netlify deploy --prod
```

---

## 🎛️ Netlify 后台功能详解

### 1. **Site overview（站点概览）**
- 📊 访问统计（访客数、带宽使用）
- 🚀 最新部署状态
- 🔗 快速访问链接

### 2. **Deploys（部署）**

**Production deploys（生产部署）:**
- 查看所有历史部署
- 每次部署都有唯一 ID
- 可以回滚到任何历史版本

**操作:**
```
点击任意历史部署 → "Publish deploy" = 回滚到该版本
点击 "Deploy log" = 查看部署日志
```

**Deploy settings（部署设置）:**
- Build command: 构建命令（静态网站留空）
- Publish directory: 发布目录（通常是根目录 "."）
- 自动发布设置

### 3. **Domain management（域名管理）**

**功能:**
- 添加自定义域名
- 配置 DNS
- 设置域名别名
- 查看 DNS 传播状态

**常用操作:**
```
添加域名: "Add custom domain" → 输入域名 → 按提示配置 DNS
SSL/TLS: 自动启用 HTTPS（免费）
```

### 4. **Site settings（站点设置）**

**General（常规）:**
- 站点名称修改
- 站点 ID
- 删除站点

**Build & deploy（构建和部署）:**
- 持续部署设置
- 部署通知
- 环境变量
- 部署钩子（Webhooks）

**Domain settings（域名设置）:**
- HTTPS 设置
- 自定义域名
- 域名重定向

### 5. **Forms（表单）**

如果您想添加联系表单：

```html
<!-- 在 index.html 中添加 -->
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" placeholder="姓名" required />
  <input type="email" name="email" placeholder="邮箱" required />
  <textarea name="message" placeholder="留言"></textarea>
  <button type="submit">提交</button>
</form>
```

在 Netlify 后台 → Forms 可以查看所有提交的表单数据。

### 6. **Functions（云函数）**

适合添加后端功能，如：
- 发送邮件
- 处理支付
- API 调用

### 7. **Analytics（分析）**

升级到付费计划后可用：
- 实时访问统计
- 访客来源分析
- 页面浏览量

**免费替代方案: Google Analytics**

---

## 📝 常用操作指南

### 操作1：更改网站标题和描述

**文件: index.html**

```html
<!-- 找到并修改 -->
<title>The LV Insiders Table - Where Culinary Art Meets Connection</title>

<!-- 添加 SEO meta 标签 -->
<head>
  <meta name="description" content="您的网站描述">
  <meta name="keywords" content="Las Vegas, dining, community, culinary">

  <!-- 社交媒体分享卡片 -->
  <meta property="og:title" content="The LV Insiders Table">
  <meta property="og:description" content="Where exceptional cuisine meets extraordinary minds">
  <meta property="og:image" content="网站预览图URL">
  <meta property="og:url" content="https://thelvinsiderstable.com">
</head>
```

### 操作2：更换配色方案

**文件: styles.css**

```css
:root {
    /* 主色调 */
    --primary-color: #1a1a1a;      /* 深黑色背景 */
    --secondary-color: #2d2d2d;    /* 次要背景色 */
    --accent-color: #d4af37;       /* 金色强调色 */

    /* 文字颜色 */
    --text-primary: #ffffff;       /* 主要文字 */
    --text-secondary: #b8b8b8;     /* 次要文字 */
    --text-muted: #8a8a8a;         /* 弱化文字 */
}

/* 推荐配色方案 */

/* 方案1：蓝金配色 */
--primary-color: #0a1628;
--accent-color: #ffd700;

/* 方案2：深红配色 */
--primary-color: #1a0f0f;
--accent-color: #c0392b;

/* 方案3：深绿配色 */
--primary-color: #0f1a0f;
--accent-color: #27ae60;
```

### 操作3：添加真实照片到 Gallery

**步骤：**

1. **准备图片**
   - 建议尺寸: 800x800px（正方形）
   - 格式: JPG 或 PNG
   - 压缩优化（使用 TinyPNG.com）
   - 命名: event-1.jpg, event-2.jpg 等

2. **创建 images 文件夹**
   ```
   your-website/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/          ← 新建文件夹
       ├── event-1.jpg
       ├── event-2.jpg
       └── ...
   ```

3. **修改 index.html**

```html
<!-- 找到 Gallery section -->
<div class="gallery-grid">
    <!-- 替换占位符 -->
    <div class="gallery-item">
        <img src="images/event-1.jpg" alt="活动照片 1">
    </div>
    <div class="gallery-item">
        <img src="images/event-2.jpg" alt="活动照片 2">
    </div>
    <!-- 更多照片... -->
</div>
```

4. **添加 CSS 样式**

```css
/* 在 styles.css 中添加 */
.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.05);
}
```

### 操作4：添加联系表单

**在 index.html 的 Contact section 中添加:**

```html
<div class="contact-form">
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <!-- 防止垃圾邮件 -->
        <input type="hidden" name="form-name" value="contact" />
        <p style="display:none;">
            <label>Don't fill this: <input name="bot-field" /></label>
        </p>

        <div class="form-group">
            <input type="text" name="name" placeholder="姓名" required />
        </div>

        <div class="form-group">
            <input type="email" name="email" placeholder="邮箱" required />
        </div>

        <div class="form-group">
            <textarea name="message" rows="5" placeholder="留言内容" required></textarea>
        </div>

        <button type="submit" class="cta-button">提交</button>
    </form>
</div>
```

**添加表单样式 (styles.css):**

```css
.contact-form {
    max-width: 600px;
    margin: 2rem auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    background: var(--secondary-color);
    border: 1px solid rgba(212, 175, 55, 0.2);
    color: var(--text-primary);
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-color);
}
```

### 操作5：自定义404页面

**创建 404.html 文件:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | The LV Insiders Table</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <div class="error-page">
        <h1>404</h1>
        <p>Oops! This page doesn't exist.</p>
        <a href="/" class="cta-button">Return Home</a>
    </div>
</body>
</html>
```

---

## 🎯 最佳实践

### 1. **版本控制**
- 始终保留原始文件的备份
- 使用 Git 进行版本管理
- 在修改前创建副本

### 2. **测试流程**
- 在本地浏览器中测试修改
- 使用 Netlify Deploy Preview 测试（Git 集成后自动）
- 确认无误后再发布到生产环境

### 3. **性能优化**
- 压缩图片（使用 TinyPNG、ImageOptim）
- 最小化 CSS/JS（上线前）
- 启用 Netlify 的资产优化

### 4. **SEO 优化**
```html
<!-- 确保每个页面都有 -->
<title>具体的标题 - The LV Insiders Table</title>
<meta name="description" content="页面描述 120-160 字符">
<link rel="canonical" href="https://thelvinsiderstable.com">

<!-- 添加结构化数据 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "The LV Insiders Table",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV"
  },
  "url": "https://thelvinsiderstable.com"
}
</script>
```

### 5. **安全性**
- 启用 HTTPS（Netlify 自动）
- 添加安全头部（在 netlify.toml）
- 定期更新依赖

### 6. **监控**
- 设置 Google Analytics
- 监控 Netlify 部署日志
- 关注表单提交通知

---

## 📂 推荐的文件结构

```
lvinsiderstable-website/
├── index.html              # 主页
├── styles.css              # 样式表
├── script.js               # JavaScript
├── 404.html                # 404 页面（可选）
├── netlify.toml            # Netlify 配置（可选）
├── README.md               # 项目说明
├── images/                 # 图片文件夹
│   ├── logo.png
│   ├── event-1.jpg
│   └── ...
└── assets/                 # 其他资源（可选）
    ├── fonts/
    └── icons/
```

---

## 🔗 有用的链接

- **Netlify 文档**: https://docs.netlify.com
- **Netlify 社区**: https://answers.netlify.com
- **学习 Git**: https://git-scm.com/book/zh/v2
- **HTML/CSS 教程**: https://www.w3schools.com
- **图片压缩**: https://tinypng.com
- **配色工具**: https://coolors.co

---

## 💡 快速提示

**需要快速修改？**
1. 登录 Netlify
2. 进入项目 → Deploys
3. 拖拽更新的文件夹
4. 等待 30 秒 → 完成！

**回滚到之前的版本？**
1. Deploys 页面
2. 选择历史部署
3. 点击 "Publish deploy"

**查看表单提交？**
1. Netlify 后台
2. Forms 标签
3. 查看所有提交数据

---

需要任何帮助，随时告诉我！🚀
