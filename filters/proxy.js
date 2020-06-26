// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const filters = module.exports;

filters.proxy = (object) => {
  const arrayHandler = (array) =>
    array ? array.map(value => handle(value)) : array;

  const entriesHandler = (object, mapper) =>
    Object.entries(object).map(([key, value]) => [key, mapper(value)]);

  const objectHandler = (object, mapper = handle) =>
    object ? Object.fromEntries(entriesHandler(object, mapper)) : object;

  const handle = (object) => {
    const handler = {
      uid: () => object.uid,
      $id: () => object.$id,
      multipleOf: () => object.multipleOf,
      maximum: () => object.maximum,
      exclusiveMaximum: () => object.exclusiveMaximum,
      minimum: () => object.minimum,
      exclusiveMinimum: () => object.exclusiveMinimum,
      maxLength: () => object.maxLength,
      minLength: () => object.minLength,
      pattern: () => object.pattern,
      maxItems: () => object.maxItems,
      minItems: () => object.minItems,
      uniqueItems: () => object.uniqueItems,
      maxProperties: () => object.maxProperties,
      minProperties: () => object.minProperties,
      required: () => object.required,
      enum: () => object.enum,
      type: () => object.type,
      allOf: () => arrayHandler(object.allOf),
      oneOf: () => arrayHandler(object.oneOf),
      anyOf: () => arrayHandler(object.anyOf),
      not: () => handle(object.not),
      items: () =>
        Array.isArray(object.items) ?
          arrayHandler(object.items) :
          handle(object.items),
      properties: () => objectHandler(object.properties),
      additionalProperties: () =>
        typeof object.additionalProperties === 'boolean' ?
          object.additionalProperties :
          handle(object.additionalProperties),
      additionalItems: () => handle(object.additionalItems),
      patternProperties: () => objectHandler(object.patternProperties),
      const: () => object.const,
      contains: () => handle(object.contains),
      dependencies: () =>
        objectHandler(object.dependencies, (value) =>
          Array.isArray(value) ? value : handle(value)),
      propertyNames: () => handle(object.propertyNames),
      if: () => handle(object.if),
      then: () => handle(object.then),
      else: () => handle(object.else),
      format: () => object.format,
      contentEncoding: () => object.contentEncoding,
      contentMediaType: () => object.contentMediaType,
      definitions: () => objectHandler(object.definitions),
      description: () => object.description,
      title: () => object.title,
      default: () => object.default,
      deprecated: () => object.deprecated,
      discriminator: () => object.discriminator,
      readOnly: () => object.readOnly,
      writeOnly: () => object.writeOnly,
      examples: () => object.examples,
      json: () => object,
    };

    return object ? handler : object;
  };

  return typeof object.type === 'function' ? object : handle(object);
};
