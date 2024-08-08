const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render() {
        const  {ptoR} = this.props;

        return (
            <DefaultLayout title={'Pto Index Page'}>
                <nav>
                    <a href='/ptoR/new'>Create Pto</a>
                </nav>
                <ul>
                {ptoR.map((pto) => {
                        return (
                            <li>
                                The {' '}
                                {pto.name}
                                {' '}
                                is {pto.hours} <br/>
                                {pto.approved ? `It is approved` : `It is NOT approved`}
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
