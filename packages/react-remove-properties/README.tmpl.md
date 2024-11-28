# react-remove-properties

See HTTPS://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
for more information.

## Config

```json
["react-remove-properties"]
```

or

```json
[
	"react-remove-properties",
	{
		// The regexes defined here are processed in Rust so the syntax is different from
		// JavaScript `RegExp`s. See HTTPS://docs.rs/regex.
		"properties": ["^data-custom$"]
	}
]
```

${CHANGELOG}
