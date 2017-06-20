// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// function creat_url() {
//     let info_list = chrome.management.getSelf();
//     log
// }

chrome.management.getSelf(function (info){
                let url = "chrome-extension://" + info.id + "/src/background/background.html";
                window.open(url);
             });
