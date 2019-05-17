// Stable APIs
import chromeCompletionItemProvider from './chrome/chromeCompletionItemProvider';
import accessibilityFeaturesCompletionItemProvider from './chrome/stable/accessibilityFeatures';
import alarmsCompletionItemProvider from './chrome/stable/alarms';
import bookmarksCompletionItemProvider from './chrome/stable/bookmarks';
import browserActionCompletionItemProvider from './chrome/stable/browserAction';
import browsingDataCompletionItemProvider from './chrome/stable/browsingData';
import certificateProviderCompletionItemProvider from './chrome/stable/certificateProvider';
import commandsCompletionItemProvider from './chrome/stable/commands';
import contentSettingsCompletionItemProvider from './chrome/stable/contentSettings';
import contextMenusCompletionItemProvider from './chrome/stable/contextMenus';
import cookiesCompletionItemProvider from './chrome/stable/cookies';
import debuggerCompletionItemProvider from './chrome/stable/debugger';
import declarativeContentCompletionItemProvider from './chrome/stable/declarativeContent';
import desktopCaptureCompletionItemProvider from './chrome/stable/desktopCapture';
import devtools_inspectedWindowCompletionItemProvider from './chrome/stable/devtools.inspectedWindow';
import devtools_networkCompletionItemProvider from './chrome/stable/devtools.network';
import devtools_panelsCompletionItemProvider from './chrome/stable/devtools.panels';
import documentScanCompletionItemProvider from './chrome/stable/documentScan';
import downloadsCompletionItemProvider from './chrome/stable/downloads';
import enterprise_deviceAttributesCompletionItemProvider from './chrome/stable/enterprise.deviceAttributes';
import enterprise_platformKeysCompletionItemProvider from './chrome/stable/enterprise.platformKeys';

import tabsCompletionItemProvider from './chrome/stable/tabs';

export default [
    // Stable
    chromeCompletionItemProvider,
    accessibilityFeaturesCompletionItemProvider,
    alarmsCompletionItemProvider,
    bookmarksCompletionItemProvider,
    browserActionCompletionItemProvider,
    browsingDataCompletionItemProvider,
    certificateProviderCompletionItemProvider,
    commandsCompletionItemProvider,
    contentSettingsCompletionItemProvider,
    contextMenusCompletionItemProvider,
    cookiesCompletionItemProvider,
    debuggerCompletionItemProvider,
    declarativeContentCompletionItemProvider,
    desktopCaptureCompletionItemProvider,
    devtools_inspectedWindowCompletionItemProvider,
    devtools_networkCompletionItemProvider,
    devtools_panelsCompletionItemProvider,
    documentScanCompletionItemProvider,
    downloadsCompletionItemProvider,
    enterprise_deviceAttributesCompletionItemProvider,
    enterprise_platformKeysCompletionItemProvider,

    tabsCompletionItemProvider,
];
