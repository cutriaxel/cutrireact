import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { writeBatch, collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import './Checkout.scss';
import * as Yup from "yup";

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre es muy corto")
        .max(20, "El nombre es demasiado largo"),
    direccion: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "La dirección es muy corta")
        .max(30, "La dirección es demasiado larga"),
    email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Email inválido"),
    telefono: Yup.number()
        .required("Este campo es obligatorio")
        .min(8, "Ingresa un numero de ocho o mas digitos"),
    dni: Yup.number()
        .required("Este campo es obligatorio")
        .min(8, "Ingresa un numero de ocho digitos")
        
});

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    const crearOrden = async (values) => {
        const orden = {
            cliente: values,
            total: totalCompra(),
            fecha: new Date(),
            
        };

        const batch = writeBatch(db);
        const ordersRef = collection(db, "orders");

        try {
            const orderDocRef = await addDoc(ordersRef, orden);
            const orderId = orderDocRef.id;
            const orderProductsRef = collection(db, "order_products");
            cart.forEach((product) => {
                const orderProduct = {
                    orderId: orderId,
                    productId: product.id,
                    cantidad: product.cantidad,
                    precio: product.price,
                    title: product.title
                };

                const orderProductDocRef = doc(orderProductsRef);
                batch.set(orderProductDocRef, orderProduct);
            });

            await batch.commit();

            setOrderId(orderId);
            vaciarCarrito();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    };

    if (orderId) {
        Swal.fire({
          title: "Tu compra se registró correctamente!",
          html: `
            <hr />
            <p>Tu número de compra es: <strong>${orderId}</strong></p>
            <button id="goToHomeButton" class="btn btn-primary custom-button">Ir al inicio</button>
          `,
          icon: "success",
          showConfirmButton: false,
          timer: 15000,
          timerProgressBar: true,
          customClass: {
            popup: "custom-swal",
          },
        }).then((result) => {
          if (!result.dismiss) {
            window.location.href = "/";
          }
        });
      
        document.getElementById("goToHomeButton").addEventListener("click", function() {
          window.location.href = "/";
        });
      }
      

    

    return (
        <div className="container-pago ">
            <div className="finalizar-compra">
            <h2></h2>
            <hr />
            </div>

            <Formik
                initialValues={{
                    nombre: "",
                    direccion: "",
                    email: "",
                    telefono: "",
                    dni: ""
                }}
                onSubmit={crearOrden}
                validationSchema={schema}
            >
                {() => (
                    <div className="container-formulario">
                        <Form className="container-input">
                            <div className="container-nombre">
                                <div className="container-titulo">
                            <label htmlFor="nombre">Nombre:</label>
                            </div>
                                <Field type="text" name="nombre" className="form-control my-2" />
                                <ErrorMessage name="nombre" component={"p"} />
                            </div>
                            <div className="container-direccion">
                                <div className="container-titulo">
                            <label htmlFor="direccion">Dirección:</label>
                            </div>
                                <Field type="text" name="direccion" className="form-control my-2" />
                                <ErrorMessage name="direccion" component={"p"} />
                            </div>
                            <div className="container-email">
                                <div className="container-titulo">
                            <label htmlFor="email">Email:</label>
                            </div>
                                <Field type="email" name="email" className="form-control my-2" />
                                <ErrorMessage name="email" component={"p"} />
                            </div>
                            <div className="container-telefono">
                                <div className="container-titulo">
                            <label htmlFor="telefono">Teléfono:</label>
                            </div>
                                <Field type="text" name="telefono" className="form-control my-2" />
                                <ErrorMessage name="telefono" component={"p"} />
                            </div>
                            <div className="container-dni">
                                <div className="container-titulo">
                            <label htmlFor="dni"> DNI:</label>
                            </div>
                                <Field type="text" name="dni" className="form-control my-2" />
                                <ErrorMessage name="dni" component={"p"} />
                            </div>
                            <div className="container-btn-enviar">
                                <button style={{ backgroundColor: "#4a90e2", color: 'white', width: 'width: 90px' }}
                  className="btn">CONFIRMAR</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Checkout;
