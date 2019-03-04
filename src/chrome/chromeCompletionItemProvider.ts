import * as vscode from 'vscode';

const StableAPI = [
    { name: 'accessibilityFeatures', description: "Use the chrome.accessibilityFeatures API to manage Chrome's accessibility features. This API relies on the ChromeSetting prototype of the type API for getting and setting individual accessibility features. In order to get feature states the extension must request accessibilityFeatures.read permission. For modifying feature state, the extension needs accessibilityFeatures.modify permission. Note that accessibilityFeatures.modify does not imply accessibilityFeatures.read permission." },
    { name: 'alarms', description: "Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future." },
    { name: 'bookmarks', description: "Use the chrome.bookmarks API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages, which you can use to create a custom Bookmark Manager page." },
    { name: 'browserAction', description: "Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can have a tooltip, a badge, and a popup." },
    { name: 'browsingData', description: "Use the chrome.browsingData API to remove browsing data from a user's local profile." },
    { name: 'certificateProvider', description: "Use this API to expose certificates to the platform which can use these certificates for TLS authentications." },
    { name: 'commands', description: "Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension." },
    { name: 'contentSettings', description: "Use the chrome.contentSettings API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally." },
    { name: 'contextMenus', description: "Use the chrome.contextMenus API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages." },
    { name: 'cookies', description: "Use the chrome.cookies API to query and modify cookies, and to be notified when they change." },
    { name: 'debugger', description: "The chrome.debugger API serves as an alternate transport for Chrome's remote debugging protocol. Use chrome.debugger to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, etc. Use the Debuggee tabId to target tabs with sendCommand and route events by tabId from onEvent callbacks." },
    { name: 'declarativeContent', description: "Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content." },
    { name: 'desktopCapture', description: "Desktop Capture API that can be used to capture content of screen, individual windows or tabs." },
    { name: 'devtools.inspectedWindow', description: "Use the chrome.devtools.inspectedWindow API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page." },
    { name: 'devtools.network', description: "Use the chrome.devtools.network API to retrieve the information about network requests displayed by the Developer Tools in the Network panel." },
    { name: 'devtools.panels', description: "Use the chrome.devtools.panels API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars." },
    { name: 'documentScan', description: "Use the chrome.documentScan API to discover and retrieve images from attached paper document scanners." },
    { name: 'downloads', description: "Use the chrome.downloads API to programmatically initiate, monitor, manipulate, and search for downloads." },
    { name: 'enterprise.deviceAttributes', description: "Use the chrome.enterprise.deviceAttributes API to read device attributes. Note: This API is only available to extensions force-installed by enterprise policy." },
    { name: 'enterprise.platformKeys', description: "Use the chrome.enterprise.platformKeys API to generate hardware-backed keys and to install certificates for these keys. The certificates will be managed by the platform and can be used for TLS authentication, network access or by other extension through chrome.platformKeys." },
    { name: 'events', description: "The chrome.events namespace contains common types used by APIs dispatching events to notify you when something interesting happens." },
    { name: 'extension', description: "The chrome.extension API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing." },
    { name: 'extensionTypes', description: "The chrome.extensionTypes API contains type declarations for Chrome extensions." },
    { name: 'fileBrowserHandler', description: "Use the chrome.fileBrowserHandler API to extend the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website." },
    { name: 'fileSystemProvider', description: "Use the chrome.fileSystemProvider API to create file systems, that can be accessible from the file manager on Chrome OS." },
    { name: 'fontSettings', description: "Use the chrome.fontSettings API to manage Chrome's font settings." },
    { name: 'gcm', description: "Use chrome.gcm to enable apps and extensions to send and receive messages through the Google Cloud Messaging Service." },
    { name: 'history', description: "Use the chrome.history API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages." },
    { name: 'i18n', description: "Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension." },
    { name: 'identity', description: "Use the chrome.identity API to get OAuth2 access tokens." },
    { name: 'idle', description: "Use the chrome.idle API to detect when the machine's idle state changes." },
    { name: 'input.ime', description: "Use the chrome.input.ime API to implement a custom IME for Chrome OS. This allows your extension to handle keystrokes, set the composition, and manage the candidate window." },
    { name: 'instanceID', description: "Use chrome.instanceID to access the Instance ID service." },
    { name: 'management', description: "The chrome.management API provides ways to manage the list of extensions/apps that are installed and running. It is particularly useful for extensions that override the built-in New Tab page." },
    { name: 'networking.config', description: "Use the networking.config API to authenticate to captive portals." },
    { name: 'notifications', description: "Use the chrome.notifications API to create rich notifications using templates and show these notifications to users in the system tray." },
    { name: 'omnibox', description: "The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox." },
    { name: 'pageAction', description: "Use the chrome.pageAction API to put icons in the main Google Chrome toolbar, to the right of the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages. Page actions appear grayed out when inactive." },
    { name: 'pageCapture', description: "Use the chrome.pageCapture API to save a tab as MHTML." },
    { name: 'permissions', description: "Use the chrome.permissions API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary." },
    { name: 'platformKeys', description: "Use the chrome.platformKeys API to access client certificates managed by the platform. If the user or policy grants the permission, an extension can use such a certficate in its custom authentication protocol. E.g. this allows usage of platform managed certificates in third party VPNs (see chrome.vpnProvider)." },
    { name: 'power', description: "Use the chrome.power API to override the system's power management features." },
    { name: 'printerProvider', description: "The chrome.printerProvider API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers." },
    { name: 'privacy', description: "Use the chrome.privacy API to control usage of the features in Chrome that can affect a user's privacy. This API relies on the ChromeSetting prototype of the type API for getting and setting Chrome's configuration." },
    { name: 'proxy', description: "Use the chrome.proxy API to manage Chrome's proxy settings. This API relies on the ChromeSetting prototype of the type API for getting and setting the proxy configuration." },
    { name: 'runtime', description: "Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs." },
    { name: 'sessions', description: "Use the chrome.sessions API to query and restore tabs and windows from a browsing session." },
    { name: 'storage', description: "Use the chrome.storage API to store, retrieve, and track changes to user data." },
    { name: 'system.cpu', description: "Use the system.cpu API to query CPU metadata." },
    { name: 'system.memory', description: "The chrome.system.memory API." },
    { name: 'system.storage', description: "Use the chrome.system.storage API to query storage device information and be notified when a removable storage device is attached and detached." },
    { name: 'tabCapture', description: "Use the chrome.tabCapture API to interact with tab media streams." },
    { name: 'tabs', description: "Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser." },
    { name: 'topSites', description: "Use the chrome.topSites API to access the top sites that are displayed on the new tab page." },
    { name: 'tts', description: "Use the chrome.tts API to play synthesized text-to-speech (TTS). See also the related ttsEngine API, which allows an extension to implement a speech engine." },
    { name: 'ttsEngine', description: "Use the chrome.ttsEngine API to implement a text-to-speech(TTS) engine using an extension. If your extension registers using this API, it will receive events containing an utterance to be spoken and other parameters when any extension or Chrome App uses the tts API to generate speech. Your extension can then use any available web technology to synthesize and output the speech, and send events back to the calling function to report the status." },
    { name: 'types', description: "The chrome.types API contains type declarations for Chrome." },
    { name: 'vpnProvider', description: "Use the chrome.vpnProvider API to implement a VPN client." },
    { name: 'wallpaper', description: "Use the chrome.wallpaper API to change the ChromeOS wallpaper." },
    { name: 'webNavigation', description: "Use the chrome.webNavigation API to receive notifications about the status of navigation requests in-flight." },
    { name: 'webRequest', description: "Use the chrome.webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight." },
    { name: 'windows', description: "Use the chrome.windows API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser." },
]
const BetaAPI = [
    { name: 'declarativeNetRequest', description: 'The chrome.declarativeNetRequest API is used to block or redirect network requests by specifying declarative rules.' },
    { name: 'declarativeWebRequest', description: 'Note: this API is currently on hold, without concrete plans to move to stable. Use the chrome.declarativeWebRequest API to intercept, block, or modify requests in-flight. It is significantly faster than the chrome.webRequest API because you can register rules that are evaluated in the browser rather than the JavaScript engine, which reduces roundtrip latencies and allows higher efficiency.' },
];
const DevAPI = [
    { name: 'automation', description: "The chrome.automation API allows developers to access the automation (accessibility) tree for the browser. The tree resembles the DOM tree, but only exposes the semantic structure of a page. It can be used to programmatically interact with a page by examining names, roles, and states, listening for events, and performing actions on nodes." },
    { name: 'processes', description: "Use the chrome.processes API to interact with the browser's processes." },
    { name: 'signedInDevices', description: "Use the `chrome.signedInDevices` API to get a list of devices signed into chrome with the same account as the current profile." },
];


const chromeCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        // get all text until the `position` and check if it reads `console.`
        // and iff so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.')) {
            return undefined;
        }

        return [...StableAPI, ...BetaAPI, ...DevAPI].map(API => {
            const completionItem = new vscode.CompletionItem(API.name, vscode.CompletionItemKind.Module);
            completionItem.commitCharacters = ['.'];
            completionItem.documentation = new vscode.MarkdownString(API.description);
            return completionItem;
        });
    }
};

export default chromeCompletionItemProvider;
