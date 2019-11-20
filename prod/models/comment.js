"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DB = _interopRequireDefault(require("../DB"));

var _errorhandler = _interopRequireDefault(require("../ErrorHandler/errorhandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommentModel =
/*#__PURE__*/
function () {
  function CommentModel() {
    _classCallCheck(this, CommentModel);
  }

  _createClass(CommentModel, null, [{
    key: "createCommentArticle",
    value: function createCommentArticle(comment, articleId, authorId) {
      var values, response;
      return regeneratorRuntime.async(function createCommentArticle$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              values = [comment, articleId, authorId];
              _context.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('INSERT INTO comments_articles(comment, articleid, authorid) VALUES($1,$2, $3) RETURNING *', values)["catch"](function (error) {
                throw new _errorhandler["default"](error.message, 400);
              }));

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "createCommentGif",
    value: function createCommentGif(comment, gifId, authorId) {
      var values, response;
      return regeneratorRuntime.async(function createCommentGif$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              values = [comment, gifId, authorId];
              _context2.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('INSERT INTO comments_gifs(comment, gifid, authorid) VALUES($1,$2, $3) RETURNING *', values)["catch"](function (error) {
                throw new _errorhandler["default"](error.message, 400);
              }));

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getArticleComments",
    value: function getArticleComments(articleid) {
      var value, response;
      return regeneratorRuntime.async(function getArticleComments$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              value = [articleid];
              _context3.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('SELECT * FROM comments_articles WHERE articleid = $1', value, true)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 3:
              response = _context3.sent;

              if (response) {
                _context3.next = 6;
                break;
              }

              throw new _errorhandler["default"]('comments not found', 404);

            case 6:
              return _context3.abrupt("return", response);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "getGifComments",
    value: function getGifComments(gifid) {
      var value, response;
      return regeneratorRuntime.async(function getGifComments$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              value = [gifid];
              _context4.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('SELECT * FROM comments_gifs WHERE gifid = $1', value, true)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 3:
              response = _context4.sent;

              if (response) {
                _context4.next = 6;
                break;
              }

              throw new _errorhandler["default"]('comments not found', 404);

            case 6:
              return _context4.abrupt("return", response);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return CommentModel;
}();

var _default = CommentModel;
exports["default"] = _default;