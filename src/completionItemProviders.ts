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
import extensionCompletionItemProvider from './chrome/stable/extension';
import fileBrowserHandlerCompletionItemProvider from './chrome/stable/fileBrowserHandler';
import fileSystemProviderCompletionItemProvider from './chrome/stable/fileSystemProvider';
import fontSettingsCompletionItemProvider from './chrome/stable/fontSettings';
import gcmCompletionItemProvider from './chrome/stable/gcm';
import historyCompletionItemProvider from './chrome/stable/history';
import i18nCompletionItemProvider from './chrome/stable/i18n';
import identityCompletionItemProvider from './chrome/stable/identity';
import idleCompletionItemProvider from './chrome/stable/idle';
import input_imeCompletionItemProvider from './chrome/stable/input.ime';
import instanceIDCompletionItemProvider from './chrome/stable/instanceID';
import managementCompletionItemProvider from './chrome/stable/management';
import networking_configCompletionItemProvider from './chrome/stable/networking.config';
import notificationsCompletionItemProvider from './chrome/stable/notifications';
import omniboxCompletionItemProvider from './chrome/stable/omnibox';
import pageActionCompletionItemProvider from './chrome/stable/pageAction';
import pageCaptureCompletionItemProvider from './chrome/stable/pageCapture';
import permissionsCompletionItemProvider from './chrome/stable/permissions';
import platformKeysCompletionItemProvider from './chrome/stable/platformKeys';
import powerCompletionItemProvider from './chrome/stable/power';
import printerProviderCompletionItemProvider from './chrome/stable/printerProvider';
import privacyCompletionItemProvider from './chrome/stable/privacy';
import proxyCompletionItemProvider from './chrome/stable/proxy';
import runtimeCompletionItemProvider from './chrome/stable/runtime';
import sessionsCompletionItemProvider from './chrome/stable/sessions';
import storageCompletionItemProvider from './chrome/stable/storage';
import system_cpuCompletionItemProvider from './chrome/stable/system.cpu';
import system_memoryCompletionItemProvider from './chrome/stable/system.memory';
import system_storageCompletionItemProvider from './chrome/stable/system.storage';
import tabCaptureCompletionItemProvider from './chrome/stable/tabCapture';
import tabsCompletionItemProvider from './chrome/stable/tabs';
import topSitesCompletionItemProvider from './chrome/stable/topSites';
import ttsCompletionItemProvider from './chrome/stable/tts';
import ttsEngineCompletionItemProvider from './chrome/stable/ttsEngine';
import vpnProviderCompletionItemProvider from './chrome/stable/vpnProvider';
import wallpaperCompletionItemProvider from './chrome/stable/wallpaper';
import webNavigationCompletionItemProvider from './chrome/stable/webNavigation';
import webRequestCompletionItemProvider from './chrome/stable/webRequest';
import windowsCompletionItemProvider from './chrome/stable/windows';

// Beta APIs
import declarativeNetRequestCompletionItemProvider from './chrome/beta/declarativeNetRequest';
import declarativeWebRequestCompletionItemProvider from './chrome/beta/declarativeWebRequest';

// Dev APIs
import automationCompletionItemProvider from './chrome/dev/automation';
import processesCompletionItemProvider from './chrome/dev/processes';
import signedInDevicesCompletionItemProvider from './chrome/dev/signedInDevices';

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
    extensionCompletionItemProvider,
    fileBrowserHandlerCompletionItemProvider,
    fileSystemProviderCompletionItemProvider,
    fontSettingsCompletionItemProvider,
    gcmCompletionItemProvider,
    historyCompletionItemProvider,
    i18nCompletionItemProvider,
    identityCompletionItemProvider,
    idleCompletionItemProvider,
    input_imeCompletionItemProvider,
    instanceIDCompletionItemProvider,
    managementCompletionItemProvider,
    networking_configCompletionItemProvider,
    notificationsCompletionItemProvider,
    omniboxCompletionItemProvider,
    pageActionCompletionItemProvider,
    pageCaptureCompletionItemProvider,
    permissionsCompletionItemProvider,
    platformKeysCompletionItemProvider,
    powerCompletionItemProvider,
    printerProviderCompletionItemProvider,
    privacyCompletionItemProvider,
    proxyCompletionItemProvider,
    runtimeCompletionItemProvider,
    sessionsCompletionItemProvider,
    storageCompletionItemProvider,
    system_cpuCompletionItemProvider,
    system_memoryCompletionItemProvider,
    system_storageCompletionItemProvider,
    tabCaptureCompletionItemProvider,
    tabsCompletionItemProvider,
    topSitesCompletionItemProvider,
    ttsCompletionItemProvider,
    ttsEngineCompletionItemProvider,
    vpnProviderCompletionItemProvider,
    wallpaperCompletionItemProvider,
    webNavigationCompletionItemProvider,
    webRequestCompletionItemProvider,
    windowsCompletionItemProvider,
    // Beta
    declarativeNetRequestCompletionItemProvider,
    declarativeWebRequestCompletionItemProvider,
    // Dev
    automationCompletionItemProvider,
    processesCompletionItemProvider,
    signedInDevicesCompletionItemProvider,
];
