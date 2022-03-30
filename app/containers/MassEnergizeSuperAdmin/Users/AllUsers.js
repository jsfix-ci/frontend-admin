import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { bindActionCreators } from "redux";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import { apiCall } from "../../../utils/messenger";
import styles from "../../../components/Widget/widget-jss";
import { loadAllUsers, reduxToggleUniversalModal } from "../../../redux/redux-actions/adminActions";
import { getHumanFriendlyDate, smartString } from "../../../utils/common";
import LinearBuffer from "../../../components/Massenergize/LinearBuffer";

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      columns: this.getColumns(props.classes),
    };
  }

  componentDidMount() {
    const { auth } = this.props;
    var url;
    if (auth.is_super_admin) url = "/users.listForSuperAdmin";
    else if (auth.is_community_admin) url = "/users.listForCommunityAdmin";
    apiCall(url).then((allUsersResponse) => {
      if (allUsersResponse && allUsersResponse.success) {
        this.props.putUsersInRedux(allUsersResponse.data);
      }
    });
  }

  fashionData = (data) => {
    return data.map((d) => [
      d.full_name,
      getHumanFriendlyDate(d.joined),
      d.preferred_name,
      d.email,
      smartString(d.communities.join(", "), 30),
      d.is_super_admin
        ? "Super Admin"
        : d.is_community_admin
        ? "Community Admin"
        : "Member",
      d.id,
    ]);
  };

  getColumns = (classes) => [
    {
      name: "Full Name",
      key: "full_name",
      options: {
        filter: false,
      },
    },
    {
      name: "Joined",
      key: "joined",
      options: {
        filter: false,
        filterType: "textField",
      },
    },
    {
      name: "Preferred Name",
      key: "preferred_name",
      options: {
        filter: false,
      },
    },
    {
      name: "Email",
      key: "email",
      options: {
        filter: false,
        filterType: "textField",
      },
    },
    {
      name: "Community",
      key: "community",
      options: {
        filter: true,
        filterType: "multiselect",
      },
    },
    {
      name: "Membership",
      key: "status",
      options: {
        filter: true,
      },
    },
  ];


  nowDelete({ idsToDelete, data }) {
    const { allUsers, putUsersInRedux } = this.props;
    const itemsInRedux = allUsers;
    const ids = [];
    idsToDelete.forEach((d) => {
      const found = data[d.dataIndex][6];
      ids.push(found);
      apiCall("/users.delete", { id: found });
 
    });
    const rem = (itemsInRedux || []).filter((com) => !ids.includes(com.id));
    putUsersInRedux(rem);
  }

  makeDeleteUI({ idsToDelete }) {
    const len = (idsToDelete && idsToDelete.length) || 0;
    return (
      <Typography>
        Are you sure you want to delete (
        {(idsToDelete && idsToDelete.length) || ""})
        {len === 1 ? " user? " : " userrs? "}
      </Typography>
    );
  }
  render() {
    const title = brand.name + " - Users";
    const description = brand.desc;
    const { columns } = this.state;
    const { classes } = this.props;
    const data = this.fashionData(this.props.allUsers || []);
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      print: true,
      rowsPerPage: 50,
      onRowsDelete: (rowsDeleted) => {
        const idsToDelete = rowsDeleted.data;
        this.props.toggleDeleteConfirmation({
          show: true,
          component: this.makeDeleteUI({ idsToDelete }),
          onConfirm: () => this.nowDelete({ idsToDelete, data }),
          closeAfterConfirmation: true,
        });
        return false;
        // const idsToDelete = rowsDeleted.data;
        // idsToDelete.forEach((d) => {
        //   const idField = data[d.dataIndex].length - 1;
        //   const userId = data[d.dataIndex][idField];
        //   apiCall("/users.delete", { id: userId });
        // });
      },
    };

    if (!data || !data.length) {
      return <LinearBuffer />;
    }
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.table}>
          <MUIDataTable
            title="All Users"
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </div>
    );
  }
}

AllUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    auth: state.getIn(["auth"]),
    community: state.getIn(["selected_community"]),
    allUsers: state.getIn(["allUsers"]),
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      putUsersInRedux: loadAllUsers,
      toggleDeleteConfirmation: reduxToggleUniversalModal
    },
    dispatch
  );
}
const VendorsMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);

export default withStyles(styles)(VendorsMapped);
