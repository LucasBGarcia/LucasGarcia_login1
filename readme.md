This is a student registration api.
The database is allocated on freeDBtech.
To run the code, run the commands:
Git clone https://github.com/LucasBGarcia/LucasGarcia_login1.git

npm i

npm run dev

The api will start with nodemon.

Now use the route with post method
http://localhost:3030/
To enter students.

The json body should be:

{
	"nome": "",
	"usuario": "",
	"email": "",
	"senha": "",
"verificaSenha": ""
}