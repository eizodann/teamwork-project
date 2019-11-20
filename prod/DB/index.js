"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _helper = _interopRequireDefault(require("../Utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pool = new _pg.Pool({
  connectionString: _helper["default"].DB
});

var Database =
/*#__PURE__*/
function () {
  function Database() {
    _classCallCheck(this, Database);
  }

  _createClass(Database, null, [{
    key: "query",
    value: function query(_query, value) {
      var isArray,
          response,
          result,
          _args = arguments;
      return regeneratorRuntime.async(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isArray = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
              _context.next = 3;
              return regeneratorRuntime.awrap(pool.query(_query, value));

            case 3:
              response = _context.sent;
              result = isArray ? response.rows : response.rows[0];
              return _context.abrupt("return", result);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Database;
}();

var _default = Database;
exports["default"] = _default;