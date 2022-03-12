import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { apiAxios } from '@/constants/axios.config';
import { useRouter } from 'next/router';
import { IBlogAPI } from '@/types/api_types';
import { Title, Summary } from 'pages/compose-article';
import { 
    RawDraftContentState, 
    EditorState, 
    Editor, 
    convertFromRaw,
    ContentBlock
} from 'draft-js'

interface IBlogData extends IBlogAPI{
    personal :boolean;
}

const  PersonalBlogEdit :NextPage = () => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const router = useRouter();
    const { blog_id } = router.query;
    let title = "";
    let summary = "";

    useEffect(function(){
        apiAxios.get(`/get-blogs/${blog_id}`)
        .then(({data}) => {
            if(!data.personal) router.push('/');
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        });
    }, [blog_id, router])

    function getText(body ?:string, inputName ?:string){
        if(body && inputName){
            switch(inputName){
                case "post-title":
                    title = body;
                    break;

                case "post-summary":
                    summary = body;
                    break;
            }

        }
        else if(!body && inputName == "post-title") title = ""
        else if(!body && inputName == "post-summary") summary = ""
        return {
            title, summary
        }
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
    <React.Fragment>
        <Title getText={getText} />
        <Summary getText={getText} />
        <div className='RichEditor-editor px-2 mt-4 py-2 overflow-y-scroll w-[100%]'>
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                blockStyleFn={getBlockStyle}
                customStyleMap={styleMap}
            />
        </div>
    </React.Fragment>
  )
}

export default PersonalBlogEdit;