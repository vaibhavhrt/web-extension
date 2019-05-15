import * as vscode from 'vscode';

import methods from './methods.json';
import events from './events.json';

const commandsCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.commands.')) {
            return undefined;
        }

        const methodsCompletionItems = methods.map(method => {
            const completionItem = new vscode.CompletionItem(method.name, vscode.CompletionItemKind.Method);
            completionItem.documentation = new vscode.MarkdownString(method.description);
            return completionItem;
        });
        const eventsCompletionItems = events.map(e => new vscode.CompletionItem(e.name, vscode.CompletionItemKind.Event));

        return [
            ...methodsCompletionItems,
            ...eventsCompletionItems,
        ];
    }
};

export default commandsCompletionItemProvider;
