# @wrote/clone

[![npm version](https://badge.fury.io/js/%40wrote%2Fclone.svg)](https://npmjs.org/package/@wrote/clone)

`@wrote/clone` is a package to clone a file or directory.

```sh
yarn add -E @wrote/clone
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`clone(path: string, to: string)`](#clonepath-stringto-string-void)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package is available by importing its default function:

```js
import clone from '@wrote/clone'
```

## `clone(`<br/>&nbsp;&nbsp;`path: string,`<br/>&nbsp;&nbsp;`to: string,`<br/>`): void`

Clones a file or directory to the specified directory. The `to` path should be the path of the folder which will contain the cloned entity and not the path to the new object on the filesystem.

```js
/* yarn example/ */
import clone from '@wrote/clone'
import readDirStructure from '@wrote/read-dir-structure'

const printContent = async (path) => {
  const ds = await readDirStructure(path)
  console.log(JSON.stringify(ds, null, 2))
}

(async () => {
  // 0. CHECK what is being cloned.
  console.log('Directory being cloned:')
  await printContent('example/dir')

  // 1. CLONE the directory.
  await clone('example/dir', 'example/temp')

  // 1. VALIDATE that the directory was cloned.
  console.log('Temp directory contents:')
  await printContent('example/temp')
})()
```

```
Directory being cloned:
{
  "content": {
    "example.md": {
      "type": "File"
    }
  },
  "type": "Directory"
}
Temp directory contents:
{
  "content": {
    "dir": {
      "content": {
        "example.md": {
          "type": "File"
        }
      },
      "type": "Directory"
    }
  },
  "type": "Directory"
}
```
## TODO

- [ ] Clone symbolic links and other entities.

## Copyright

(c) [Wrote][1] 2018

[1]: https://wrote.cc