import { Container, Card, Button, Form } from "react-bootstrap";
import { MdPerson } from "react-icons/md";


function MeuPerfil ()
{
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const senha = localStorage.getItem('password');
    return(
        <div>
            <Container className=" d-flex flex-column mx-auto mb-5">
                 <Card className="shadow-sm mt-5 mb-5 card-aluno rounded position-relative " style={{width:'450px', height:'220px'}}>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Text><span className=" campos-aluno">Área de Formação:</span> <br/> <strong>Informática</strong>
                           <br/> <span className=" campos-aluno">Curso:</span> <strong>Técnico de Gestão de Sistemas Informáticos</strong>
                            </Card.Text>
                            <Card.Text className="ms-3">
                                <span className=" campos-aluno">Nome:</span> <strong> {nome} </strong> <br/>
                                <span className=" campos-aluno">Sala:</span> <strong>80 Pavilhões</strong> <br/>
                                <span className=" campos-aluno">Nº Proceso:</span> <strong>71286</strong> <br/>
                            </Card.Text>
                        </div>
                        <Card.Text className="pt-3 ms-3">
                            <span className=" campos-aluno">07 - IG13A</span>
                        </Card.Text>
                        <div className="d-flex justify-content-center position-absolute top-40 start-50 translate-middle ">
                            <MdPerson size={60}/>
                        </div>
                    </Card.Body>
                </Card>
                <h2 className="mt-3" >Dados Pessoais</h2> <hr/>
                <p>
                    <strong>Nome:</strong> {nome} <br/>
                    <strong>Filho de:</strong> Hermenegildo Paulo De Carvalho <br/>
                    <strong>E de:</strong> Massengo Mato Tchingombe Madalena <br/>
                    <strong>Bilhete de identidade nº:</strong> 007668577LA043 <br/>
                    <strong>Nascido aos:</strong> 21/06/2006 <br/>
                    <strong>Natural de:</strong> Maculusso Ingombotas <br/>
                    <strong>Provincía de:</strong> Luanda <br/>
                    <strong>Sexo:</strong> Masculino <br/>
                    <strong>Estado Civil:</strong> Solteiro
                    
                </p>
                <h2 className="mt-3" >Contactos</h2> <hr/>
                <p>
                    <strong>Telefone:</strong> 974107262 <br/>
                    <strong>Email:</strong> {email}
                </p>
                <h2 className="mt-3" >Segurança</h2> <hr/>
                <p>
                    <strong>Senha:</strong> {senha} <br/>
                    <Button className="mt-3 mb-3 btn-add">Editar</Button>
                </p>
                <h2 className="mt-3 mb-3" >Preferências de Notificações</h2> <hr/>
                <p>
                    Deseja que te notifiquemos sempre que se fizer uma atualização sobre novos livros ?
                </p>
                <Form className="d-flex ">
                    <Form.Label className="me-3 fw-bold">Sim</Form.Label>
                    <Form.Check type="switch"/>
                </Form>
            </Container>
        </div>
    )
}
export default MeuPerfil;