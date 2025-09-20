# Next js Documentations
 Next js Version 15 App Router 13


 # Folder APP Router
 App adalah folder untuk setiap halaman website dan setiap halaman harus memiliki folder tersendiri dan file konstan bernama page.tsx dan menjadi route applikasi

 # Folder Models
 Models adalah tempat dimana kita mendefinisikan field dan type data yang digunakan. analoginya ini adalah phpmyadmin nya next js

 # Folder Services 
 Services adalah controller nya tempat semua logika bisnis di atur, input validasi, dynamic route dll. tugas nya menerima input dari file route dan mengelolanya 

 #  Folder APP/APi/route.ts
 Api adalah tempat kita mendefinisikan route applikasi, karena next js adalah BACKEND untuk pull api hanya bisa lakukan fecthing di sisi frontend. dengan mengarahkan ke path api/route.ts

 * aturan file route.ts *
|
===> nama method harus bernama sesuai protokol HTTP [ GET, POST, PUT, PATCH, DELETE ]
|
===> dan file route adalah file yang menangkap data dari frontend. tergantung pada cara kirim. jika data di FE di kirim dengan form format json. tangkap dengan req,json() dan jika dari url tangkap dengan req.url() data yang di tangkap di kirim ke service untuk di kelola