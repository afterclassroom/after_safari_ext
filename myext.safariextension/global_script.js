/*
 * Copyright 2011 Google Inc. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var url = window.location.href;
var params = url.substring(url.indexOf('?'));
paramcode = url.split('code=')[1];


if ( url.indexOf("http://dev.afterclassroom.com/robots.txt") > -1 ){
  safari.self.tab.dispatchMessage("heyExtensionBar",paramcode);
  //var finisher = new OAuth2(adapterName, OAuth2.FINISH);
}








/*
// This script servers as an intermediary between oauth2.js and
// oauth2.html

// Get all ? params from this URL
var url = window.location.href;
var params = url.substring(url.indexOf('?'));

// Also append the current URL to the params
params += '&from=' + encodeURIComponent(url);

// Redirect back to the extension itself so that we have priveledged
// access again
var redirect = chrome.extension.getURL('oauth2/oauth2.html');
window.location = redirect + params;
*/