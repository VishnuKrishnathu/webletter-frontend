import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { apiAxios } from '@/constants/axios.config'
import { 
    RawDraftContentState, 
    EditorState, 
    Editor, 
    convertFromRaw,
    ContentBlock
} from 'draft-js'
import { IBlogAPI } from "@/types/api_types";

interface IBlogData extends Omit<IBlogAPI, "user" | "id">{
  user: null | number;
  id:  null | number;
}

const BlogsPage :NextPage= () => {
    const [blogData, setBlogData] = useState<IBlogData>({
        article: "",
        summary: "",
        title: "",
        user: null,
        imageUrl: "",
        id : null
    });
    const [articleText, setArticleText] = useState<RawDraftContentState | null>(null);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const router = useRouter();
    const { blog_id } = router.query;

    useEffect(function(){
        if(!blog_id) return;

        apiAxios.get(`/get-blogs/${blog_id}`)
        .then(({data}) => {
            console.log(data);
            setBlogData({...data, article: null});
            setArticleText(JSON.parse(data.article) as RawDraftContentState);
        })
        .catch(err => {
            if(err.response.status == 404){
                router.push('/')
            }
        });

    }, [blog_id, router])

    useEffect(function(){
        if(!articleText) return;

        setEditorState((prev :EditorState) => {
            prev = EditorState.createWithContent(convertFromRaw(articleText))
            return prev;
        })


    }, [articleText])

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
    return (
        <React.Fragment>
            <div id="blog-title" className='mx-[30%] text-center text-2xl font-bold my-10'>{blogData.title}</div>
            <div className='RichEditor-editor px-2 mt-4 py-2 overflow-y-scroll w-[100%]'>
                <Editor
                    readOnly={true}
                    editorState={editorState}
                    onChange={setEditorState}
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                />
            </div>
        </React.Fragment>
    )
}

export default BlogsPage;