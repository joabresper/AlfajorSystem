import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import '../pages/LoginPage.css'
import { useNavigate } from "react-router-dom";
import Logo from "../../public/logo.png";

const LoginPage = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    setLoading(true);
    await delay(500);

    if (inputUsername === "mecanico" && inputPassword === "mecanico") {
        navigate('/menumecanico');
    } else if (inputUsername === "ATT" && inputPassword === "ATT") {
        navigate('/menuatt');
    } else if (inputUsername === "Gerente" && inputPassword === "Gerente") {
        navigate('/menuGerente');
    } else {
        setShow(true);
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundColor: '#E3D9B4' }}
    >
      
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
          style={{ width: '50vw', height: 'auto' }} /* 50% del ancho del viewport */
        />
        <div className="h4 mb-2 text-center">Acceder</div>
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Usuario o contraseña incorrectos.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Usuario"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Contraseña"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Recordar" />
        </Form.Group>
        {!loading ? (
          <Button
            className="w-100"
            type="submit"
            style={{
              backgroundColor: '#CF7C20',
              color: 'white',
              border: 'none',
            }}
          >
            Acceder
          </Button>
        ) : (
          <Button
            className="w-100"
            type="submit"
            style={{
              backgroundColor: '#9E9E9E',
              color: 'white',
              border: 'none',
              cursor: 'not-allowed',
            }}
            disabled
          >
            Accediendo...
          </Button>
        )}

        <div className="d-grid justify-content-end">
          <Button
            className="text-muted px-0"
            variant="link"
          >
            Olvidaste tu contraseña?
          </Button>
        </div>
      </Form>
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        TPI2 Diseño de sistemas - G3 Alfajor &copy;2024
      </div>
    </div>
  );
};

export default LoginPage;