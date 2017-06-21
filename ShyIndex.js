// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/tataufo/tata_weex/examples/shy/ShyIndex.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3c09e963"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = {
	  "navigator": {
	    "alignItems": "center",
	    "height": 88,
	    "backgroundColor": "#000000",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "positionBox": "fixed",
	    "top": 0,
	    "left": 0,
	    "zIndex": 3,
	    "width": 750
	  },
	  "title": {
	    "fontSize": 28,
	    "color": "#ffffff",
	    "marginRight": 20
	  },
	  "back": {
	    "width": 20,
	    "height": 38,
	    "marginLeft": 20
	  },
	  "bannerContent": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "height": 402,
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#cccccc",
	    "borderBottomStyle": "solid"
	  },
	  "banner": {
	    "flex": 1,
	    "height": 400
	  },
	  "tab": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 95,
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#cccccc",
	    "borderBottomStyle": "solid",
	    "backgroundColor": "#ffffff"
	  },
	  "tab_item": {
	    "flex": 1,
	    "fontSize": 28,
	    "textAlign": "center",
	    "lineHeight": 88,
	    "borderBottomWidth": 7,
	    "borderBottomColor": "#ffffff",
	    "borderBottomStyle": "solid"
	  },
	  "userinfo": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "height": 88
	  },
	  "user": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "flex": 2,
	    "height": 88
	  },
	  "more": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "flex": 1,
	    "height": 88
	  },
	  "more_more": {
	    "width": 51,
	    "height": 11,
	    "marginRight": 16
	  },
	  "more_name": {
	    "flex": 4
	  },
	  "user_avatar": {
	    "width": 70,
	    "height": 70,
	    "borderRadius": 50,
	    "marginLeft": 32
	  },
	  "user_name": {
	    "flex": 4,
	    "marginLeft": 20,
	    "fontSize": 28
	  },
	  "main": {
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "main_iamge": {
	    "flex": 1,
	    "width": 750,
	    "height": 750
	  },
	  "footer": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "height": 88,
	    "borderBottomColor": "#cccccc",
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 2
	  },
	  "like": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "like_image": {
	    "width": 71,
	    "height": 51,
	    "marginRight": 16
	  },
	  "like_count": {
	    "fontSize": 36,
	    "color": "#FF0000"
	  },
	  "share": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "share_image": {
	    "width": 55,
	    "height": 43,
	    "marginRight": 16
	  },
	  "share_count": {
	    "fontSize": 28
	  },
	  "loading-view": {
	    "height": 80,
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#c0c0c0"
	  }
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var stream = weex.requireModule('stream');
	var animation = weex.requireModule('animation');
	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');
	module.exports = {
	    data: function data() {
	        return {
	            bundleUrl: "",
	            restart: [],
	            model: '',
	            borderBottomColorHot: '#0000f6',
	            boldHot: 'bold',
	            borderBottomColorNew: '',
	            boldNew: '',
	            transformOrigin: 'right top',
	            current_scale: 0,
	            current_opacity: .6,
	            current_translate: '',
	            isStop: true,
	            photos_hot: [],
	            photos_new: [],
	            page_hot: 1,
	            page_new: 1,
	            handle_type: 2,
	            loading_display: 'hide',
	            rules: [],
	            userid: 5075704,
	            source: 0,
	            activity_id: 1,
	            state: 0,
	            qiniuUrl: 'http://imagecloud.tataufo.com/',
	            logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
	            bannerUrl: 'http://imagecloud.tataufo.com/oam/o_1aoj7k4ml11t617c8btk29p1uin7/1_20.png'
	        };
	    },
	    created: function created() {
	        var self = this;
	        self.statistical();
	        self.request_rule();
	        self.request_photos_hot();
	        self.request_photos_new();
	        self.getOptions();
	    },
	    methods: {
	        //            naviBarLeftItemClick: function (e) {
	        //                modal.toast({ message: 'naviBarLeftItemClick', duration: 2 })
	        //            },
	        //            naviBarRightItemClick: function (e) {
	        //                modal.toast({ message: 'naviBarRightItemClick', duration: 2 })
	        //            },
	        //            push: function () {
	        //                var self = this;
	        //                var params = {
	        //                    'url':  this.baseURL + 'vue/components/navigator.js?test=1',
	        //                    'animated' : 'true',
	        //                }
	        //                navigator.push(params, function () {});
	        //            },
	        //            pop: function () {
	        //                var params = {
	        //                    'url':  this.baseURL + 'vue/components/navigator.js?test=1',
	        //                    'animated' : 'true',
	        //                }
	        //
	        //                navigator.pop(params, function () {});
	        //            },

	        filter: function filter(value) {
	            if (value > 999) return Math.round(value / 1000) + 'k';
	            return value;
	        },
	        back: function back() {
	            this.$router.back();
	        },
	        getOptions: function getOptions() {
	            //                this.aa = this.$getConfig().aa;
	            //                this.bb = this.$getConfig().bb;
	            this.bundleUrl = this.$getConfig().bundleUrl;
	        },
	        statistical: function statistical() {
	            var self = this;
	            stream.fetch({
	                method: 'POST',
	                url: 'http://pro.tataufo.com:14000/internal/v1/',
	                type: 'json',
	                headers: {
	                    "cmdid": 14016,
	                    "timestamp": new Date().getTime()
	                },
	                body: {
	                    'common': {
	                        'userid': self.userid,
	                        'userkey': ''
	                    },
	                    'params': {
	                        target_userid: self.userid,
	                        activity_id: self.activity_id,
	                        source: self.source
	                    }
	                }
	            }, function (ret) {
	                if (!ret.ok) {} else {}
	            });
	        },
	        delete: function _delete(styles, timingFunction, duration, callback) {
	            animation.transition(this.$refs.delete, {
	                styles: styles,
	                timingFunction: timingFunction,
	                duration: duration
	            }, callback);
	        },
	        translate: function translate() {
	            var self = this;
	            this.current_translate = this.current_translate ? '' : 'translate(0, -100%)';
	            self.model = self.model ? '' : true;
	            this.delete({
	                transform: this.current_translate
	            }, 'linear', 300, function () {});
	        },
	        tab_type: function tab_type(type) {
	            var self = this;
	            if (type == 2) {
	                self.borderBottomColorHot = '#0000f6';
	                self.borderBottomColorNew = '';
	                self.boldHot = 'bold';
	                self.boldNew = '';
	            } else {
	                self.borderBottomColorHot = '';
	                self.borderBottomColorNew = '#0000f6';
	                self.boldHot = '';
	                self.boldNew = 'bold';
	            }
	            self.handle_type = type;
	        },
	        request_rule: function request_rule() {
	            var self = this;
	            stream.fetch({
	                method: 'POST',
	                url: 'http://pro.tataufo.com:14000/internal/v1/',
	                type: 'json',
	                headers: {
	                    "cmdid": 14001,
	                    "timestamp": new Date().getTime()
	                },
	                body: {
	                    'common': {
	                        'userid': self.userid,
	                        'userkey': ''
	                    },
	                    'params': {
	                        activity_id: self.activity_id
	                    }
	                }
	            }, function (ret) {
	                if (!ret.ok) {
	                    self.rules = "request failed";
	                } else {
	                    if (ret.data.common.code == 0) {
	                        self.rules = JSON.stringify(ret.data);
	                        self.state = JSON.stringify(ret.data.data.state);
	                    } else {
	                        self.toast(ret.data.common.message, 2);
	                    }
	                }
	            });
	        },
	        request_photos_hot: function request_photos_hot() {
	            var self = this;
	            stream.fetch({
	                method: 'POST',
	                url: 'http://pro.tataufo.com:14000/internal/v1/',
	                type: 'json',
	                headers: {
	                    "cmdid": 14002,
	                    "timestamp": new Date().getTime()
	                },
	                body: {
	                    'common': {
	                        'userid': self.userid,
	                        'userkey': ''
	                    },
	                    'params': {
	                        activity_id: self.activity_id,
	                        handle_type: 2,
	                        page_index: 1
	                    }
	                }
	            }, function (ret) {
	                if (!ret.ok) {
	                    self.photos_hot = "request failed";
	                } else {
	                    if (ret.data.common.code == 0) {
	                        self.photos_hot = ret.data.data.photos;
	                        self.restart = ret;
	                    } else {
	                        self.toast(ret.data.common.message, 2);
	                    }
	                }
	            });
	        },
	        request_photos_new: function request_photos_new() {
	            var self = this;
	            stream.fetch({
	                method: 'POST',
	                url: 'http://pro.tataufo.com:14000/internal/v1/',
	                type: 'json',
	                headers: {
	                    "cmdid": 14002,
	                    "timestamp": new Date().getTime()
	                },
	                body: {
	                    'common': {
	                        'userid': self.userid,
	                        'userkey': ''
	                    },
	                    'params': {
	                        activity_id: self.activity_id,
	                        handle_type: 1,
	                        page_index: 1
	                    }
	                }
	            }, function (ret) {
	                if (!ret.ok) {
	                    self.photos_new = "request failed";
	                } else {
	                    if (ret.data.common.code == 0) {
	                        self.photos_new = ret.data.data.photos;
	                    } else {
	                        self.toast(ret.data.common.message, 2);
	                    }
	                }
	            });
	        },
	        loading_more: function loading_more() {
	            var self = this;
	            self.loading_display = 'show';
	            if (self.handle_type == 1) {
	                var page = self.page_hot + 1;
	            } else {
	                var page = self.page_new + 1;
	            }
	            stream.fetch({
	                method: 'POST',
	                url: 'http://pro.tataufo.com:14000/internal/v1/',
	                type: 'json',
	                headers: {
	                    "cmdid": 14002,
	                    "timestamp": new Date().getTime()
	                },
	                body: {
	                    'common': {
	                        'userid': self.userid,
	                        'userkey': ''
	                    },
	                    'params': {
	                        activity_id: self.activity_id,
	                        handle_type: self.handle_type,
	                        page_index: page
	                    }
	                }
	            }, function (ret) {
	                if (!ret.ok) {
	                    self.photos = "request failed";
	                } else {
	                    if (ret.data.common.code == 0) {
	                        if (self.handle_type == 1) {
	                            self.photos_hot = self.photos_hot.concat(ret.data.data.photos);
	                            self.loading_display = 'hide';
	                        } else {
	                            self.photos_new = self.photos_new.concat(ret.data.data.photos);
	                            self.loading_display = 'hide';
	                        }
	                    } else {
	                        self.toast(ret.data.common.message, 2);
	                    }
	                }
	            });
	        },
	        toast: function toast(msg, duration) {
	            if (!msg || typeof msg !== 'string') {
	                msg = '!';
	            }
	            duration = duration || 2;
	            modal.toast({
	                'message': msg,
	                'duration': duration
	            });
	        },
	        prompt: function prompt(userid, photoid, index) {
	            var self = this;
	            if (userid == this.userid) {
	                modal.prompt({
	                    'message': '确定要删除?',
	                    'okTitle': '确定',
	                    'cancelTitle': '取消'
	                }, function (result) {
	                    stream.fetch({
	                        method: 'POST',
	                        url: 'http://pro.tataufo.com:14000/internal/v1/',
	                        type: 'json',
	                        headers: {
	                            "cmdid": 14006,
	                            "timestamp": new Date().getTime()
	                        },
	                        body: {
	                            'common': {
	                                'userid': self.userid,
	                                'userkey': ''
	                            },
	                            'params': {
	                                activity_id: self.activity_id,
	                                photo_id: photoid
	                            }
	                        }
	                    }, function (ret) {
	                        if (!ret.ok) {
	                            modal.toast({ message: '删除失败' });
	                        } else {
	                            if (ret.data.common.code == 0) {
	                                if (self.handle_type == 1) {
	                                    self.photos_hot.splice(index, 1);
	                                } else {
	                                    self.photos_new.splice(index, 1);
	                                }
	                                modal.toast({ message: '删除成功' });
	                            } else {
	                                self.toast(ret.data.common.message, 2);
	                            }
	                        }
	                    });
	                });
	            } else {
	                modal.prompt({
	                    'message': '确定要举报?',
	                    'okTitle': '确定',
	                    'cancelTitle': '取消'
	                }, function (result) {
	                    stream.fetch({
	                        method: 'POST',
	                        url: 'http://pro.tataufo.com:14000/internal/v1/',
	                        type: 'json',
	                        headers: {
	                            "cmdid": 14007,
	                            "timestamp": new Date().getTime()
	                        },
	                        body: {
	                            'common': {
	                                'userid': self.userid,
	                                'userkey': ''
	                            },
	                            'params': {
	                                activity_id: self.activity_id,
	                                photo_id: photoid,
	                                content: ''
	                            }
	                        }
	                    }, function (ret) {
	                        if (!ret.ok) {
	                            modal.toast({ message: '举报失败' });
	                        } else {
	                            if (ret.data.common.code == 0) {
	                                modal.toast({ message: '举报成功' });
	                            } else {
	                                self.toast(ret.data.common.message, 2);
	                            }
	                        }
	                    });
	                });
	            }
	        },
	        like: function like(userid, photo_id, index) {
	            var self = this;
	            //                if(self.state == 2){
	            //                    self.toast('活动已经结束',2);
	            //                    return;
	            //                }
	            stream.fetch({
	                method: 'POST',
	                url: 'http://pro.tataufo.com:14000/internal/v1/',
	                type: 'json',
	                headers: {
	                    "cmdid": 14004,
	                    "timestamp": new Date().getTime()
	                },
	                body: {
	                    'common': {
	                        'userid': self.userid,
	                        'userkey': ''
	                    },
	                    'params': {
	                        activity_id: self.activity_id,
	                        photo_id: photo_id
	                    }
	                }
	            }, function (ret) {
	                if (!ret.ok) {} else {
	                    if (ret.data.common.code == 0) {
	                        if (self.handle_type == 1) {
	                            self.photos_hot[index].self_like = true;
	                            self.photos_hot[index].like_count++;
	                        } else {
	                            self.photos_new[index].self_like = true;
	                            self.photos_new[index].like_count++;
	                        }
	                    } else {
	                        self.toast(ret.data.common.message, 2);
	                    }
	                }
	            });
	        }
	    }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["navigator"]
	  }, [_c('image', {
	    staticClass: ["back"],
	    attrs: {
	      "src": "http://imagecloud.tataufo.com/weex/img/icon_back.png"
	    },
	    on: {
	      "androidback": _vm.back
	    }
	  }), _c('text', {
	    staticClass: ["title"],
	    on: {
	      "click": _vm.push
	    }
	  }, [_vm._v("活动规则")])]), _c('list', {
	    staticClass: ["list"]
	  }, [_c('cell', {
	    staticClass: ["bannerContent"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('image', {
	    staticClass: ["banner"],
	    attrs: {
	      "src": _vm.bannerUrl
	    }
	  })]), _c('header', [_c('div', {
	    staticClass: ["tab"]
	  }, [_c('text', {
	    staticClass: ["tab_item"]
	  }), _c('text', {
	    staticClass: ["tab_item"],
	    style: {
	      borderBottomColor: _vm.borderBottomColorHot,
	      fontWeight: _vm.boldHot
	    },
	    on: {
	      "click": function($event) {
	        _vm.tab_type(2, _vm.$evevt)
	      }
	    }
	  }, [_vm._v("最热")]), _c('text', {
	    staticClass: ["tab_item"]
	  }), _c('text', {
	    staticClass: ["tab_item"],
	    style: {
	      borderBottomColor: _vm.borderBottomColorNew,
	      fontWeight: _vm.boldNew
	    },
	    on: {
	      "click": function($event) {
	        _vm.tab_type(1, _vm.$evevt)
	      }
	    }
	  }, [_vm._v("最新")]), _c('text', {
	    staticClass: ["tab_item"]
	  })])]), _vm._l((_vm.photos_hot), function(i, index) {
	    return (_vm.handle_type === 1) ? _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["userinfo"]
	    }, [_c('div', {
	      staticClass: ["user"]
	    }, [_c('image', {
	      staticClass: ["user_avatar"],
	      attrs: {
	        "src": _vm.qiniuUrl + i.user.avatarurl
	      }
	    }), _c('text', {
	      staticClass: ["user_name"]
	    }, [_vm._v(_vm._s(i.user.nickname))])]), _c('div', {
	      staticClass: ["more"],
	      on: {
	        "click": function($event) {
	          _vm.prompt(i.user.nickname, i.photo_id, index)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["more_name"]
	    }), _c('image', {
	      staticClass: ["more_more"],
	      attrs: {
	        "src": "http://imagecloud.tataufo.com/weex/img/icon_more.jpeg"
	      }
	    })])]), _c('div', {
	      staticClass: ["main"]
	    }, [_c('image', {
	      staticClass: ["main_iamge"],
	      attrs: {
	        "src": i.photo_url
	      }
	    })]), _c('div', {
	      staticClass: ["footer"]
	    }, [_c('div', {
	      staticClass: ["like"],
	      on: {
	        "click": function($event) {
	          _vm.like(i.user.nickname, i.photo_id, index)
	        }
	      }
	    }, [(i.self_like) ? _c('image', {
	      staticClass: ["like_image"],
	      attrs: {
	        "src": "http://imagecloud.tataufo.com/weex/img/icon_heart1.png"
	      }
	    }) : _vm._e(), (!i.self_like) ? _c('image', {
	      staticClass: ["like_image"],
	      attrs: {
	        "src": "http://imagecloud.tataufo.com/weex/img/icon_heart.png"
	      }
	    }) : _vm._e(), _c('text', {
	      staticClass: ["like_count"]
	    }, [_vm._v(_vm._s(_vm.filter(i.like_count)))])]), _vm._m(0, true)])]) : _vm._e()
	  }), _vm._l((_vm.photos_new), function(i, index) {
	    return (_vm.handle_type === 2) ? _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["userinfo"]
	    }, [_c('div', {
	      staticClass: ["user"]
	    }, [_c('image', {
	      staticClass: ["user_avatar"],
	      attrs: {
	        "src": _vm.qiniuUrl + i.user.avatarurl
	      }
	    }), _c('text', {
	      staticClass: ["user_name"]
	    }, [_vm._v(_vm._s(i.user.nickname))])]), _c('div', {
	      staticClass: ["more"],
	      on: {
	        "click": function($event) {
	          _vm.prompt(i.user.nickname, i.photo_id, index)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["more_name"]
	    }), _c('image', {
	      staticClass: ["more_more"],
	      attrs: {
	        "src": "http://imagecloud.tataufo.com/weex/img/icon_more.jpeg"
	      }
	    })])]), _c('div', {
	      staticClass: ["main"]
	    }, [_c('image', {
	      staticClass: ["main_iamge"],
	      attrs: {
	        "src": i.photo_url
	      }
	    })]), _c('div', {
	      staticClass: ["footer"]
	    }, [_c('div', {
	      staticClass: ["like"],
	      on: {
	        "click": function($event) {
	          _vm.like(i.user.nickname, i.photo_id, index)
	        }
	      }
	    }, [(i.self_like) ? _c('image', {
	      staticClass: ["like_image"],
	      attrs: {
	        "src": "http://imagecloud.tataufo.com/weex/img/icon_heart1.png"
	      }
	    }) : _vm._e(), (!i.self_like) ? _c('image', {
	      staticClass: ["like_image"],
	      attrs: {
	        "src": "http://imagecloud.tataufo.com/weex/img/icon_heart.png"
	      }
	    }) : _vm._e(), _c('text', {
	      staticClass: ["like_count"]
	    }, [_vm._v(_vm._s(_vm.filter(i.like_count)))])]), _vm._m(1, true)])]) : _vm._e()
	  }), _c('loading', {
	    staticClass: ["loading-view"],
	    attrs: {
	      "display": _vm.loading_display
	    },
	    on: {
	      "loading": _vm.loading_more
	    }
	  }, [_c('loading-indicator', {
	    staticStyle: {
	      height: "60px",
	      width: "60px"
	    }
	  })], 1)], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["share"]
	  }, [_c('image', {
	    staticClass: ["share_image"],
	    attrs: {
	      "src": "http://imagecloud.tataufo.com/weex/img/icon_up.png"
	    }
	  }), _c('text', {
	    staticClass: ["share_count"]
	  }, [_vm._v("分享集赞")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["share"]
	  }, [_c('image', {
	    staticClass: ["share_image"],
	    attrs: {
	      "src": "http://imagecloud.tataufo.com/weex/img/icon_up.png"
	    }
	  }), _c('text', {
	    staticClass: ["share_count"]
	  }, [_vm._v("分享集赞")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);
