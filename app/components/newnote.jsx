import styles from '../components/newnote.css';
import { Form } from '@remix-run/react';
// import { useActionData } from '@remix-run/react';

export default function NewNote() {
  return (
    <Form method="post" navigate={false} id="note-form" >
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </Form>
  );
}



export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}