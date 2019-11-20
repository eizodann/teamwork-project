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

var GifModel =
/*#__PURE__*/
function () {
  function GifModel() {
    _classCallCheck(this, GifModel);
  }

  _createClass(GifModel, null, [{
    key: "createGif",
    value: function createGif(title, url, authorId) {
      var values, response;
      return regeneratorRuntime.async(function createGif$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              values = [title, url, authorId];
              _context.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('INSERT INTO gifs(title, imageurl, authorid) VALUES($1,$2, $3) RETURNING *', values)["catch"](function (error) {
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
    key: "deleteGif",
    value: function deleteGif(id, authorId) {
      var values;
      return regeneratorRuntime.async(function deleteGif$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              values = [id, authorId];
              _context2.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('DELETE FROM gifs WHERE gifid = $1 AND authorid = $2', values)["catch"](function (error) {
                throw new Error(error.message);
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getGif",
    value: function getGif(id) {
      var value, response;
      return regeneratorRuntime.async(function getGif$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              value = [id];
              _context3.next = 3;
              return regeneratorRuntime.awrap(_DB["default"].query('SELECT * FROM gifs WHERE gifid = $1', value)["catch"](function (error) {
                throw new _errorhandler["default"](error.message, 400);
              }));

            case 3:
              response = _context3.sent;

              if (response) {
                _context3.next = 6;
                break;
              }

              throw new _errorhandler["default"]('Gif does not exist', 404);

            case 6:
              return _context3.abrupt("return", response);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return GifModel;
}();

var _default = GifModel;
exports["default"] = _default;