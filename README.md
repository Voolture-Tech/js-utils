<p align="right">
  <a href="https://www.npmjs.com/package/@voolture-tech/js-utils"><img src="https://img.shields.io/npm/v/@voolture-tech/js-utils" alt="Latest version on NPM" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/devdiegomartins/js-utils/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="JS-Utils is a library distributed under the MIT license" /></a>
</p>

<p>&nbsp;</p>
<p>&nbsp;</p>

<h1 align="center">JS Utils</h1>
<h3 align="center">A library of reusable and easily accessible content</h3>
<h5 align="center">powered by Voolture Tech Community</h5>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

### **Summary, Objectives, and Inspirations**
<strong>JS Utils</strong> was created with the idea of constant "reuse" of code and its recreations in different projects. Due to the need to recreate resources in multiple projects, this library was created to house these resources in one (and small) place.

<p>&nbsp;</p>

> **ATTENTION**: This library is under development, at the moment we do not recommend its use as there may be changes in the future. We are not responsible for any issues that may be modified here.


<p>&nbsp;</p>

## Table of Contents

- [Installing the library](#installing-the-library)
- [Library usage patterns](#library-usage-patterns)
  - [Using a RegExp](#using-a-regexp)
  - [Using a Helper](#using-a-helper)
  - [Using a Utility](#using-a-utility)
- [RegExp Resources](#regexp-resources)
- [Helper Resources](#helper-resources)
- [Utility Resources](#utility-resources)
- [Support](#support)
- [Sponsors](#sponsors)
- [Maintainers](#maintainers)
- [License](#license)

<p>&nbsp;</p>

## Installing the library

Install using [`npm`](https://www.npmjs.com/package/voolture-tech/js-utils):

```bash
npm i @voolture-tech/js-utils
```
This package includes types of its resources

<p>&nbsp;</p>

## Library usage patterns

The focus of this library is to facilitate its use and consumption, so all its resources are easily accessible. Whenever you think of a new [resource](#regexp-resources), check if it is already included in the library. If it is not, please request it by creating a new issue. Your participation is very important for the evolution of this project.

Without further ado, let's use an example of a helper resource and a utility resource to see how they work.

### **Using a RegExp**
Some very common RegExp are used quite frequently, so we have added some available in JavaScript for reuse.

Therefore, they have their own usage mode highlighted by `@voolture-tech/js-utils/regexp` following the example below:

```javascript
import { email__regexp } from "@voolture-tech/js-utils/regexp"

email__regexp.test("email@provider.com") 
```

The example above will return `true`. See more in [`RegExp`](./src/regexp/README.md)

### **Using a Helper**

Helpers have their own usage mode highlighted by `@voolture-tech/js-utils/helpers` following the example below:

```javascript
import { secondsToMs } from "@voolture-tech/js-utils/helpers"

const seconds = 3 // Chosen 3 seconds for this example
console.log(secondsToMs(seconds))
```

The example above will return `3000`, which will be of type Number. See more in [`secondsToMs`](./src/helpers/time/README.md).

### **Using a Utility**

Utilities (utils) are more objective and intelligent functions, which are requested directly from the root of the `@voolture-tech` library. See the example below:

```javascript
import { delay } from "@voolture-tech/js-utils"

const start = Date.now()
console.log(`started at ${start}`)

const seconds = 4 // Chosen 4 seconds of wait time
delay(seconds).then(() => {
  const end = Date.now()
  console.log(`finished at ${end}. Wait time of ${end - start}`)
})
```

The example above will wait for 4 seconds before logging the start and end times. Learn more about [`delay`](./src/utils/delay/README.md).


> Utility resources (utils), for the most part, consume helper resources (helpers) internally for the library's functionality, but never the other way around.

<p>&nbsp;</p>

> Utility (utils) and helper (helpers) resources internally consume RegExp resources for the library's functionality, but never the other way around.

<p>&nbsp;</p><p>&nbsp;</p>

### **RegExp Resources**

Many applications commonly use standard RegExp patterns, so we have gathered many of them in one place to facilitate their use.
See the documentation and list of available RegExp by [clicking here](./REGEXP_LIST.md).

<p>&nbsp;</p>

### **Helper Resources**

| Resource                                           | Objective                                      | Input             | Output |
| -------------------------------------------------- | ---------------------------------------------- | ----------------- | ------ |
| [`msToSeconds`](./src/helpers/time/README.md)      | Convert milliseconds to seconds                | (ms: Number)      | Number | 
| [`secondsToMs`](./src/helpers/time/README.md)      | Convert seconds to milliseconds                | (seconds: Number) | Number | 

To see more helper items, visit the [list of helper items](./HELPERS_LIST.md)

<p>&nbsp;</p>

### **Utility Resources**

| Resource                                           | Objective                                       | Input             | Output         |
| -------------------------------------------------- | ---------------------------------------------- | ----------------- | -------------- |
| [`delay`](./src/utils/delay/README.md)             | Wait for a specified time before continuing     | (seconds: Number) | Promise void   | 
| [`getFileSizeByBytes`](./src/utils/getFileSizeByBytes/README.md) | Convert bytes to a readable string              | (bytes: Number)   | String         |
| [`switcher`](./src/utils/switcher/README.md)       | Select an option from a list                    | (list: Object, selected: keyof list) | List item (unknown) |

To see more utility items, visit the [list of utility items](./UTILS_LIST.md)

<p>&nbsp;</p><p>&nbsp;</p>

## **Support**

This library is currently under development, and some fixes, improvements, and new features will be implemented until version 1.0.
For any issues with the resources or compatibility found here, please create an `issue`, and I will respond to resolve/request it.

## **Sponsors**

Soon we will have some ways available for you to help us maintain this project.

## **Maintainers**

This project exists only because of the people who [contribute](CONTRIBUTING.md) to it.

### **License**

js-utils uses the [MIT](./LICENSE) license.
