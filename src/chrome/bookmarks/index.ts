import * as vscode from 'vscode';

import properties from './properties.json';
import methods from './methods.json';
import events from './events.json';

const bookmarksCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        // get all text until the `position` and check if it reads `chrome.tabs.`
        // and iff so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.bookmarks.')) {
            return undefined;
        }

        const propertiesCompletionItems = properties.map(prop => new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property));
        const methodsCompletionItems = methods.map(func => {
            const completionItem = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Method);
            completionItem.documentation = new vscode.MarkdownString(func.description);
            return completionItem;
        });
        const eventsCompletionItems = events.map(e => new vscode.CompletionItem(e.name, vscode.CompletionItemKind.Event));

        return [
            ...propertiesCompletionItems,
            ...methodsCompletionItems,
            ...eventsCompletionItems,
        ];
    }
};

export default bookmarksCompletionItemProvider;
