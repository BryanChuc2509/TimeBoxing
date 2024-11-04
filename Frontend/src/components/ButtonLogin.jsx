import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import {Input} from "@nextui-org/react";

function ButtonLogin() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col gap-2">
            <Button onPress={onOpen} className="max-w-fit" color="warning" style={{backgroundColor: "#60D4EA"}}>Log In</Button>
            <Modal
                isOpen={isOpen}
                placement="center"  // Establecer la posición directamente
                onOpenChange={onOpenChange}
            >
                <ModalContent style={{backgroundColor: ""}}>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Iniciar Sesión</ModalHeader>
                            <ModalBody>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input type="email" label="Email" />
                                </div>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input type="password" label="Password" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button style={{backgroundColor: "#60D4EA"}} onPress={onClose}>
                                    Iniciar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>

    );
}

export default ButtonLogin;
