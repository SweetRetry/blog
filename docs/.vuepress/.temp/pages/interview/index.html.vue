<template><div><h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题"><span>面试题</span></a></h1>
<h2 id="js-基础" tabindex="-1"><a class="header-anchor" href="#js-基础"><span>js 基础</span></a></h2>
<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h3>
<p>Q：什么是闭包?闭包的作用?</p>
<p>E:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1</span></span>
<span class="line"><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：2</span></span>
<span class="line"><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A：闭包指的是函数和函数所在的词法环境的组合。一个函数可以访问创建它时所在的词法环境中的变量和函数，即使这个函数在其他地方被调用，也可以访问这些变量和函数。闭包可以用来实现模块化、缓存变量等功能。<br>
<strong>详细解释:</strong>
在JavaScript中，函数在创建时会生成一个词法环境（Lexical Environment），这个词法环境记录了函数创建时所在的作用域链。作用域链是由当前执行上下文的变量对象和所有外层函数的变量对象组成的。在函数执行时，会先搜索当前作用域链中的变量对象，如果没有找到，就会继续向上搜索外层函数的变量对象，直到找到变量或者到达全局作用域。这个搜2索的过程叫做作用域链查找。</p>
<p>当函数返回时，它的词法环境会被保存在内存中，并被引用到它所在的作用域链中。这个引用关系就是闭包。返回的函数可以访问保存在内存中的词法环境中的变量和函数，即使这个函数在其他地方被调用，也可以访问这些变量和函数。在上面的计数器例子中，createCounter函数返回了一个函数，这个函数就是闭包，它可以访问createCounter函数中的count变量。每次调用返回的函数，都会访问到同一个闭包中的count变量，并且可以修改它的值。</p>
<h3 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链"><span>原型和原型链</span></a></h3>
<p>Q：什么是原型和原型链?</p>
<p>A:当你创建一个对象时，JavaScript会在背后帮你创建一个原型对象，每个对象都有一个原型对象。原型对象就是一个普通的对象，它包含了一些属性和方法。你可以通过对象的__proto__属性访问它的原型对象。<br>
原型对象也可以有自己的原型对象，这样就形成了原型链。当你在一个对象上访问一个属性或方法时，JavaScript会先在这个对象本身查找，如果找不到，就会去它的原型对象上查找，如果还找不到，就会继续沿着原型链往上查找，直到找到这个属性或方法，或者到达原型链的顶端，即Object.prototype。</p>
<p><strong>显式原型和隐式原型</strong>
在JavaScript中，每个函数都有一个属性叫做prototype，它是一个对象。这个prototype对象就是函数的显式原型，它包含了一些属性和方法，可以被用来实现继承。</p>
<p>当你创建一个对象时，JavaScript会为它创建一个__proto__属性，指向创建这个对象的构造函数的prototype。这个__proto__属性就是对象的隐式原型，它指向对象的原型对象。</p>
<h3 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制"><span>垃圾回收机制</span></a></h3>
<p>JavaScript是一种高级语言，它使用了自动内存管理机制，即垃圾回收机制，来管理内存。垃圾回收机制的主要目的是自动寻找和释放不再使用的对象，以便释放内存空间。</p>
<p>在JavaScript中，垃圾回收器会定期扫描内存中的所有对象，找出哪些对象是不再被引用的，然后释放它们所占用的内存空间。具体来说，当一个对象不再被引用时，它就会被标记为可回收的垃圾对象。接着，垃圾回收器会清除这些垃圾对象所占用的内存空间，以便其他对象可以使用这些空间。</p>
<p>JavaScript中的垃圾回收器使用的是基于标记的垃圾回收算法，它会从一组根对象开始，递归地遍历所有从根对象出发能访问到的对象。如果一个对象没有被遍历到，则被视为不可达对象，可以被标记为垃圾对象。</p>
<h3 id="for-of和for-in" tabindex="-1"><a class="header-anchor" href="#for-of和for-in"><span>for of和for in</span></a></h3>
<p>for...of和for...in是两个用于遍历数据结构的JavaScript循环语句，它们之间有一些重要的区别。</p>
<p>for...of循环是ES6引入的一种遍历迭代器对象（包括数组、字符串、Set、Map等可迭代对象）的语法。它会迭代对象的可迭代属性值，并且在每次迭代中将值分配给一个变量。下面是for...of的示例用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for...in循环是用于遍历对象的语法。它会迭代对象的可枚举属性，并在每次迭代中将属性名分配给一个变量。下面是for...in的示例用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> property <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>property <span class="token operator">+</span> <span class="token string">': '</span> <span class="token operator">+</span> object<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果用for in 遍历数组给出的会是index，而不是值</p>
</div>
<h3 id="import原理" tabindex="-1"><a class="header-anchor" href="#import原理"><span>import原理</span></a></h3>
<p>在底层上，当使用 import 导入模块时，实际上并不是直接导入一个指向该值的地址。ES6 模块的导入机制是基于静态解析的，它在编译阶段就确定了导入和导出的关系，而不是在运行时动态解析。<br>
在编译过程中，JavaScript 引擎会先解析模块的依赖关系和导出声明，然后将模块的依赖和导出关系建立起来。当遇到 import 语句时，引擎会根据模块的路径查找和加载对应的模块文件。一旦加载完成，引擎会将导出的值作为模块的属性存储在内存中。<br>
当执行到 import 语句时，引擎会根据模块的导出关系，将对应的导出值赋给导入的变量。这个赋值操作是根据导出的值进行实际的复制，而不是简单地指向同一个地址。<br>
这种静态解析和复制的机制带来了一些优势：可以在编译阶段进行优化，提前确定模块的依赖和导出关系，减少运行时的解析工作。<br>
导入的值是不可变的，即使导出模块中的值发生变化，导入的值也不会受到影响。<br>
导入的值是静态的，可以通过静态分析工具进行分析和优化。<br>
综上所述，当使用 import 导入模块时，在底层上并不是简单地导入一个指向该值的地址。ES6 模块的导入机制是基于静态解析和复制的，将导出的值作为模块的属性存储在内存中，并根据导出关系将对应的值复制给导入的变量。</p>
<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h2>
<h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫"><span>路由守卫</span></a></h3>
<p>Vue Router 提供了全局前置守卫（beforeEach）、全局解析守卫（beforeResolve）、全局后置钩子（afterEach）以及路由独享的守卫（beforeEnter、beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave）。</p>
<p>守卫作用：</p>
<ul>
<li>beforeEach：在每个路由跳转前触发，可用于进行全局的导航守卫逻辑，如身份验证、权限判断等。</li>
<li>beforeResolve：在每个路由组件解析之前触发，常用于处理异步路由组件的加载逻辑。</li>
<li>afterEach：在每个路由跳转完成后触发，常用于进行日志记录、页面统计等操作。</li>
<li>beforeEnter：在路由独享的守卫中使用，可用于单个路由的导航守卫逻辑。</li>
<li>beforeRouteEnter：在进入路由前触发，用于处理进入路由前的异步逻辑，但此时无法访问组件实例。</li>
<li>beforeRouteUpdate：在路由参数发生变化时触发，用于处理路由参数变化后的逻辑。</li>
<li>beforeRouteLeave：在离开路由前触发，用于处理离开路由前的确认、保存等操作。</li>
</ul>
<h3 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理"><span>底层原理</span></a></h3>
<h4 id="什么是-vue-的虚拟-dom-它是如何工作的" tabindex="-1"><a class="header-anchor" href="#什么是-vue-的虚拟-dom-它是如何工作的"><span>什么是 Vue 的虚拟 DOM？它是如何工作的？</span></a></h4>
<p>Vue 的虚拟 DOM 是一种轻量级的 JavaScript 对象树，用于描述真实 DOM 的结构和属性。<br>
当 Vue 应用更新时，Vue 会通过比较新旧虚拟 DOM，找出差异（变更的部分），然后只更新差异部分的真实 DOM，从而提高性能。<br>
虚拟 DOM 的工作原理如下：
Vue 会根据模板或渲染函数生成虚拟 DOM。<br>
当数据发生变化时，Vue 会重新计算虚拟 DOM，并与之前的虚拟 DOM 进行比较。<br>
Vue 会找出差异，即需要添加、删除或更新的节点。<br>
最后，Vue 将差异应用于真实 DOM，只更新需要变更的部分，从而减少 DOM 操作的次数，提高性能。</p>
<h4 id="vue-的响应式系统是如何工作的" tabindex="-1"><a class="header-anchor" href="#vue-的响应式系统是如何工作的"><span>Vue 的响应式系统是如何工作的？</span></a></h4>
<p>Vue 的响应式系统通过拦截对数据的访问和修改来实现数据的响应式更新。<br>
Vue 使用了 Object.defineProperty 或 Proxy（在 Vue 3 中）来实现数据拦截。<br>
当一个响应式数据被访问时，Vue 会将当前的组件实例添加到依赖追踪器中，建立响应式的关联。<br>
当数据发生变化时，Vue 会通知依赖追踪器，依赖追踪器会通知相关的组件进行重新渲染，以保持视图与数据的同步。</p>
<h4 id="vue-的依赖追踪是如何实现的" tabindex="-1"><a class="header-anchor" href="#vue-的依赖追踪是如何实现的"><span>Vue 的依赖追踪是如何实现的？</span></a></h4>
<p>Vue 的依赖追踪是通过 Watcher 和 Dep（依赖）来实现的。<br>
每个响应式数据都会有一个对应的 Dep 对象，用来存储依赖该数据的 Watcher。<br>
当一个响应式数据被访问时，会触发 getter 函数，将当前的 Watcher 添加到 Dep 中。<br>
当数据发生变化时，会触发 setter 函数，通知 Dep 中的所有 Watcher 进行更新。<br>
Watcher 是一个中介者，负责管理与依赖数据的关系，当依赖的数据发生变化时，Watcher 会通知相关的组件进行重新渲染。</p>
<h4 id="vue-是如何实现模板编译的" tabindex="-1"><a class="header-anchor" href="#vue-是如何实现模板编译的"><span>Vue 是如何实现模板编译的？</span></a></h4>
<p>Vue 的模板编译是将模板转换为渲染函数的过程。
首先，Vue 会将模板解析为抽象语法树（AST）。
然后，Vue 会根据 AST 生成渲染函数。
渲染函数可以直接被调用以生成虚拟 DOM，或者被编译为字符串形式的 JavaScript 代码，用于在运行时执行。
在编译过程中，Vue 还会进行优化，例如静态节点的提升和标记，以减少不必要的计算和生成的代码量。</p>
<h4 id="vue-的-diff-算法是什么-它是如何工作的" tabindex="-1"><a class="header-anchor" href="#vue-的-diff-算法是什么-它是如何工作的"><span>Vue 的 diff 算法是什么？它是如何工作的？</span></a></h4>
<p>Vue 的 diff 算法是用于比较两个虚拟 DOM 树的差异，并更新真实 DOM 的算法。<br>
Vue 的 diff 算法采用了双端比较的策略，即同时从虚拟 DOM 树的头部和尾部开始比较。<br>
生成虚拟 DOM 树：在每次数据更新时，Vue 会重新生成一棵完整的虚拟 DOM 树，该树与实际的 DOM 结构相对应。这个虚拟 DOM 树是一个 JavaScript 对象树，它保存了组件的层次结构和属性信息。  1
对比新旧虚拟 DOM 树：将新生成的虚拟 DOM 树与上一次更新的虚拟 DOM 树进行对比，找出差异。在对比过程中，Vue 使用了一种深度优先遍历的算法，逐个对比节点。<br>
同级比较：Vue 首先比较新旧虚拟 DOM 树的根节点。如果它们相同，则进一步比较它们的子节点。这样可以快速找到相同的节点，并避免不必要的遍历。<br>
Key 值比较：在对比子节点时，Vue 使用节点的 Key 值来判断它们的关系。如果两个节点的 Key 值相同，则 Vue 会认为它们是相同的节点，并进行更新操作。这样可以有效地复用已存在的 DOM 节点，减少 DOM 操作的次数。<br>
逐节点更新：在对比过程中，对于不同的节点，Vue 会根据具体情况进行不同的更新操作。如果一个节点不存在于旧的虚拟 DOM 树中，则创建该节点并将其添加到实际的 DOM 中。如果一个节点不存在于新的虚拟 DOM 树中，则将其从实际的 DOM 中移除。如果一个节点在新旧虚拟 DOM 树中都存在，但它们的属性或子节点发生了变化，则更新该节点的属性或子节点。<br>
只更新需要更新的节点：Vue 会将对比的结果记录下来，只对需要更新的节点进行实际的 DOM 操作。这样可以避免对没有变化的节点进行无谓的更新。
diff 算法还会尽可能地复用已有的节点，以减少 DOM 的操作次数和性能开销。</p>
<h3 id="vue3和vue2的差异" tabindex="-1"><a class="header-anchor" href="#vue3和vue2的差异"><span>Vue3和Vue2的差异</span></a></h3>
<p><strong>性能改进：</strong>
Vue 3 采用了更快、更小的虚拟 DOM 渲染器，提供了更高的性能和更低的内存占用。<br>
通过编译时的静态分析和优化，Vue 3 生成的代码比 Vue 2 更小，加载和运行速度更快。<br>
Vue 3 在响应式系统、编译器和组件实例化等方面进行了优化，提高了整体性能。</p>
<p><strong>更好的 TypeScript 支持：</strong>
Vue 3 在设计上更加友好地支持 TypeScript，并且 TypeScript 的类型定义也得到了改进和完善。<br>
Vue 3 使用了新的编写方式，使得开发者能够更好地利用 TypeScript 的类型检查和提示功能。</p>
<p><strong>Composition API：</strong>
Vue 3 引入了 Composition API，提供了一种更灵活、组合化的组件编写方式。
Composition API 允许开发者将相关的逻辑组织在一起，提高了代码的可读性、维护性和重用性。
Composition API 通过提供 setup() 函数，使得组件的逻辑可以以函数的形式进行组合，而不是依赖于选项对象的方式。</p>
<p><strong>更强大的响应式系统：</strong>
Vue 3 的响应式系统进行了重写，提供了更强大和灵活的响应式能力。
Vue 3 中的响应式系统使用了基于 Proxy 的代理方式，相比 Vue 2 的 Object.defineProperty，具有更好的性能和更全面的特性。
Vue 3 的响应式系统还支持了响应式的数组操作，如通过 ref() 和 reactive() 创建的数组可以直接使用数组方法进行修改。</p>
<h3 id="vue和react的差异" tabindex="-1"><a class="header-anchor" href="#vue和react的差异"><span>Vue和React的差异</span></a></h3>
<p><strong>模板语法 vs JSX：</strong><br>
Vue 使用基于 HTML 的模板语法，允许在模板中直接编写 HTML、CSS 和 JavaScript 代码，使得模板更易于理解和编写。<br>
React 使用 JSX，它是一种将 HTML 和 JavaScript 结合的语法扩展，使得组件的结构和逻辑更加紧密，提供了更强大的灵活性和可组合性。</p>
<p><strong>响应式系统的实现方式：</strong><br>
Vue 使用基于 Object.defineProperty 或 Proxy（在 Vue 3 中）的响应式系统，以便自动追踪数据的变化，并更新相关的视图。<br>
React 通过使用虚拟 DOM 和基于组件的状态管理，实现了高效的响应式更新。</p>
<p><strong>组件化开发的方式：</strong><br>
Vue 强调组件化开发，并提供了基于选项对象的组件定义方式，使得组件的结构和行为更清晰，易于维护和复用。<br>
React 也支持组件化开发，但它更倾向于函数式编程风格，并使用纯 JavaScript 函数来定义组件，通过 hooks 提供了更直观的状态管理和副作用处理。</p>
<p><strong>生命周期的管理：</strong><br>
Vue 使用生命周期钩子函数来管理组件的不同阶段的逻辑，如创建、更新和销毁等。<br>
React 使用生命周期方法和 useEffect 钩子来管理组件的生命周期，提供了更灵活的方式来处理副作用和订阅。</p>
</div></template>


