"use client";

import { useState } from 'react';
import Link from 'next/link'; 

export default function Form () {
 
    /* 1. inisialisasi state penyimpanan data */
    const [data, setData] = useState({
        title: '',
        content: ''
    });

    /* 2. fungsi get data dari input form */
    const GetInputValue = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    } 
    
    /* 3. fungsi handle submit form : kirim data dengan pull ke API route POST */ 
    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (!data.title || !data.content) {
            alert('Pastikan semua field terisis !');
            console.log('data tidak lengkap !');
            return;
        }

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setData({
                    title: '',
                    content: ''
                    });
            alert('Berhasil Membuat Postingn Baru !');
            console.log("Success !", response.status);
        }

        else {
            alert('Gagal Membuat Postingan Baru !');
            console.log('API Error !', response.status)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            <div className="max-w-xl mx-auto">
                
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                       Buat Postingan Baru
                    </h1>
                    <Link 
                        href="/"
                        className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition duration-200"
                    >
                        &larr; Kembali ke Daftar Post
                    </Link>
                </header>

                <form
                onSubmit={HandleSubmit} 
                className="bg-white p-8 rounded-2xl shadow-2xl space-y-6">
                    
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
                            Judul Postingan
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={GetInputValue}
                            placeholder="Tuliskan judul yang menarik di sini..."
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm text-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-1">
                            Isi Konten
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows="8"
                            value={data.content}
                            onChange={GetInputValue}
                            placeholder="Kembangkan ide dan cerita Anda di sini..."
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm resize-y text-black"
                        />
                    </div>
                    
                    <button 
                    type="submit" 
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-[1.01]">
                       Submit 
                    </button>
                    
                </form>
            </div>
        </div>
    );
}

