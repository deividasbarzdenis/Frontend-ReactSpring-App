import {useEffect, useState} from "react";
import {deleteUser, fetchUsers} from "../../api/usersApi";
import Container from "@material-ui/core/Container";

import UsersTable from "./UsersTable";

export const User = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadAllUsers();
    }, [])

    const loadAllUsers = () => {
        setIsLoading(true);
        fetchUsers()
            .then(response => {
                setUsers(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleDeleteClick = (id) => {
        setIsLoading(true);
        deleteUser(id)
            .then(() => {
                loadAllUsers();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <Container component="main" maxWidth="xs">
            <h1 align="center"> All Users</h1>
            {
                isLoading ?
                    (
                        <div className="spinner-border" role="status">
                        </div>
                    ) :
                    <UsersTable
                        users={users}
                        handleDeleteClick={handleDeleteClick}
                    />

            }
        </Container>
    )
};
