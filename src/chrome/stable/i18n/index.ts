import * as vscode from 'vscode';

import methods from './methods.json';

const i18nCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.i18n.')) {
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

export default i18nCompletionItemProvider;
