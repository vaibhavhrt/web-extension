import chromeCompletionItemProvider from './chrome/chromeCompletionItemProvider';
import accessibilityFeaturesCompletionItemProvider from './chrome/accessibilityFeatures';
import alarmsCompletionItemProvider from './chrome/alarms';
import bookmarksCompletionItemProvider from './chrome/bookmarks';
import browserActionCompletionItemProvider from './chrome/browserAction';
import browsingDataCompletionItemProvider from './chrome/browsingData';
import certificateProviderCompletionItemProvider from './chrome/certificateProvider';
import commandsCompletionItemProvider from './chrome/commands';

import tabsCompletionItemProvider from './chrome/tabs';

export default [
    chromeCompletionItemProvider,
    accessibilityFeaturesCompletionItemProvider,
    alarmsCompletionItemProvider,
    bookmarksCompletionItemProvider,
    browserActionCompletionItemProvider,
    browsingDataCompletionItemProvider,
    certificateProviderCompletionItemProvider,
    commandsCompletionItemProvider,

    tabsCompletionItemProvider,
];
