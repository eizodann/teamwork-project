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

var CreateArticle =
/*#__PURE__*/
function () {
  function CreateArticle() {
    _classCallCheck(this, CreateArticle);
  }

  _createClass(CreateArticle, null, [{
    key: "createArticle",
    value: function createArticle(_ref, authorId) {
      var title, article, values, response;
      return regeneratorRuntime.async(function createArticle$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              title = _ref.title, article = _ref.article;
              values = [title, article, authorId];
              _context.next = 4;
              return regeneratorRuntime.awrap(_DB["default"].query('INSERT INTO articles(title, article, authorid) VALUES($1,$2, $3) RETURNING *', values)["catch"](function (error) {
                throw new _errorhandler["default"](error.message, 400);
              }));

            case 4:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getArticle",
    value: function getArticle(id) {
      var values, response;
      return regeneratorRuntime.async(function getArticle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              values = [id];
              _context2.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('SELECT * FROM articles WHERE articleid = $1', values)["catch"](function (error) {
                throw new _errorhandler["default"](error.message, 400);
              }));

            case 3:
              response = _context2.sent;

              if (response) {
                _context2.next = 6;
                break;
              }

              throw new Error('Article does not exist');

            case 6:
              return _context2.abrupt("return", response);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "EditArticle",
    value: function EditArticle(_ref2, id, authorId) {
      var title, article, values, response;
      return regeneratorRuntime.async(function EditArticle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              title = _ref2.title, article = _ref2.article;
              values = [title, article, id, authorId];
              _context3.next = 4;
              return regeneratorRuntime.awrap(_DB["default"].query('UPDATE articles SET title = $1, article = $2 WHERE articleid = $3 AND authorid = $4 RETURNING *', values)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 4:
              response = _context3.sent;
              return _context3.abrupt("return", response);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "DeleteArticle",
    value: function DeleteArticle(id, authorId) {
      var values;
      return regeneratorRuntime.async(function DeleteArticle$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              values = [id, authorId];
              _context4.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('DELETE FROM articles WHERE articleid = $1 AND authorid = $2', values)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "getAllArticles",
    value: function getAllArticles() {
      var response;
      return regeneratorRuntime.async(function getAllArticles$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_DB["default"].query('SELECT * FROM articles ORDER BY articleid DESC', '', true)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 2:
              response = _context5.sent;
              return _context5.abrupt("return", response);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "getSpecificArticle",
    value: function getSpecificArticle(id) {
      var value, response;
      return regeneratorRuntime.async(function getSpecificArticle$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              value = [id];
              _context6.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('SELECT * FROM articles WHERE articleid = $1', value)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 3:
              response = _context6.sent;

              if (response) {
                _context6.next = 6;
                break;
              }

              throw new _errorhandler["default"]('Article not found', 404);

            case 6:
              return _context6.abrupt("return", response);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }]);

  return CreateArticle;
}();

var _default = CreateArticle;
exports["default"] = _default;