const React = require('react');
const DefaultLayout = require('../layout/defaultp');

class Show extends React.Component {
    render () {
        const pto = this.props.pto;

        return (
            <DefaultLayout title='Show an Individual Request'>
                <p>The {pto.name} is {pto.color} </p>
                {pto.approved ? 'It is approved' : 'NOT APPROVED'}
                <br />
                <a href={`/ptos/${pto._id}/edit`}>Edit this request</a>
                <form action={`/ptos/${pto._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/pto'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;