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

    deleteOnList(id) {
        fetch('http://localhost:3001/user/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        return false
    }

    render() {
        return (
            <form onSubmit={this.save}>
                <table align="center" className={'table1'}>
                    <tbody>
                    <tr>
                        <td className={'td1'}>Nome</td>
                        <td className={'td1'}>
                            <input value={this.state.nome}
                                   onChange={this.onNomeChanged} className={'input'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={'td1'}>CPF</td>
                        <td className={'td1'}>
                            <input value={this.state.cpf}
                                   onChange={this.onCPFChanged} className={'input'}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button type="submit" className={'buttonW'}>Salvar</button>
                <table align="center" className={'table'}>
                    <thead>
                    <tr className={'tr'}>
                        <th className={'th'}>
                            <label>Nome</label>
                        </th>
                        <th className={'th'}>
                            <label>CPF</label>
                        </th>
                        <th className={'th'}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((item, index) => {
                        return (
                            <tr className={'tr'}>
                                <td className={'td'}>
                                    {item.nome}
                                </td>
                                <td className={'td'}>
                                    {item.cpf}
                                </td>
                                <td>
                                    <button className={'buttonW'} onClick={()=>this.deleteOnList(index)}>Deletar</button>
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
