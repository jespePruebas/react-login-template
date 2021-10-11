import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
export default function HomePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h2>Bienvenid@ al Gestor de Treas</h2>
          <p>!Aqui podras gestionar tus proyectos!</p>
          <p>Marca tus tares como terminadas, agrega ,elimina o actualiza.</p>
          <div>
            <Button as={Link} to={routes.login}>
              Empezar
            </Button>
            <p>
              ¿Aun no tienes una cuenta?{" "}
              <Link to={routes.register}>Registrate</Link>
            </p>
          </div>
        </Col>
        <Col>
          <img
            className="img-fluid"
            src="/img/task-manager.svg"
            alt="gestor-de-tares"
          />
          <p>!Gestiona tu tiempo, mejora tu productividad</p>
        </Col>
      </Row>
    </Container>
  );
}
