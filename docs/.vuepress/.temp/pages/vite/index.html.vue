<template><div><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h1>
<h2 id="vite插件" tabindex="-1"><a class="header-anchor" href="#vite插件"><span><RouteLink to="/Plugins/Vite_Plugins.html">Vite插件</RouteLink></span></a></h2>
<h2 id="更改路径名" tabindex="-1"><a class="header-anchor" href="#更改路径名"><span>更改路径名</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">  <span class="token comment">//实际更改路径别名(vite.config.ts)</span></span>
<span class="line">    resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        src<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">//为了不标红(tsconfig.json)</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"src"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


