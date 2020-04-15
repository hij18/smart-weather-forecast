(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"1ada":function(e,t,n){},"4c9f":function(e,t,n){"use strict";var r=n("1ada"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainPage")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"forecast"},[n("Header"),n("div",{staticClass:"forecast__form"},[n("settings-form"),n("forecast-responce")],1)],1)},c=[],u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v('"Умный" прогноз погоды')])])}],f={},d=f,p=n("2877"),m=Object(p["a"])(d,u,l,!1,null,null,null),h=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-settings-form"},[n("h2",{staticClass:"user-settings-form__title"},[e._v("Выберете настройки погоды:")]),n("div",{staticClass:"generation-form"},[n("div",{staticClass:"generation-form__input"},[n("label",{attrs:{for:"city"}},[e._v("В каком городе хотите узнать прогноз погоды: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userConfig.city,expression:"userConfig.city"}],attrs:{id:"city",readonly:""},domProps:{value:e.userConfig.city},on:{input:function(t){t.target.composing||e.$set(e.userConfig,"city",t.target.value)}}})]),n("br"),n("div",{staticClass:"generation-form__radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userConfig.units,expression:"userConfig.units"}],attrs:{type:"radio",id:"radio-one",value:"metric"},domProps:{checked:e._q(e.userConfig.units,"metric")},on:{change:function(t){return e.$set(e.userConfig,"units","metric")}}}),n("label",{attrs:{for:"radio-one"}},[e._v("°C")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userConfig.units,expression:"userConfig.units"}],attrs:{type:"radio",id:"radio-two",value:"imperial"},domProps:{checked:e._q(e.userConfig.units,"imperial")},on:{change:function(t){return e.$set(e.userConfig,"units","imperial")}}}),n("label",{attrs:{for:"radio-two"}},[e._v("°F")]),n("br")])]),n("div",{staticClass:"btn",on:{click:e.checkWeather}},[n("span",[e._v("Какая погодка?")])])])},w=[],_={data:function(){return{userConfig:{city:"Moscow",units:"metric"}}},methods:{checkWeather:function(){this.$store.dispatch("getWeatherFetch",this.userConfig)}}},g=_,b=(n("7793"),Object(p["a"])(g,v,w,!1,null,null,null)),y=b.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"forecast-response"},[e.showLoader?n("div",{staticClass:"forecast-response__loader"},[n("span",[e._v("Гадаем на кофейной гуще...")])]):e._e(),e.showResponce?n("div",{staticClass:"forecast-response__info"},[n("h3",[e._v("Прогноз погоды на сегодня:")]),n("span",[e._v(e._s(e.city)+": ")]),n("div",{staticClass:"weater-info-block"},[n("div",{staticClass:"weater-info-block__left-side"},[n("span",{staticClass:"main-text"},[e._v(e._s(e.currentTemp)+e._s(e.units))]),n("span",[e._v(e._s(e.weather.main.name))])]),n("div",{staticClass:"weater-info-block__middle"},[n("img",{attrs:{width:"50",height:"50",src:""+e.publicPath+e.weather.main.imgName+".png"}})]),n("div",{staticClass:"weater-info-block__right-side"},[n("span",[e._v("Ветер: "+e._s(e.weather.wind))]),n("span",[e._v("Влажность: "+e._s(e.weather.humidity)+"%")])])])]):e._e()])},O=[],j=n("5530"),x={data:function(){return{publicPath:"/",showResponce:!1}},computed:Object(j["a"])({},Object(a["b"])({city:"city",currentTemp:"currentTemp",units:"units",weather:"weather",isError:"isError",showLoader:"showLoader"}),{backgroundStyle:function(){return{backgroundImage:"url('".concat(this.weather.main.img,"')")}}}),watch:{currentTemp:function(e){e&&(this.showResponce=!0)},isError:function(e){e&&alert("Что-то барахлит. Попробуй попозже...")}}},k=x,E=(n("d499"),Object(p["a"])(k,C,O,!1,null,null,null)),P=E.exports,$={components:{Header:h,SettingsForm:y,ForecastResponce:P}},M=$,N=(n("4c9f"),Object(p["a"])(M,o,c,!1,null,null,null)),S=N.exports,T={name:"App",components:{MainPage:S}},L=T,F=(n("034f"),Object(p["a"])(L,i,s,!1,null,null,null)),W=F.exports,R=(n("99af"),n("b0c0"),n("d3b7"),function(e){return Math.round(e)}),q={Moscow:"Москва"},H={Clear:{name:"Ясно",imgName:"sun"},Rain:{name:"Дождь",imgName:"rain"},Snow:{name:"Снег",imgName:"snow"},Extreme:{name:"Шторм",imgName:"extr"},Clouds:{name:"Облачно",imgName:"clouds"}},J={namespaced:!0,state:function(){return{city:"",currentTemp:null,units:"°C",weather:{main:{},wind:"",humidity:null},isError:!1,showLoader:!1}},mutations:{setWeather:function(e,t){var n=t.main,a=t.units,i=t.wind,s=t.weather,o=n.temp,c=n.humidity;r["a"].set(e,"currentTemp",R(o)),r["a"].set(e,"units","metric"===a?"°C":"°F"),r["a"].set(e.weather,"humidity",c),r["a"].set(e.weather,"wind","".concat(i.speed," м/с")),r["a"].set(e.weather,"main",H[s[0].main]||"")},setCity:function(e,t){r["a"].set(e,"city",q[t])},setError:function(e,t){r["a"].set(e,"isError",t)},showLoader:function(e,t){r["a"].set(e,"showLoader",t)}},actions:{getWeatherFetch:function(e,t){var n=e.commit,r=t.city,a=void 0===r?"Moscow":r,i=t.units,s=void 0===i?"metric":i,o="28c7d687accc7c75aabbc7fb71173feb",c="http://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(o,"&units=").concat(s);return n("showLoader",!0),fetch(c).then((function(e){return e.json()})).then((function(e){var t=e.main,r=e.name,a=e.wind,i=e.weather;n("setWeather",{main:t,units:s,wind:a,weather:i}),n("setCity",r),n("showLoader",!1)})).catch((function(){return n("setError",!0)}))}}};r["a"].use(a["a"]);var A=new a["a"].Store(J);r["a"].config.productionTip=!1,new r["a"]({store:A,render:function(e){return e(W)}}).$mount("#app")},7793:function(e,t,n){"use strict";var r=n("d03c"),a=n.n(r);a.a},"85ec":function(e,t,n){},d03c:function(e,t,n){},d499:function(e,t,n){"use strict";var r=n("e55a"),a=n.n(r);a.a},e55a:function(e,t,n){}});
//# sourceMappingURL=app.e6919c34.js.map