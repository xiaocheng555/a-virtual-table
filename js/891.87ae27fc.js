"use strict";(self["webpackChunka_virtual_table_demo"]=self["webpackChunka_virtual_table_demo"]||[]).push([[891],{30346:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("div",[e("a-virtual-table",{staticClass:"loadmore-table",class:t.loading?"table-hide-empty":"",attrs:{columns:t.columns,"data-source":t.list,itemSize:54,keyProp:"id","row-key":"id",virtualized:t.list.length>100,scroll:{x:1300,y:600}},on:{change:t.onVirtualChange},scopedSlots:t._u([{key:"name",fn:function({text:a}){return e("a",{},[t._v(t._s(a)+"===")])}}])},[e("InfiniteLoading",{ref:"loadmore",attrs:{slot:"append",forceUseInfiniteWrapper:".loadmore-table .ant-table-body"},on:{infinite:t.loadMore},slot:"append"})],1),e("b",[t._v("渲染 "+t._s(t.renderData.length)+" 行数据")])],1)},i=[],o=a(4400),l=a(35675),d=a.n(l),s={components:{AVirtualTable:o.Z,InfiniteLoading:d()},data(){return{columns:[{title:"Name",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"},width:300},{title:"id",dataIndex:"id",key:"id",width:300},{title:"text",dataIndex:"text",key:"text",width:400},{title:"text2",dataIndex:"text2",key:"text2",width:500,ellipsis:!0}],list:[],count:0,loading:!0,renderData:[],loadmoreVisible:!0}},methods:{loadMore(t){this.loading=!0,setTimeout((()=>{for(let t=0;t<30;t++)this.count++,this.list.push({id:this.count,name:"小明",show:!1,text:this.getRandomContent(),text2:this.getRandomContent()});t&&t.loaded(),this.loading=!1,this.loadmoreVisible=!1,setTimeout((()=>{this.loadmoreVisible=!0}))}),1e3)},getRandomContent(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onVirtualChange(t){this.renderData=t}},mounted(){}},r=s,u=a(1001),h=(0,u.Z)(r,n,i,!1,null,"f422e6aa",null),m=h.exports}}]);
//# sourceMappingURL=891.87ae27fc.js.map