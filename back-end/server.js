import http from 'http';
import fs from 'fs/promises'
import {fileURLToPath}  from 'url';
import url  from 'url';
import path from 'path';

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url) ; // pega o direitório e o arquivo em execução
const __dirname = path.dirname(__filename); // apenas pega o direitório do arquivo em execução


console.log(__filename, __dirname)

const server = http.createServer(async(req, res) => {

    try{
        if(req.method === 'GET')
        {
            let filePath; 

            if(req.url ==='/')
            {
              filePath = path.join(__dirname, 'public','home.html') // concatena o direitório do arquivo em execução com a pasta public junto com o arquivo mencionado 
            }
            else if(req.url ==='/about') 
            {
               filePath = path.join(__dirname, 'public','about.html') // concatena o direitório do arquivo em execução com a pasta public junto com o arquivo mencionado
            }
            else
            {
                res.end('Indisponivel');
            }
            const data = await fs.readFile(filePath) // toda função assíncrona espera uma resposta, e o await é a resposta, o fs.readFile faz a leitura do elemento entre parentêsis
            res.setHeader('Content-Type', 'text/html') // define o tipo de resposta, neste caso é html
            res.write(data) // escreve a resposta, ou renderiza na tela
            res.end() // dá um fim no serviço
        }
        else
        {
            throw new Error('Método não esperado')
        }
    }
    catch{
        res.setHeader('Content-Type','text/plain')
        res.end('Erro no Serviço ');
    }

 
  
   // res.writeHead(500,{'Content-Type':'application/json'})
   // res.end(JSON.stringify({message: 'Erro no Serviço'}))
  
});

server.listen(PORT, () => {
    console.log(`Serviço rodando na porta ${PORT}`)
})