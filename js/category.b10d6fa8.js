"use strict";(self["webpackChunknews_app"]=self["webpackChunknews_app"]||[]).push([[34],{8162:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"category"},[t.isLoading?e("Loading"):t._e(),e("h1",[t._v("Category: "+t._s(t.$route.params.id))]),e("div",{staticClass:"items-array"},t._l(t.newsCategory,(function(a,s){return e("div",{key:`${s} - ${a.source.name}`,staticClass:"item"},[e("a",{attrs:{href:a.url,target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:a.image?a.image:"https://via.placeholder.com/450?text=Image+Not+Found",alt:a.title}}),e("h3",{staticClass:"title"},[t._v(t._s(a.title))]),e("div",{staticClass:"info"},[e("span",{staticClass:"publishedAt"},[t._v(t._s(t.timeLocale(a.publishedAt)))]),e("span",{staticClass:"source"},[t._v(t._s(a.source.name))])])])])})),0)],1)},r=[],i=(a(1703),a(4686)),o={name:"CategoryPage",components:{Loading:i.Z},data(){return{newsCategory:[],isLoading:!1}},methods:{handleError(t){this.$emit("errorActive",t)},async getCategoryNews(){try{this.isLoading=!0;const t=await fetch(`https://gnews.io/api/v4/search?q=${this.$route.params.id}&token=65770b6f1d5cfb259f19aa1ee5355d87&lang=pt`),e=await t.json();if(!t.ok)throw this.isLoading=!1,console.log(e),this.handleError(e.message),new Error(e.code+" | "+e.message);this.isLoading=!1,this.newsCategory=e.articles}catch(t){console.log(t)}},timeLocale(t){return new Date(t).toLocaleDateString("pt-BR")}},created(){this.getCategoryNews()},watch:{$route:"getCategoryNews"}},n=o,c=a(1001),l=(0,c.Z)(n,s,r,!1,null,"63208bda",null),g=l.exports}}]);
//# sourceMappingURL=category.b10d6fa8.js.map