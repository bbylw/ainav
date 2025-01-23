# AI导航

一个优雅的 AI 工具导航网站，帮助用户发现和使用最新最好的 AI 工具。专注于收录高质量的 AI 工具和资源，包括 AI 聊天、AI 图像生成、AI 写作、AI 开发等多个领域。

![AI导航预览](preview.png)

## ✨ 特点

- 🎯 精选全球数千个优质 AI 工具
- 🎨 现代简约的用户界面设计
- 📱 完美支持移动端浏览
- 🔍 实时搜索功能
- 🏷️ 多维度分类导航
- 🌈 美观的渐变色图标
- ⚡️ 快速加载和响应
- 🔄 持续更新收录优质工具
- 📊 工具评分和使用推荐
- 🌐 支持中英文双语显示

## 🔧 技术栈

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (原生)
- Font Awesome 图标
- 响应式设计
- LocalStorage 数据持久化

## 📦 分类导航

- 🤖 AI助手 - ChatGPT、Claude、文心一言等智能对话工具
- 🎨 AI图像 - Midjourney、Stable Diffusion、DALL·E 等图像生成工具
- ✍️ AI写作 - Copy.ai、Jasper、写作猫等写作辅助工具
- 💻 AI开发 - GitHub Copilot、Cursor、Replit 等编程工具
- 💼 AI商业 - 营销、销售、客服等商业应用工具
- ⚡ AI效率 - 日程管理、笔记、知识库等效率工具
- 📚 AI研究 - 论文、学术、研究等学术工具
- 👥 AI社区 - 优质的 AI 交流和学习社区
- ⭐ AI生活 - 图像处理、音视频、生活服务等工具
- 👔 AI求职 - 简历优化、面试准备、职业规划工具
- 🎓 AI学习 - 在线课程、教育资源、学习平台
- 💡 提示词 - Prompt 编写、优化和分享平台

## 🚀 在线访问

访问 [https://yourusername.github.io/ai-navigation](https://yourusername.github.io/ai-navigation) 即可使用。

## 📝 自定义导航

### 修改分类

1. 打开 `index.html`，找到侧边栏导航部分：
```html
<nav>
  <ul>
    <li>
      <a href="#tools" class="active">
        <span class="nav-icon"><i class="fas fa-robot"></i></span>AI助手
      </a>
    </li>
    <!-- 添加更多分类 -->
  </ul>
</nav>
```

2. 按照相同格式添加新分类，修改：
   - `href` 属性：分类的锚点链接
   - `class` 属性：可选的激活状态
   - `i` 标签的 `class`：分类图标
   - 分类名称文本

### 添加网址

1. 打开 `app.js`，在 `toolsData` 对象中找到对应分类：
```javascript
const toolsData = {
  tools: [
    {
      name: "工具名称",
      enName: "英文名称",
      description: "工具描述",
      url: "https://example.com",
      icon: "图标字母",
      tags: ["标签1", "标签2"]
    }
  ]
}
```

2. 按照模板添加新工具：
   - `name`：工具中文名称
   - `enName`：工具英文名称
   - `description`：工具简短描述
   - `url`：工具网址
   - `icon`：显示的图标字母
   - `tags`：工具标签数组

### 自定义样式

1. 在 `styles.css` 中添加新的图标渐变色：
```css
.category-ai-newtype i {
  background: linear-gradient(135deg, #颜色1, #颜色2);
}
```

2. 修改现有样式：
   - 调整卡片外观
   - 更改配色方案
   - 自定义动画效果

## 🔄 更新计划

- [ ] 添加工具评分和评论功能
- [ ] 支持用户收藏夹功能
- [ ] 增加工具使用教程
- [ ] 优化移动端体验
- [ ] 添加深色模式
- [ ] 支持多语言切换

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

您可以通过以下方式贡献：

- 提交新的优质 AI 工具
- 报告问题或错误
- 改进用户界面和体验
- 补充工具使用说明
- 修复文档错误

## 📝 开源协议

[MIT License](LICENSE)  
