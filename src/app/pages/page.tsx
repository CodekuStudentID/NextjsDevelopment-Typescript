"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page () {

    const [post, setPost] = useState<any[]>([]);

/* fungsi untuk fetching API dari path app/api/posts. mengambil data dari FE dan Meneruskan ke route dan diteruskan ke service */
    const getData = async () => {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPost(data);
    }

/* Mnejalankan fungsi getData() dengan event load useEffect. adalah event yang aksi tanpa interaksi alias melalaui load rendering */
    useEffect( () => {
        getData();
    }, []);


    return (
    <div>
      <h1>All Posts</h1>
      <Link href="/pages/form">Form</Link>

      {post.length === 0 ? ( <p>No posts found</p> ) : (
        <ul>
      {post.map((p) => (
            <li key={p.id}>
              <b>{p.title}</b> - {p.content}
              <br />
              <button className="cursor-pointer">delete</button>
            </li>
      ))}
        </ul>
      )}
    </div>
    );
}
