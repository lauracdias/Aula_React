import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function GetByEmail() {

    const [user, setUsers] = useState([]);
    const [email, setEmail] = useState('');

    async function handleGetByEmail(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientUsers.getUser(data);
        if (update.status === 200) {
            setUsers(update.data)
            toast.success('Usuário encontrado com sucesso!');
        } else {
            toast.error('Usuário não encontrado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleGetByEmail}>

                        <label>E-mail do usuário</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Buscar</button>

                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {user && 
                                        <tr key={1}>
                                            <td>{user.nome} </td>
                                            <td>{user.email} </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}