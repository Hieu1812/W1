import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/react";

const prisma = new PrismaClient();
export function addnote(title, content) {
    return prisma.note.create({
        data: {
            title: title,
            content: content
        }
    })
}

export function getnotes() {
    return prisma.note.findMany()
}

export function getnote(id) {
    return prisma.note.findUnique(
        {
            where: { id: Number(id) }
        }
    )
}

export function delnote(id) {
    return prisma.note.delete({
        where: { id: Number(id) }
    });
}

export  function update(id, title, content) {
    const check =  prisma.note.findUnique({
        where: { id: Number(id) }
    });
    if (check) {
        return prisma.note.update({
            where: { id: Number(id) },
            data: { title: title, content: content }
        });
    } else {
        throw new Error("Note not found");
    }
}