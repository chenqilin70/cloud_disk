/**
 * Created by kiner on 15/4/7.
 */

;
function contextMenu(options) {

    this.opt = this.extend(true, this.options, options);

    this.target = this.opt.target;

    if (this.opt.classes && !this.opt.linkClass) {
        this.menuBoxClass = this.extend(true, {
            "position": "absolute"
        }, this.opt.classes.menuBox);

        this.menuTitleClass = this.extend(true, {}, this.opt.classes.menuTitle.self);
        this.menuTitleIconClass = this.extend(true, {
            display: "inline-block"
        }, this.opt.classes.menuTitle.icon);
        this.menuTitleConClass = this.extend(true, {}, this.opt.classes.menuTitle.content);

        this.itemClass = this.extend(true, {}, this.opt.classes.item.self);
        this.itemIconClass = this.extend(true, {
            display: "inline-block"
        }, this.opt.classes.item.icon);
        this.itemConClass = this.extend(true, {}, this.opt.classes.item.content);

        this.hoverClass = this.extend(true, {}, this.opt.classes.item.hover);

        this.separatorClass = this.extend(true, {}, this.opt.classes.separator);
        this.keymapClass = this.extend(true, {
            "display": "inline-block",
            "height": "100%",
            "line-height": "30px",
            "float": "right"
        }, this.opt.classes.item.keymap);
    }


    this.init();


}

contextMenu.prototype.init = function () {

    this.menuBox = document.createElement("div");

    this.attr(this.menuBox, {"unselectable": "on"});
    this.attr(this.menuBox, {"onselectstart": "return false;"});
    this.css(this.menuBox, {"-moz-user-select": "none"});
    this.css(this.menuBox, {"-webkit-user-select": "none"});


    if (!this.opt.linkClass) {

        this.css(this.menuBox, this.menuBoxClass);
    }

    this.addClass(this.menuBox, "kinerMenuBox");

    if (this.opt.hasTitle) {
        this.menuTitle = document.createElement('h2');
        this.addClass(this.menuTitle, "kinerMenuTitle");

        if (this.opt.menu.title.icon && this.opt.menu.title.icon.length != 0) {

            var image = this.opt.hasIcon ? "img" : "span";
            var titleIcon = document.createElement(image);
            this.addClass(titleIcon, "kinerMenuTitleIcon");
            if (!this.opt.linkClass) {

                this.css(titleIcon, this.menuTitleIconClass);
            }
            if (!this.opt.hasIcon) {
                this.css(titleIcon, {
                    width: 0
                });
            }
            this.attr(titleIcon, {
                src: this.opt.menu.title.icon
            });
            this.menuTitle.appendChild(titleIcon);
        } else {
            var titleIcon = document.createElement("span");
            this.addClass(titleIcon, "kinerMenuTitleIcon");
            if (!this.opt.linkClass) {

                this.css(titleIcon, this.menuTitleIconClass);
            }
            if (!this.opt.hasIcon) {
                this.css(titleIcon, {
                    width: 0
                });
            }
            this.menuTitle.appendChild(titleIcon);
        }


        var titleCon = document.createElement('span');
        this.addClass(titleCon, "kinerMenuTitleCon");
        if (!this.opt.linkClass) {

            this.css(this.menuTitle, this.menuTitleClass);
            this.css(titleCon, this.menuTitleConClass);
        }


        titleCon.innerHTML = this.opt.menu.title.content;

        this.menuTitle.appendChild(titleCon);
        this.menuBox.appendChild(this.menuTitle);
    }


    var i = 0, items = this.opt.menu.items;
    if (items) {
        for (i = 0; i < items.length; i++) {
            var item;
            if (items[i] === "-") {

                item = document.createElement("div");
                this.addClass(item, "kinerSeparator");
                if (!this.opt.linkClass) {

                    this.css(item, this.separatorClass);
                }

            } else {
                item = document.createElement("div");
                this.addClass(item, "kinerMenuItem");


                if (items[i].icon && items[i].icon.length != 0) {
                    var image = this.opt.hasIcon ? "img" : "span";
                    var icon = document.createElement(image);
                    this.addClass(icon, "kinerMenuItemIcon");
                    if (!this.opt.linkClass) {

                        this.css(icon, this.itemIconClass);
                    }
                    if (!this.opt.hasIcon) {
                        this.css(icon, {
                            width: 0
                        });
                    }
                    this.attr(icon, {
                        src: items[i].icon
                    });

                    item.appendChild(icon);

                } else {
                    var icon = document.createElement("span");
                    this.addClass(icon, "kinerMenuItemIcon");
                    if (!this.opt.linkClass) {

                        this.css(icon, this.itemIconClass);
                    }
                    if (!this.opt.hasIcon) {
                        this.css(icon, {
                            width: 0
                        });
                    }
                    item.appendChild(icon);
                }


                var con = document.createElement('span');
                this.addClass(con, "kinerMenuItemCon");
                if (!this.opt.linkClass) {

                    this.css(item, this.itemClass);
                    this.css(con, this.itemConClass);
                }


                con.innerHTML = items[i].content;
                if (items[i].keymap) {
                    var keymap = document.createElement('span');
                    this.addClass(keymap, "kinerKeyMap");
                    keymap.innerHTML = items[i].keymap;
                    this.css(keymap, this.keymapClass);
                    item.appendChild(keymap);

                }


                var self = this;
                (function (i) {

                    if (!self.opt.linkClass) {

                        self.on(item, "mouseover", function () {
                            self.css(this, self.hoverClass);
                        });
                        self.on(item, "mouseout", function () {
                            self.css(this, self.itemClass);
                        });
                    }

                    self.on(item, "mousedown", function (e) {
                        self.sb(e);
                        items[i].action.call(self, e, items[i]);
                        self.hide();
                    });

                    if (items[i].keymap) {
                        var keymap = items[i].keymap.split("+");

                        self.on(document, "keydown", function (e) {
                            var val = String.fromCharCode(e.keyCode).toLocaleLowerCase();
                            switch (keymap[0]) {
                                case "alt":
                                {
                                    if (e.altKey) {
                                        if (val === keymap[1].toLocaleLowerCase()) {
                                            items[i].action.call(self, e, items[i]);
                                        }
                                    }
                                    break;
                                }
                                case "shift":
                                {
                                    if (e.shiftKey) {
                                        if (val === keymap[1].toLocaleLowerCase()) {
                                            items[i].action.call(self, e, items[i]);
                                        }
                                    }
                                    break;
                                }
                                case "ctrl":
                                {
                                    if (e.ctrlKey) {
                                        if (val === keymap[1].toLocaleLowerCase()) {
                                            items[i].action.call(self, e, items[i]);
                                        }
                                    }
                                    break;
                                }
                            }
                        });
                    }


                })(i);


                item.appendChild(con);

            }

            this.menuBox.appendChild(item);
        }
    }


    (this.opt.target == document) ? (this.$("body")[0].appendChild(this.menuBox)) : (this.opt.target.appendChild(this.menuBox));
    this.hide();
    this.bind();
};

