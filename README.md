# aqua-screenshots

A [casperjs](http://casperjs.org/) script to generate screenshots for
[Aqua](https://github.com/jedireza/aqua).


## Installation

```bash
$ git clone git@github.com:jedireza/aqua-screenshots.git
$ cd aqua-screenshots
$ npm install
```


## Generate the images

First, have a copy of Aqua running at http://127.0.0.1:8000/.

Be sure to have an admin user with username `root` and password `root` and
an account user with username `jimmy` and password `test`.

```bash
$ npm start
```

The `.png` files will be in the `./screenshots/` folder.
