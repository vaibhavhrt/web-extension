import * as vscode from 'vscode';

import events from './events.json';

const declarativeContentCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.declarativeContent.')) {
            return undefined;
        }

        const eventsCompletionItems = events.map(e => new vscode.CompletionItem(e.name, vscode.CompletionItemKind.Event));

        return eventsCompletionItems;
    }
};

export default declarativeContentCompletionItemProvider;
