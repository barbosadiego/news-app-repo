"use strict";(self["webpackChunknews_app"]=self["webpackChunknews_app"]||[]).push([[464],{9650:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-results"},[t.isLoading?e("Loading"):e("div",[e("h1",[t._v("search results: "+t._s(t.searchItem))]),e("div",{staticClass:"items-array"},t._l(t.searchResults,(function(s,a){return e("div",{key:`${a} - ${s.source.name}`,staticClass:"item"},[e("a",{attrs:{href:s.url,target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:s.urlToImage?s.urlToImage:"https://via.placeholder.com/450",alt:s.title}}),e("h3",{staticClass:"title"},[t._v(t._s(s.title))]),e("div",{staticClass:"info"},[e("span",{staticClass:"publishedAt"},[t._v(t._s(t.timeLocale(s.publishedAt)))]),e("span",{staticClass:"source"},[t._v(t._s(s.source.name))])])])])})),0)])],1)},r=[],i=s(4686),n={name:"SearchResults",components:{Loading:i.Z},data(){return{searchResults:[],searchItem:"",isLoading:!1}},methods:{getParams(){const t=new URLSearchParams(window.location.search),e=t.get("query");this.searchItem=t.get("query"),e&&this.getSearch(e)},async getSearch(t){try{this.isLoading=!0;const e=await fetch(`https://newsapi.org/v2/everything?q=${t}&language=pt&apiKey=10a22d9d876f43d5976a12223845ad75`);if(e.ok){this.isLoading=!1;const t=await e.json();this.searchResults=t.articles}}catch(e){console.log(e)}},timeLocale(t){return new Date(t).toLocaleDateString("pt-BR")}},created(){this.getParams()},watch:{$route:"getParams"}},c=n,l=s(1001),o=(0,l.Z)(c,a,r,!1,null,"82d5d592",null),h=o.exports}}]);
//# sourceMappingURL=search.af55b006.js.map