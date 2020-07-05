# markdown-template

Markdown template for the [AsyncAPI Generator](https://github.com/asyncapi/generator).

The template converts an [AsyncAPI](https://www.asyncapi.com/) document into a [Markdown](https://en.wikipedia.org/wiki/Markdown) document.

The generated Markdown documents can be used to create static HTML documentation websites with [Slate](https://github.com/slatedocs/slate) or [shins](https://github.com/Mermade/shins).

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
- [AsyncAPI YAML document](examples/asyncapi.yml)
- [Markdown document](examples/asyncapi.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/asyncapi.html)

Server, channel, operation and message bindings for all the supported protocols:
- [AsyncAPI YAML document](examples/bindings.yml)
- [Markdown document](examples/bindings.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/bindings.html)

Security schemes for all the supported protocols:
- [AsyncAPI YAML document](examples/security.yml)
- [Markdown document](examples/security.md)
- [Static HTML documentation](https://jcmellado.github.io/markdown-template/examples/security.html)

Simple and complex schemas:
- [AsyncAPI YAML document](examples/schema.yml)
- [Markdown document](examples/schema.md)
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
output | File name for the output file.<br /><br />**Default**: `asyncapi.md`<br /><br />The `-o` parameter of the generator specifies the output directory, the `-p output` parameter of the template specifies the output filename.<br /><br />**Example:** `-o ./docs -p output=api-1.0.0.md`
sections | Comma-separated list of sections to be included in the Markdown document.<br /><br />**Default**: `servers,channels,messages,security,tags,license,termsOfService,contact`<br /><br />Sections are included in the Markdown document in the same order that they appear in the list. Only the listed sections will be included.<br /><br />**Example:** `-p sections=channels,messages,servers,license`
sections.server | Comma-separated list of subsections to be included in the servers section.<br /><br />**Default**: `variables,security,bindings`<br /><br />**Example:** `-p sections.server=variables`
sections.channels | Comma-separated list of subsections to be included in the channels section.<br /><br />**Default**: `parameters,bindings,messages,publish,subscribe,operation.bindings,operation.tags`<br /><br />**Example:** `-p sections.channels=parameters,subscribe,publish,messages`
sections.messages | Comma-separated list of subsections to be included in the messages section.<br /><br />**Default**: `payload,headers,correlationId,bindings,tags`<br /><br />**Example:** `-p sections.messages=headers,payload`
tocHeadingLevel | Number of heading levels to show in the table of contents.<br /><br />**Default**: `0`<br /><br />Allowed values: `0`, `1`, or `2`.<br /><br />**Example:** `-o ./docs -p tocHeadingLevel=2`

## Slate/shins

Parameter | Description
----------|------------
slate.enabled | Enables the output of the Slate header in the Markdown document.<br /><br />**Default**: `false`<br /><br />The header contains some parameters used by Slate to build the HTML documentation.<br /><br />**Example:** `-p slate.enabled=true`
slate.theme | Name of the syntax-highlighter theme to use.<br /><br />**Default**: `darkula`<br /><br />**Example:** `-p slate.theme=monokai`
slate.searchEnabled | Enables the search option in the table of contents.<br /><br />**Default**: `true`<br /><br />**Example:** `-p slate.searchEnabled=false`
slate.headingLevel | Number of heading levels to show in the table of contents.<br /><br />**Default**: `2`<br /><br />Currently only supported by shins.<br /><br />**Example:** `-p slate.headingLevel=3`
slate.languages | Comma-separated list of languages to add as tabs.<br /><br />**Default**: `null`<br /><br />**Example:** `-p slate.languages="json: JSON"`
slate.includes | Comma-separated list of files to include at the bottom of the content.<br /><br />**Default**: `null`<br /><br />**Example:** `-p slate.includes=/extra/info`
slate.footers | Comma-separated list of texts to add at the bottom of the table of contents.<br /><br />**Default**: `null`<br /><br />**Example:** `-p slate.footers="Copyright (c) 2020 www.example.com"`
