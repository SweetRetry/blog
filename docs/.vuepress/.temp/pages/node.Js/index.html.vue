<template><div><h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.Js</span></a></h1>
<h2 id="express" tabindex="-1"><a class="header-anchor" href="#express"><span>Express</span></a></h2>
<h2 id="连接-mysql" tabindex="-1"><a class="header-anchor" href="#连接-mysql"><span>连接 Mysql</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">npm install mysql</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> mysql <span class="token keyword">from</span> <span class="token string">'mysql'</span></span>
<span class="line"><span class="token keyword">const</span> database <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  host<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span></span>
<span class="line">  port<span class="token operator">:</span><span class="token number">3306</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//根据mysql配置</span></span>
<span class="line">  <span class="token comment">//用户密码数据库</span></span>
<span class="line">  user<span class="token operator">:</span> <span class="token string">'***'</span><span class="token punctuation">,</span></span>
<span class="line">  password<span class="token operator">:</span> <span class="token string">'******'</span><span class="token punctuation">,</span></span>
<span class="line">  database<span class="token operator">:</span> <span class="token string">'******'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//进程退出时关闭mysql服务</span></span>
<span class="line">process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'exit'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    database<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误解决方案" tabindex="-1"><a class="header-anchor" href="#错误解决方案"><span>错误解决方案</span></a></h2>
<h3 id="mysql-错误-1251-client-does-not-support-authentication-protocol-requested-by-server-解决方案" tabindex="-1"><a class="header-anchor" href="#mysql-错误-1251-client-does-not-support-authentication-protocol-requested-by-server-解决方案"><span>MySql 错误 1251 - Client does not support authentication protocol requested by server 解决方案</span></a></h3>
<ol>
<li>
<p>管理员运行 CMD 窗口（ 按 win 键 --&gt; Windows 系统 --&gt; 命令提示符(右键) --&gt; 更多 --&gt; 以管理员身份运行 ）</p>
</li>
<li>
<p>通过 cmd 命令进入 mysql 的安装目录（笔者使用的 MySQL 是 8.0.12 版本的，mysql server 安装的默认路径为：C:\Program Files\MySQL\MySQL Server 8.0\bin）</p>
</li>
<li>
<p>登录mysql</p>
</li>
</ol>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"> <span class="token keyword">alter</span> <span class="token keyword">user</span> <span class="token string">'root'</span><span class="token variable">@'localhost'</span> identified <span class="token keyword">with</span> mysql_native_password <span class="token keyword">by</span> <span class="token string">'123456'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">flush <span class="token keyword">privileges</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>作者：老衲呢
链接：<a href="https://www.jianshu.com/p/b338a2ffec0d" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/b338a2ffec0d</a>
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</div>
</div></template>


