// AI工具数据
const toolsData = {
  tools: [
    {
      name: "ChatGPT",
      enName: "ChatGPT",
      description: "OpenAI开发的AI聊天助手，支持GPT-3.5和GPT-4模型",
      url: "https://chat.openai.com",
      icon: "C",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "Claude",
      enName: "Claude",
      description: "Anthropic推出的AI助手，支持上下文理解和文件处理",
      url: "https://claude.ai",
      icon: "C", 
      tags: ["聊天", "写作"]
    },
    {
      name: "文心一言",
      enName: "ERNIE Bot",
      description: "百度推出的AI对话模型，提供全面的中文服务",
      url: "https://yiyan.baidu.com",
      icon: "文",
      tags: ["聊天", "对话"]
    },
    {
      name: "讯飞星火",
      enName: "Spark Desk",
      description: "科大讯飞打造的认知大模型，提供多领域服务",
      url: "https://xinghuo.xfyun.cn",
      icon: "星",
      tags: ["聊天", "认知"]
    },
    {
      name: "通义千问",
      enName: "Tongyi",
      description: "阿里云推出的AI大模型，支持多场景应用",
      url: "https://tongyi.aliyun.com",
      icon: "通",
      tags: ["聊天", "问答"]
    },
    {
      name: "智谱AI",
      enName: "ChatGLM",
      description: "智谱AI推出的AI助手，基于ChatGLM大模型",
      url: "https://chatglm.cn",
      icon: "智",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "月之暗面",
      enName: "Moonshot",
      description: "月之暗面推出的AI助手",
      url: "https://www.moonshot.cn",
      icon: "月",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "智谱清言",
      enName: "ChatGLM",
      description: "基于ChatGLM大模型的AI对话平台",
      url: "https://chatglm.cn",
      icon: "智",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "天工AI",
      enName: "TianGong",
      description: "昆仑万维推出的AI助手",
      url: "https://tiangong.kunlun.com",
      icon: "天",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "商量SenseChat",
      enName: "SenseChat",
      description: "商汤科技推出的AI助手",
      url: "https://chat.sensetime.com",
      icon: "商",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "ChatGPT Plus",
      enName: "ChatGPT Plus",
      description: "ChatGPT的付费订阅版本，提供GPT-4访问权限",
      url: "https://chat.openai.com/plus",
      icon: "C",
      tags: ["付费", "GPT-4"]
    },
    {
      name: "New Bing",
      enName: "New Bing",
      description: "微软推出的AI搜索引擎，集成ChatGPT技术",
      url: "https://www.bing.com/new",
      icon: "B",
      tags: ["搜索", "AI"]
    },
    {
      name: "豆包",
      enName: "Doubao",
      description: "字节跳动推出的AI助手",
      url: "https://doubao.com",
      icon: "豆",
      tags: ["聊天", "AI助手"]
    },
    {
      name: "360智脑",
      enName: "360 AI",
      description: "360推出的AI助手",
      url: "https://ai.360.com",
      icon: "智",
      tags: ["聊天", "AI助手"]
    }
  ],
  images: [
    {
      name: "Midjourney",
      enName: "Midjourney",
      description: "AI艺术创作工具，可生成精美图像",
      url: "https://www.midjourney.com",
      icon: "M",
      tags: ["艺术", "创作"]
    },
    {
      name: "Stable Diffusion",
      enName: "SD",
      description: "开源图像生成模型，支持本地部署",
      url: "https://stability.ai",
      icon: "S",
      tags: ["图像", "生成"]
    },
    {
      name: "Firefly",
      enName: "Adobe Firefly",
      description: "Adobe推出的AI创意工具",
      url: "https://firefly.adobe.com",
      icon: "F",
      tags: ["设计", "创意"]
    },
    {
      name: "DALL·E 2",
      enName: "DALL·E 2",
      description: "OpenAI开发的AI图像生成模型",
      url: "https://labs.openai.com",
      icon: "D",
      tags: ["图像", "艺术"]
    },
    {
      name: "Runway",
      enName: "Runway",
      description: "AI视频编辑和生成平台",
      url: "https://runway.ml",
      icon: "R",
      tags: ["视频", "编辑"]
    },
    {
      name: "Leonardo.ai",
      enName: "Leonardo",
      description: "专业的AI图像生成平台",
      url: "https://leonardo.ai",
      icon: "L",
      tags: ["图像", "设计"]
    },
    {
      name: "Canva AI",
      enName: "Canva AI",
      description: "Canva集成的AI设计工具",
      url: "https://www.canva.com/ai",
      icon: "C",
      tags: ["设计", "创意"]
    }
  ],
  writing: [
    {
      name: "Notion AI",
      enName: "Notion AI", 
      description: "集成AI功能的笔记和协作平台",
      url: "https://www.notion.so",
      icon: "N",
      tags: ["笔记", "协作"]
    },
    {
      name: "Copy.ai",
      enName: "Copy.ai",
      description: "AI写作助手，支持多种文案生成",
      url: "https://www.copy.ai",
      icon: "C",
      tags: ["写作", "文案"]
    },
    {
      name: "Jasper",
      enName: "Jasper",
      description: "AI内容创作平台，支持多语言",
      url: "https://www.jasper.ai",
      icon: "J",
      tags: ["内容", "创作"]
    },
    {
      name: "写作猫",
      enName: "WriteGPT",
      description: "中文AI写作助手",
      url: "https://xiezuocat.com",
      icon: "写",
      tags: ["写作", "中文"]
    }
  ],
  research: [
    {
      name: "Connected Papers",
      enName: "Connected Papers",
      description: "论文关系可视化工具",
      url: "https://www.connectedpapers.com",
      icon: "C",
      tags: ["研究", "论文"]
    },
    {
      name: "Consensus",
      enName: "Consensus",
      description: "AI驱动的学术搜索引擎",
      url: "https://consensus.app",
      icon: "C",
      tags: ["搜索", "学术"]
    },
    {
      name: "Elicit",
      enName: "Elicit",
      description: "AI研究助手",
      url: "https://elicit.org",
      icon: "E",
      tags: ["研究", "助手"]
    }
  ],
  development: [
    {
      name: "GitHub Copilot",
      enName: "Copilot",
      description: "AI代码助手",
      url: "https://github.com/features/copilot",
      icon: "G",
      tags: ["编程", "助手"]
    },
    {
      name: "Cursor",
      enName: "Cursor",
      description: "AI编程IDE",
      url: "https://cursor.sh",
      icon: "C",
      tags: ["IDE", "编程"]
    },
    {
      name: "Replit",
      enName: "Replit",
      description: "在线IDE，集成AI功能",
      url: "https://replit.com",
      icon: "R",
      tags: ["IDE", "编程"]
    }
  ],
  learning: [
    {
      name: "Duolingo",
      enName: "Duolingo",
      description: "AI驱动的语言学习平台",
      url: "https://www.duolingo.com",
      icon: "D",
      tags: ["教育", "语言"]
    },
    {
      name: "Khan Academy",
      enName: "Khan Academy",
      description: "集成AI辅导的教育平台",
      url: "https://www.khanacademy.org",
      icon: "K",
      tags: ["教育", "学习"]
    }
  ],
  community: [
    {
      name: "Hugging Face",
      enName: "HF",
      description: "AI模型开源社区平台",
      url: "https://huggingface.co",
      icon: "H",
      tags: ["社区", "开源"]
    },
    {
      name: "AI研习社",
      enName: "AIStudio",
      description: "百度AI开发者社区",
      url: "https://aistudio.baidu.com",
      icon: "研",
      tags: ["社区", "学习"]
    },
    {
      name: "OpenAI社区",
      enName: "OpenAI Community",
      description: "OpenAI官方开发者社区",
      url: "https://community.openai.com",
      icon: "O",
      tags: ["社区", "开发"]
    }
  ],
  life: [
    {
      name: "Poe",
      enName: "Poe",
      description: "问答社区，集成多个AI模型",
      url: "https://poe.com",
      icon: "P",
      tags: ["社区", "问答"]
    },
    {
      name: "Character.ai",
      enName: "Character.ai",
      description: "AI角色扮演对话平台",
      url: "https://character.ai",
      icon: "C",
      tags: ["对话", "娱乐"]
    },
    {
      name: "PhotoRoom",
      enName: "PhotoRoom",
      description: "AI图像编辑工具",
      url: "https://www.photoroom.com",
      icon: "P",
      tags: ["图像", "编辑"]
    }
  ],
  careers: [
    {
      name: "AI求职导航",
      enName: "AI Jobs",
      description: "AI相关工作机会导航",
      url: "https://www.mojie.me/jobs",
      icon: "求",
      tags: ["求职", "工作"]
    },
    {
      name: "Indeed",
      enName: "Indeed",
      description: "全球招聘网站",
      url: "https://www.indeed.com",
      icon: "I",
      tags: ["求职", "招聘"]
    }
  ],
  prompts: [
    {
      name: "PromptHero",
      enName: "PromptHero",
      description: "AI提示词分享平台",
      url: "https://prompthero.com",
      icon: "P",
      tags: ["提示词", "分享"]
    },
    {
      name: "PromptBase",
      enName: "PromptBase",
      description: "AI提示词市场",
      url: "https://promptbase.com",
      icon: "P",
      tags: ["提示词", "市场"]
    }
  ],
  business: [
    {
      name: "Sales GPT",
      enName: "Sales GPT",
      description: "AI销售助手，提升销售效率",
      url: "https://www.salesgpt.ai",
      icon: "S",
      tags: ["销售", "商业"]
    },
    {
      name: "Copy.ai",
      enName: "Copy.ai",
      description: "AI营销文案生成工具",
      url: "https://www.copy.ai",
      icon: "C",
      tags: ["营销", "文案"]
    },
    {
      name: "Tome",
      enName: "Tome",
      description: "AI演示文稿生成工具",
      url: "https://tome.app",
      icon: "T",
      tags: ["演示", "商业"]
    }
  ],
  productivity: [
    {
      name: "Motion",
      enName: "Motion",
      description: "AI日程管理助手",
      url: "https://www.usemotion.com",
      icon: "M",
      tags: ["效率", "管理"]
    },
    {
      name: "Mem",
      enName: "Mem",
      description: "AI笔记与知识管理工具",
      url: "https://mem.ai",
      icon: "M",
      tags: ["笔记", "知识"]
    }
  ]
};

