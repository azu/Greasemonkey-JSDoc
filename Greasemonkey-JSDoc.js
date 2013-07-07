/**
 * Created by azu.
 * License: MIT License
 */

var unsafeWindow = window;
/**
 * コンソールにログを吐く
 * @param {String} message String (or any object with a .toString() method) The message to display in the console.
 */
function GM_log(message){
}
/**
 * GM_setValueでセットした値を削除
 * @param {String} name  Property name to delete.
 */
function GM_deleteValue(name){

}
/**
 * GM_setValueでセットした値を取り出す
 * @param {String} name Property name to retrieve.
 * @param defaultValue If name is not found, then use this property to return a default value. If default is omitted JavaScript undefined is returned.
 */
function GM_getValue(name, defaultValue){

}
/**
 * @return {Array} Array
 */
function GM_listValues(){
    return Array;
}
/**
 * nameをキーにして値を保存する
 * @param {String} name Property name to retrieve or create.
 * @param value
 */
function GM_setValue(name, value){

}
/**
 * @resourceで指定したリソースを取り出す
 * @param {string} resourceName metadata_block_resourceName
 * @return {string} String
 */
function GM_getResourceText(resourceName){

}
/**
 * @resourceで指定したリソースを取り出す
 * base64 encoded data: URL scheme
 * @param {string} resourceName metadata_block_resourceName
 * @return {String} String
 */
function GM_getResourceURL(resourceName){

}
/**
 * CSSを適応する
 * @param {String} css body { color:red }
 */
function GM_addStyle(css){

}
/**
 * XMLHttpRequest
 * @param object A single object with properties defining the request behavior.
 * @param {String} [object.method] The HTTP method to utilize.  Currently only "GET" and "POST" are supported.  Defaults to "GET".
 * @param {String} object.url The URL to which the request will be sent.  This value may be relative to the page the user script is running on.
 * @param {Function} [object.onload]  A function called if the request finishes successfully.  Passed a Scriptish response object (see below).
 * @param {Function} [object.onerror]  A function called if the request fails.  Passed a Scriptish response object (see below).
 * @param {Function} [object.onreadystatechange]  A function called whenever the request's `readyState` changes.  Passed a Scriptish response object (see below).
 * @param {String} [object.data]  Content to send as the body of the request.
 * @param {Object} [object.headers]  An object containing headers to be sent as part of the request.
 * @param {Boolean} [object.binary]  Forces the request to send `data` as binary.  Defaults to `false`.
 * @param {Boolean} [object.makePrivate]  Forces the request to be a private request (same as initiated from a private window). **(0.1.9+)**
 * @param {Boolean} [object.mozBackgroundRequest]  If `true` security dialogs will not be shown, and the request will fail.  Defaults to `true`.
 * @param {String} [object.user]  The user name to use for authentication purposes.  Defaults to the empty string `""`.
 * @param {String} [object.password]  The password to use for authentication purposes.  Defaults to the empty string `""`.
 * @param {String} [object.overrideMimeType]  Overrides the MIME type returned by the server.
 * @param {Boolean} [object.ignoreCache]  Forces a request to the server, bypassing the cache.  Defaults to `false`.
 * @param {Boolean} [object.ignoreRedirect]  Forces the request to ignore both temporary and permanent redirects.
 * @param {Boolean} [object.ignoreTempRedirect]  Forces the request to ignore only temporary redirects.
 * @param {Boolean} [object.ignorePermanentRedirect]  Forces the request to ignore only permanent redirects.
 * @param {Boolean} [object.failOnRedirect]  Forces the request to fail if a redirect occurs.
 * @param {Number} [object.redirectionLimit]  Range allowed: 0-10.  Forces the request to fail if a certain number of redirects occur.
 */
function GM_xmlhttpRequest(object){
}

/**
 * urlを新しいタブで開く
 * @param url http://www.example.com
 */
function GM_openInTab(url){

}
/**
 * ユーザコマンドに登録
 * @param commandName “Some Name”
 * @param commandFunc function
 * @param accelKey “g”
 * @param accelModifiers “control alt”
 * @param accessKey “g”
 */
function GM_registerMenuCommand(commandName, commandFunc, accelKey, accelModifiers, accessKey){

}
/**
 * This function will safely parse a string of HTML and return an XMLDocument. It cleans the provided HTML by removing tags such as <script>, <style>, <head>, <body>, <title> and <iframe>, and will also remove all JavaScript (including element attributes containing JavaScript).
 * @param {String} HTMLString
 * @param {String} BaseURL
 * @returns {XML} xmlDoc
 */
function safeHTMLParser(HTMLString, BaseURL){
}
/**
 * GM_xpath is a simple API for selecting DOM nodes with XPath
 * @param object
 * @param {String} object.path A single XPath expression.
 * @param {String[]} [object.paths]  An array of XPath expressions to be evaluated sequentially.
 * @param {Node} [object.node] A DOM context node against which the XPath expression(s) will run. Defaults to the commonly used `document` element.
 * @param {Boolean} [object.all]  If `true`, all nodes matching the XPath expression(s) will be returned.  If `false`, only the first matched node will be returned.  Defaults to `false`.
 * @param {String/Function/Object} [object.resolver]  A namespace resolver. Defaults to the namespace of the context node.
 */
function GM_xpath(object){

}
/**
 * GM_notification will open a Growl-styled notification for the user.
 * @param {String} msg
 * @param {String} [title]
 * @param {String} [icon]
 * @param {Function} [callback]
 */
function GM_notification(msg, title, icon, callback){
}

/**
 * GM_setClipboard will allow you to add data to the clipboard.
 * @param {String} data
 * @param {String} type

 text: Only the data string will be copied to the clipboard. This is the default data type for GM_setClipboard.
 html: Both the text and HTML representation of the data will be copied to the clipboard. See the example below.
 */
function GM_setClipboard(data,type){

}
