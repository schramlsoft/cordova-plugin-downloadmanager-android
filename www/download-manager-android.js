/*
 * Copyright (c) 2022 W. Schraml Softwarehaus GmbH
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var exec = require('cordova/exec');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function DownloadManagerAndroid () {

}

DownloadManagerAndroid.prototype.enqueue = function (enqueueData, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'DownloadManagerCordova', 'enqueue', [enqueueData]);
};

DownloadManagerAndroid.prototype.query = function (queryData, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'DownloadManagerCordova', 'query', [queryData]);
};

DownloadManagerAndroid.prototype.remove = function (removeData, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'DownloadManagerCordova', 'remove', [removeData]);
};


module.exports = new DownloadManagerAndroid();