import React, {Component} from 'react';
import './User.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cpf: '',
            loading: false
        };
        this.save = this.save.bind(this);
        this.onCPFChanged = this.onCPFChanged.bind(this);
        this.onNomeChanged = this.onNomeChanged.bind(this);
        this.listClient = this.listClient(this);
    }

    onCPFChanged(e) {
        this.setState({
            cpf: e.target.value
        });
    }

    onNomeChanged(e) {
        this.setState({
            nome: e.target.value
        });
    }

    save() {
        fetch('http://localhost:3001/user', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                cpf: this.state.cpf
            })
        });
        return false;
    }

    listClient() {
        fetch('http://localhost:3001/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        return false
    }

    componentDidMount() {

    }

    render() {
        return (
            <form onSubmit={this.save}>
                <table align={"center"} className={'table'}>
                    <tr>
                        <td>Nome</td>
                        <td><input value={this.state.nome}
                                   onChange={this.onNomeChanged}/></td>
                    </tr>
                    <tr>
                        <td>CPF</td>
                        <td><input value={this.state.cpf}
                                   onChange={this.onCPFChanged}/></td>
                    </tr>
                </table>
                <button type="submit">Salvar</button>
                <table align={"center"} className={'table'}>
                    <th>
                        <tr>
                            <td>Nome</td>
                            <td>CPF</td>
                        </tr>
                    </th>
                </table>
            </form>
        );
    }
}

export default User;
