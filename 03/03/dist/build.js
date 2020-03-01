"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerHTML = 'this is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
})(Components || (Components = {}));
var Components;
(function (Components) {
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerHTML = 'this is content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
})(Components || (Components = {}));
var Components;
(function (Components) {
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerHTML = 'this is footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
//命名空间
/// <reference path="./components/Header.ts" />
/// <reference path="./components/Content.ts" />
/// <reference path="./components/Foot.ts" />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
