const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Pto'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/ptoR' method="POST">
                    type: <input type="text" name="type" /><br />
                    update: < input type="text" name="update"/> <br />
                    Is approved: <input type="checkbox" name="approved"/> <br />
                    <input type="submit" name="" value="Create Pto"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;