"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[541],{48998:function(e,t,i){i.d(t,{Z:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("a-table",e._g(e._b({attrs:{columns:e.tableColumns,"data-source":e.renderData},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(i){return[e._t(t,null,null,"object"===typeof i?i:{text:i})]}}}))],null,!0)},"a-table",e.$attrs,!1),e.$listeners))},n=[],l=(i(21703),i(10936)),o=i.n(l);function r(e){const t=window.getComputedStyle(e,null),i=["auto","scroll"];return i.includes(t.overflow)||i.includes(t["overflow-y"])}function a(e){let t=e;while(t){if([window,document,document.documentElement].includes(t))return window;if(r(t))return t;t=t.parentNode}return t||window}function c(e){return e===window?window.pageYOffset:e.scrollTop}function h(e){return e===window?window.innerHeight:e.offsetHeight}var d={inheritAttrs:!1,name:"a-virtual-table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},keyProp:{type:String,default:"id"},itemSize:{type:Number,default:60},buffer:{type:Number,default:50},throttleTime:{type:Number,default:10},dynamic:{type:Boolean,default:!0}},data(){return{sizes:{},renderData:[],isCheckedAll:!1,isCheckedImn:!1}},computed:{tableColumns(){const e=this.$createElement;return this.columns.map((t=>"selection"===t.type?{title:()=>e("a-checkbox",{attrs:{checked:this.isCheckedAll,indeterminate:this.isCheckedImn},on:{change:()=>this.onCheckAllRows(!this.isCheckedAll)}}),customRender:(t,i)=>e("a-checkbox",{attrs:{checked:i.$v_checked},on:{change:()=>this.onCheckRow(i,!i.$v_checked)}}),width:60,...t}:t.index?{customRender:(e,i,s)=>{const n=this.start+s;return"function"===typeof t.index?t.index(n):n+1},...t}:t))},offsetMap({keyProp:e,itemSize:t,sizes:i,dataSource:s}){if(!this.dynamic)return{};const n={};let l=0;for(let o=0;o<s.length;o++){const r=s[o][e];n[r]=l;const a=i[r],c="number"===typeof a?a:t;l+=c}return n}},methods:{initData(){this.scroller=this.getScroller(),this.handleScroll(),this.$nextTick((()=>{this.handleScroll()})),this.onScroll=o()(this.handleScroll,this.throttleTime),this.scroller.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onScroll)},getScroller(){let e;if(this.scrollBox){if(e=document.querySelector(this.scrollBox),!e)throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`);return r(e)||console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`),e}return this.$attrs.scroll&&this.$attrs.scroll.y?this.$el.querySelector(".ant-table-body"):a(this.$el)},handleScroll(){this.updateSizes(),this.calcRenderData(),this.calcPosition()},updateSizes(){if(!this.dynamic)return;const e=this.$el.querySelectorAll(".ant-table-body .ant-table-tbody .ant-table-row");Array.from(e).forEach(((e,t)=>{const i=this.renderData[t];if(!i)return;let s=e.offsetHeight;const n=i[this.keyProp];this.sizes[n]!==s&&this.$set(this.sizes,n,s)}))},calcRenderData(){const{scroller:e,buffer:t,dataSource:i}=this,s=c(e)-t,n=c(e)+h(e)+t;let l,o;if(this.dynamic){let e=0,t=i.length-1,r=0;while(e<=t){r=Math.floor((e+t)/2);const i=this.getItemOffsetTop(r);if(i<s){const t=this.getItemOffsetTop(r+1);if(t>s)break;e=r+1}else t=r-1}l=r,o=i.length-1;for(let s=l+1;s<i.length;s++){const e=this.getItemOffsetTop(s);if(e>=n){o=s;break}}}else l=s<=0?0:Math.floor(s/this.itemSize),o=n<=0?0:Math.ceil(n/this.itemSize);l%2&&(l-=1),this.top=s,this.bottom=n,this.start=l,this.end=o,this.renderData=i.slice(l,o+1),this.$emit("change",this.renderData,this.start,this.end)},calcPosition(){const e=this.dataSource.length-1,t=this.getItemOffsetTop(e)+this.getItemSize(e),i=this.getItemOffsetTop(this.start),s=[".ant-table-scroll .ant-table-body",".ant-table-fixed-left .ant-table-body-inner",".ant-table-fixed-right .ant-table-body-inner"];s.forEach((e=>{const s=this.$el.querySelector(e);if(s){if(!s.wrapEl){const e=document.createElement("div"),t=document.createElement("div");e.style.display="inline-block",t.style.display="inline-block",e.appendChild(t),t.appendChild(s.children[0]),s.insertBefore(e,s.firstChild),s.wrapEl=e,s.innerEl=t}s.wrapEl&&(s.wrapEl.style.height=t+"px",s.innerEl.style.transform=`translateY(${i}px)`)}}))},getItemOffsetTop(e){if(!this.dynamic)return this.itemSize*e;const t=this.dataSource[e];return t&&this.offsetMap[t[this.keyProp]]||0},getItemSize(e){if(e<=-1)return 0;const t=this.dataSource[e];if(t){const e=t[this.keyProp];return this.sizes[e]||this.itemSize}return this.itemSize},update(){this.handleScroll()},clearSelection(){this.dataSource.forEach((e=>this.$set(e,"$v_checked",!1))),this.isCheckedAll=!1,this.isCheckedImn=!1,this.emitSelectionChange()},toggleRowSelection(e,t){const i="boolean"===typeof t?t:!e.$v_checked;this.onCheckRow(e,i)},emitSelectionChange(){const e=this.dataSource.filter((e=>e.$v_checked));this.$emit("selection-change",e)},onCheckAllRows(e){e=!!this.isCheckedImn||e,this.dataSource.forEach((t=>this.$set(t,"$v_checked",e))),this.isCheckedAll=e,this.isCheckedImn=!1,this.emitSelectionChange()},onCheckRow(e,t){this.$set(e,"$v_checked",t);const i=this.dataSource.filter((e=>!0===e.$v_checked)).length;0===i?(this.isCheckedAll=!1,this.isCheckedImn=!1):i===this.dataSource.length?(this.isCheckedAll=!0,this.isCheckedImn=!1):(this.isCheckedAll=!1,this.isCheckedImn=!0),this.emitSelectionChange()}},created(){this.$nextTick((()=>{this.initData()}))},beforeDestroy(){this.scroller&&(this.scroller.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onScroll))}},u=d,f=i(1001),m=(0,f.Z)(u,s,n,!1,null,"de25045e",null),p=m.exports},59100:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",[t("a-virtual-table",{attrs:{columns:e.columns,"data-source":e.list,itemSize:54,dynamic:!1,keyProp:"id","row-key":"id",pagination:!1,scroll:{x:1300,y:800}},scopedSlots:e._u([{key:"name",fn:function({text:i}){return t("a",{},[e._v(e._s(i)+"===")])}}])})],1)},n=[],l=i(79879),o=i(48998),r={components:{AVirtualTable:o.Z},data(){return{selectedRowKeys:[],columns:[{title:"Name",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"},fixed:"left",width:200},{title:"id",dataIndex:"id",key:"id",width:100},{title:"text",dataIndex:"text",key:"text",ellipsis:!0,width:400},{title:"Address",dataIndex:"address",key:"address 1",ellipsis:!0,width:400},{title:"Long Column Long Column Long Column",dataIndex:"address",key:"address 2",ellipsis:!0,width:300},{title:"Long Column Long Column",dataIndex:"address",key:"address 3",ellipsis:!0,width:300},{title:"Long Column",dataIndex:"address",key:"address 4",ellipsis:!0,width:300,fixed:"right"}],list:(0,l.c)(0,2e3)}},methods:{}},a=r,c=i(1001),h=(0,c.Z)(a,s,n,!1,null,"f53fb366",null),d=h.exports},79879:function(e,t,i){function s(e,t){const i=[];for(let s=0;s<t;s++){const t=l(),o=l();i.push({id:e++,index:s,text:t,text2:o,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3)})}return i}function n(e,t){return Math.floor(Math.random()*(t-e))+e}function l(){const e=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],t=Math.floor(10*Math.random());return e[t]}i.d(t,{c:function(){return s}})}}]);
//# sourceMappingURL=541.9af12d16.js.map