const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
 
      <form action={`/users/${this.props.users._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="type" defaultValue={this.props.users.type}/><br/>
          Pto type: <input type="text" name="status"  defaultValue={this.props.users.status}/><br/>
          Status of approval:
              { this.props.user.hours.approved? <input type="checkbox" name="hours approved?" defaultChecked />: <input type="checkbox" name="status"/> }
          <br/>
          <input type="submit" value="Submit"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;