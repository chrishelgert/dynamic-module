# dynamic-module

[![npm version](https://badge.fury.io/js/dynamic-module.svg)](https://badge.fury.io/js/dynamic-module)
[![Build Status](https://travis-ci.org/chrishelgert/dynamic-module.svg?branch=master)](https://travis-ci.org/chrishelgert/dynamic-module)
[![codecov](https://codecov.io/gh/chrishelgert/dynamic-module/branch/master/graph/badge.svg)](https://codecov.io/gh/chrishelgert/dynamic-module)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/chrishelgert/dynamic-module.svg)](https://greenkeeper.io/)

> install and use modules only if you need them

## Usage

```javascript
dynamicModule('flat-file-db')
  .then((flatfile) => {
    // use flatfile ...
  })
  .catch((err) => {
    // installation failed
  })
```

## Contributing

1. Fork it
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create new Pull Request

## LICENSE

Copyright (c) 2017 Chris Helgert. See [License](./LICENSE.md) for details.
