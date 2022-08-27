import { useMatch, useNavigate } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    const match = useMatch("shop/:sectionID");
    const navigate = useNavigate();

    return <Component match={match} navigate={navigate} {...props} />;
  }

  return ComponentWithRouterProps;
}

export default withRouter;
