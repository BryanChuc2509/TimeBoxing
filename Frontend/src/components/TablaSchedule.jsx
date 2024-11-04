import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

// Datos del horario con actividades
const scheduleData = [
    { hour: 7, activity1: "Reunión con el equipo", activity2: "Planificación del día" },
    { hour: 8, activity1: "Desarrollo de características", activity2: "Revisión de código" },
    { hour: 9, activity1: "Llamadas con clientes", activity2: "Seguimiento de proyectos" },
    { hour: 10, activity1: "Presentación de resultados", activity2: "Pausa" },
    // Puedes agregar más objetos aquí
];

function TablaSchedule() {
    return (
        <div className="flex flex-col gap-3" style={{ width: "50%" }}>
            <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "#60ABAF" }}>Horario</h2>
            <Table
                color="primary"
                selectionMode="single"
                defaultSelectedKeys={["2"]}
                aria-label="Example static collection table"
            >
                <TableHeader>
                    <TableColumn>Hora</TableColumn>
                    <TableColumn>Actividad 1</TableColumn>
                    <TableColumn>Actividad 2</TableColumn>
                </TableHeader>
                <TableBody>
                    {scheduleData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.hour}</TableCell>
                            <TableCell>{item.activity1}</TableCell>
                            <TableCell>{item.activity2}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TablaSchedule;