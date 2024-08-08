const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
    
      <form action={`/usersN/${this.props.users._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.users.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.users.color}/><br/>
          Is Ready To Eat:
              { this.props.users.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;