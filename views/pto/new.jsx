const React = require('react');
const DefaultLayout = require('../layout/defaultp');

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Request'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/pto' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Request: < input type="text" name="Request"/> <br />
                    Status: <input type="checkbox" name="Approved?"/> <br />
                    <input type="submit" name="" value="Create Request"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;