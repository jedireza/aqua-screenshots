'use strict';
var Casper = require('casper');


var hostname = 'http://127.0.0.1:8000';
var casper = Casper.create({
    viewportSize: { width: 1024, height: 768 }
});
var counter = 0;
var screenCapture = function () {

    counter += 1;

    var num = counter.toString().length === 1
              ? '0' + counter : counter;

    this.capture('./screenshots/' + num + '.png');
};


casper.start(hostname, function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/about', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/signup', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/contact', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/login', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/login/forgot', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/login/reset/ren@stimpy/57d3149488275d0dc6bf6f8e', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/login', function () {

    this.fill('form', { username: 'root', password: 'root' });
    this.click('button');
    this.waitFor(function check() {

        return this.evaluate(function () {

            var alerts = document.querySelectorAll('.alert');
            return alerts.length > 0;
        });
    });
});


casper.thenOpen(hostname + '/admin', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/admin/statuses', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            return document.querySelectorAll('.btn-sm').length > 0;
        });
    }, function then() {

        screenCapture.call(this);

        this.click('.btn-sm');
    });

    this.waitFor(function check() {

        return this.evaluate(function () {

            var h1 = document.querySelector('.page-header');
            return h1.textContent.indexOf('loading') === -1;
        });
    }, function then() {

        screenCapture.call(this);
    });
});


casper.thenOpen(hostname + '/admin/users', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            return document.querySelectorAll('.btn-sm').length > 0;
        });
    }, function then() {

        screenCapture.call(this);

        this.click('.btn-sm');
    });

    this.waitFor(function check() {

        return this.evaluate(function () {

            var h1 = document.querySelector('.page-header');
            return h1.textContent.indexOf('loading') === -1;
        });
    }, function then() {

        screenCapture.call(this);
    });
});


casper.thenOpen(hostname + '/admin/accounts', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            return document.querySelectorAll('.btn-sm').length > 0;
        });
    }, function then() {

        screenCapture.call(this);

        this.click('.btn-sm');
    });

    this.waitFor(function check() {

        return this.evaluate(function () {

            var h1 = document.querySelector('.page-header');
            return h1.textContent.indexOf('loading') === -1;
        });
    }, function then() {

        screenCapture.call(this);
    });
});


casper.thenOpen(hostname + '/admin/admins', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            return document.querySelectorAll('.btn-sm').length > 0;
        });
    }, function then() {

        screenCapture.call(this);

        this.click('.btn-sm');
    });

    this.waitFor(function check() {

        return this.evaluate(function () {

            var h1 = document.querySelector('.page-header');
            return h1.textContent.indexOf('loading') === -1;
        });
    }, function then() {

        screenCapture.call(this);
    });
});


casper.thenOpen(hostname + '/admin/admin-groups', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            return document.querySelectorAll('.btn-sm').length > 0;
        });
    }, function then() {

        screenCapture.call(this);

        this.click('.btn-sm');
    });

    this.waitFor(function check() {

        return this.evaluate(function () {

            var h1 = document.querySelector('.page-header');
            return h1.textContent.indexOf('loading') === -1;
        });
    }, function then() {

        screenCapture.call(this);
    });
});


casper.thenOpen(hostname + '/login/logout', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            var alerts = document.querySelectorAll('.alert');
            return alerts.length > 0;
        });
    });
});


casper.thenOpen(hostname + '/login', function () {

    this.fill('form', { username: 'jimmy', password: 'test' });
    this.click('button');
    this.waitFor(function check() {

        return this.evaluate(function () {

            var alerts = document.querySelectorAll('.alert');
            return alerts.length > 0;
        });
    });
});


casper.thenOpen(hostname + '/account', function () {

    screenCapture.call(this);
});


casper.thenOpen(hostname + '/account/settings', function () {

    this.waitFor(function check() {

        return this.evaluate(function () {

            var alerts = document.querySelectorAll('.alert');
            return alerts.length === 0;
        });
    }, function then() {

        screenCapture.call(this);
    });
});


casper.run();
