const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
 
      <form action={`/ptoR/${this.props.ptoR._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="type" defaultValue={this.props.ptoR.type}/><br/>
          Color: <input type="text" name="status"  defaultValue={this.props.ptoR.status}/><br/>
          Is Ready To Eat:
              { this.props.pto.approved? <input type="checkbox" name="approved?" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;