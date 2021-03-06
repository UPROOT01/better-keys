import { TextEditor, Selection, SelectionRange, Range } from "vscode";

const getCursorPosition = (editor: TextEditor) =>
	editor.document.offsetAt(editor.selection.active);

const selectParethesis = (editor: TextEditor, parenthesis: string = "()") => {
	const cursorPosition = getCursorPosition(editor);
	console.log(cursorPosition);

	const file = editor.document.getText();

	const nextChar = findNextChar(cursorPosition, file, parenthesis[1]);
	const prevChar = findPrevChar(cursorPosition, file, parenthesis[0]);

	console.log("dio cane");

	if (nextChar !== null && prevChar !== null) {
		console.log(nextChar, prevChar);

		editor.selection = new Selection(
			editor.document.positionAt(prevChar + 1),
			editor.document.positionAt(nextChar)
		);
	}
};

const findNextChar = (cursorPosition: number, file: string, char: string) => {
	for (let i = cursorPosition; i < file.length; i++) {
		const element = file[i];

		if (char === element) {
			return i;
		}
	}

	return null;
};

const findPrevChar = (cursorPosition: number, file: string, char: string) => {
	for (let i = cursorPosition; i >= 0; i--) {
		const element = file[i];

		if (char === element) {
			return i;
		}
	}

	return null;
};

export { selectParethesis };
