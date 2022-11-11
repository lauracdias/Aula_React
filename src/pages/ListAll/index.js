import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListAll() {

    const [users, setUsers] = useState([]);

    async function handleListAll(e) {
        e.preventDefault();

        const update = await ClientUsers.listAll();
        if (update.status === 200) {
            setUsers(update.data)
            toast.success('Usuários encontrados:');
        } else {
            toast.error('Nenhum usuário salvo');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Exibir todos os usuários">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleListAll}>

                        <button type="submit">Continuar</button>
                        
                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.nome} </td>
                                            <td>{user.email} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}