contextMenu.prototype.show = function () {
    if (this.opt.beforeShow) {
        this.opt.beforeShow.call(this, this);
    }
    this.css(this.menuBox, {
        "display": "block"
    });

    if (arguments.length == 1) {

        var l = 0, t = 0;

        /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
        var rightedge = (this.opt.target == document) ? (document.documentElement.clientWidth - arguments[0].clientX) : (this.opt.target.offsetWidth - arguments[0].clientX);
        var bottomedge = (this.opt.target == document) ? (document.documentElement.clientHeight - arguments[0].clientY) : (this.opt.target.offsetHeight - arguments[0].clientY);


        if (rightedge < this.menuBox.offsetWidth) {
            l = arguments[0].clientX - this.menuBox.offsetWidth;
        } else {
            l = arguments[0].clientX;
        }
        if (bottomedge < this.menuBox.offsetHeight) {
            t = arguments[0].clientY - this.menuBox.offsetHeight;
        } else {
            t = arguments[0].clientY;
        }

        this.css(this.menuBox, {
            "left": l + "px",
            "top": t + "px"
        });

        if (this.opt.afterShow) {
            this.opt.afterShow.call(this, this);
        }
    }
};

contextMenu.prototype.hide = function () {

    if (this.opt.beforeHide) {
        this.opt.beforeHide.call(this, this);
    }
    this.css(this.menuBox, {
        "display": "none"
    });

    if (this.opt.afterHide) {
        this.opt.afterHide.call(this, this);
    }
};

contextMenu.prototype.bind = function () {

    var self = this;

    self.on(self.opt.target, "contextmenu", function (e) {
        var oEvent = e || event;
        nocontextmenu(oEvent);
        return false;
    });

    self.on(self.opt.target, "mousedown", function (e) {
        if(e.button==2){
            self.show(e);
        }
    });




    function nocontextmenu(ev) {
        if(ev.preventDefault){

            ev.preventDefault();
        }
        ev.cancelBubble = true;
        ev.returnValue = false;
        return false;
    }


    self.on(document, "mousedown", function (e) {
        if(e.button!=2){
            self.hide();
        }
    });

    self.on(self.menuBox, "click", function (e) {

        self.sb(e);

    });

    if (self.opt.autoHide) {
        var timer = null;

        self.on(self.menuBox, "mouseover", function (e) {
            clearTimeout(timer);
        });
        self.on(self.menuBox, "mouseout", function (e) {
            timer = setTimeout(function () {
                self.hide();
            }, 300);
        });
    }


};

