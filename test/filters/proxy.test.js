// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const test = require('ava');

const filters = require('../../filters/proxy');

test('proxy schema', t => {
  const schema = { 'type': () => 'foo' };

  t.is(filters.proxy(schema), schema);
});

test('proxy object', t => {
  const object = {
    'uid': '1',
    '$id': '2',
    'multipleOf': 3,
    'maximum': 4,
    'exclusiveMaximum': 5,
    'minimum': 6,
    'exclusiveMinimum': 7,
    'maxLength': 8,
    'minLength': 9,
    'pattern': '10',
    'maxItems': 11,
    'minItems': 12,
    'uniqueItems': false,
    'maxProperties': 13,
    'minProperties': 14,
    'required': ['15', '16'],
    'enum': ['17', '18'],
    'type': '19',
    'allOf': [{ 'uid': '20' }],
    'oneOf': [{ 'uid': '21' }],
    'anyOf': [{ 'uid': '22' }],
    'not': { 'uid': '23' },
    'items': { 'uid': '24' },
    'properties': { 'foo': { 'uid': '25' } },
    'additionalProperties': true,
    'additionalItems': { 'uid': '26' },
    'patternProperties': { 'foo': { 'uid': '27' } },
    'const': '28',
    'contains': { 'uid': '29' },
    'dependencies': { 'foo': { 'uid': '30' } },
    'propertyNames': { 'uid': '31' },
    'if': { 'uid': '32' },
    'then': { 'uid': '33' },
    'else': { 'uid': '34' },
    'format': '35',
    'contentEncoding': '36',
    'contentMediaType': '37',
    'definitions': { 'foo': { 'uid': '38' } },
    'description': '39',
    'title': '40',
    'default': '41',
    'deprecated': false,
    'readOnly': false,
    'writeOnly': true,
    'examples': ['42'],
  };

  const schema = filters.proxy(object);
  t.is(schema.uid(), object.uid);
  t.is(schema.$id(), object.$id);
  t.is(schema.multipleOf(), object.multipleOf);
  t.is(schema.maximum(), object.maximum);
  t.is(schema.exclusiveMaximum(), object.exclusiveMaximum);
  t.is(schema.minimum(), object.minimum);
  t.is(schema.exclusiveMinimum(), object.exclusiveMinimum);
  t.is(schema.maxLength(), object.maxLength);
  t.is(schema.minLength(), object.minLength);
  t.is(schema.pattern(), object.pattern);
  t.is(schema.maxItems(), object.maxItems);
  t.is(schema.minItems(), object.minItems);
  t.is(schema.uniqueItems(), object.uniqueItems);
  t.is(schema.maxProperties(), object.maxProperties);
  t.is(schema.minProperties(), object.minProperties);
  t.is(schema.required(), object.required);
  t.is(schema.enum(), object.enum);
  t.is(schema.type(), object.type);
  t.is(schema.allOf()[0].uid(), object.allOf[0].uid);
  t.is(schema.oneOf()[0].uid(), object.oneOf[0].uid);
  t.is(schema.anyOf()[0].uid(), object.anyOf[0].uid);
  t.is(schema.not().uid(), object.not.uid);
  t.is(schema.items().uid(), object.items.uid);
  t.is(schema.properties().foo.uid(), object.properties.foo.uid);
  t.is(schema.additionalProperties(), object.additionalProperties);
  t.is(schema.additionalItems().uid(), object.additionalItems.uid);
  t.is(schema.patternProperties().foo.uid(), object.patternProperties.foo.uid);
  t.is(schema.const(), object.const);
  t.is(schema.contains().uid(), object.contains.uid);
  t.is(schema.dependencies().foo.uid(), object.dependencies.foo.uid);
  t.is(schema.propertyNames().uid(), object.propertyNames.uid);
  t.is(schema.if().uid(), object.if.uid);
  t.is(schema.then().uid(), object.then.uid);
  t.is(schema.else().uid(), object.else.uid);
  t.is(schema.format(), object.format);
  t.is(schema.contentEncoding(), object.contentEncoding);
  t.is(schema.contentMediaType(), object.contentMediaType);
  t.is(schema.definitions().foo.uid(), object.definitions.foo.uid);
  t.is(schema.description(), object.description);
  t.is(schema.title(), object.title);
  t.is(schema.default(), object.default);
  t.is(schema.deprecated(), object.deprecated);
  t.is(schema.discriminator(), object.discriminator);
  t.is(schema.readOnly(), object.readOnly);
  t.is(schema.writeOnly(), object.writeOnly);
  t.is(schema.examples(), object.examples);
  t.is(schema.json(), object);
});

test('proxy object overrides', t => {
  const object = {
    'type': ['1', '2'],
    'items': [{ 'uid': '3' }],
    'additionalItems': { 'uid': '4' },
    'dependencies': { 'foo': ['5', '6'] },
  };

  const schema = filters.proxy(object);
  t.is(schema.type(), object.type);
  t.is(schema.items()[0].uid(), object.items[0].uid);
  t.is(schema.additionalItems().uid(), object.additionalItems.uid);
  t.is(schema.dependencies().foo, object.dependencies.foo);
});
