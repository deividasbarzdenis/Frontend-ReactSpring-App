import {useEffect, useState} from "react";
import {deleteUser, fetchUsers} from "../../api/usersApi";

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
        <div>
            <h1>Form</h1>
        </div>
    )
};