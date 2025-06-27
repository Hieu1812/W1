import styles from '../styles/node-detail.css';
import { Link, useLoaderData, json } from "@remix-run/react";
import { getnote } from '../back/note.js';
export default function detail() {
  const note = useLoaderData();
  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  )
}

export async function loader({ params }) {
  const note = await getnote(params.noteid);
  if (!note) {
    throw json(
      { message: 'Could not find any notes.' },
      {
        status: 404,
        statusText: 'Not Found',
      }
    );
  }
  return note
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}