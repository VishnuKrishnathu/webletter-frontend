import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { apiAxios } from '@/constants/axios.config';
import { useRouter } from 'next/router';
import RichEditor from '@/components/editor/RichEditor';
import TitleInput from '@/components/editor/TitleInput';
import SummaryInput from '@/components/editor/SummaryInput';
import { editorSummary, editorTitle } from '@/store/actions/action';
import { store } from '@/store/store';
import { 
    EditorState,
    ContentState,
    convertFromRaw
} from 'draft-js'
import dynamic from 'next/dynamic';


const DynamicTextEditor = dynamic(() => import('@/components/editor/RichEditor'), {ssr :false});

const  PersonalBlogEdit :NextPage = () => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const router = useRouter();
    const { blog_id } = router.query;
    let title = "";
    let summary = "";

    useEffect(function(){
        if(!blog_id) return;
        apiAxios.get(`/get-blogs/${blog_id}`)
        .then(({data}) => {
            if(!data.personal) router.push('/');

            /**
             * 1. Gets content from the api
             * 2. creates a content state object instance (https://draftjs.org/docs/api-reference-content-state#createfromblockarray)
             * 3. creates an editor state object instance (https://draftjs.org/docs/api-reference-editor-state/#createwithcontent)
             */
            console.log(JSON.parse(data.article))
            let editor_text = JSON.parse(data.article)
            let contentState = convertFromRaw(editor_text);
            setEditorState(EditorState.createWithContent(contentState))
            console.log(data)
            store.dispatch(editorSummary(data.summary))
            store.dispatch(editorTitle(data.title))
        })
        .catch(err => {
            console.log(err)
        });
    }, [blog_id, router])


  return (
    <React.Fragment>
        <TitleInput />
        <SummaryInput />
        <DynamicTextEditor editorStateProp={ editorState }/>
    </React.Fragment>
  )
}

export default PersonalBlogEdit;