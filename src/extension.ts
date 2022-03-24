import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "better-keys" is now active!');
	let activated: boolean = false;

	const keyPressed = vscode.commands.registerCommand(
		"type",
		(e: { text: string }) => {
			console.log(e.text, activated);
			console.log(e);

			if (!activated) {
				vscode.commands.executeCommand("default:type", e);
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
