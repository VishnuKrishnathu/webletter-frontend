import React, { useState, ReactChildren } from 'react';
import { 
  Editor, 
  EditorState, 
  getDefaultKeyBinding, 
  RichUtils, 
  DefaultDraftBlockRenderMap,
  convertToRaw,
  ContentBlock
} from 'draft-js';
import InlineStyleControls from '@/components/editor/InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';
import { convertToHTML } from 'draft-convert';
import 'draft-js/dist/Draft.css';

interface IRichEditor{
  editorData :(body: string) => any;
}

export default function RichEditor({editorData} :IRichEditor) {

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    function onTab(e : React.KeyboardEvent<{}>) :string | null{
      if(e.keyCode === 9){
        const maxDepth = 4;
        setEditorState(state => RichUtils.onTab(e, state, maxDepth));
        return "handled";
      }

      return getDefaultKeyBinding(e);
    };

    function toggleInlineStyle (inlineStyle:string){
      setEditorState((state) => RichUtils.toggleInlineStyle(state, inlineStyle));
    };

    function toggleBlockType (blockType :string){
      setEditorState((state) => RichUtils.toggleBlockType(state, blockType));
    };

    function handleKeyCommand(command :string, editorState :EditorState) :"handled" | "not-handled"{
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return 'handled';
      }

      return 'not-handled';
    }


    const [extendedBlockRenderMap] = useState(() =>{

      const HeaderOneWrapper = ({children} : {children ?:ReactChildren}) => <div className='font-bold text-3xl'>{children}</div>

      let blockRenderMap = {
        'header-one' : {
          element: 'h1',
          wrapper : <HeaderOneWrapper />
        }
      }
      return DefaultDraftBlockRenderMap.merge(blockRenderMap)
    });

    function handleClick(){
      let contentRaw = convertToRaw(editorState.getCurrentContent())
      let parsed_data = JSON.stringify(contentRaw);
      editorData(parsed_data);
    }

    function getBlockStyle(block :ContentBlock) :string{
      switch (block.getType()) {
        case 'blockquote':
          return 'RichEditor-blockquote';
        
        case 'header-one':
          return 'RichEditor-header-one';

        case 'header-two':
          return 'RichEditor-header-two';

        case 'header-three':
          return 'RichEditor-header-three';

        case 'header-four':
          return 'RichEditor-header-four';

        case 'header-five':
          return 'RichEditor-header-five';

        case 'header-six':
          return 'RichEditor-header-five';


        default:
          return "";
      }
    }

    const styleMap = {
      CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
      },
      H1 : {
        fontSize :36
      }
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
            <div className='RichEditor-editor border-2 border-indigo-900 px-2 mt-4 py-2 h-80 overflow-scroll'>
                <Editor
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  onChange={setEditorState}
                  handleKeyCommand = {handleKeyCommand}
                  spellCheck={true}
                  keyBindingFn={ onTab }
                  blockRenderMap={ extendedBlockRenderMap }
                  autoCorrect='on'
                />
            </div>
            <button 
              onClick={handleClick}
              className='mt-4 rounded bg-indigo-900 p-2 text-slate-50'
            >
              SUBMIT
            </button>
        </div>
    )
}
