import * as vscode from 'vscode';
import devAPIs from './devAPIs.json';
import betaAPIs from './betaAPIs.json';
import stableAPIs from './stableAPIs.json';

const chromeCompletionItemProvider = {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        // get all text until the `position` and check if it reads `console.`
        // and iff so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('chrome.')) {
            return undefined;
        }

        return [...stableAPIs, ...betaAPIs, ...devAPIs].map(API => {
            const completionItem = new vscode.CompletionItem(API.name, vscode.CompletionItemKind.Module);
            completionItem.commitCharacters = ['.'];
            completionItem.documentation = new vscode.MarkdownString(API.description);
            return completionItem;
        });
    }
};

export default chromeCompletionItemProvider;
