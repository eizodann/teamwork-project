"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gif = _interopRequireDefault(require("../models/gif"));

var _errorhandler = _interopRequireDefault(require("../ErrorHandler/errorhandler"));

var _comment = _interopRequireDefault(require("../models/comment"));

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

var GifController =
/*#__PURE__*/
function () {
  function GifController() {
    _classCallCheck(this, GifController);
  }

  _createClass(GifController, null, [{
    key: "createGif",
    value: function createGif(req, res, next) {
      var gif, message, data;
      return regeneratorRuntime.async(function createGif$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_gif["default"].createGif(req.body.title, req.url, req.auth.userId));

            case 3:
              gif = _context.sent;

              if (gif) {
                _context.next = 6;
                break;
              }

              throw new _errorhandler["default"]('something bad happened', 400);

            case 6:
              message = 'GIF image successfully posted';
              data = _objectSpread({}, gif, {
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
    key: "getSpecificGif",
    value: function getSpecificGif(req, res, next) {
      var gif, comment, comments, data;
      return regeneratorRuntime.async(function getSpecificGif$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_gif["default"].getGif(req.params.id));

            case 3:
              gif = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(_comment["default"].getGifComments(gif.gifid));

            case 6:
              comment = _context2.sent;
              comments = _toConsumableArray(comment);
              data = _objectSpread({}, gif, {
                comments: comments
              });
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "deleteGif",
    value: function deleteGif(req, res, next) {
      var data;
      return regeneratorRuntime.async(function deleteGif$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_gif["default"].deleteGif(req.params.id, req.auth.userId));

            case 3:
              data = {
                message: 'gif post successfully deleted'
              };
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              next(_context3.t0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }]);

  return GifController;
}();

var _default = GifController;
exports["default"] = _default;