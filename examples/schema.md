# Schema 1.0.0

## Table of Contents

* [1. Channels](#1.-channels)
    * [1.1. dummy](#1.1.-dummy)
* [2. Messages](#2.-messages)
    * [2.1. Numeric](#2.1.-numeric)
    * [2.2. String](#2.2.-string)
    * [2.3. Array](#2.3.-array)
    * [2.4. Object](#2.4.-object)
    * [2.5. Items](#2.5.-items)
    * [2.6. Properties](#2.6.-properties)
    * [2.7. Combinations](#2.7.-combinations)
    * [2.8. Conditionals](#2.8.-conditionals)

# 1. Channels

## 1.1. dummy

### 1.1.1. Messages

Operation|Message|Description
---------|-------|-----------
*subscribe*|`Numeric`|
*subscribe*|`String`|
*subscribe*|`Array`|
*subscribe*|`Object`|
*subscribe*|`Items`|
*subscribe*|`Properties`|
*subscribe*|`Combinations`|
*subscribe*|`Conditionals`|

### 1.1.2. As Subscriber

dummy

# 2. Messages

## 2.1. Numeric

### 2.1.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`range`|`integer`|`int32`|||Minimum: `0`<br />Maximum: `10`
`exclusive`|`integer`|`int32`|||Exclusive minimum: `50`<br />Exclusive maximum: `100`
`multiple`|`number`|`double`|||Multiple of: `7`

## 2.2. String

### 2.2.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`length`|`string`||||Minimum length: `1`<br />Maximum length: `15`
`format`|`string`|`date-time`|||
`pattern`|`string`||||Pattern: `^[\w\d\-\_]+$`

## 2.3. Array

### 2.3.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
*-*|`array`||||Minimum items: `1`<br />Maximum items: `5`<br />Unique items: `true`

## 2.4. Object

### 2.4.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`protocol`|`string`||`HTTP`<br />`HTTPS`|`HTTPS`|Protocol.<br />Name of the protocol to be used.<br />**deprecated**
`port`|`integer`|`int32`|||Port number.<br />**required**
`url`|`string`||||URL.<br />Examples:<br />- dev.example.com<br />- pro.example.com<br />**required**
`user`|`object`||||User.
`user`.`name`|`string`||||Name.
`user`.`surname`|`string`||||Surname.
`user`.`token`|`string`||||Write only: `true`
`region`|`string`||`EU`||Region.<br />Read only: `true`

## 2.5. Items

### 2.5.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`simple`|`array`||||Array of strings.
`simple`[]|`string`||||
`tuple`|`array`||||Array of tuples.
`tuple`[0]|`string`||||
`tuple`[1]|`integer`||||
`tuple`[2]|`string`||||
`extra`|`array`||||Array of strings with additional numeric items.
`extra`[]|`string`||||
`extra`[...]|`integer`||||
`contains`|`array`||||Array with one or more elements matching some schema.
`contains`[*]|`string`|`date`|||

## 2.6. Properties

### 2.6.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`sized`|`object`||||Minimum properties: `1`<br />Maximum properties: `5`
`additional`|`object`||||Object with additional properties.
`additional`.`name`|`string`||||
`additional`.`surname`|`string`||||
`additional`.`age`|`integer`||||
`blocked`|`object`||||Object with fixed properties.<br />Additional properties: `false`
`blocked`.`name`|`string`||||
`blocked`.`surname`|`string`||||
`named`|`object`||||Object with property names matching some pattern.<br />Property names pattern: `^[\w\d\-\_]+$`
`properties`|`object`||||Object with properties matching some patterns.
`properties`.`^S+$`|`string`||||
`properties`.`^I+$`|`integer`||||

## 2.7. Combinations

### 2.7.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`allOf`|`integer`<br /><br />*All of* (2)||||Matches all the given schemas.
*All Of* [1]|`integer`|`int32`|||
*All Of* [2]|`integer`|`int64`|||
`oneOf`|*One of* (2)||||Matches exactly one schema.
*One Of* [1]|`string`||||
*One Of* [2]|`integer`||||
`anyOf`|`object`<br />`string`<br /><br />*Any of* (2)||||Matches one or more schemas.
*Any Of* [1]|`object`||||
*Any Of* [1].`name`|`string`||||
*Any Of* [1].`surname`|`string`||||
*Any Of* [2]|`string`||||
`not`|*Not*||||Doesn't match the given schema.
*Not*|`string`||||

## 2.8. Conditionals

### 2.8.1. Payload

Name|Type|Format|Allowed|Default|Description
----|----|------|-------|-------|-----------
`address`|`object`<br /><br />*If*<br />*Then*<br />*Else*||||Address object with a conditional postal code property.
`address`.`street`|`string`||||
`address`.`country`|`string`||||
*If*|`object`||||
*If*.`country`|`string`||`USA`||
*Then*|`object`||||
*Then*.`postalCode`|`string`||||Pattern: `^[0-9]{5}(-[0-9]{4})?$`
*Else*|`object`||||
*Else*.`postalCode`|`string`||||Pattern: `^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$`

---

*AsyncAPI* *2.0.0*
