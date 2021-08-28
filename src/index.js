import { isValidMatchUpFormat } from './isValidMatchUpFormat';
import { stringify } from './stringify';
import { parse } from './parse';

const matchUpFormatCode = (function() {
  return {
    stringify: matchUpFormatObject => stringify(matchUpFormatObject),
    parse: matchUpFormat => parse(matchUpFormat),
    isValidMatchUpFormat: matchUpFormat => isValidMatchUpFormat(matchUpFormat)
  };
})();

exports.matchUpFormatCode = matchUpFormatCode;
