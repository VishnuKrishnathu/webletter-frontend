import { EditorState } from "draft-js";

export interface IStyleProps {
    editorState :EditorState;
    onToggle : (a :string) => void;
}