"use strict";(self.webpackChunkomnidocs=self.webpackChunkomnidocs||[]).push([[976],{7879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"intro","title":"OmniRouter Documentation","description":"\ud83d\udccc Introduction","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Quickstart","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Endpoints","permalink":"/docs/category/endpoints"}}');var r=t(4848),o=t(8453);const a={sidebar_label:"Quickstart",sidebar_position:1},s="OmniRouter Documentation",l={},c=[{value:"\ud83d\udccc Introduction",id:"-introduction",level:2},{value:"\ud83d\ude80 Quickstart",id:"-quickstart",level:2},{value:"Installation",id:"installation",level:3},{value:"Setting Up the Client",id:"setting-up-the-client",level:3},{value:"Option 1: Initialize with API Key",id:"option-1-initialize-with-api-key",level:4},{value:"Option 2: Use Environment Variable",id:"option-2-use-environment-variable",level:4},{value:"Smart Model Selection",id:"smart-model-selection",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"omnirouter-documentation",children:"OmniRouter Documentation"})}),"\n",(0,r.jsx)(n.h2,{id:"-introduction",children:"\ud83d\udccc Introduction"}),"\n",(0,r.jsx)(n.p,{children:"OmniRouter is a powerful API client for interacting with various Language Learning Models (LLMs) through a unified interface. It provides smart model selection, chat completions, and image generation capabilities."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-quickstart",children:"\ud83d\ude80 Quickstart"}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"To install the package, use pip:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"pip install omnilabs\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-the-client",children:"Setting Up the Client"}),"\n",(0,r.jsxs)(n.p,{children:["Initialize the ",(0,r.jsx)(n.code,{children:"OmniClient"})," by providing an API key manually or setting it as an environment variable."]}),"\n",(0,r.jsx)(n.h4,{id:"option-1-initialize-with-api-key",children:"Option 1: Initialize with API Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from omnilabs import OmniClient\r\nclient = OmniClient(api_key='your-api-key-here')\n"})}),"\n",(0,r.jsx)(n.h4,{id:"option-2-use-environment-variable",children:"Option 2: Use Environment Variable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"export OMNI_API_KEY='your-api-key-here'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from omnilabs import OmniClient\r\nclient = OmniClient()\n"})}),"\n",(0,r.jsx)(n.h3,{id:"smart-model-selection",children:"Smart Model Selection"}),"\n",(0,r.jsx)(n.p,{children:"OmniRouter can automatically select the best model for your task based on your priorities:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from omnilabs import OmniClient, ChatMessage\r\n\r\nclient = OmniClient()\r\n\r\n# For complex math problems, prioritize accuracy over cost\r\nresponse = client.smart_select(\r\n    messages=[\r\n        ChatMessage(role="user", content="Solve this calculus problem: \u222bx\xb2dx")\r\n    ],\r\n    rel_accuracy=0.8,  # High accuracy importance\r\n    rel_cost=0.2,      # Lower cost importance\r\n    verbose=True       # Get explanation of model selection\r\n)\r\n\r\nprint(f"Selected model: {response[\'model\']}")\r\nprint(f"Explanation: {response[\'explanation\']}")\r\nprint(f"Response: {response[\'content\']}")\r\n\r\n# For creative writing, balance cost and quality\r\nresponse = client.smart_select(\r\n    messages=[\r\n        ChatMessage(role="user", content="Write a short poem about spring")\r\n    ],\r\n    rel_accuracy=0.5,  # Balanced accuracy\r\n    rel_cost=0.5,      # Balanced cost\r\n)\r\n\r\nprint(f"Response: {response[\'content\']}")\n'})}),"\n",(0,r.jsx)(n.p,{children:"For more details on smart routing and other features, check out the respective documentation sections."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);