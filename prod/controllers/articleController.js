"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _article = _interopRequireDefault(require("../models/article"));

var _comment = _interopRequireDefault(require("../models/comment"));

var _errorhandler = _interopRequireDefault(require("../ErrorHandler/errorhandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArticleController =
/*#__PURE__*/
function () {
  function ArticleController() {
    _classCallCheck(this, ArticleController);
  }

  _createClass(ArticleController, null, [{
    key: "createArticle",
    value: function createArticle(req, res, next) {
      var article, message, data;
      return regeneratorRuntime.async(function createArticle$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_article["default"].createArticle(req.body, req.auth.userId));

            case 3:
              article = _context.sent;

              if (article) {
                _context.next = 6;
                break;
              }

              throw new _errorhandler["default"]('something bad happened', 400);

            case 6:
              message = 'Article successfully posted';
              data = _objectSpread({}, article, {
                message: message
              });
              res.status(201).json({
                status: 'success',
                data: data
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "editArticle",
    value: function editArticle(req, res, next) {
      var article, message, data;
      return regeneratorRuntime.async(function editArticle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_article["default"].getArticle(req.params.id));

            case 3:
              _context2.next = 5;
              return regeneratorRuntime.awrap(_article["default"].EditArticle(req.body, req.params.id, req.auth.userId));

            case 5:
              article = _context2.sent;
              message = 'Article successfully updated';
              data = _objectSpread({}, article, {
                message: message
              });
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "deleteArticle",
    value: function deleteArticle(req, res, next) {
      var data;
      return regeneratorRuntime.async(function deleteArticle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_article["default"].getArticle(req.params.id));

            case 3:
              _context3.next = 5;
              return regeneratorRuntime.awrap(_article["default"].DeleteArticle(req.params.id, req.auth.userId));

            case 5:
              data = {
                message: 'Article successfully deleted'
              };
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              next(_context3.t0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "getArticles",
    value: function getArticles(req, res, next) {
      var articles, data;
      return regeneratorRuntime.async(function getArticles$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return regeneratorRuntime.awrap(_article["default"].getAllArticles());

            case 3:
              articles = _context4.sent;
              data = _toConsumableArray(articles);
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              next(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "getSpecificArticle",
    value: function getSpecificArticle(req, res, next) {
      var article, comment, comments, data;
      return regeneratorRuntime.async(function getSpecificArticle$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return regeneratorRuntime.awrap(_article["default"].getSpecificArticle(req.params.id));

            case 3:
              article = _context5.sent;
              _context5.next = 6;
              return regeneratorRuntime.awrap(_comment["default"].getArticleComments(article.articleid));

            case 6:
              comment = _context5.sent;
              comments = _toConsumableArray(comment);
              data = _objectSpread({}, article, {
                comments: comments
              });
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              next(_context5.t0);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }]);

  return ArticleController;
}();

var _default = ArticleController;
exports["default"] = _default;