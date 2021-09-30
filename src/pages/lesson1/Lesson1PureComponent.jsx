import { React } from "React";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    if (this.state.isOnline === null) {
      return "Loading...";
    }
    return this.state.isOnline ? "Online" : "Offline";
  }
}
export default MyComponent;
