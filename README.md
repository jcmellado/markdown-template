# markdown-template

Markdown template for the [AsyncAPI Generator](https://github.com/asyncapi/generator).

The template converts an [AsyncAPI](https://www.asyncapi.com/) document into a [Markdown](https://en.wikipedia.org/wiki/Markdown) document.

The generated Markdown documents can be used to create static HTML documentation websites too with [Slate](https://github.com/slatedocs/slate) or [shins](https://github.com/Mermade/shins).

# Usage

Install the AsyncAPI Generator:

```shell
npm install -g @asyncapi/generator
```

Run the generator on your `asyncapi.yml` with the template:

```shell
ag ./asyncapi.yml @jcmellado/markdown-template -o ./docs
```

Check the [AsyncAPI Generator Documentation](https://github.com/asyncapi/generator/blob/master/README.md) to learn more about the available options.

# Examples

AsyncAPI specification of fictional API service:
- [AsyncAPI YAML document](https://github.com/jcmellado/markdown-template/blob/master/examples/asyncapi.yml)
- [Markdown document](https://github.com/jcmellado/markdown-template/blob/master/examples/asyncapi.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/asyncapi.html)

Server, channel, operation and message bindings for all the supported protocols:
- [AsyncAPI YAML document](https://github.com/jcmellado/markdown-template/blob/master/examples/bindings.yml)
- [Markdown document](https://github.com/jcmellado/markdown-template/blob/master/examples/bindings.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/bindings.html)

Security schemes for all the supported protocols:
- [AsyncAPI YAML document](https://github.com/jcmellado/markdown-template/blob/master/examples/security.yml)
- [Markdown document](https://github.com/jcmellado/markdown-template/blob/master/examples/security.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/security.html)

Simple and complex schemas:
- [AsyncAPI YAML document](https://github.com/jcmellado/markdown-template/blob/master/examples/schema.yml)
- [Markdown document](https://github.com/jcmellado/markdown-template/blob/master/examples/schema.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/schema.html)

# Parameters

The AsyncAPI Generator allows to pass additional parameters to the template with the `-p name=value` option.

Example:

```shell
ag ./asyncapi.yml @jcmellado/markdown-template -o ./docs -p slate.enabled=true -p slate.languages="json: JSON,Rust"
```

The following sections describe the available parameters.

## Markdown

Parameter | Description
----------|------------
sections | comma-separated list of sections to include in the Markdown document.<br /><br />**Default**: `servers,channels,messages,security,tags,license,termsOfService,contact`<br /><br />Sections are included in the Markdown document in the same order that they appear in the list. Only the listed sections will be included.<br /><br />**Example:** ```-p sections=channels,messages,servers,license```

## Slate/shins

Parameter | Description
----------|------------
slate.enabled | Enables the output of the Slate header in the Markdown document.<br /><br />**Default**: `false`<br /><br />The header contains some parameters used by Slate to build the HTML documentation.<br /><br />**Example:** `-p slate.enabled=true`
slate.theme | Name of the syntax-highlighter theme to use.<br /><br />**Default**: `darkula`<br /><br />**Example:** `-p slate.theme=monokai`
slate.searchEnabled | Enables the search option in the table of contents.<br /><br />**Default**: `true`<br /><br />**Example:** `-p slate.searchEnabled=false`
slate.headingLevel | Number of heading levels to show in the table of contents.<br /><br />**Default**: `2`<br /><br />Currently only supported by shins.<br /><br />**Example:** `-p slate.headingLevel=3`
slate.languages | Comma-separated list of languages to add as tabs.<br /><br />**Default**: `null`<br /><br />**Example:** `-p slate.languages="json: JSON"`
slate.includes | Comma-separated list of files to include at the bottom of the content.<br /><br />**Default**: `null`<br /><br />**Example:** `-p slate.includes=./extra/info.html`
slate.footers | Comma-separated list of texts to add at the bottom of the table of contents.<br /><br />**Default**: `null`<br /><br />**Example:** `-p slate.footers="Copyright (c) 2020 www.example.com"`
