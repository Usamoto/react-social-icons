"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _networks = require("./networks.js");

var _styles = require("./styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getStyle(_ref) {
  var bgColor = _ref.bgColor,
      networkKey = _ref.networkKey;
  return _objectSpread({}, _styles.socialSvgMask, {
    fill: bgColor || (0, _networks.colorFor)(networkKey)
  });
}

function Mask(_ref2) {
  var bgColor = _ref2.bgColor,
      networkKey = _ref2.networkKey,
      rest = _objectWithoutProperties(_ref2, ["bgColor", "networkKey"]);

  return _react.default.createElement("g", _extends({}, rest, {
    className: "social-svg-mask",
    style: getStyle({
      bgColor: bgColor,
      networkKey: networkKey
    })
  }), _react.default.createElement("path", {
    d: (0, _networks.maskFor)(networkKey)
  }));
}

Mask.propTypes = {
  bgColor: _propTypes.default.string,
  networkKey: _propTypes.default.string.isRequired
};
var _default = Mask;
exports.default = _default;