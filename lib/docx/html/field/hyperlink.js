'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uptrim(el) {
	var parent = el.parentNode;
	parent.removeChild(el);
	if (parent.childNodes.length == 0) uptrim(parent);
}

var Hyperlink = function (_Field) {
	(0, _inherits3.default)(Hyperlink, _Field);

	function Hyperlink() {
		(0, _classCallCheck3.default)(this, Hyperlink);
		return (0, _possibleConstructorReturn3.default)(this, (Hyperlink.__proto__ || (0, _getPrototypeOf2.default)(Hyperlink)).apply(this, arguments));
	}

	(0, _createClass3.default)(Hyperlink, [{
		key: 'convert',
		value: function convert(elEnd) {
			var a = this.doc.createElement('a');
			a.href = this.wordModel.getLink();
			elEnd.id = this.doc.uid();

			var current = this.elStart,
			    parent = current.parentNode;
			while (!parent.querySelector('#' + elEnd.id)) {
				current = parent;
				parent = current.parentNode;
			}
			parent.insertBefore(a, current);
			while (a.nextSibling) {
				a.appendChild(a.nextSibling);
			}uptrim(this.elStart);
			uptrim(elEnd);
		}
	}]);
	return Hyperlink;
}(_field2.default);

exports.default = Hyperlink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvZmllbGQvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbInVwdHJpbSIsImVsIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIkh5cGVybGluayIsImVsRW5kIiwiYSIsImRvYyIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwid29yZE1vZGVsIiwiZ2V0TGluayIsImlkIiwidWlkIiwiY3VycmVudCIsImVsU3RhcnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBbUI7QUFDbEIsS0FBSUMsU0FBT0QsR0FBR0UsVUFBZDtBQUNBRCxRQUFPRSxXQUFQLENBQW1CSCxFQUFuQjtBQUNBLEtBQUdDLE9BQU9HLFVBQVAsQ0FBa0JDLE1BQWxCLElBQTBCLENBQTdCLEVBQ0NOLE9BQU9FLE1BQVA7QUFDRDs7SUFDb0JLLFM7Ozs7Ozs7Ozs7MEJBQ1pDLEssRUFBTTtBQUNiLE9BQUlDLElBQUUsS0FBS0MsR0FBTCxDQUFTQyxhQUFULENBQXVCLEdBQXZCLENBQU47QUFDQUYsS0FBRUcsSUFBRixHQUFPLEtBQUtDLFNBQUwsQ0FBZUMsT0FBZixFQUFQO0FBQ0FOLFNBQU1PLEVBQU4sR0FBUyxLQUFLTCxHQUFMLENBQVNNLEdBQVQsRUFBVDs7QUFFQSxPQUFJQyxVQUFRLEtBQUtDLE9BQWpCO0FBQUEsT0FBMEJoQixTQUFPZSxRQUFRZCxVQUF6QztBQUNBLFVBQU0sQ0FBQ0QsT0FBT2lCLGFBQVAsQ0FBcUIsTUFBSVgsTUFBTU8sRUFBL0IsQ0FBUCxFQUEwQztBQUN6Q0UsY0FBUWYsTUFBUjtBQUNBQSxhQUFPZSxRQUFRZCxVQUFmO0FBQ0E7QUFDREQsVUFBT2tCLFlBQVAsQ0FBb0JYLENBQXBCLEVBQXVCUSxPQUF2QjtBQUNBLFVBQU1SLEVBQUVZLFdBQVI7QUFDQ1osTUFBRWEsV0FBRixDQUFjYixFQUFFWSxXQUFoQjtBQURELElBR0FyQixPQUFPLEtBQUtrQixPQUFaO0FBQ0FsQixVQUFPUSxLQUFQO0FBQ0E7Ozs7O2tCQWpCbUJELFMiLCJmaWxlIjoiaHlwZXJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQnXHJcblxyXG5mdW5jdGlvbiB1cHRyaW0oZWwpe1xyXG5cdHZhciBwYXJlbnQ9ZWwucGFyZW50Tm9kZVxyXG5cdHBhcmVudC5yZW1vdmVDaGlsZChlbClcclxuXHRpZihwYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg9PTApXHJcblx0XHR1cHRyaW0ocGFyZW50KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGluayBleHRlbmRzIEZpZWxke1xyXG5cdGNvbnZlcnQoZWxFbmQpe1xyXG5cdFx0dmFyIGE9dGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHRhLmhyZWY9dGhpcy53b3JkTW9kZWwuZ2V0TGluaygpXHJcblx0XHRlbEVuZC5pZD10aGlzLmRvYy51aWQoKVxyXG5cdFx0XHJcblx0XHR2YXIgY3VycmVudD10aGlzLmVsU3RhcnQsIHBhcmVudD1jdXJyZW50LnBhcmVudE5vZGVcclxuXHRcdHdoaWxlKCFwYXJlbnQucXVlcnlTZWxlY3RvcignIycrZWxFbmQuaWQpKXtcclxuXHRcdFx0Y3VycmVudD1wYXJlbnRcclxuXHRcdFx0cGFyZW50PWN1cnJlbnQucGFyZW50Tm9kZVxyXG5cdFx0fVxyXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShhLCBjdXJyZW50KVxyXG5cdFx0d2hpbGUoYS5uZXh0U2libGluZylcclxuXHRcdFx0YS5hcHBlbmRDaGlsZChhLm5leHRTaWJsaW5nKVxyXG5cdFx0XHJcblx0XHR1cHRyaW0odGhpcy5lbFN0YXJ0KVxyXG5cdFx0dXB0cmltKGVsRW5kKVxyXG5cdH1cclxufSJdfQ==