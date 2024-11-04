import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        name: "Hacer la tarea de IoT",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Estudiar para el examen",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Realizar mapa mental SOA",
        role: "Senior Developer",
        status: "Active",
    },

];

const columns = [
    {
        key: "name",
        label: "Actividad",
    },
    {
        key: "role",
        label: "Descripción",
    },
    {
        key: "status",
        label: "Estado",
    },
];

function TableActivity() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["2"]));

    return (
        <>

            <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "#60ABAF" }}>Actividades Prioritarias</h1>
            <Table
                aria-label="Controlled table example with dynamic content"
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}

            >
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );

}

export default TableActivity;
