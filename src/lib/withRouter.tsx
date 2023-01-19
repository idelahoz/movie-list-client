import { useParams } from "react-router-dom";

const withRouter = (Component: React.ComponentType<any>): React.ComponentType => {
  return function (props: any) {
    const params = useParams();

    return (<Component {...props} {...{  params }}></Component>);
  };
}

export default withRouter;