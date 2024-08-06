const React = require('react');
const DefaultLayout = require('../layout/defaultp');

class Index extends React.Component {
    render () {
        const { pto } = this.props;

        return (
            <DefaultLayout title = {'Pto Index Page'}>
                <nav>
                    <a href='/pto/new'>Create a New <Request></Request></a>
                </nav>
                <ul>
                    {pto.map((pto, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/pto/${pto._id}`}>
                                {pto.name}
                                </a>
                                {' '}
                                is {pto.color} <br/>
                                {pto.status ? `It is approved` : `It is NOT approved`}
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;