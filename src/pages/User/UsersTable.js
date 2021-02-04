import Container from "@material-ui/core/Container";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const UsersTable = ({users, handleDeleteClick, }) => {
    return (
         <Container >
             <TableContainer>
                 <Table >
                     <TableHead>
                         <TableRow>
                             <TableCell align="center">Id</TableCell>
                             <TableCell align="center">User name</TableCell>
                             <TableCell align="center">Last name</TableCell>
                             <TableCell align="center">Email</TableCell>
                             <TableCell align="center">Role</TableCell>
                             <TableCell align="center"/>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                         {
                             users.map(user => (
                                 <TableRow key={user.id}>
                                     <TableCell>{user.id}</TableCell>
                                     <TableCell><Link to={`/users/${user.id}`}>{user.username}</Link></TableCell>
                                     <TableCell>{user.lastName}</TableCell>
                                     <TableCell>{user.email}</TableCell>
                                     <TableCell>{user.role}</TableCell>
                                     <TableCell>
                                         <Button
                                             variant="outlined"
                                             color="secondary"
                                             size="small"
                                             onClick={() => handleDeleteClick(user.id)}
                                         >Delete</Button>
                                     </TableCell>
                                 </TableRow>
                             ))
                         }
                     </TableBody>
                 </Table>
             </TableContainer>
         </Container>
    );
}

export default UsersTable;

