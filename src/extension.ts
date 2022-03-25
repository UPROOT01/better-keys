import * as vscode from "vscode";
import { selectParethesis } from "./keybindings";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "better-keys" is now active!');
	let activated: boolean = false;
	const pressedKey: string[] = [];

	const keyPressed = vscode.commands.registerCommand(
		"type",
		(e: { text: string }) => {
			console.log(e.text, activated);
			console.log(e);

			if (!activated) {
				vscode.commands.executeCommand("default:type", e);
			} else {
				pressedKey.push(e.text);

				const editor = vscode.window.activeTextEditor;

				if (!editor) {
					console.log("Nothing in focus");
				} else {
					selectParethesis(editor);
				}
			}
		}
	);

	const activateBKmode = vscode.commands.registerCommand(
		"better-keys.toggle",
		(_) => {
			activated = !activated;
			console.log("Toggled", activated);
		}
	);

	context.subscriptions.push(activateBKmode);
	context.subscriptions.push(keyPressed);
}

export function deactivate() {}
