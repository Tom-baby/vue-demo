(function(t){function e(e){for(var l,o,s=e[0],c=e[1],i=e[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(t[l]=c[l]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],l=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(l=!1)}l&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var l={},n={app:0},r=[];function o(e){if(l[e])return l[e].exports;var a=l[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=l,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(a,l,function(e){return t[e]}.bind(null,l));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var l=a("ee1a"),n=a.n(l);n.a},4842:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("a133"),a("ed0d"),a("f09c"),a("e117");var l=a("0261"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("数据表单")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","default-sort":{prop:"logDate"}}},[a("el-table-column",{attrs:{prop:"logDate",label:"日期",sortable:"",width:"100"}}),a("el-table-column",{attrs:{prop:"ctr",sortable:"",label:"平均CTR"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.ctr+"%"))])]}}])}),a("el-table-column",{attrs:{prop:"ecpc",sortable:"",label:"平均CPC"}}),a("el-table-column",{attrs:{prop:"ecpm",sortable:"",label:"平均CPM"}}),a("el-table-column",{attrs:{prop:"roi",sortable:"",label:"平均ROI"}}),a("el-table-column",{attrs:{prop:"alipayInShopNum",label:"平均展现"}}),a("el-table-column",{attrs:{prop:"alipayInShopNum",label:"付款订单"}}),a("el-table-column",{attrs:{prop:"alipayInshopAmt",label:"付款订单金额"}}),a("el-table-column",{attrs:{prop:"click",label:"平均点击"}}),a("el-table-column",{attrs:{prop:"charge",label:"平均花费"}}),a("el-table-column",{attrs:{prop:"cvr",sortable:"",label:"平均CVR"}}),a("el-table-column",{attrs:{prop:"gmvInshopNum",label:"下单订单"}}),a("el-table-column",{attrs:{prop:"gmvInshopAmt",label:"下单订单金额"}}),a("el-table-column",{attrs:{prop:"shopMainCatId",label:"店铺收藏成本"}}),a("el-table-column",{attrs:{prop:"campaignModel",label:"宝贝收藏成本"}})],1),a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"line"},[a("div",{staticClass:"content-title"},[t._v("图形表单")]),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings}})],1)])},s=[],c=(a("77ad"),{name:"HelloWorld",data:function(){return this.chartSettings={xAxisType:"time"},{tableData:[],resData:[],lineData:[],total:0,currentPage:1,pageSize:5,chartData:{columns:["Date","CPM"],rows:[]}}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$jsonp("https://pm.linkworld.cn/json/test?callback=callbackFunc").then((function(e){t.resData=e,t.total=e.length,t.fetchData()})).catch((function(t){console.log(t)}))},fetchData:function(){this.tableData=this.resData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize),this.lineData=[];for(var t=0;t<this.tableData.length;t++){var e={Date:this.tableData[t].logDate,CPM:this.tableData[t].ecpm};this.lineData.push(e)}this.chartData.rows=this.lineData},handleSizeChange:function(t){this.pagesize=t,this.fetchData()},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()}}}),i=c,u=(a("f61a"),a("e90a")),p=Object(u["a"])(i,o,s,!1,null,"5085a852",null),h=p.exports,f={name:"App",components:{HelloWorld:h}},b=f,d=(a("034f"),Object(u["a"])(b,n,r,!1,null,null,null)),g=d.exports,m=a("a3c5"),v=a.n(m),D=(a("b9b6"),a("7d2c")),y=a.n(D),C=a("c2b3"),w=a.n(C);l["default"].use(w.a),l["default"].use(y.a),l["default"].config.productionTip=!1,l["default"].use(v.a),new l["default"]({render:function(t){return t(g)}}).$mount("#app")},ee1a:function(t,e,a){},f61a:function(t,e,a){"use strict";var l=a("4842"),n=a.n(l);n.a}});
//# sourceMappingURL=app.09fcb210.js.map