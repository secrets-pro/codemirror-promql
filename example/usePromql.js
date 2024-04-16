/*
 * @Author: bowen.xu 
 * @Date: 2024-04-16 09:20:58 
 * @Last Modified by: bowen.xu
 * @Last Modified time: 2024-04-16 15:22:13
 */

import { PromQLExtension } from "@secrets/codemirror-promql";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import myTheme from "@secrets/codemirror-theme";
import { bracketMatching } from "@codemirror/language";
import { autocompletion, closeBrackets } from "@codemirror/autocomplete";

export const usePromql = () => {
  const promQL = new PromQLExtension();
  promQL
    .activateCompletion(true)
    .activateLinter(false)
    .setComplete({
      url: 'https://prometheus.land'
    });
  return promQL;
}

const initEdit = (el, props) => {

  const promQL = usePromql();
  let startState = EditorState.create({
    doc: props.modelValue,

    extensions: [
      promQL.asExtension(),
      bracketMatching(),
      autocompletion(),
      closeBrackets(),
      myTheme('light'),
      EditorView.editable.of(!props.readonly),
    ],
  });

  const editor = new EditorView({
    state: startState,
    parent: el,
  });
  return editor;

}

export default initEdit;