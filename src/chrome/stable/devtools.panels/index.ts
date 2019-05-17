import * as vscode from 'vscode';

import properties from './properties.json';
import methods from './methods.json';

const devtools_panelsCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.devtools.panels.')) {
            return undefined;
        }

        const propertiesCompletionItems = properties.map(prop => new vscode.CompletionItem(prop.name, vscode.CompletionItemKind.Property));
        const methodsCompletionItems = methods.map(func => {
            const completionItem = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Method);
            completionItem.documentation = new vscode.MarkdownString(func.description);
            return completionItem;
        });

        return [
            ...propertiesCompletionItems,
            ...methodsCompletionItems,
        ];
    }
};

export default devtools_panelsCompletionItemProvider;
