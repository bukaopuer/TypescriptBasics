define("components/Header", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerHTML = 'this is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
});
define("components/Content", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerHTML = 'this is content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
});
define("components/Foot", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerHTML = 'this is footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("pagge", ["require", "exports", "components/Header", "components/Content", "components/Foot"], function (require, exports, Header_1, Content_1, Foot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new Header_1.Header();
            new Content_1.Content();
            new Foot_1.Footer();
        }
        return Page;
    }());
    exports.Page = Page;
});
