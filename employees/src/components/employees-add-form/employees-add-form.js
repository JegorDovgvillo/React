import './employees-add-form.css'
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onAdd = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.props.addItem(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        } else {
            alert('Введите имя и З/П')
        }
    }
    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onAdd}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        name='name'
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;