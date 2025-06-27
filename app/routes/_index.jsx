import NewNote from "../components/newnote";
import Notelist from "../components/notelist";
import { redirect } from "@remix-run/node";
import { addnote, getnotes, delnote } from "../back/note.js"; // Update the path as needed
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const note = useLoaderData();
  return (
    <main>
      <NewNote />
      <Notelist notes={note} />
    </main>
  );
}

export async function loader() {
  const note = await getnotes();
  return note;
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get('id');
  const type = formData.get('click')
  if (type == "del") {
    await delnote(id);
    return redirect('/');
  } else if (type == "edit") {
    return redirect('/notedit');
  } else {
    const title = formData.get("title");
    const content = formData.get("content");
    await addnote(title, content);
    return redirect("/");
  }

}

