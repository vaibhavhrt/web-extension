// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import completionItemProviders from './completionItemProviders';

// const documentSelector = [{language: 'javascript', scheme: 'file'}, {language: 'type', scheme: 'file'}];
const documentSelector = ['javascript', 'typescript', 'plaintext'];

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let chromeProvider = vscode.languages.registerCompletionItemProvider(documentSelector, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
            // a completion item that can be accepted by a commit character,
            // the `commitCharacters`-property is set which means that the completion will
            // be inserted and then the character will be typed.
            const commitCharacterCompletion = new vscode.CompletionItem('chrome');
            commitCharacterCompletion.commitCharacters = ['.'];
            commitCharacterCompletion.documentation = new vscode.MarkdownString('Chrome provides extensions with many special-purpose APIs like `chrome.runtime` and `chrome.alarms`.');
    
            // return all completion items as array
            return [
                commitCharacterCompletion,
            ];
        }
    });

    completionItemProviders.forEach(completionItemProvider => vscode.languages.registerCompletionItemProvider(documentSelector, completionItemProvider, '.'));
}

// this method is called when your extension is deactivated
export function deactivate() {}
