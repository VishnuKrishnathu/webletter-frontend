import React, { useState, useMemo } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import InlineStyleControls from '@/components/editor/InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';


export default function RichEditor() {

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    function toggleInlineStyle (inlineStyle:string){
      setEditorState((state) => RichUtils.toggleInlineStyle(state, inlineStyle));
    };

    function toggleBlockType (blockType :string){
      setEditorState((state) => RichUtils.toggleBlockType(state, blockType));
    };

    function handleKeyCommand(command :string, editorState :EditorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        console.log(command)

        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    return (
        <div className='mx-4 mt-3'>
            <InlineStyleControls
              editorState={editorState}
              onToggle={toggleInlineStyle}
            />
            <BlockStyleControls
              editorState={editorState}
              onToggle={toggleBlockType}
            />
            <div className='border-2 border-indigo-900 h-40 px-2 overflow-y-scroll mt-4'>
                <Editor
                  editorState={editorState}
                  onChange={setEditorState}
                  handleKeyCommand = {handleKeyCommand}
                />
            </div>
        </div>
    )
}
