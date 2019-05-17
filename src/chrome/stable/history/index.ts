import * as vscode from 'vscode';

import methods from './methods.json';
import events from './events.json';

const historyCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.history.')) {
            return undefined;
        }

        const methodsCompletionItems = methods.map(func => {
            const completionItem = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Method);
            completionItem.documentation = new vscode.MarkdownString(func.description);
            return completionItem;
        });
        const eventsCompletionItems = events.map(e => new vscode.CompletionItem(e.name, vscode.CompletionItemKind.Event));

        return [
            ...methodsCompletionItems,
            ...eventsCompletionItems,
        ];
    }
};

export default historyCompletionItemProvider;
