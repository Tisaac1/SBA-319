const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New users'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/userN' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Status: < input type="text" name="status"/> <br />
                    Approved: <input type="checkbox" name="approval"/> <br />
                    <input type="submit" name="" value="Create users
    "/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;
// module.exports = New;