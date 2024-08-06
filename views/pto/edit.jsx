const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/defaultp.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/pto/${this.props.pto._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.pto.name}/><br/>
          Color: <input type="text" name="type"  defaultValue={this.props.pto.type}/><br/>
          Is Ready To Eat:
              { this.props.pto.approved? <input type="checkbox" name="approved" defaultChecked />: <input type="checkbox" name="denied"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;