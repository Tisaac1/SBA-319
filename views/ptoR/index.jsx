const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render () {
        const { ptoR } = this.props;

        return (
            <DefaultLayout title = {'pto Index Page'}>
                <nav>
                    <a href='/ptoR/new'>Create a New pto</a>
                </nav>
                <ul>
                return (
    <div>
      {ptoR.map((pto) => (
        <div key={pto.id}>
          <h2>Item: {pto.title}</h2>
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

