import * as vscode from 'vscode';

const tabsCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        // get all text until the `position` and check if it reads `chrome.tabs.`
        // and iff so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.tabs.')) {
            return undefined;
        }

        return [
            new vscode.CompletionItem('MutedInfoReason', vscode.CompletionItemKind.Text),
        ];
    }
};

export default tabsCompletionItemProvider;
