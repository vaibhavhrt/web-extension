import * as vscode from 'vscode';

import methods from './methods.json';

const enterprise_deviceAttributesCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.enterprise.deviceAttributes.')) {
            return undefined;
        }

        const methodsCompletionItems = methods.map(func => {
            const completionItem = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Method);
            completionItem.documentation = new vscode.MarkdownString(func.description);
            return completionItem;
        });

        return methodsCompletionItems;
    }
};

export default enterprise_deviceAttributesCompletionItemProvider;
