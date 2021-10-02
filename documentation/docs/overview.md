---
title: matchUpFormat
slug: /
---

The **[Tennis Open Data Standards](https://itftennis.atlassian.net/wiki/spaces/TODS/pages/1272840309/MatchUp+Format+Code)** MatchUp Format Codes provide a concise way of describing methods for scoring tennis matches that is both human and machine readable.

`SET3-S:6/TB7` is the TODS representation for "Best 2 Out Of 3 Sets (Win By Two) 6 games with Tiebreak to 7

This package includes two methods to make it easier to work with TODS MatchUp Format Codes in projects related to tennis, by transforming valid format codes into JSON and valid JSON objects back into format codes.

:::note

The goal of the Tennis Open Data Standards (TODS) project is to create a single data exchange framework that allows the transfer of any tennis-related data between different information systems using consistent, agreed formats and methods.

:::

[Interactive Example](../example)

## Installation

```sh
npm install tods-matchup-format-code
```

## Use

```js
import { matchUpFormatCode } from 'tods-matchup-format-code';

let parsedCode = matchUpFormatCode.parse('SET3-S:6/TB7');
```

## Methods

### parse

Converts a TODS MatchUp Format Code into JSON

```js
matchUpFormatCode.parse('SET3-S:6/TB7')

// results in...

{
  bestOf: 3,
  setFormat: { setTo: 6, tiebreakFormat: { tiebreakTo: 7 }, tiebreakAt: 6 }
}
```

Parsing 'SET3-S:6/TB7-F:TB10' results in:

```js
{
  bestOf: 3;
  finalSetFormat: {
    tiebreakSet: {
      tiebreakTo: 10;
    }
  }
  setFormat: {
    setTo: 6;
    tiebreakAt: 6;
    tiebreakFormat: {
      tiebreakTo: 7;
    }
  }
}
```

### stringify

Converts compliant JSON into a TODS MatchUp Format Code, the reverse of the **_.parse()_** method.

```js
machUpFormatCode.stringify(matchUpFormatObject);
```

### isValidMatchUpFormat

Returns **boolean** indicating whether `matchUpFormat` is valid.

```js
matchUpFormatCode.isValidMatchUpFormat('SET3-S:6/TB7');
```
