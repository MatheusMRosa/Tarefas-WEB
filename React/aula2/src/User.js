import React, {Component} from 'react';
import "./User.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cpf: '',
            loading: false,
            list: []
        };
        this.save = this.save.bind(this);
        this.onCPFChanged = this.onCPFChanged.bind(this);
        this.onNomeChanged = this.onNomeChanged.bind(this);
        this.listUser();
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

    componentDidMount() {

    }

    listUser() {
        fetch('http://localhost:3001/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                this.setState({list: data});
            });

        return false
    }

    render() {
        return (
            <form onSubmit={this.save}>
                <table align="center">
                    <tbody>
                    <tr>
                        <td>
                            <label>Nome</label>
                        </td>
                        <td>
                            <input value={this.state.nome}
                                   onChange={this.onNomeChanged}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>CPF</label>
                        </td>
                        <td>
                            <input value={this.state.cpf}
                                   onChange={this.onCPFChanged}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button type="submit">Salvar</button>
                <table align="center">
                    <thead>
                    <tr>
                        <th>
                            <label>Nome</label>
                        </th>
                        <th>
                            <label>CPF</label>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map(item => {
                        return (
                            <tr key={item.name}>
                                <td>
                                    {item.nome}
                                </td>
                                <td>
                                    {item.cpf}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </form>
        );
    }
}

export default User;
