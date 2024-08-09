<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1>
<h2 id="获取-git-仓库" tabindex="-1"><a class="header-anchor" href="#获取-git-仓库"><span>获取 Git 仓库</span></a></h2>
<h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init"><span>git init</span></a></h3>
<p>将创建一个名为 .git 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。</p>
<h3 id="git-clone-仓库地址" tabindex="-1"><a class="header-anchor" href="#git-clone-仓库地址"><span>git clone [仓库地址]</span></a></h3>
<p>获得一份已经存在了的 Git 仓库的拷贝.</p>
<h2 id="记录更新到仓库" tabindex="-1"><a class="header-anchor" href="#记录更新到仓库"><span>记录更新到仓库</span></a></h2>
<h3 id="检查当前文件状态" tabindex="-1"><a class="header-anchor" href="#检查当前文件状态"><span>检查当前文件状态</span></a></h3>
<p>用 git status 命令查看哪些文件处于什么状态</p>
<h3 id="跟踪新文件" tabindex="-1"><a class="header-anchor" href="#跟踪新文件"><span>跟踪新文件</span></a></h3>
<h3 id="暂存已修改的文件" tabindex="-1"><a class="header-anchor" href="#暂存已修改的文件"><span>暂存已修改的文件</span></a></h3>
<p>(git add [files])跟踪新添加的文件或者当已跟踪的文件发生修改时将其修改暂存。</p>
<h3 id="状态简览" tabindex="-1"><a class="header-anchor" href="#状态简览"><span>状态简览</span></a></h3>
<p>git status 命令的输出十分详细，使用（git status -s/-short）可以帮你缩短状态命令的输出，这样可以以简洁的方式查看更改。</p>
<h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件"><span>忽略文件</span></a></h3>
<p>本地目录下有些文件无需纳入 git 管理，通常是一些 log 日志文件，临时文件。git 管理下的文件夹通常会有.gitignore 文件，里面的内容写入了我们不希望纳入 git 管理的文件名称/路径。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在最简单的情况下，一个仓库可能只根目录下有一个.gitignore 文件，<br>
它递归地应用到整个仓库中。然而，子目录下也可以有额外的.gitignore 文件。</p>
</div>
<h3 id="查看已暂存和未暂存的修改" tabindex="-1"><a class="header-anchor" href="#查看已暂存和未暂存的修改"><span>查看已暂存和未暂存的修改</span></a></h3>
<p>使用 git diff 查看尚未暂存的文件更新了哪些部分。此命令比较的是工作目录中当前文件和暂存区域快照之间的差异。<br>
若要查看已暂存的将要添加到下次提交里的内容，可以用 git diff --staged/--cached 命令。这条命令将比对已暂存文件与最后一次提交的文件差异。<br>
另外可以使用 git diff HEAD 显示工作目录(已 track 但未 add 文件)和暂存区(已 add 但未 commit 文件)与最后一次 commit 之间的的所有不相同文件的增删改。</p>
<h3 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新"><span>提交更新</span></a></h3>
<p>git commit 将已经放入暂存区的文件提交提交至本地仓库。记住，提交时记录的是放在暂存区域的快照。任何还未暂存文件的仍然保持已修改状态，可以在下次提交时纳入版本管理。</p>
<h3 id="跳过使用暂存区域" tabindex="-1"><a class="header-anchor" href="#跳过使用暂存区域"><span>跳过使用暂存区域</span></a></h3>
<p>git commit -a，会自动把所有已追踪过的文件暂存下来一并提交，从而跳过 git add 步骤。</p>
<h3 id="移除文件" tabindex="-1"><a class="header-anchor" href="#移除文件"><span>移除文件</span></a></h3>
<p>要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除（确切地说，是从暂存区域移除），然后提交。 可以用 git rm 命令完成此项工作，并连带从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。如果简单的从工作目录中手工删除文件，使用 git status 命令仍会出现。此时使用 git rm 记录此次移除文件的操作，就会不再纳入版本管理。
或者你需要把文件从 git 中删除但仍保留在本地仓库中,换而言之就是你不想要 git 继续追踪该文件。使用 git rm --cached [files]</p>
<h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件"><span>移动文件</span></a></h3>
<p>运行 git mv 就相当于运行了下面三条命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">mv</span> README.md README</span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> README.md</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> README</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史"><span>查看提交历史</span></a></h3>
<p><strong>git log</strong> 不传入任何参数的默认情况下，git log 会按时间先后顺序列出所有的提交，最近的更新排在最上面。</p>
<ol>
<li>
<p>-p/--patch<br>
显示每次提交所引入的差异（按补丁的格式输出）。</p>
</li>
<li>
<p>--stat<br>
想看到每次提交的简略统计信息，可以使用 --stat 选项：</p>
</li>
<li>
<p>--pretty
有许多内置的子选项，如 git log --pretty=online/short/full/fuller，它们展示信息的格式一致，但是详尽程度不一。<br>
format 子选项可以定制记录的显示格式。</p>
</li>
</ol>
<ul>
<li>限制输出长度<br>
<img src="@source/Git/git限制输出长度.png" alt="图片"></li>
</ul>
</div></template>


