const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render () {
        const users = this.props.users;

        return (
            <DefaultLayout title='Show an Individual users'>
                <p>The {users.name} is {users.hours} </p>
                {users.approved ? 'Approved' : 'NOT enough HOURS'}
                <br />
                <a href={`/users/${users._id}/edit`}>Edit this users</a>
                <form action={`/users/${users._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/users'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;