import { createServer } from 'http';


const PORT = process.env.PORT || 8000;

const users = [

];

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
    next()
}
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if(user)
    {
        res.write(JSON.stringify(user))
    }
    else
    {
        res.write(JSON.stringify({message: 'Usuário não encontrado'}))
    }
    res.end()
}
const createUserHandler = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    req.on('end', () => {
        
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.write(JSON.stringify(newUser))
        res.end()
    })
}
const notFoundHandler = (req, res) => {
    res.write(JSON.stringify({message: 'Indisponiivel'}))
    res.end()
}

const server = createServer((req, res) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Tratar requisições OPTIONS
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    } 
    logger(req, res,() => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET')
            {
                getUserHandler(req, res)
            }
            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')
            {
                getUserByIdHandler(req, res)
            }
            else if(req.url === '/api/users' && req.method === 'POST')
            {
                createUserHandler(req, res)
            }
            else
            {
                notFoundHandler(req, res)
            }
        })
    })
    
});

server.listen(PORT, () => {
    console.log(`Serviço rodando na porta ${PORT}`)
});