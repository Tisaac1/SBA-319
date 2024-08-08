const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render () {
        const pto = this.props.ptoR;

        return (
            <DefaultLayout title='Show an Individual Pto'>
                <p>The {pto.status} is {pto.updated} </p>
                {pto.approved ? 'It is approved' : 'NOT APPROVED'}
                <br />
                <a href={`/ptoR/${pto._id}/edit`}>Edit this Pto</a>
                <form action={`/ptoR/${pto._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/ptoR'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;