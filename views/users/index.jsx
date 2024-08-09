const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render () {
        const { users } = this.props;

        return (
            <DefaultLayout title = {'users Index Page'}>
                <nav>
                    <a href='/users/new'>Create a New users</a>
                </nav>
                <ul>
                return (
    <div>
      {users.map((users) => (
        <div key={users.id}>
          <h2>Item: {users.title}</h2>
        </div>
      ))}
    </div>
  );

                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;

