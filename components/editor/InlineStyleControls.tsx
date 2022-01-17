import { IStyleProps } from "./interfaces/Editor.interface";
import StyleButton from "@/components/editor/StyleButton";


const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

export default function InlineStyleControls (props : IStyleProps) {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="mb-3">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};