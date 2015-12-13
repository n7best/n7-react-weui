'use strict';

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md = new _mobileDetect2.default(window.navigator.userAgent);

module.exports = {
  iOSVer: md.version('iOS') ? md.version('iOS') : null,
  androidVer: md.version('Android') ? md.version('Android') : null,
  isIOS: md.os() === 'iOS',
  isIOS8: md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 8 && parseFloat(md.version('iOS')) <= 9,
  isIOS9: md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 9 && parseFloat(md.version('iOS')) <= 10,
  isAndroid: md.os() === 'AndroidOS',
  isWindow: md.os() === 'WindowsMobileOS' || md.os() === 'WindowsPhoneOS',
  isMobile: md.mobile() !== null ? true : false,
  isWechat: md.is('MicroMessenger')
};