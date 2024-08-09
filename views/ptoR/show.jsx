const React = require('react');
class Show extends React.Component {
    render () {
        const ptoR = this.props.pto;

        return (
            <div>
                <h1>Show Page</h1>
                <p>The {ptoR.name} is {ptoR.update}</p>
                {ptoR.status ? 'approved?' : "NOT APPROVED!"}
            </div>

        )
    }
}

module.exports = Show;