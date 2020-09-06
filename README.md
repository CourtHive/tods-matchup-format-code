# [TODS MatchUp Format Code](https://itftennis.atlassian.net/wiki/spaces/TODS/pages/1272840309/MatchUp+Format+Code)

The **[Tennis Open Data Standards](https://itftennis.atlassian.net/wiki/spaces/TODS/pages/1272840309/MatchUp+Format+Code)** MatchUp Format Codes provide a concise way of describing methods for scoring tennis matches that is both human and machine readble.

```SET3-S:6/TB7``` is the TODS representation for "Best 2 Out Of 3 Sets (Win By Two) 6 games with Tiebreak to 7"

## Installation

```npm install tods-matchup-format-code```

## Use

```js
import { matchUpFormatCode } from 'tods-matchup-format-code'

let parsedCode = matchUpFormatCode.parse('SET3-S:6/TB7');
```

## matchUpFormatCode.parse()

Converts a TODS MatchUp Format Code into JSON

Parsing 'SET3-S:6/TB7' results in:

```js
{
  bestOf: 3,
  setFormat: { setTo: 6, tiebreakFormat: { tiebreakTo: 7 }, tiebreakAt: 6 }
}
```

## matchUpFormatCode.stringify()

Converts compliant JSON into a TODS MatchUp Format Code, the reverse of the ***.parse()*** method.
