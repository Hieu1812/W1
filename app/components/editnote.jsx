import styles from '../components/newnote.css';
import { Form, useLoaderData } from '@remix-run/react';

export default function Editnote({note}) {
    console.log(note)
  return (
    <Form method="post" navigate={false} id="note-form" >
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={note.title} required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" value={note.content} required />
      </p>
      <div className="form-actions">
        <button>Edit note</button>
      </div>
    </Form>
  );
}



export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}