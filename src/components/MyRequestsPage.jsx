import React, { useState, useLayoutEffect } from "react";
import MyListComponent from "./MyListComponent";
import { Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Offers from "./Offers";
import { Link, Redirect } from "react-router-dom";


const MyRequestsPage = (props) => {
  const mySelectedRequest = useSelector(
    (state) => state.requests.mySelectedRequest
  );
  const [selectedStatus, setSelectedStatus] = useState("pending");
  const authenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  const page = props.match.params.page;

  const dispatch = useDispatch();
  const showMyRequests = (status) => {
    setSelectedStatus(status);
    dispatch({ type: "RESET_MY_SELECTED_REQUEST" });
  };

  const activeMenuItem = (menuItem) => {
    if (menuItem === selectedStatus) {
      return "activeMenuItem"
    } else {
      return "inactiveMenuItem"
    }
  };

  return (
    <div id="page-container">
      {!authenticated ? (
        <Redirect to="/login" />
      ) : (
        <>
          <div id="leftmost-component">
            <div id="menu-container">
              <div id="vertical-line"></div>
              <div id="menu">
                <div
                  id="pending-link"
                  className={activeMenuItem("pending")}
                  onClick={() => showMyRequests("pending")}
                >
                  pending
                </div>
                <div
                  id="active-link"
                  className={activeMenuItem("active")}
                  onClick={() => showMyRequests("active")}
                >
                  active
                </div>
                <div
                  id="completed-link"
                  className={activeMenuItem("completed")}
                  onClick={() => showMyRequests("completed")}
                >
                  completed
                </div>
              </div>
            </div>
            <Link to="/myrequest/newrequest" id="create-request-link">
              <Button id="create-request">
                Create a <br /> new reQuest
              </Button>
            </Link>
          </div>
          <div id="middle-left-component">
            <MyListComponent selectedStatus={selectedStatus} page={page} />
          </div>
          <div id="middle-right-component">
            {mySelectedRequest && (
              <Offers
                request={mySelectedRequest}
                selectedStatus={selectedStatus}
                page={page}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyRequestsPage;
