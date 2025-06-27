import styles from '../components/notelist.css';
import { Form, Link } from '@remix-run/react';

export default function Notelist({ notes }) {
    return (
        <ul id="note-list">
            {notes.map((note, index) => (
                <li key={note.id} className="note">
                    <Link to={'/' + note.id}>
                        <article>
                            <header>
                                <ul className="note-meta">
                                    <li>#{index + 1}</li>
                                    <li style={{display: "flex", gap:'10px'}}>
                                        <Form method='post' navigate={false}>
                                            <input type="hidden" name="id" value={note.id} />
                                            <button className="del" name='click'value={"del"}>del</button>
                                        </Form>
                                        <Form>
                                            <input type="hidden" name="id" value={note.id} />
                                            <button className='edit' name='click' value={"edit"}><Link to={'/edit/'+ note.id}>edit</Link></button>
                                        </Form>
                                    </li>
                                </ul>
                                <h2>{note.title}</h2>
                            </header>
                            <p>{note.content}</p>
                        </article>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}