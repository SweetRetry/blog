<template><div><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint"><span>Eslint</span></a></h1>
<h2 id="安装eslint" tabindex="-1"><a class="header-anchor" href="#安装eslint"><span>安装Eslint</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> eslint  <span class="token parameter variable">-D</span></span>
<span class="line">npx eslint <span class="token parameter variable">--init</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加lint命令</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// lint当前项目中的文件并且开启自动修复</span></span>
<span class="line">        <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue相关" tabindex="-1"><a class="header-anchor" href="#vue相关"><span>Vue相关</span></a></h2>
<p>命令行在解析vue文件会报<code v-pre>parsing error</code>.<br>
默认<code v-pre>eslint</code>不会解析<code v-pre>vue</code>文件，所以我们需要一个额外的解析器来帮我们解析<code v-pre>vue</code>文件。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> vue-eslint-parser <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加以下选项</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line"><span class="token string-property property">"parser"</span><span class="token operator">:</span> <span class="token string">'vue-eslint-parser'</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript相关" tabindex="-1"><a class="header-anchor" href="#typescript相关"><span>Typescript相关</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line"><span class="token string-property property">"rules"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token string-property property">'@typescript-eslint/no-non-null-assertion'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>  <span class="token comment">//关闭ts的非空断言</span></span>
<span class="line">  <span class="token string-property property">"@typescript-eslint/no-explicit-any"</span><span class="token operator">:</span><span class="token string">'off'</span> <span class="token comment">//关闭ts的any</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


