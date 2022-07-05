This is a student registration api.
the database is allocated on freeDBtech.
To run the code, run the commands:
git clone https://github.com/LucasBGarcia/LucasGarcia_login1.git

npm i

npm run dev

The api will start with nodemon.

now use the route with post method
http://localhost:3030/
to enter students.

the json body should be:

{
	"nome": "",
	"usuario": "",
	"email": "",
	"senha": "",
"verificaSenha": ""
}