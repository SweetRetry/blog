<template><div><h1 id="vue-plugins" tabindex="-1"><a class="header-anchor" href="#vue-plugins"><span>Vue Plugins</span></a></h1>
<h2 id="自动引入" tabindex="-1"><a class="header-anchor" href="#自动引入"><span>自动引入</span></a></h2>
<h3 id="自动引入组件" tabindex="-1"><a class="header-anchor" href="#自动引入组件"><span>自动引入组件</span></a></h3>
<p><strong><code v-pre>unplugin-vue-components</code>--用于库的自动引入</strong></p>
<ul>
<li>自定义组件</li>
<li>Vue-router组件</li>
<li>UI库组件（ElementPlus）</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">//vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/vite'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        dts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        types<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            from<span class="token operator">:</span> <span class="token string">'vue-router'</span><span class="token punctuation">,</span></span>
<span class="line">            names<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'RouterLink'</span><span class="token punctuation">,</span> <span class="token string">'RouterView'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">//tsconfig.json</span></span>
<span class="line"><span class="token comment">//在includes中添加以下文件</span></span>
<span class="line">    <span class="token string">"./components.d.ts"</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用于hooks函数自动引入" tabindex="-1"><a class="header-anchor" href="#用于hooks函数自动引入"><span>用于hooks函数自动引入</span></a></h3>
<p><strong><code v-pre>unplugin-auto-import</code> --用于hooks函数的自动引入</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">//vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">'unplugin-auto-import/vite'</span></span>
<span class="line"><span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/vite'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        include<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// .ts, .tsx, .js, .jsx</span></span>
<span class="line">          <span class="token operator">/</span>\<span class="token punctuation">.</span>vue$<span class="token operator">/</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// .vue</span></span>
<span class="line">          <span class="token operator">/</span>\<span class="token punctuation">.</span>md$<span class="token operator">/</span><span class="token punctuation">,</span> <span class="token comment">// .md</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        dts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">//tsconfig.json</span></span>
<span class="line"><span class="token comment">//在includes中添加以下文件</span></span>
<span class="line">    <span class="token string">"./auto-imports.d.ts"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>当使用Eslint插件时会有冲突，解决方法如下</p>
</div>
<ol>
<li>Enable eslintrc.enabled</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line">    <span class="token comment">// &lt;!-- vite.config.ts --></span></span>
<span class="line"><span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  eslintrc<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- this</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Update your eslintrc: Extending Configuration Files</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'./.eslintrc-auto-import.json'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


