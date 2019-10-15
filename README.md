# MMM-Vrr and more Areas

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Displays the next departure times of Trains, subway and Buses from any city and station in the german federal state North Rhine-Westphalia (VRR).

This module was intended for VRR, but it also supports the [following](#efa) Areas.


![displayType detail](mmm-vrr-table.png) &nbsp;&nbsp; ![displayType digital](mmm-vrr.png)


## Installation

1. Navigate into your MagicMirror's `modules` folder.
1. Execute `git clone https://github.com/Klizzy/MMM-Vrr.git`.
1. Execute `cd MMM-Vrr`.
1. Execute `npm install`.

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```
{
    module: 'MMM-Vrr',
    position: "top_right",
    config: {
        city: 'Düsseldorf',
        station: 'Hauptbahnhof',
        numberOfResults: 10,
        displayTimeOption: 'countdown',
        displayType: 'detail'
    }
}  
```
## Configuration options

| Option           | Description | Options |
|----------------- |---|---
| `city`           | *Required* German City Name <br><br>**Type:** `String` (**default**: Düsseldorf) | Any City Name in North Rhine-Westphalia
| `station`        | *Required* German Station Name <br><br>**Type:** `String` (**default**: Hauptbahnhof) | Any Station Name in North Rhine-Westphalia
| `numberOfResults`| *Optional* Number of results to be displayed <br><br>**Type:** `Int` (**default**: 10) | *
| `displayType`| *Optional* Changes the display type <br><br>**Type:** `String` (**default**: 'detail') | `'detail'`, `'lcd'`
| `displayIcons`   | *Optional* Display fontawsome icons <br><br>**Type:** `boolean` (**default**: true) | `false`
| `updateInterval` | *Optional* Sets the Update Interval int <br><br>**Type:** `int`(milliseconds) <br> **Default** 60000 milliseconds (1 minute) | * (API result is always cached for 1 Min)
| `displayTimeOption` | *Optional* Changes the type of time <br><br>**Type:** `String` (**default**: 'countdown') | `'time'`, `'time+countdown'`, `'countdown'`
| `setWidth`| *Optional* Sets the width of the module in pixel <br><br>**Type:** `int` (**default**: false) | Any posible size like: `450`
| `lcdWidth` | *Optional* Sets the width of the lcd display type <br><br>**Type:** `int` (**default**: 450) | any possible size
| `scrollAfter` | *Optional* Scrolls the destination text after the specified characters <br><br>**Type:** `int` (**default**: false) | any possible size or `false`
| `line` | *Optional* Only show lines that start with the given string. Supports multiple strings, separated by comma (","). <br><br>**Type:** `string` (**default**: empty (i.e., show all lines)) | any possible string (e.g., "RB33,U")

## Supported Languages

Currently only `de` and `en` is supported. Gets the Value from the Global Magic Mirror language config.

## "LCD" Display

![lcd](mmm-vrr.png)</br>
This option can be set if ```displayType: 'lcd'``` is added. Here, no delays, icons or absolute times are shown.


## Visualization of the scrollAfter option

If you set `scrollAfter:15`, the text will be scrolled horizontally if it has 15 or more characters.

![Auto scroll](scrollAfter.gif)

## <a name="efa"></a> EFA Support for other Areas

**Please keep in mind, that everything besides VRR is not full supported.**

Possible Side effects for not VRR Areas:
* Icons don't match correctly
* not all configured transport types hide correctly

**Partly supported Areas:**
* ASEAG
* BSVG
* DING
* IVB
* KVV
* LinzAG
* NVBW
* SVV
* TLEM
* VBL
* VGN
* VMV
* VOR
* VRN
* VVO
* VVS
* VVV
* BVG
* DB
* NAHSH
* NASA
* NVV
* RSAG
* SBB
* VBB
* VBN
* ÖBB

## Feedback

Its my first Open Source Project, so it would be nice if you share your experience with this module with me <a href="mailto:steven.zemelka@gmail.com">steven.zemelka@gmail.com</a>!
Feel free to suggest additional features and / or improvements. 

## Changelog

#### Version 1.0

* initial release

#### Version 1.1

* added some additional configuration to set a custom width
* added the option to scroll the destination text horizontally

#### Version 1.2

* now displays delays

#### Version 1.5

* delay bugfix and styling changes
* rail track is now displayed
* added additional display type

#### Version 1.5.1

* fix for Issue #3 scrollAfter and displayType lcd
