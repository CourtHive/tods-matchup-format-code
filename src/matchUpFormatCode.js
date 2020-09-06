/*
 * TODO: if the final set is NOT different then don't include in string
 */

const SET = 'SET';
const NOAD = 'NOAD';
const TIMED = 'timed';
const FINAL = 'final';
const NORMAL = 'normal';
const setTypes = {
   'S': NORMAL, 
   'F': FINAL
};

export const matchUpFormatCode = function() {
   let fx = {};

   fx.stringify = (matchformatobject) => {
      if (matchformatobject && typeof matchformatobject === 'object') {
         if (matchformatobject.timed && !isNaN(matchformatobject.minutes)) return timedFormat(matchformatobject);
         if (matchformatobject.bestOf && matchformatobject.setFormat) return getSetFormat(matchformatobject);
      }
   };

   function timedFormat(matchformatobject) {
      return `T${matchformatobject.minutes}`;
   }

   function getSetFormat(matchformatobject) {
      let bestOfValue = getNumber(matchformatobject.bestOf);
      let bestOfCode = (bestOfValue && `${SET}${bestOfValue}`) || '';
      let setCountValue = stringifySet(matchformatobject.setFormat);
      let setCode = (setCountValue && `S:${setCountValue}`) || '';
      let finalSetCountValue = stringifySet(matchformatobject.finalSetFormat);
      let finalSetCode = (bestOfValue > 1 && finalSetCountValue && !finalSetCountValue.invalid && `F:${finalSetCountValue}`) || '';
      let valid = bestOfCode && (setCountValue && !setCountValue.invalid) && (!finalSetCountValue || !finalSetCountValue.invalid);

      if (valid) {
         return [bestOfCode, setCode, finalSetCode].filter(f=>f).join('-');
      }
   }

   function stringifySet(setobject) {
      if (setobject) {
         if (typeof setobject === 'object') {
            if (setobject.tiebreakSet) return tiebreakFormat(setobject.tiebreakSet);
            let setToValue = getNumber(setobject.setTo);
            if (setToValue) {
               let NoAD = (setobject.NoAD && NOAD) || '';
               let setTiebreakValue = tiebreakFormat(setobject.tiebreakFormat);
               let setTiebreakCode = (setTiebreakValue && !setTiebreakValue.invalid && `/${setTiebreakValue}`) || '';;
               let tiebreakAtValue = getNumber(setobject.tiebreakAt);
               let tiebreakAtCode = (tiebreakAtValue && tiebreakAtValue !== setToValue && `@${tiebreakAtValue}`) || '';
               let valid = (!setTiebreakValue || !setTiebreakValue.invalid);
               if (valid) {
                  return `${setToValue}${NoAD}${setTiebreakCode}${tiebreakAtCode}`;
               } else {
                  return { invalid: true }
               }
            } else {
               return { invalid: true }
            }
         }
      }
   }

   function tiebreakFormat(tieobject) {
      if (tieobject) {
         if (typeof tieobject === 'object' && !tieobject.tiebreakTo) {
            return '';
         } else if (typeof tieobject === 'object' && getNumber(tieobject.tiebreakTo)) {
            return `TB${tieobject.tiebreakTo}${tieobject.NoAD ? NOAD : ''}`;
         } else {
            return { invalid: true }
         }
      }
   }

   fx.parse = (matchformatcode) => {
      if (matchformatcode && typeof matchformatcode === 'string') {
         let type = matchformatcode.indexOf('T') === 0 ? 'timed' : matchformatcode.indexOf(SET) === 0 ? SET : '';
         if (type === TIMED) return timedMatch(matchformatcode);
         if (type === SET) return setsMatch(matchformatcode);
      }
   };

   function setsMatch(formatstring) {
      let parts = formatstring.split('-');

      let bestOf = getNumber(parts[0].slice(3));
      let setFormat = parts && parseSetFormat(parts[1]);
      let finalSetFormat = parts && parseSetFormat(parts[2]);

      let validBestOf = bestOf && bestOf < 6;
      let validFinalSet = !parts[2] || (finalSetFormat && !finalSetFormat.invalid);
      let validSetsFormat = setFormat && !setFormat.invalid;

      let result = { bestOf, setFormat };
      if (finalSetFormat) result.finalSetFormat = finalSetFormat;
      if (validBestOf && validSetsFormat && validFinalSet) return result;
   }

   function parseSetFormat(formatstring) {
      if (formatstring && formatstring[1] === ':') {
         let parts = formatstring.split(':');
         let setType = setTypes[parts[0]];
         let setFormatString = parts[1];
         if (setType && setFormatString) {
            let tiebreakSet = setFormatString.indexOf('TB') === 0;
            if (tiebreakSet) return { tiebreakSet: parseTiebreakFormat(setFormatString) };
            let parts = formatstring.match(/^[FS]{1}:(\d+)([A-Za-z]*)/);
            let NoAD = (parts && isNoAD(parts[2])) || false;
            let validNoAD = (!parts || !parts[2]) || NoAD;
            let setTo = parts && getNumber(parts[1]);
            let tiebreakAtValue = parseTiebreakAt(setFormatString);
            let validTiebreakAt = !tiebreakAtValue || (tiebreakAtValue && !tiebreakAtValue.invalid);
            let tiebreakAt = (validTiebreakAt && tiebreakAtValue) || setTo;
            let tiebreakFormat = parseTiebreakFormat(setFormatString.split('/')[1]);
            let validTiebreak = !tiebreakFormat || !tiebreakFormat.invalid;
            let result = { setTo };
            if (NoAD) result.NoAD = true;
            if (tiebreakFormat) {
               result.tiebreakFormat = tiebreakFormat;
               result.tiebreakAt = tiebreakAt;
            } else {
               result.noTiebreak = true;
            }
            return (setTo && validNoAD && validTiebreak && validTiebreakAt && result) || { invalid: true }
         }
      }
   }

   function parseTiebreakAt(setFormatString) {
      let tiebreakAtValue = setFormatString && setFormatString.indexOf('@') > 0 && setFormatString.split('@');
      if (tiebreakAtValue) {
         let tiebreakAt = getNumber(tiebreakAtValue[1]);
         return tiebreakAt || { invalid: true }
      }
   }

   function parseTiebreakFormat(formatstring) {
      if (formatstring) {
         if (formatstring.indexOf('TB') === 0) {
            let parts = formatstring.match(/^TB(\d+)([A-Za-z]*)/);
            let tiebreakToString = parts && parts[1];
            let NoAD = parts && isNoAD(parts[2]);
            let validNoAD = (!parts || !parts[2]) || NoAD;
            let tiebreakTo = getNumber(tiebreakToString);
            if (tiebreakTo && validNoAD) {
               let result = { tiebreakTo };
               if (NoAD) result.NoAD = true;
               return result;
            } else {
               return { invalid: true }
            }
         } else {
            return { invalid: true }
         }
      }
   }

   function timedMatch(formatstring) {
      let timestring = formatstring.slice(1);
      let minutes = getNumber(timestring);
      if (minutes) return { timed: true, minutes };
   }

   function isNoAD(formatstring) {
      return formatstring && formatstring.indexOf(NOAD) >= 0;
   }

   function getNumber(formatstring) {
      return !isNaN(Number(formatstring)) && Number(formatstring);
   }

   return fx;

}();
