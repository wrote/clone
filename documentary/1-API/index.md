
## API

The package is available by importing its default function:

```js
import clone from '@wrote/clone'
```

```## clone
[
  ["path", "string"],
  ["to", "string"]
]
```

Clones a file or directory to the specified directory. The `to` path should be the path of the folder which will contain the cloned entity and not the path to the new object on the filesystem.

%EXAMPLE: example/example.js, ../src => @wrote/clone%

%FORK example example/example%