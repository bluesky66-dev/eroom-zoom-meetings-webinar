(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Vue.component('wpcfto_notification_message', {
  props: ['fields', 'field_name', 'field_id', 'field_value'],
  data: function data() {
    return {
      value: '',
      mount_status: false
    };
  },
  template: "\n        <div class=\"wpcfto_generic_field wpcfto_generic_field__notice\" v-bind:class=\"field_name\" v-bind:data-notice=\"field_name\">\n            <div class=\"wpcfto_generic_field__notice_info\">\n                <div v-if=\"fields.image\" class=\"notice_icon\"><img :src=\"fields.image\" width=\"80\" height=\"80\" /></div>\n                <div v-if=\"fields.icon\" class=\"notice_icon\"><i :class=\"fields.icon\"></i></div>\n                <div v-if=\"fields.description\" v-html=\"fields.description\" class=\"field-description description\"></div>\n            </div>\n            <div v-if=\"fields.buttons\" class=\"wpcfto_generic_field__notice_button_box\">\n                <a v-for=\"(button) in fields.buttons\" v-if=\"button.url || button.text\" :href=\"button.url\" class=\"button\" :class=\"button.class\" target=\"_blank\" rel=\"nofollow\">{{ button.text }}</a>\n            </div>\n        </div>\n    "
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTViOTU1NzMuanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJkYXRhIiwidmFsdWUiLCJtb3VudF9zdGF0dXMiLCJ0ZW1wbGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLDZCQUFkLEVBQTZDO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixVQUF6QixFQUFxQyxhQUFyQyxDQURvQztBQUUzQ0MsRUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsV0FBTztBQUNMQyxNQUFBQSxLQUFLLEVBQUUsRUFERjtBQUVMQyxNQUFBQSxZQUFZLEVBQUU7QUFGVCxLQUFQO0FBSUQsR0FQMEM7QUFRM0NDLEVBQUFBLFFBQVEsRUFBRTtBQVJpQyxDQUE3QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5WdWUuY29tcG9uZW50KCd3cGNmdG9fbm90aWZpY2F0aW9uX21lc3NhZ2UnLCB7XG4gIHByb3BzOiBbJ2ZpZWxkcycsICdmaWVsZF9uYW1lJywgJ2ZpZWxkX2lkJywgJ2ZpZWxkX3ZhbHVlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG1vdW50X3N0YXR1czogZmFsc2VcbiAgICB9O1xuICB9LFxuICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndwY2Z0b19nZW5lcmljX2ZpZWxkIHdwY2Z0b19nZW5lcmljX2ZpZWxkX19ub3RpY2VcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmllbGRfbmFtZVxcXCIgdi1iaW5kOmRhdGEtbm90aWNlPVxcXCJmaWVsZF9uYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9fbm90aWNlX2luZm9cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImZpZWxkcy5pbWFnZVxcXCIgY2xhc3M9XFxcIm5vdGljZV9pY29uXFxcIj48aW1nIDpzcmM9XFxcImZpZWxkcy5pbWFnZVxcXCIgd2lkdGg9XFxcIjgwXFxcIiBoZWlnaHQ9XFxcIjgwXFxcIiAvPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImZpZWxkcy5pY29uXFxcIiBjbGFzcz1cXFwibm90aWNlX2ljb25cXFwiPjxpIDpjbGFzcz1cXFwiZmllbGRzLmljb25cXFwiPjwvaT48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJmaWVsZHMuZGVzY3JpcHRpb25cXFwiIHYtaHRtbD1cXFwiZmllbGRzLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZmllbGQtZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZmllbGRzLmJ1dHRvbnNcXFwiIGNsYXNzPVxcXCJ3cGNmdG9fZ2VuZXJpY19maWVsZF9fbm90aWNlX2J1dHRvbl9ib3hcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKGJ1dHRvbikgaW4gZmllbGRzLmJ1dHRvbnNcXFwiIHYtaWY9XFxcImJ1dHRvbi51cmwgfHwgYnV0dG9uLnRleHRcXFwiIDpocmVmPVxcXCJidXR0b24udXJsXFxcIiBjbGFzcz1cXFwiYnV0dG9uXFxcIiA6Y2xhc3M9XFxcImJ1dHRvbi5jbGFzc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9mb2xsb3dcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiXG59KTsiXX0=
},{}]},{},[1])