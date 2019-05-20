import * as vscode from 'vscode';

import properties from './properties.json';
import events from './events.json';

const proxyCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.proxy.')) {
            return undefined;
        }

        const propertiesCompletionItems = properties.map(prop => new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property));
        const eventsCompletionItems = events.map(e => new vscode.CompletionItem(e.name, vscode.CompletionItemKind.Event));

        return [
            ...propertiesCompletionItems,
            ...eventsCompletionItems,
        ];
    }
};

export default proxyCompletionItemProvider;
