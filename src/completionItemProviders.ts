import chromeCompletionItemProvider from './chrome/chromeCompletionItemProvider';
import accessibilityFeaturesCompletionItemProvider from './chrome/accessibilityFeatures/accessibilityFeaturesCompletionItemProvider';
import alarmsCompletionItemProvider from './chrome/alarms/alarmsCompletionItemProvider';

import tabsCompletionItemProvider from './chrome/tabs/tabsCompletionItemProvider';

export default [
    chromeCompletionItemProvider,
    accessibilityFeaturesCompletionItemProvider,
    alarmsCompletionItemProvider,
    tabsCompletionItemProvider,
];
