# @wrote/clone

[![npm version](https://badge.fury.io/js/%40wrote%2Fclone.svg)](https://npmjs.org/package/@wrote/clone)

`@wrote/clone` is a package to clone a file or directory.

```sh
yarn add -E @wrote/clone
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`clone(path: string, to: string)`](#clonepath-stringto-string-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import clone from '@wrote/clone'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://wrote.cc">Wrote</a> 2019</th>
    <th>
      <a href="https://wrote.cc">
        <img src="https://avatars3.githubusercontent.com/u/40831417?s=100" width="100" alt="Wrote" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>