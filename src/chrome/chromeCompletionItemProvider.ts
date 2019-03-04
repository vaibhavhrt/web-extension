import * as vscode from 'vscode';

const StableAPI = [
    'accessibilityFeatures',
    'alarms',
    'bookmarks',
    'browserAction',
    'browsingData',
    'certificateProvider',
    'commands',
    'contentSettings',
    'contextMenus',
    'cookies',
    'debugger',
    'declarativeContent',
    'desktopCapture',
    'devtools.inspectedWindow',
    'devtools.network',
    'devtools.panels',
    'documentScan',
    'downloads',
    'enterprise.deviceAttributes',
    'enterprise.platformKeys',
    'events',
    'extension',
    'extensionTypes',
    'fileBrowserHandler',
    'fileSystemProvider',
    'fontSettings',
    'gcm',
    'history',
    'i18n',
    'identity',
    'idle',
    'input.ime',
    'instanceID',
    'management',
    'networking.config',
    'notifications',
    'omnibox',
    'pageAction',
    'pageCapture',
    'permissions',
    'platformKeys',
    'power',
    'printerProvider',
    'privacy',
    'proxy',
    'runtime',
    'sessions',
    'storage',
    'system.cpu',
    'system.memory',
    'system.storage',
    'tabCapture',
    'tabs',
    'topSites',
    'tts',
    'ttsEngine',
    'types',
    'vpnProvider',
    'wallpaper',
    'webNavigation',
    'webRequest',
    'window',
];
const BetaAPI = ['declarativeNetRequest', 'declarativeWebRequest'];
const DevAPI = ['automation', 'processes', 'signedInDevices'];


const chromeCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        // get all text until the `position` and check if it reads `console.`
        // and iff so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.')) {
            return undefined;
        }

        return [...StableAPI, ...BetaAPI, ...DevAPI].map(API => new vscode.CompletionItem(API, vscode.CompletionItemKind.Module));
    }
};

export default chromeCompletionItemProvider;
