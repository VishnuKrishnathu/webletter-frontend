import React, { useState, useEffect} from 'react';
import NavBar from '@/components/Navbar';
import CheckAuth from '@/components/CheckAuth';
import dynamic from 'next/dynamic';
import { apiAxios } from '@/constants/axios.config';
import Cookies from 'js-cookie';
import { store } from '@/store/store';
import { notificationState, editorTitle, editorSummary } from '@/store/actions/action';
import TitleInput from '@/components/editor/TitleInput';
import SummaryInput from '@/components/editor/SummaryInput';

const DynamicTextEditor = dynamic(() => import('@/components/editor/RichEditor'), {ssr :false});
const DynamicCSRF = dynamic(() => import('@/components/GetCSRF'), {ssr :false});

export default function ComposeArticle() {
    let editorData:string = "";

    const textEditorObj = (body :string) :void => {
        editorData = body;
        let { title } : {title :string}= store.getState().editor;
        let { summary } : {summary :string}= store.getState().editor;
        if(title == "" || summary == "") return

        let cookies = Cookies.get('csrftoken')
        apiAxios.post('/post-blog/', {
            title, summary,
            article: editorData
        }, {
            headers: {
                'X-CSRFToken' : cookies ? cookies : ''
            }
        }).then(({data}) => {
            location.reload();
            store.dispatch(notificationState("Article composed"));
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <CheckAuth />
            <DynamicCSRF />
            <NavBar />
            <TitleInput />
            <SummaryInput />
            <DynamicTextEditor editorData={textEditorObj}/>
        </div>
    )
}