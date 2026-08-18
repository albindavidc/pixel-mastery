import { EditorState } from "@codemirror/state";
import { emmetCompletionSource } from "@emmetio/codemirror6-plugin";
console.log("emmetCompletionSource is function:", typeof emmetCompletionSource === "function");
const ext = EditorState.languageData.of(() => [{ autocomplete: emmetCompletionSource }]);
console.log("Created ext:", ext ? "yes" : "no");
