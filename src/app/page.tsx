"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deletePost } from "@/services/postServices";

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

/* fungsi ini sebagai event handling delete yang di kirim ke service memanggil method deletePost */
    const handleDelete = async (postId: string) => {
        if (!window.confirm(`Yakin hapus ID ${postId}?`)) {
            return; 
        }

        const response = await deletePost(postId);

        if (!response.ok) {
            const errorData = await response.json();
            alert(`Gagal: ${errorData.error || 'Server error.'}`);
            return; 
        }

        setPost(prevPosts => prevPosts.filter(p => p.id !== postId));
        alert(`Berhasil hapus ID ${postId}.`);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8 border-b pb-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Semua Postingan 📝
                    </h1>
                    <Link 
                        href="/pages/forms"
                        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        + Buat Post Baru
                    </Link>
                </header>

                {/* Konten Utama */}
                {post.length === 0 ? (
                    <div className="text-center p-10 bg-white rounded-xl shadow-lg">
                        <p className="text-xl text-gray-500">
                            😔 Belum ada postingan ditemukan. Ayo buat yang pertama!
                        </p>
                    </div>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {post.map((p) => (
                                <li 
                                key={p.id} 
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-between"
                                >
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                                        {p.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {p.content}
                                    </p>
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button 
                                        className="text-sm font-medium text-red-600 hover:text-red-800 transition duration-150 ease-in-out cursor-pointer"
                                        onClick={() => handleDelete(p.id)} 
                                    >
                                        Hapus Post 🗑️
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
