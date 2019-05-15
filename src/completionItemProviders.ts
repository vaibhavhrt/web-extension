import chromeCompletionItemProvider from './chrome/chromeCompletionItemProvider';
import accessibilityFeaturesCompletionItemProvider from './chrome/accessibilityFeatures';
import alarmsCompletionItemProvider from './chrome/alarms';
import bookmarksCompletionItemProvider from './chrome/bookmarks';
import browserActionCompletionItemProvider from './chrome/browserAction';
import browsingDataCompletionItemProvider from './chrome/browsingData';

import tabsCompletionItemProvider from './chrome/tabs';

export default [
    chromeCompletionItemProvider,
    accessibilityFeaturesCompletionItemProvider,
    alarmsCompletionItemProvider,
    bookmarksCompletionItemProvider,
    browserActionCompletionItemProvider,
    browsingDataCompletionItemProvider,

    tabsCompletionItemProvider,
];