/**
 * 类似jquery选择器，当传入字符串为html标签时为新建元素，否则为查找
 * @param q 选择器
 * @param o 父级
 * @returns {Array}
 */
contextMenu.prototype.$ = function (q, o) {
    //debugger;
    var self = this;
    //查询表达式必须为字符串，并且不能为空。
    if (typeof(q) !== 'string' || q == '') return [q];
    var obj = [];
    var sObj = null;

    //使用空格分割，只处理第一个表达式
    var ss = q.split(' ');
    //获取属性
    var attr = '';
    var s = ss[0].split(':')[0];
    if (s != ss[0]) {
        attr = ss[0].split(':')[1];

    }
    var val = s.split('[')[0];
    if (val != s)
        val = s.split('[')[1].replace(/[",\]]/g, '');
    else {
        val = '';
    }
    s = s.split('[')[0];

    //当父对象不存在时，使用document;
    o = o || document;
    switch (s.charAt(0)) {
        case '#':
            //ID选择器
            sObj = document.getElementById(s.substr(1));
            if (sObj)obj.push(sObj);
            break;
        case '.':
            //类选择器
            var l = o.getElementsByTagName('*');
            var c = s.substr(1);
            for (var i = 0; i < l.length; i++)
                if (l[i].className.search('\\b' + c + '\\b') != -1)obj.push(l[i]);
            break;
        default:
            //根据tag获取元素
            obj = o.getElementsByTagName(s);
            break;
    }

    if (val) {
        //[t=val]筛选属性匹配
        var l = [];
        var a = val.split('=');
        for (var i = 0; i < obj.length; i++)
            if (a.length == 2 && obj[i][a[0]] == a[1]) l.push(obj[i]);
        obj = l;
    }
    if (attr) {
        //: 筛选属性匹配
        var l = [];
        for (var i = 0; i < obj.length; i++)
            if (obj[i][attr]) l.push(obj[i]);
        obj = l;
    }

    if (ss.length > 1) {
        //递归处理表达式后续内容
        //父元素为已获取的所有元素
        var l = [];
        for (var i = 0; i < obj.length; i++) {
            //var ll = arguments.callee(q.substr(ss[0].length + 1), obj[i]);
            var ll = self.$.call(self, q.substr(ss[0].length + 1), obj[i]);
            if (ll.tagName) l.push(ll);
            else
                for (var j = 0; j < ll.length; j++)l.push(ll[j]);
        }
        obj = l;
    }

    //console.log(obj);

    if (sObj && ss.length == 1) {
        //当为ID选择器时，直接返回对象。
        obj = sObj;
        if (obj)obj.length = 1;
    } else {
        //去除数组中重复元素
        var l = [];
        for (var i = 0; i < obj.length; i++)obj[i].$isAdd = false;
        for (var i = 0; i < obj.length; i++) {
            if (!obj[i].$isAdd) {
                obj[i].$isAdd = true;
                l.push(obj[i]);
            }
        }
        obj = l;
    }
    //console.log(self.extend(true, obj, self));

    return obj;
};


contextMenu.prototype.on = function (element, eventName, handler) {

    if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
    }//这里用了对象检测方法判断浏览器,最后的参数false表示事件在捕获阶段,若为true则表示在冒泡阶段
    else if (element.attachEvent) {
        element.attachEvent("on" + eventName, handler);
    }
    else {
        element["on" + eventName] = handler;
    }

};


/**
 * 默认配置
 * @type {{}}
 */
contextMenu.prototype.options = {

    target: document,

    menu: {

        title: {
            icon: "imgs/em_1.gif",
            content: "\u81ea\u5b9a\u4e49\u53f3\u952e\u83dc\u5355"

        },
        items: [
            {
                icon: "imgs/em_2.gif",
                content: "\u83dc\u5355\u98791",
                action: function (item) {
                    alert(item.content);
                }
            },
            "-",
            {
                icon: "imgs/em_2.gif",
                content: "\u83dc\u5355\u98792",
                action: function (item) {
                    alert("====>" + item.content);
                }
            }
        ]

    }

};

/**
 * 合并对象方法
 * @param flag
 * @param destination
 * @param source
 * @returns {*}
 */
contextMenu.prototype.extend = function (flag, destination, source) {
    if (flag) {
        var obj = {};

        for (var property in destination) {
            obj[property] = destination[property];
        }
        for (var property in source) {
            obj[property] = source[property];
        }


        return obj;


    } else {
        for (var property in source)
            destination[property] = source[property];
        return destination;
    }
};
/**
 * 对元素行间样式的操作
 */
contextMenu.prototype.css = function () {

    var arg = arguments;
    var i = 0;
    var len = arg.length;

    if (len == 2) {


        var obj = arg[0], value = arg[1];

        if (this.isArray(obj)) {
            for (i = 0; i < obj.length; i++) {


                if (typeof value === "string") {

                    if (obj[i].currentStyle) //IE
                    {
                        return this.fixed(obj[i].currentStyle[value], 1);
                    }
                    else if (window.getComputedStyle) //非IE
                    {
                        value = value.replace(/([A-Z])/g, "-$1");
                        value = value.toLowerCase();
                        return this.fixed(document.defaultView.getComputedStyle(obj[i], null)[value], 1);
                    }

                } else if (typeof value === "object") {

                    for (var j in value) {


                        obj[i].style[j] = value[j];

                    }

                }

            }
        } else {

            if (typeof value === "string") {

                if (obj.currentStyle) //IE
                {
                    return this.fixed(obj.currentStyle[value], 1);
                }
                else if (window.getComputedStyle) //非IE
                {
                    value = value.replace(/([A-Z])/g, "-$1");
                    value = value.toLowerCase();
                    return this.fixed(document.defaultView.getComputedStyle(obj, null)[value], 1);
                }

            } else if (typeof value === "object") {

                for (var j in value) {


                    obj.style[j] = value[j];

                }

            }

        }

    }

};
/**
 * 对元素属性的操作
 * @returns {string|*}
 */
contextMenu.prototype.attr = function () {
    var arg = arguments;
    var i = 0;
    var len = arg.length;

    if (len == 2) {

        var obj = arg[0], value = arg[1];

        if (this.isArray(obj)) {

            for (i = 0; i < obj.length; i++) {
                //console.log(obj[i]);
                if (typeof value === "string") {

                    if (value.length != 0) {
                        return obj[i].getAttribute(value);
                    } else {
                        return obj[i].attributes;
                    }


                } else if (typeof value === "object") {

                    for (var j in value) {
                        obj[i].setAttribute(j, value[j]);

                    }

                }
            }

        } else {
            if (typeof value === "string") {

                if (value.length != 0) {
                    return obj.getAttribute(value);
                } else {
                }


            } else if (typeof value === "object") {

                for (var j in value) {
                    obj.setAttribute(j, value[j]);

                }

            }
        }


    }
};
/**
 * 判断参数是否为数组
 * @param obj
 * @returns {boolean}
 */
contextMenu.prototype.isArray = function (obj) {
    ///	<summary>
    ///		确定传递的参数是否为数组。
    ///	</summary>
    ///	<param name="obj" type="Object">要测试其是否为数组的对象。</param>
    ///	<returns type="Boolean">如果该参数为函数，则为 true；否则为 false。</returns>

    var result;

    try{
        result = toString.call(obj) === "[object Array]"
    }catch(Exception){
        result = obj instanceof Array;
    }

    return result;
};

/**
 * 阻止事件冒泡的通用函数
 * @param e
 */
contextMenu.prototype.sb = function (e) {
    // 如果传入了事件对象，那么就是非ie浏览器
    if (e && e.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        //否则我们使用ie的方法来取消事件冒泡
        window.event.cancelBubble = true;
    }
};

/**
 * 判断对象是否拥有某个class
 * @param obj
 * @param cls
 * @returns {*}
 */
contextMenu.prototype.hasClass = function (obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};
/**
 * 新增class
 * @param obj
 * @param cls
 */
contextMenu.prototype.addClass = function (obj, cls) {
    if (this.isArray(obj)) {

        for (var i = 0; i < obj.length; i++) {
            if (!this.hasClass(obj[i], cls)) obj[i].className += " " + cls;
        }

    } else {

        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    }
};
/**
 * 移除class
 * @param obj
 * @param cls
 */
contextMenu.prototype.removeClass = function (obj, cls) {
    if (this.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {

            if (this.hasClass(obj[i], cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj[i].className = obj[i].className.replace(reg, ' ');
            }
        }
    } else {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }
};
/**
 * 若元素已有样式则移除样式，若没有该样式则添加样式
 * @param obj
 * @param cls
 */
contextMenu.prototype.toggleClass = function (obj, cls) {
    if (this.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            if (this.hasClass(obj[i], cls)) {
                this.removeClass(obj[i], cls);
            } else {
                this.addClass(obj[i], cls);
            }
        }
    } else {
        if (this.hasClass(obj, cls)) {
            this.removeClass(obj, cls);
        } else {
            this.addClass(obj, cls);
        }
    }

};

/**
 * 检查某个对象是否为空(不包含任何属性)。
 * @param obj
 * @returns {boolean}
 */
contextMenu.prototype.isEmptyObject = function (obj) {
    ///	<summary>
    ///		检查某个对象是否为空(不包含任何属性)。
    ///	</summary>
    ///	<param name="obj" type="Object">
    ///		将检查其是否为空的对象。
    ///	</param>
    ///	<returns type="Boolean" />

    for (var name in obj) {
        return false;
    }
    return true;
};