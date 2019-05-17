import * as vscode from 'vscode';

import properties from './properties.json';

const contentSettingsCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.contentSettings.')) {
            return undefined;
        }

        const propertiesCompletionItems = properties.map(prop => new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property));

        return propertiesCompletionItems;
    }
};

export default contentSettingsCompletionItemProvider;
