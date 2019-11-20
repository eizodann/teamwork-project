"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _employees = _interopRequireDefault(require("../models/employees"));

var _jsonWebToken = _interopRequireDefault(require("../middlewares/jsonWebToken"));

var _errorhandler = _interopRequireDefault(require("../ErrorHandler/errorhandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmployeeController =
/*#__PURE__*/
function () {
  function EmployeeController() {
    _classCallCheck(this, EmployeeController);
  }

  _createClass(EmployeeController, null, [{
    key: "createEmployee",
    value: function createEmployee(req, res, next) {
      var employee, token, message, data;
      return regeneratorRuntime.async(function createEmployee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_employees["default"].createEmployee(req.body));

            case 3:
              employee = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(_jsonWebToken["default"].generateToken({
                userId: employee.userid,
                email: employee.email,
                isAdmin: employee.jobrole
              }));

            case 6:
              token = _context.sent;
              message = 'user account successfully created';
              data = {
                message: message,
                token: token,
                userId: employee.userid
              };
              res.status(201).json({
                status: 'success',
                data: data
              });
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "signInEmployee",
    value: function signInEmployee(req, res, next) {
      var _req$body, email, password, employee, token, isPassword, data;

      return regeneratorRuntime.async(function signInEmployee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(_employees["default"].getUserEmail(email));

            case 4:
              employee = _context2.sent;
              token = _jsonWebToken["default"].generateToken({
                isAdmin: employee.jobrole,
                email: employee.email,
                userId: employee.userid
              });
              _context2.next = 8;
              return regeneratorRuntime.awrap(_bcrypt["default"].compare(password, employee.password));

            case 8:
              isPassword = _context2.sent;

              if (isPassword) {
                _context2.next = 11;
                break;
              }

              throw new _errorhandler["default"]('Incorrect password, please review your password and try again', 400);

            case 11:
              data = {
                userId: employee.userid,
                token: token
              };
              res.status(200).json({
                status: 'success',
                data: data
              });
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              next(_context2.t0);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 15]]);
    }
  }]);

  return EmployeeController;
}();

var _default = EmployeeController;
exports["default"] = _default;