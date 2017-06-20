// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.
// var url = require('url');
// https://developer.mozilla.org/zh-CN/docs/Web/API/URLUtils/searchParams
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {

        let url_object = getUrlObject(details.url);
        // console.log(url_object);
        if (checkUrlSuffix(url_object) === true) {
            console.log(details.url);
            addElement(details.url);
        }
        return {
            cancel: true
        }
    }, {
        // urls: ["http://*/*", "https://*/*"]
        urls: ["<all_urls>"]
    },
);

// chrome.webRequest.onBeforeSendHeaders.addListener(
//         function(details) {
//           for (var i = 0; i < details.requestHeaders.length; ++i) {
//             if (details.requestHeaders[i].name === 'User-Agent') {
//                 // details.requestHeaders.splice(i, 1);
//                 // console.log(details.requestHeaders[i]);
//                 // break;
//                 if ( details.requestHeaders[i].value.indexOf("manning-test") >= 0 ) {
//                     return {requestHeaders: true};
//                 }
//             }
//           }
//           return {requestHeaders: false};
//         },
//         {
//           urls: ["<all_urls>"]
//         },
//         ["blocking", "requestHeaders"]
//         // ["requestHeaders"]
// );

chrome.webRequest.onCompleted.addListener(
    function (details) {
        // console.log(details.responseHeaders);
        let responseHeaders = details.responseHeaders;
        for (var i = 0; i < responseHeaders.length; i++) {
            let object = responseHeaders[i];
            if (object.name === "Content-Type") {
                if (object.value.indexOf("text/html") >= 0) {
                    // console.log(object.value);
                    if (details.url.indexOf("manning-test") === -1) {
                        // console.log(details.url);
                        findData(details.url);
                        break;
                    }

                }
            }
            // console.log(a);
        }
        return {
            cancel: true
        }
    }, {
        // urls: ["http://*/*", "https://*/*"]
        urls: ["<all_urls>"]
    }, ["responseHeaders"]
);