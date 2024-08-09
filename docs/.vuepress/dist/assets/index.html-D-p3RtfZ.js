import{_ as n,c as s,o as a,a as e}from"./app-n6pBMo09.js";const l={},i=e(`<h1 id="nginx-配置文件详解" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件详解"><span>Nginx 配置文件详解</span></a></h1><p>Nginx 的主配置文件是 nginx.conf，这个配置文件一共由三部分组成，分别为全局块、events 块和 http 块。在 http 块中，又包含 http 全局块、多个 server 块。每个 server 块中，可以包含 server 全局块和多个 location 块。在同一配置块中嵌套的配置块，各个之间不存在次序关系。</p><p>配置文件支持大量可配置的指令，绝大多数指令不是特定属于某一个块的。同一个指令放在不同层级的块中，其作用域也不同，一般情况下，高一级块中的指令可以作用于自身所在的块和此块包含的所有低层级块。如果某个指令在两个不同层级的块中同时出现，则采用“就近原则”，即以较低层级块中的配置为准。比如，某指令同时出现在 http 全局块中和 server 块中，并且配置不同，则应该以 server 块中的配置为准。</p><h2 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构"><span>文件结构</span></a></h2><div class="language-PERL line-numbers-mode" data-highlighter="prismjs" data-ext="PERL" data-title="PERL"><pre class="language-PERL"><code><span class="line">#全局块</span>
<span class="line">#user  nobody;</span>
<span class="line">worker_processes  1;</span>
<span class="line"></span>
<span class="line">#event块</span>
<span class="line">events {</span>
<span class="line">    worker_connections  1024;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#http块</span>
<span class="line">http {</span>
<span class="line">    #http全局块</span>
<span class="line">    include       mime.types;</span>
<span class="line">    default_type  application/octet-stream;</span>
<span class="line">    sendfile        on;</span>
<span class="line">    keepalive_timeout  65;</span>
<span class="line">    #server块</span>
<span class="line">    server {</span>
<span class="line">        #server全局块</span>
<span class="line">        listen       8000;</span>
<span class="line">        server_name  localhost;</span>
<span class="line">        #location块</span>
<span class="line">        location / {</span>
<span class="line">            root   html;</span>
<span class="line">            index  index.html index.htm;</span>
<span class="line">        }</span>
<span class="line">        error_page   500 502 503 504  /50x.html;</span>
<span class="line">        location = /50x.html {</span>
<span class="line">            root   html;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    #这边可以有多个server块</span>
<span class="line">    server {</span>
<span class="line">      ...</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局块" tabindex="-1"><a class="header-anchor" href="#全局块"><span>全局块</span></a></h2><p>全局块是默认配置文件从开始到 events 块之间的一部分内容，主要设置一些影响 Nginx 服务器整体运行的配置指令，因此，这些指令的作用域是 Nginx 服务器全局。</p><p>通常包括配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数、Nginx 进程 PID 存放路径、日志的存放路径和类型以及配置文件引入等。</p><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre class="language-makefile"><code><span class="line">指定可以运行nginx服务的用户和用户组，只能在全局块配置</span>
<span class="line">user [user] [group]</span>
<span class="line">将user指令注释掉，或者配置成nobody的话所有用户都可以运行</span>
<span class="line">user nobody nobody<span class="token punctuation">;</span></span>
<span class="line">user指令在Windows上不生效，如果你制定具体用户和用户组会报小面警告</span>
<span class="line"><span class="token target symbol">nginx</span><span class="token punctuation">:</span> [warn] <span class="token string">&quot;user&quot;</span> is not supported, ignored in <span class="token string">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line">指定工作线程数，可以制定具体的进程数，也可使用自动模式，这个指令只能在全局块配置</span>
<span class="line">worker_processes number <span class="token operator">|</span> auto；</span>
<span class="line">列子：指定4个工作线程，这种情况下会生成一个master进程和4个worker进程</span>
<span class="line">worker_processes 4<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">指定pid文件存放的路径，这个指令只能在全局块配置</span>
<span class="line">pid logs/nginx.pid<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">指定错误日志的路径和日志级别，此指令可以在全局块、http块、server块以及location块中配置。</span>
<span class="line">其中debug级别的日志需要编译时使用--with-debug开启debug开关</span>
<span class="line">error_log [path] [debug <span class="token operator">|</span> info <span class="token operator">|</span> notice <span class="token operator">|</span> warn <span class="token operator">|</span> error <span class="token operator">|</span> crit <span class="token operator">|</span> alert <span class="token operator">|</span> emerg]</span>
<span class="line">error_log  logs/error.log  notice<span class="token punctuation">;</span></span>
<span class="line">error_log  logs/error.log  info<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events-块" tabindex="-1"><a class="header-anchor" href="#events-块"><span>events 块</span></a></h2><p>events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接。常用到的设置包括是否开启对多 worker process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个 worker process 可以同时支持的最大连接数等。</p><p>这一部分的指令对 Nginx 服务器的性能影响较大，在实际配置中应该根据实际情况灵活调整。</p><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre class="language-makefile"><code><span class="line">当某一时刻只有一个网络连接到来时，多个睡眠进程会被同时叫醒，但只有一个进程可获得连接。</span>
<span class="line">如果每次唤醒的进程数目太多，会影响一部分系统性能。在Nginx服务器的多进程下，就有可能出现这样的问题。</span>
<span class="line">开启的时候，将会对多个Nginx进程接收连接进行序列化，防止多个进程对连接的争抢。</span>
<span class="line">默认是开启状态，只能在events块中进行配置。</span>
<span class="line">accept_mutex on <span class="token operator">|</span> off<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">如果multi_accept被禁止了，nginx一个工作进程只能同时接受一个新的连接。否则，一个工作进程可以同时接受所有的新连接。</span>
<span class="line">如果nginx使用kqueue连接方法，那么这条指令会被忽略，因为这个方法会报告在等待被接受的新连接的数量。</span>
<span class="line">默认是off状态，只能在event块配置</span>
<span class="line">multi_accept on <span class="token operator">|</span> off<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">指定使用哪种网络IO模型，method可选择的内容有：select、poll、kqueue、epoll、rtsig、/dev/poll以及eventport，一般操作系统不是支持上面所有模型的。</span>
<span class="line">只能在events块中进行配置</span>
<span class="line">use method</span>
<span class="line">use epoll</span>
<span class="line"></span>
<span class="line">设置允许每一个worker process同时开启的最大连接数，当每个工作进程接受的连接数超过这个值时将不再接收连接</span>
<span class="line">当所有的工作进程都接收满时，连接进入logback，logback满后连接被拒绝</span>
<span class="line">只能在events块中进行配置</span>
<span class="line"><span class="token target symbol">注意：这个值不能超过超过系统支持打开的最大文件数，也不能超过单个进程支持打开的最大文件数，具体可以参考这篇文章：https</span><span class="token punctuation">:</span>//cloud.tencent.com/developer/article/1114773</span>
<span class="line">worker_connections  1024</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-块" tabindex="-1"><a class="header-anchor" href="#http-块"><span>http 块</span></a></h2><p>http 块是 Nginx 服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块的配置都可以放在这个模块中。</p><p>前面已经提到，http 块中可以包含自己的全局块，也可以包含 server 块，server 块中又可以进一步包含 location 块，在本书中我们使用“http 全局块”来表示 http 中自己的全局块，即 http 块中不包含在 server 块中的部分。</p><p>可以在 http 全局块中配置的指令包括文件引入、MIME-Type 定义、日志自定义、是否使用 sendfile 传输文件、连接超时时间、单连接请求数上限等。</p><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre class="language-makefile"><code><span class="line">常用的浏览器中，可以显示的内容有HTML、XML、GIF及Flash等种类繁多的文本、媒体等资源，浏览器为区分这些资源，需要使用MIME Type。换言之，MIME Type是网络资源的媒体类型。Nginx服务器作为Web服务器，必须能够识别前端请求的资源类型。</span>
<span class="line"></span>
<span class="line"><span class="token keyword">include</span>指令，用于包含其他的配置文件，可以放在配置文件的任何地方，但是要注意你包含进来的配置文件一定符合配置规范，比如说你<span class="token keyword">include</span>进来的配置是worker_processes指令的配置，而你将这个指令包含到了http块中，着肯定是不行的，上面已经介绍过worker_processes指令只能在全局块中。</span>
<span class="line">下面的指令将mime.types包含进来，mime.types和ngin.cfg同级目录，不同级的话需要指定具体路径</span>
<span class="line"><span class="token keyword">include</span>  mime.types<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">配置默认类型，如果不加此指令，默认值为text/plain。</span>
<span class="line">此指令还可以在http块、server块或者location块中进行配置。</span>
<span class="line">default_type  application/octet-stream<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">access_log配置，此指令可以在http块、server块或者location块中进行设置</span>
<span class="line">在全局块中，我们介绍过errer_log指令，其用于配置Nginx进程运行时的日志存放和级别，此处所指的日志与常规的不同，它是指记录Nginx服务器提供服务过程应答前端请求的日志</span>
<span class="line">access_log path [format [buffer<span class="token operator">=</span>size]]</span>
<span class="line">如果你要关闭access_log,你可以使用下面的命令</span>
<span class="line">access_log off<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">log_format指令，用于定义日志格式，此指令只能在http块中进行配置</span>
<span class="line">log_format  main <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line">                 <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line">                 <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">定义了上面的日志格式后，可以以下面的形式使用日志</span>
<span class="line">access_log  logs/access.log  main<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">开启关闭sendfile方式传输文件，可以在http块、server块或者location块中进行配置</span>
<span class="line">sendfile  on <span class="token operator">|</span> off<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">设置sendfile最大数据量,此指令可以在http块、server块或location块中配置</span>
<span class="line">sendfile_max_chunk size<span class="token punctuation">;</span></span>
<span class="line">其中，size值如果大于0，Nginx进程的每个worker process每次调用sendfile<span class="token punctuation">(</span><span class="token punctuation">)</span>传输的数据量最大不能超过这个值<span class="token punctuation">(</span>这里是128k，所以每次不能超过128k<span class="token punctuation">)</span>；如果设置为0，则无限制。默认值为0。</span>
<span class="line">sendfile_max_chunk 128k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">配置连接超时时间,此指令可以在http块、server块或location块中配置。</span>
<span class="line">与用户建立会话连接后，Nginx服务器可以保持这些连接打开一段时间</span>
<span class="line"><span class="token target symbol">timeout，服务器端对连接的保持时间。默认值为75s;header_timeout，可选项，在应答报文头部的Keep-Alive域设置超时时间：“Keep-Alive</span><span class="token punctuation">:</span>timeout<span class="token operator">=</span> header_timeout”。报文中的这个指令可以被Mozilla或者Konqueror识别。</span>
<span class="line">keepalive_timeout timeout [header_timeout]</span>
<span class="line">下面配置的含义是，在服务器端保持连接的时间设置为120 s，发给用户端的应答报文头部中Keep-Alive域的超时时间设置为100 s。</span>
<span class="line">keepalive_timeout 120s 100s</span>
<span class="line"></span>
<span class="line">配置单连接请求数上限，此指令可以在http块、server块或location块中配置。</span>
<span class="line">Nginx服务器端和用户端建立会话连接后，用户端通过此连接发送请求。指令keepalive_requests用于限制用户通过某一连接向Nginx服务器发送请求的次数。默认是100</span>
<span class="line">keepalive_requests number<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-块" tabindex="-1"><a class="header-anchor" href="#server-块"><span>server 块</span></a></h2><p>server 块和“虚拟主机”的概念有密切联系。</p><p>虚拟主机，又称虚拟服务器、主机空间或是网页空间，它是一种技术。该技术是为了节省互联网服务器硬件成本而出现的。这里的“主机”或“空间”是由实体的服务器延伸而来，硬件系统可以基于服务器群，或者单个服务器等。虚拟主机技术主要应用于 HTTP、FTP 及 EMAIL 等多项服务，将一台服务器的某项或者全部服务内容逻辑划分为多个服务单位，对外表现为多个服务器，从而充分利用服务器硬件资源。从用户角度来看，一台虚拟主机和一台独立的硬件主机是完全一样的。</p><p>在使用 Nginx 服务器提供 Web 服务时，利用虚拟主机的技术就可以避免为每一个要运行的网站提供单独的 Nginx 服务器，也无需为每个网站对应运行一组 Nginx 进程。虚拟主机技术使得 Nginx 服务器可以在同一台服务器上只运行一组 Nginx 进程，就可以运行多个网站。</p><p>在前面提到过，每一个 http 块都可以包含多个 server 块，而每个 server 块就相当于一台虚拟主机，它内部可有多台主机联合提供服务，一起对外提供在逻辑上关系密切的一组服务（或网站）。</p><p>和 http 块相同，server 块也可以包含自己的全局块，同时可以包含多个 location 块。在 server 全局块中，最常见的两个配置项是本虚拟主机的监听配置和本虚拟主机的名称或 IP 配置。</p><h3 id="listen-指令" tabindex="-1"><a class="header-anchor" href="#listen-指令"><span>listen 指令</span></a></h3><p>server 块中最重要的指令就是 listen 指令，这个指令有三种配置语法。这个指令默认的配置值是：<code>listen _:80 | _:8000</code>；只能在 server 块种配置这个指令。</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre class="language-less"><code><span class="line"><span class="token comment">//第一种</span></span>
<span class="line">listen address[<span class="token punctuation">:</span>port] [default_server] [ssl] [http2 | spdy] [proxy_protocol]</span>
<span class="line">[setfib=number] [fastopen=number] [backlog=number] [rcvbuf=size] [sndbuf=size]</span>
<span class="line">[accept_filter=filter] [deferred] [bind] [ipv6only=on|off] [reuseport]</span>
<span class="line">[so_keepalive=on|off|[keepidle]<span class="token punctuation">:</span>[keepintvl]<span class="token punctuation">:</span>[keepcnt]]<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//第二种</span></span>
<span class="line">listen port [default_server] [ssl] [http2 | spdy] [proxy_protocol] [setfib=number]</span>
<span class="line">[fastopen=number] [backlog=number] [rcvbuf=size] [sndbuf=size] [accept_filter=filter]</span>
<span class="line">[deferred] [bind] [ipv6only=on|off] [reuseport] [so_keepalive=on|off|[keepidle]<span class="token punctuation">:</span>[keepintvl]<span class="token punctuation">:</span>[keepcnt]]<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//第三种（可以不用重点关注）</span></span>
<span class="line">listen <span class="token property">unix</span><span class="token punctuation">:</span>path [default_server] [ssl] [http2 | spdy] [proxy_protocol]</span>
<span class="line">[backlog=number] [rcvbuf=size] [sndbuf=size] [accept_filter=filter]</span>
<span class="line">[deferred] [bind] [so_keepalive=on|off|[keepidle]<span class="token punctuation">:</span>[keepintvl]<span class="token punctuation">:</span>[keepcnt]]<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>listen 指令的配置非常灵活，可以单独制定 ip，单独指定端口或者同时指定 ip 和端口。</p><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre class="language-makefile"><code><span class="line"><span class="token target symbol">listen 127.0.0.1</span><span class="token punctuation">:</span>8000<span class="token punctuation">;</span> <span class="token comment">#只监听来自 127.0.0.1 这个 IP，请求 8000 端口的请求</span></span>
<span class="line">listen 127.0.0.1<span class="token punctuation">;</span> <span class="token comment">#只监听来自 127.0.0.1 这个 IP，请求 80 端口的请求（不指定端口，默认 80）</span></span>
<span class="line">listen 8000<span class="token punctuation">;</span> <span class="token comment">#监听来自所有 IP，请求 8000 端口的请求</span></span>
<span class="line"><span class="token target symbol">listen \\*</span><span class="token punctuation">:</span>8000<span class="token punctuation">;</span> <span class="token comment">#和上面效果一样</span></span>
<span class="line"><span class="token target symbol">listen localhost</span><span class="token punctuation">:</span>8000<span class="token punctuation">;</span> <span class="token comment">#和第一种效果一致</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于上面的一些重要参数做如下说明：</p><ul><li>address：监听的 IP 地址（请求来源的 IP 地址），如果是 IPv6 的地址，需要使用中括号“[]”括起来，比如[fe80::1]等。</li><li>port：端口号，如果只定义了 IP 地址没有定义端口号，就使用 80 端口。这边需要做个说明：要是你压根没配置 listen 指令，那么那么如果 nginx 以超级用户权限运行，则使用*:80，否则使用*:8000。多个虚拟主机可以同时监听同一个端口,但是 server_name 需要设置成不一样；</li><li>default_server：假如通过 Host 没匹配到对应的虚拟主机，则通过这台虚拟主机处理。具体的可以参考这篇文章，写的不错。</li><li>backlog=number：设置监听函数 listen()最多允许多少网络连接同时处于挂起状态，在 FreeBSD 中默认为-1，其他平台默认为 511。</li><li>accept_filter=filter，设置监听端口对请求的过滤，被过滤的内容不能被接收和处理。本指令只在 FreeBSD 和 NetBSD 5.0+平台下有效。filter 可以设置为 dataready 或 httpready，感兴趣的读者可以参阅 Nginx 的官方文档。</li><li>bind：标识符，使用独立的 bind()处理此 address:port；一般情况下，对于端口相同而 IP 地址不同的多个连接，Nginx 服务器将只使用一个监听命令，并使用 bind()处理端口相同的所有连接。</li><li>ssl：标识符，设置会话连接使用 SSL 模式进行，此标识符和 Nginx 服务器提供的 HTTPS 服务有关。 listen 指令的使用看起来比较复杂，但其实在一般的使用过程中，相对来说比较简单，并不会进行太复杂的配置。</li></ul><h3 id="server-name" tabindex="-1"><a class="header-anchor" href="#server-name"><span>server_name</span></a></h3><p>用于配置虚拟主机的名称。语法是：</p><div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile" data-title="makefile"><pre class="language-makefile"><code><span class="line"><span class="token target symbol">Syntax</span><span class="token punctuation">:</span> server_name name ...<span class="token punctuation">;</span></span>
<span class="line"><span class="token target symbol">Default</span><span class="token punctuation">:</span></span>
<span class="line">server_name <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token target symbol">Context</span><span class="token punctuation">:</span> server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 name 来说，可以只有一个名称，也可以由多个名称并列，之间用空格隔开。每个名字就是一个域名，由两段或者三段组成，之间由点号“.”隔开。比如</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">server_name myserver.com www.myserver.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在该例中，此虚拟主机的名称设置为 myserver.com 或 www. myserver.com。Nginx 服务器规定，第一个名称作为此虚拟主机的主要名称。</p><p>在 name 中可以使用通配符“*”，但通配符只能用在由三段字符串组成的名称的首段或尾段，或者由两段字符串组成的名称的尾段，如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">server_name myserver.\\* \\*.myserver.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>另外 name 还支持正则表达式的形式。这边就不详细展开了。</p><p>由于 server_name 指令支持使用通配符和正则表达式两种配置名称的方式，因此在包含有多个虚拟主机的配置文件中，可能会出现一个名称被多个虚拟主机的 server_name 匹配成功。那么，来自这个名称的请求到底要交给哪个虚拟主机处理呢？Nginx 服务器做出如下规定：</p><ol><li>对于匹配方式不同的，按照以下的优先级选择虚拟主机，排在前面的优先处理请求。 <ul><li>准确匹配 server_name</li><li>通配符在开始时匹配 server_name 成功</li><li>通配符在结尾时匹配 server_name 成功</li><li>正则表达式匹配 server_name 成功</li></ul></li><li>在以上四种匹配方式中，如果 server_name 被处于同一优先级的匹配方式多次匹配成功，则首次匹配成功的虚拟主机处理请求。</li></ol><p>有时候我们希望使用基于 IP 地址的虚拟主机配置，比如访问 192.168.1.31 有虚拟主机 1 处理，访问 192.168.1.32 由虚拟主机 2 处理。</p><p>这时我们要先网卡绑定别名，比如说网卡之前绑定的 IP 是 192.168.1.30，现在将 192.168.1.31 和 192.168.1.32 这两个 IP 都绑定到这个网卡上，那么请求这个两个 IP 的请求才会到达这台机器。</p><p>绑定别名后进行以下配置即可：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre class="language-less"><code><span class="line"><span class="token selector">http</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">listen</span><span class="token punctuation">:</span> 80<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">server_name</span><span class="token punctuation">:</span> 192.168.1.31<span class="token punctuation">;</span></span>
<span class="line">    ...<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">listen</span><span class="token punctuation">:</span> 80<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">server_name</span><span class="token punctuation">:</span> 192.168.1.32<span class="token punctuation">;</span></span>
<span class="line">    ...<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location-块" tabindex="-1"><a class="header-anchor" href="#location-块"><span>location 块</span></a></h3><p>每个 server 块中可以包含多个 location 块。在整个 Nginx 配置文档中起着重要的作用，而且 Nginx 服务器在许多功能上的灵活性往往在 location 指令的配置中体现出来。</p><p>location 块的主要作用是，基于 Nginx 服务器接收到的请求字符串（例如， server_name/uri-string），对除虚拟主机名称（也可以是 IP 别名，后文有详细阐述）之外的字符串（前例中“/uri-string”部分）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能都是在这部分实现。许多第三方模块的配置也是在 location 块中提供功能。</p><p>在 Nginx 的官方文档中定义的 location 的语法结构为：</p><p><code>location [ = | ~ | ~* | ^~ ] uri { ... }</code></p><p>其中，uri 变量是待匹配的请求字符串，可以是不含正则表达的字符串，如/myserver.php 等；也可以是包含有正则表达的字符串，如 .php$（表示以.php 结尾的 URL）等。为了下文叙述方便，我们约定，不含正则表达的 uri 称为“标准 uri”，使用正则表达式的 uri 称为“正则 uri”。</p><p>其中方括号里的部分，是可选项，用来改变请求字符串与 uri 的匹配方式。在介绍四种标识的含义之前，我们需要先了解不添加此选项时，Nginx 服务器是如何在 server 块中搜索并使用 location 块的 uri 和请求字符串匹配的。</p><p>在不添加此选项时，Nginx 服务器首先在 server 块的多个 location 块中搜索是否有标准 uri 和请求字符串匹配，如果有多个可以匹配，就记录匹配度最高的一个。然后，服务器再用 location 块中的正则 uri 和请求字符串匹配，当第一个正则 uri 匹配成功，结束搜索，并使用这个 location 块处理此请求；如果正则匹配全部失败，就使用刚才记录的匹配度最高的 location 块处理此请求。</p><p>了解了上面的内容，就可以解释可选项中各个标识的含义了：</p><ul><li>“=”，用于标准 uri 前，要求请求字符串与 uri 严格匹配。如果已经匹配成功，就停止继续向下搜索并立即处理此请求。</li><li>“^～”，用于标准 uri 前，要求 Nginx 服务器找到标识 uri 和请求字符串匹配度最高的 location 后，立即使用此 location 处理请求，而不再使用 location 块中的正则 uri 和请求字符串做匹配。</li><li>“～”，用于表示 uri 包含正则表达式，并且区分大小写。</li><li>“～<em>”，用于表示 uri 包含正则表达式，并且不区分大小写。注意如果 uri 包含正则表达式，就必须要使用“～”或者“～</em>”标识。</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>我们知道，在浏览器传送 URI 时对一部分字符进行 URL 编码，比如空格被编码为“%20”，问号被编码为“%3f”等。“～”有一个特点是，它对 uri 中的这些符号将会进行编码处理。比如，如果 location 块收到的 URI 为“/html/%20/data”，则当 Nginx 服务器搜索到配置为“～ /html/ /data”的 location 时，可以匹配成功。</p></div><h3 id="root-指令" tabindex="-1"><a class="header-anchor" href="#root-指令"><span>root 指令</span></a></h3><p>这个指令用于设置请求寻找资源的跟目录，此指令可以在 http 块、server 块或者 location 块中配置。由于使用 Nginx 服务器多数情况下要配置多个 location 块对不同的请求分别做出处理，因此该指令通常在 location 块中进行设置。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">root path</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>path 变量中可以包含 Nginx 服务器预设的大多数变量，只有 documentroot 和 realpath_root 不可以使用。</p><p>一点说明 上面列举了 Nignx 中全局块、event 块和 http 块的一些配置指令，但是 Nginx 的指令远远不止这些。其实这边最主要的还是讲解整个配置文件的结构，如果大家要看比较全的指令介绍、模块介绍的话，建议去 Nginx 的官网。</p><p>一个配置文件的列子</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment">######Nginx 配置文件 nginx.conf 中文详解#####</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#定义 Nginx 运行的用户和用户组</span></span>
<span class="line">user www www<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#nginx 进程数，建议设置为等于 CPU 总核心数。</span></span>
<span class="line">worker_processes <span class="token number">8</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]</span></span>
<span class="line">error_log /usr/local/nginx/logs/error.log info<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#进程 pid 文件</span></span>
<span class="line">pid /usr/local/nginx/logs/nginx.pid<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#指定进程可以打开的最大描述符：数目 #工作模式与连接数上限 #这个指令是指当一个 nginx 进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与 nginx 进程数相除，但是 nginx 分配请求并不是那么均匀，所以最好与 ulimit -n 的值保持一致。 #现在在 linux 2.6 内核下开启文件打开数为 65535，worker_rlimit_nofile 就相应应该填写 65535。 #这是因为 nginx 调度时分配请求到进程并不是那么的均衡，所以假如填写 10240，总并发量达到 3-4 万时就有进程可能超过 10240 了，这时会返回 502 错误。</span></span>
<span class="line">worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">events</span>
<span class="line"><span class="token punctuation">{</span> <span class="token comment">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll 模型 #是 Linux 2.6 以上版本内核中的高性能网络 I/O 模型，linux 建议 epoll，如果跑在 FreeBSD 上面，就用 kqueue 模型。 #补充说明： #与 apache 相类，nginx 针对不同的操作系统，有不同的事件模型</span></span>
<span class="line"><span class="token comment">#A）标准事件模型</span></span>
<span class="line"><span class="token comment">#Select、poll 属于标准事件模型，如果当前系统不存在更有效的方法，nginx 会选择 select 或 poll</span></span>
<span class="line"><span class="token comment">#B）高效事件模型</span></span>
<span class="line"><span class="token comment">#Kqueue：使用于 FreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 和 MacOS X.使用双处理器的 MacOS X 系统使用 kqueue 可能会造成内核崩溃。</span></span>
<span class="line"><span class="token comment">#Epoll：使用于 Linux 内核 2.6 版本及以后的系统。</span></span>
<span class="line"><span class="token comment">#/dev/poll：使用于 Solaris 7 11/99+，HP/UX 11.22+ (eventport)，IRIX 6.5.15+ 和 Tru64 UNIX 5.1A+。</span></span>
<span class="line"><span class="token comment">#Eventport：使用于 Solaris 10。 为了防止出现内核崩溃的问题， 有必要安装安全补丁。</span></span>
<span class="line">use epoll<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#单个进程最大连接数（最大连接数=连接数*进程数）</span></span>
<span class="line">    <span class="token comment">#根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。</span></span>
<span class="line">    worker_connections <span class="token number">65535</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#keepalive超时时间。</span></span>
<span class="line">    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。</span></span>
<span class="line">    <span class="token comment">#分页大小可以用命令getconf PAGESIZE 取得。</span></span>
<span class="line">    <span class="token comment">#[root@web001 ~]# getconf PAGESIZE</span></span>
<span class="line">    <span class="token comment">#4096</span></span>
<span class="line">    <span class="token comment">#但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。</span></span>
<span class="line">    client_header_buffer_size 4k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。</span></span>
<span class="line">    open_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">65535</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60s<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#这个是指多长时间检查一次缓存的有效信息。</span></span>
<span class="line">    <span class="token comment">#语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.</span></span>
<span class="line">    open_file_cache_valid 80s<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。</span></span>
<span class="line">    <span class="token comment">#语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.</span></span>
<span class="line">    open_file_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件时记录cache错误.</span></span>
<span class="line">    open_file_cache_errors on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#设定 http 服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line">http</span>
<span class="line"><span class="token punctuation">{</span> <span class="token comment">#文件扩展名与文件类型映射表</span></span>
<span class="line">include mime.types<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#默认文件类型</span></span>
<span class="line">    default_type application/octet-stream<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#默认编码</span></span>
<span class="line">    <span class="token comment">#charset utf-8;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#服务器名字的hash表大小</span></span>
<span class="line">    <span class="token comment">#保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.</span></span>
<span class="line">    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。</span></span>
<span class="line">    client_header_buffer_size 32k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。</span></span>
<span class="line">    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#设定通过nginx上传文件的大小</span></span>
<span class="line">    client_max_body_size 8m<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span></span>
<span class="line">    <span class="token comment">#sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span></span>
<span class="line">    sendfile on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#开启目录列表访问，合适下载服务器，默认关闭。</span></span>
<span class="line">    autoindex on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用</span></span>
<span class="line">    tcp_nopush on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    tcp_nodelay on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#长连接超时时间，单位是秒</span></span>
<span class="line">    keepalive_timeout <span class="token number">120</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span></span>
<span class="line">    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">    fastcgi_buffer_size 64k<span class="token punctuation">;</span></span>
<span class="line">    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span></span>
<span class="line">    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span></span>
<span class="line">    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#gzip模块设置</span></span>
<span class="line">    <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#开启gzip压缩输出</span></span>
<span class="line">    gzip_min_length 1k<span class="token punctuation">;</span>    <span class="token comment">#最小压缩文件大小</span></span>
<span class="line">    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>    <span class="token comment">#压缩缓冲区</span></span>
<span class="line">    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>    <span class="token comment">#压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</span></span>
<span class="line">    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>    <span class="token comment">#压缩等级</span></span>
<span class="line">    gzip_types text/plain application/x-javascript text/css application/xml<span class="token punctuation">;</span>    <span class="token comment">#压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</span></span>
<span class="line">    gzip_vary on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#开启限制IP连接数的时候需要使用</span></span>
<span class="line">    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#负载均衡配置</span></span>
<span class="line">    upstream jh.w3cschool.cn <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line">        server <span class="token number">192.168</span>.80.121:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">        server <span class="token number">192.168</span>.80.122:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        server <span class="token number">192.168</span>.80.123:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#nginx的upstream目前支持4种方式的分配</span></span>
<span class="line">        <span class="token comment">#1、轮询（默认）</span></span>
<span class="line">        <span class="token comment">#每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</span></span>
<span class="line">        <span class="token comment">#2、weight</span></span>
<span class="line">        <span class="token comment">#指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</span></span>
<span class="line">        <span class="token comment">#例如：</span></span>
<span class="line">        <span class="token comment">#upstream bakend {</span></span>
<span class="line">        <span class="token comment">#    server 192.168.0.14 weight=10;</span></span>
<span class="line">        <span class="token comment">#    server 192.168.0.15 weight=10;</span></span>
<span class="line">        <span class="token comment">#}</span></span>
<span class="line">        <span class="token comment">#2、ip_hash</span></span>
<span class="line">        <span class="token comment">#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</span></span>
<span class="line">        <span class="token comment">#例如：</span></span>
<span class="line">        <span class="token comment">#upstream bakend {</span></span>
<span class="line">        <span class="token comment">#    ip_hash;</span></span>
<span class="line">        <span class="token comment">#    server 192.168.0.14:88;</span></span>
<span class="line">        <span class="token comment">#    server 192.168.0.15:80;</span></span>
<span class="line">        <span class="token comment">#}</span></span>
<span class="line">        <span class="token comment">#3、fair（第三方）</span></span>
<span class="line">        <span class="token comment">#按后端服务器的响应时间来分配请求，响应时间短的优先分配。</span></span>
<span class="line">        <span class="token comment">#upstream backend {</span></span>
<span class="line">        <span class="token comment">#    server server1;</span></span>
<span class="line">        <span class="token comment">#    server server2;</span></span>
<span class="line">        <span class="token comment">#    fair;</span></span>
<span class="line">        <span class="token comment">#}</span></span>
<span class="line">        <span class="token comment">#4、url_hash（第三方）</span></span>
<span class="line">        <span class="token comment">#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</span></span>
<span class="line">        <span class="token comment">#例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</span></span>
<span class="line">        <span class="token comment">#upstream backend {</span></span>
<span class="line">        <span class="token comment">#    server squid1:3128;</span></span>
<span class="line">        <span class="token comment">#    server squid2:3128;</span></span>
<span class="line">        <span class="token comment">#    hash $request_uri;</span></span>
<span class="line">        <span class="token comment">#    hash_method crc32;</span></span>
<span class="line">        <span class="token comment">#}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#tips:</span></span>
<span class="line">        <span class="token comment">#upstream bakend{#定义负载均衡设备的Ip及设备状态}{</span></span>
<span class="line">        <span class="token comment">#    ip_hash;</span></span>
<span class="line">        <span class="token comment">#    server 127.0.0.1:9090 down;</span></span>
<span class="line">        <span class="token comment">#    server 127.0.0.1:8080 weight=2;</span></span>
<span class="line">        <span class="token comment">#    server 127.0.0.1:6060;</span></span>
<span class="line">        <span class="token comment">#    server 127.0.0.1:7070 backup;</span></span>
<span class="line">        <span class="token comment">#}</span></span>
<span class="line">        <span class="token comment">#在需要使用负载均衡的server中增加 proxy_pass http://bakend/;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#每个设备的状态设置为:</span></span>
<span class="line">        <span class="token comment">#1.down表示单前的server暂时不参与负载</span></span>
<span class="line">        <span class="token comment">#2.weight为weight越大，负载的权重就越大。</span></span>
<span class="line">        <span class="token comment">#3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误</span></span>
<span class="line">        <span class="token comment">#4.fail_timeout:max_fails次失败后，暂停的时间。</span></span>
<span class="line">        <span class="token comment">#5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#nginx支持同时设置多组的负载均衡，用来给不用的server来使用。</span></span>
<span class="line">        <span class="token comment">#client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug</span></span>
<span class="line">        <span class="token comment">#client_body_temp_path设置记录文件的目录 可以设置最多3层目录</span></span>
<span class="line">        <span class="token comment">#location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#虚拟主机的配置</span></span>
<span class="line">    server</span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">#监听端口</span></span>
<span class="line">        listen <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#域名可以有多个，用空格隔开</span></span>
<span class="line">        server_name www.w3cschool.cn w3cschool.cn<span class="token punctuation">;</span></span>
<span class="line">        index index.html index.htm index.php<span class="token punctuation">;</span></span>
<span class="line">        root /data/www/w3cschool<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#对******进行负载均衡</span></span>
<span class="line">        location ~ .*.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token punctuation">)</span>?$</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            fastcgi_pass <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span></span>
<span class="line">            fastcgi_index index.php<span class="token punctuation">;</span></span>
<span class="line">            include fastcgi.conf<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#图片缓存时间设置</span></span>
<span class="line">        location ~ .*.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            expires 10d<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#JS和CSS缓存时间设置</span></span>
<span class="line">        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            expires 1h<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#日志格式设定</span></span>
<span class="line">        <span class="token comment">#$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；</span></span>
<span class="line">        <span class="token comment">#$remote_user：用来记录客户端用户名称；</span></span>
<span class="line">        <span class="token comment">#$time_local： 用来记录访问时间与时区；</span></span>
<span class="line">        <span class="token comment">#$request： 用来记录请求的url与http协议；</span></span>
<span class="line">        <span class="token comment">#$status： 用来记录请求状态；成功是200，</span></span>
<span class="line">        <span class="token comment">#$body_bytes_sent ：记录发送给客户端文件主体内容大小；</span></span>
<span class="line">        <span class="token comment">#$http_referer：用来记录从那个页面链接访问过来的；</span></span>
<span class="line">        <span class="token comment">#$http_user_agent：记录客户浏览器的相关信息；</span></span>
<span class="line">        <span class="token comment">#通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。</span></span>
<span class="line">        log_format access <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line">        <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line">        <span class="token string">&#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#定义本虚拟主机的访问日志</span></span>
<span class="line">        access_log  /usr/local/nginx/logs/host.access.log  main<span class="token punctuation">;</span></span>
<span class="line">        access_log  /usr/local/nginx/logs/host.access.404.log  log404<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#对 &quot;/&quot; 启用反向代理</span></span>
<span class="line">        location / <span class="token punctuation">{</span></span>
<span class="line">            proxy_pass http://127.0.0.1:88<span class="token punctuation">;</span></span>
<span class="line">            proxy_redirect off<span class="token punctuation">;</span></span>
<span class="line">            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span></span>
<span class="line">            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#以下是一些反向代理的配置，可选。</span></span>
<span class="line">            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#允许客户端请求的最大单文件字节数</span></span>
<span class="line">            client_max_body_size 10m<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数，</span></span>
<span class="line">            <span class="token comment">#如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。</span></span>
<span class="line">            <span class="token comment">#无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误</span></span>
<span class="line">            client_body_buffer_size 128k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#表示使nginx阻止HTTP应答代码为400或者更高的应答。</span></span>
<span class="line">            proxy_intercept_errors on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#后端服务器连接的超时时间_发起握手等候响应超时时间</span></span>
<span class="line">            <span class="token comment">#nginx跟后端服务器连接超时时间(代理连接超时)</span></span>
<span class="line">            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#后端服务器数据回传时间(代理发送超时)</span></span>
<span class="line">            <span class="token comment">#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span></span>
<span class="line">            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#连接成功后，后端服务器响应时间(代理接收超时)</span></span>
<span class="line">            <span class="token comment">#连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span></span>
<span class="line">            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span></span>
<span class="line">            <span class="token comment">#设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小</span></span>
<span class="line">            proxy_buffer_size 4k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#proxy_buffers缓冲区，网页平均在32k以下的设置</span></span>
<span class="line">            <span class="token comment">#设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k</span></span>
<span class="line">            proxy_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span></span>
<span class="line">            proxy_busy_buffers_size 64k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">#设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长</span></span>
<span class="line">            <span class="token comment">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span></span>
<span class="line">            proxy_temp_file_write_size 64k<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#设定查看Nginx状态的地址</span></span>
<span class="line">        location /NginxStatus <span class="token punctuation">{</span></span>
<span class="line">            stub_status on<span class="token punctuation">;</span></span>
<span class="line">            access_log on<span class="token punctuation">;</span></span>
<span class="line">            auth_basic <span class="token string">&quot;NginxStatus&quot;</span><span class="token punctuation">;</span></span>
<span class="line">            auth_basic_user_file confpasswd<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">#htpasswd文件的内容可以用apache提供的htpasswd工具来产生。</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#本地动静分离反向代理配置</span></span>
<span class="line">        <span class="token comment">#所有jsp的页面均交由tomcat或resin处理</span></span>
<span class="line">        location ~ .<span class="token punctuation">(</span>jsp<span class="token operator">|</span>jspx<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>?$ <span class="token punctuation">{</span></span>
<span class="line">            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span></span>
<span class="line">            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span></span>
<span class="line">            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span></span>
<span class="line">            proxy_pass http://127.0.0.1:8080<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">#所有静态文件由nginx直接读取不经过tomcat或resin</span></span>
<span class="line">        location ~ .*.<span class="token punctuation">(</span>htm<span class="token operator">|</span>html<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>ioc<span class="token operator">|</span><span class="token function">rar</span><span class="token operator">|</span><span class="token function">zip</span><span class="token operator">|</span>txt<span class="token operator">|</span>flv<span class="token operator">|</span>mid<span class="token operator">|</span>doc<span class="token operator">|</span>ppt<span class="token operator">|</span></span>
<span class="line">        pdf<span class="token operator">|</span>xls<span class="token operator">|</span>mp3<span class="token operator">|</span>wma<span class="token punctuation">)</span>$</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            expires 15d<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            expires 1h<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">######Nginx 配置文件 nginx.conf 中文详解#####</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">搬运</p><p>作者：程序员自由之路<br> 出处：<a href="https://www.cnblogs.com/54chensongxia/p/12938929.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/54chensongxia/p/12938929.html</a></p></div>`,65),p=[i];function c(t,o){return a(),s("div",null,p)}const d=n(l,[["render",c],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/nginx/","title":"Nginx 配置文件详解","lang":"en-US","frontmatter":{"sidebar":"auto"},"headers":[{"level":2,"title":"文件结构","slug":"文件结构","link":"#文件结构","children":[]},{"level":2,"title":"全局块","slug":"全局块","link":"#全局块","children":[]},{"level":2,"title":"events 块","slug":"events-块","link":"#events-块","children":[]},{"level":2,"title":"http 块","slug":"http-块","link":"#http-块","children":[]},{"level":2,"title":"server 块","slug":"server-块","link":"#server-块","children":[{"level":3,"title":"listen 指令","slug":"listen-指令","link":"#listen-指令","children":[]},{"level":3,"title":"server_name","slug":"server-name","link":"#server-name","children":[]},{"level":3,"title":"location 块","slug":"location-块","link":"#location-块","children":[]},{"level":3,"title":"root 指令","slug":"root-指令","link":"#root-指令","children":[]}]}],"git":{"updatedTime":1718211588000,"contributors":[{"name":"张殃离","email":"96040653+ZhangYangLizzm@users.noreply.github.com","commits":1}]},"filePathRelative":"nginx/README.md"}');export{d as comp,u as data};
