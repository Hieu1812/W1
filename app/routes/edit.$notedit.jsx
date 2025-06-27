import Editnote from '../components/editnote.jsx';
import { getnote, update } from '../back/note.js';
import { redirect, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/react';
export default function edit() {
    const note = useLoaderData();
    // console.log(note);
    return (
        <main>
            <Editnote note={note} />
        </main>
    )
}

export async function loader({ params }) {
    const note = await getnote(params.notedit);
    if (!note) {
        throw json(
            { message: 'Could not find any notes.' },
            {
                status: 404,
                statusText: 'Not Found',
            }
        );
    }
    return note;
}


export async function action({ params, request }) {
    const formdata = await request.formData();
    const tittle = formdata.get('title');
    const content = formdata.get('content');
    await update(params.notedit, tittle, content);
    return redirect('/');
}