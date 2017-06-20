// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getUrlObject(url) {
    let urlObject = document.createElement("a");
    urlObject.href = url;
    return urlObject;
}

let vectorFilter = new Array("jpg", "png", "gif", "jpeg", "css", "webp", "ico", "woff", "js", "svg", "ts", "woff2");

function checkUrlSuffix(urlObject) {

    let urlList = urlObject.pathname.split(".");
    let suffix = urlList[urlList.length - 1]
    if (suffix.indexOf("!") > 0) {
        suffix = suffix.split("!")[0];
    } else if (suffix.indexOf(";") > 0) {
        suffix = suffix.split("")[0];
    }

    if (urlObject.href.indexOf("manning-test") > -1) {
        return false;
    }

    if (vectorFilter.indexOf(suffix) == -1) {
        return true;
    } else {
        return false;
    }
}

function addElement(info) {
    let newDiv = document.createElement("div");
    // let msg = count + " " + info;
    let msg = info;
    count += 1;
    let newContent = document.createTextNode(msg);
    newDiv.appendChild(newContent); //add the text node to the newly created div. 
    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

let count = 0;

function findData(strURL) {
    var req = new XMLHttpRequest();
    strURL = strURL + "#manning-test"
    req.open("GET", strURL, true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                // console.info("Sucess!");
                // console.info("Data: " + req.responseText);
                var text = req.responseText;
                console.log(text.length);
                // var jqueryObjDOM = $(text).html()[0];
                // console.log(jqueryObjDOM);
            }
            // else if (req.status==404) 
            //   console.info("URL doesn't exist!")
            // else 
            //   console.info("Error: Status is " + req.status)
        }
    }

}