import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

// Datos del horario con actividades
const scheduleData = [
    {activity1: "Reunión con el equipo", activity2: "Planificación del día" },
    {activity1: "Desarrollo de características", activity2: "Revisión de código" },
    {activity1: "Llamadas con clientes", activity2: "Seguimiento de proyectos" },
    {activity1: "Presentación de resultados", activity2: "Pausa" },
    // Puedes agregar más objetos aquí
];

function TablaActivitiesSecond() {
    return (
        <div className="flex flex-col gap-3" style={{ width: "50%" }}>
            <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "#60ABAF" }}>Actividades secundarias</h2>
            <Table
                color="primary"
                selectionMode="single"
                defaultSelectedKeys={["2"]}
                aria-label="Example static collection table"
            >
                <TableHeader>
                    <TableColumn>Actividades </TableColumn>
                    <TableColumn>Descripción</TableColumn>
                </TableHeader>
                <TableBody>
                    {scheduleData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.activity1}</TableCell>
                            <TableCell>{item.activity2}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TablaActivitiesSecond;