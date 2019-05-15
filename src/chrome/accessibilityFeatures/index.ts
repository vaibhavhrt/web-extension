import * as vscode from 'vscode';

import properties from './properties.json';

const accessibilityFeaturesCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        // get all text until the `position` and check if it reads `chrome.tabs.`
        // and iff so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.accessibilityFeatures.')) {
            return undefined;
        }

        const propertiesCompletionItems = properties.map(prop => new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property));

        return [
            ...propertiesCompletionItems,
        ];
    }
};

export default accessibilityFeaturesCompletionItemProvider;
