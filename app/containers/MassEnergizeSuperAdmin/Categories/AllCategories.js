import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { apiCall } from "../../../utils/messenger";
import styles from "../../../components/Widget/widget-jss";
import { bindActionCreators } from "redux";
import Loading from "dan-components/Loading";
import {
  loadAllTags,
  reduxToggleUniversalModal,
} from "../../../redux/redux-actions/adminActions";
import { connect } from "react-redux";
import { makeAPICallForMoreData } from "../../../utils/helpers";
class AllTagCollections extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: false, columns: this.getColumns() };
  }

  componentDidMount() {
    apiCall("/tag_collections.listForCommunityAdmin").then(
      (tagCollectionsResponse) => {
        if (tagCollectionsResponse && tagCollectionsResponse.success) {
          this.props.putTagsInRedux(tagCollectionsResponse.data);
        }
      }
    );

    // if (tagCollectionsResponse && tagCollectionsResponse.success) {
    //   const data = tagCollectionsResponse.data.map((d) => [
    //     // d.id,
    //     `${d.name}...`.substring(0, 30), // limit to first 30 chars
    //     d.rank,
    //     d.tags,
    //     d.id,
    //   ]);

    // }
  }

  // setStateAsync(state) {
  //   return new Promise((resolve) => {
  //     this.setState(state, resolve);
  //   });
  // }

  getColumns = () => {
    const { classes } = this.props;

    const cols = [
      {
        name: "ID",
        key: "id",
        options: {
          filter: false,
        },
      },
      {
        name: "Name",
        key: "name",
        options: {
          filter: false,
        },
      },
      {
        name: "Rank",
        key: "rank",
        options: {
          filter: false,
        },
      },
      {
        name: "Tags",
        key: "tags",
        options: {
          filter: false,
          customBodyRender: (tags) => (
            <div className={classes.taskStatus}>
              <Icon className={classes.taskIcon}>blur_on</Icon>
              {tags.map((t) => (
                <Typography key={t.id} variant="caption">
                  {t.name}
                  ,&nbsp;&nbsp;
                </Typography>
              ))}
            </div>
          ),
        },
      },

      {
        name: "Edit?",
        key: "edit_or_copy",
        options: {
          filter: false,
          download: false,
          customBodyRender: (id) => (
            <div>
              <Link to={`/admin/edit/${id}/tag-collection`}>
                <EditIcon size="small" variant="outlined" color="secondary" />
              </Link>
              &nbsp;&nbsp;
            </div>
          ),
        },
      },
    ];

    return cols;
  };

  fashionData(data) {
    return (data || []).map((d) => [
      d.id,
      `${d.name}...`.substring(0, 30), // limit to first 30 chars
      d.rank,
      d.tags,
      d.id,
    ]);
  }

  nowDelete({ idsToDelete, data }) {
    const { tags, putTagsInRedux } = this.props;
    const itemsInRedux = tags.items || [];
    const ids = [];
    idsToDelete.forEach((d) => {
      const found = data[d.dataIndex][0];
      ids.push(found);
      apiCall("/tag_collections.delete", { tag_collection_id: found });
    });
    const rem = (itemsInRedux || []).filter((com) => !ids.includes(com.id));
    putTagsInRedux({
      items: rem,
      meta: tags.meta,
    });
  }

  makeDeleteUI({ idsToDelete }) {
    const len = (idsToDelete && idsToDelete.length) || 0;
    return (
      <Typography>
        Are you sure you want to delete (
        {(idsToDelete && idsToDelete.length) || ""})
        {len === 1 ? " tag collection? " : "tag collections ? "}
      </Typography>
    );
  }
  callMoreData = (page) => {
    let { tags, putTagsInRedux } = this.props;
    var url = "/tag_collections.listForCommunityAdmin";
    makeAPICallForMoreData({
      url,
      existing: tags && tags.items,
      updateRedux: putTagsInRedux,
      page,
    });
  };

  render() {
    const title = brand.name + " - All Tag Collections";
    const description = brand.desc;
    const { columns } = this.state;
    const { classes, tags } = this.props;
    const data = this.fashionData(tags && tags.items);
    const metaData = tags && tags.meta;

    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      count: metaData && metaData.count,
      print: true,
      rowsPerPage: 25,
      rowsPerPageOptions: [10, 25, 100],
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
        //   const tagCollectionId = data[d.dataIndex][0];
        //   apiCall("/tag_collections.delete", {
        //     tag_collection_id: tagCollectionId,
        //   });
        // });
      },
    };
    if (!data || !data.length) {
      return <Loading />;
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
            title="All Tag Collections"
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </div>
    );
  }
}

AllTagCollections.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { tags: state.getIn(["allTags"]) };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      putTagsInRedux: loadAllTags,
      toggleDeleteConfirmation: reduxToggleUniversalModal,
    },
    dispatch
  );
};
const Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTagCollections);
export default withStyles(styles)(Mapped);
