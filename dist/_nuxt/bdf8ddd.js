(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,r,e){"use strict";e.r(r);var n=e(32),c=(e(76),{data:function(){return{products:""}},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e,data,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$supabase.from("tb_produk").select();case 2:e=r.sent,data=e.data,n=e.error,data&&(t.products=data),n&&console.error(n);case 7:case"end":return r.stop()}}),r)})))()}}}),o=e(63),component=Object(o.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h1",[t._v("Products")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.products,(function(r){return e("div",{key:r.id,staticClass:"col-md-4"},[e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-header"},[e("img",{staticClass:"img-thumb",attrs:{src:r.foto,width:"95"}})]),t._v(" "),e("div",{staticClass:"card-body"},[e("h4",[t._v(t._s(r.nama))]),t._v(" "),e("h4",[t._v("Rp"+t._s(r.harga))]),t._v(" "),e("a",{staticClass:"btn btn-success btn-block",attrs:{href:r.link_eksternal}},[t._v("Beli di whatsapp")])])])])})),0)])])])}),[],!1,null,null,null);r.default=component.exports}}]);