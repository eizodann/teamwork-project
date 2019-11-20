"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _index = _interopRequireDefault(require("../DB/index"));

var _errorhandler = _interopRequireDefault(require("../ErrorHandler/errorhandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmployeeModel =
/*#__PURE__*/
function () {
  function EmployeeModel() {
    _classCallCheck(this, EmployeeModel);
  }

  _createClass(EmployeeModel, null, [{
    key: "createEmployee",
    value: function createEmployee(_ref) {
      var firstname, lastname, password, email, address, department, jobrole, gender, hashedPassword, values, response;
      return regeneratorRuntime.async(function createEmployee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              firstname = _ref.firstname, lastname = _ref.lastname, password = _ref.password, email = _ref.email, address = _ref.address, department = _ref.department, jobrole = _ref.jobrole, gender = _ref.gender;
              _context.next = 3;
              return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, 10));

            case 3:
              hashedPassword = _context.sent;
              values = [email, firstname, lastname, department, gender, jobrole, address, hashedPassword];
              _context.next = 7;
              return regeneratorRuntime.awrap(_index["default"].query('INSERT INTO employees (email, firstname, lastname, department, gender, jobrole, address, password) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', values)["catch"](function (error) {
                throw new _errorhandler["default"](error.message, 400);
              }));

            case 7:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getUserEmail",
    value: function getUserEmail(email) {
      var value, response;
      return regeneratorRuntime.async(function getUserEmail$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              value = [email];
              _context2.next = 3;
              return regeneratorRuntime.awrap(_index["default"].query('SELECT * FROM employees WHERE email = $1', value)["catch"](function (err) {
                throw new _errorhandler["default"](err.message, 400);
              }));

            case 3:
              response = _context2.sent;

              if (response) {
                _context2.next = 6;
                break;
              }

              throw new _errorhandler["default"]('User email not found', 404);

            case 6:
              return _context2.abrupt("return", response);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return EmployeeModel;
}();

var _default = EmployeeModel;
exports["default"] = _default;