function createToolCard(tool) {
  const tags = tool.tags ? `
    <div class="tool-tags">
      ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
    </div>
  ` : '';
  
  return `
    <div class="tool-card">
      <div class="tool-icon">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <circle cx="12" cy="12" r="11" fill="#1890ff" opacity="0.85"/>
          <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="500">${tool.icon}</text>
        </svg>
      </div>
      <div class="tool-info">
        <h3>${tool.name}${tool.enName ? `<span class="en-name">${tool.enName}</span>` : ''}</h3>
        <p>${tool.description}</p>
        ${tags}
        <a href="${tool.url}" class="link-icon" target="_blank" rel="noopener noreferrer" title="访问链接">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}

function renderTools() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  
  const categoryTitles = {
    tools: 'AI聊天助手',
    images: 'AI图像创作',
    writing: 'AI写作工具',
    research: 'AI研究工具',
    development: 'AI开发工具',
    learning: 'AI学习平台',
    community: 'AI社区平台',
    life: 'AI生活应用',
    careers: 'AI求职导航',
    prompts: '提示词资源',
    business: 'AI商业工具',
    productivity: 'AI效率工具'
  };
  
  Object.entries(toolsData).forEach(([category, tools]) => {
    const section = document.createElement('section');
    section.id = category;
    section.className = 'category';
    
    section.innerHTML = `
      <h2>${categoryTitles[category]}</h2>
      <div class="tools-grid">
        ${tools.map(tool => createToolCard(tool)).join('')}
      </div>
    `;
    
    main.appendChild(section);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTools();
  
  // Navigation active state
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll to top button
  const scrollTop = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  });
  
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});