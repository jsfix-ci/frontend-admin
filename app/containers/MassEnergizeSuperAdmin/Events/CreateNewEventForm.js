import React, { Component } from "react";
import PropTypes from "prop-types";
import states from "dan-api/data/states";
import { withStyles } from "@material-ui/core/styles";
import { apiCall } from "../../../utils/messenger";
import MassEnergizeForm from "../_FormGenerator";
import { getRandomStringKey } from "../ME  Tools/media library/shared/utils/utils";
import { makeTagSection } from "./EditEventForm";
import Loading from "dan-components/Loading";
import { connect } from "react-redux";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
  },
  field: {
    width: "100%",
    marginBottom: 20,
  },
  fieldBasic: {
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
  },
  inlineWrap: {
    display: "flex",
    flexDirection: "row",
  },
  buttonInit: {
    margin: theme.spacing.unit * 4,
    textAlign: "center",
  },
});

class CreateNewEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communities: [],
      formJson: null,
      loading: true,
      reRenderKey: "x-initial-key-x",
    };
  }

  static getDerivedStateFromProps = (props) => {
    const { communities, tags } = props;

    const coms = (communities || []).map((c) => ({
      ...c,
      displayName: c.name,
      id: "" + c.id,
    }));

    const formJson = createFormJson({
      communities: coms,
    });

    const section = makeTagSection({ collections: tags, defaults: false });

    if (formJson) formJson.fields.splice(1, 0, section);

    return {
      communities: coms,
      formJson,
      reRenderKey: getRandomStringKey(),
    };
  };


  render() {
    const { classes } = this.props;
    const { formJson } = this.state;
    if (!formJson) return <Loading />;
    return (
      <div key = {this.state.reRenderKey}>
        <MassEnergizeForm classes={classes} formJson={formJson} />
      </div>
    );
  }
}

CreateNewEventForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tags: state.getIn(["allTags"]),
    communities: state.getIn(["communities"]),
  };
};

const CreateEventMapped = connect(mapStateToProps)(CreateNewEventForm);

export default withStyles(styles, { withTheme: true })(CreateEventMapped);

const createFormJson = ({ communities }) => {
  // const { communities } = this.state;
  const formJson = {
    title: "Create New Event or Campaign",
    subTitle: "",
    method: "/events.create",
    successRedirectPage: "/admin/read/events",
    fields: [
      {
        label: "About this event",
        fieldType: "Section",
        children: [
          {
            name: "name",
            label: "Name of Event or Campaign",
            placeholder: "Enter name of event or campaign",
            fieldType: "TextField",
            contentType: "text",
            isRequired: true,
            defaultValue: "",
            dbName: "name",
            readOnly: false,
          },
          {
            name: "featured_summary",
            label: "One sentence that describes this event",
            placeholder: "One sentence that describes this event",
            fieldType: "TextField",
            contentType: "text",
            isRequired: true,
            defaultValue: "",
            dbName: "featured_summary",
            readOnly: false,
          },
          {
            name: "rank",
            label:
              "Rank (Which order should this event appear in?  Lower numbers come first)",
            placeholder: "eg. 1",
            fieldType: "TextField",
            contentType: "number",
            isRequired: true,
            defaultValue: "",
            dbName: "rank",
            readOnly: false,
          },
          {
            name: "start_date_and_time",
            label: "Start Date And Time",
            placeholder: "YYYY-MM-DD HH:MM",
            fieldType: "DateTime",
            contentType: "text",
            isRequired: true,
            defaultValue: "",
            dbName: "start_date_and_time",
            readOnly: false,
          },
          {
            name: "end_date_and_time",
            label: "End Date And Time",
            placeholder: "YYYY-MM-DD HH:MM",
            fieldType: "DateTime",
            contentType: "text",
            isRequired: true,
            defaultValue: "",
            dbName: "end_date_and_time",
            readOnly: false,
          },
          {
            name: "is_recurring",
            label: "Make this a recurring event",
            fieldType: "Radio",
            isRequired: true,
            defaultValue: "false",
            dbName: "is_recurring",
            readOnly: false,
            data: [{ id: "false", value: "No" }, { id: "true", value: "Yes" }],
            child: {
              dbName: "recurring_details",
              valueToCheck: "true",
              fields: [
                {
                  name: "separation_count",
                  label: "Repeat every",
                  fieldType: "Dropdown",
                  isRequired: true,
                  dbName: "separation_count",
                  contentType: "number",
                  defaultValue: 1,
                  data: [
                    { id: 1, displayName: "1" },
                    { id: 2, displayName: "2" },
                    { id: 3, displayName: "3" },
                    { id: 4, displayName: "4" },
                    { id: 5, displayName: "5" },
                    { id: 6, displayName: "6" },
                  ],
                },
                {
                  name: "recurring_type",
                  label: "",
                  fieldType: "Radio",
                  dbName: "recurring_type",
                  defaultValue: null,
                  data: [
                    { id: "week", value: "weeks" },
                    { id: "month", value: "months" },
                  ],
                },
                {
                  name: "day_of_week",
                  label:
                    "Choose the day of the week on which you want the event to repeat.",
                  fieldType: "Dropdown",
                  isRequired: true,
                  dbName: "day_of_week",
                  defaultValue: "",
                  data: [
                    { id: "Monday", displayName: "Monday" },
                    { id: "Tuesday", displayName: "Tuesday" },
                    { id: "Wednesday", displayName: "Wednesday" },
                    { id: "Thursday", displayName: "Thursday" },
                    { id: "Friday", displayName: "Friday" },
                    { id: "Saturday", displayName: "Saturday" },
                    { id: "Sunday", displayName: "Sunday" },
                  ],
                },
                {
                  name: "week_of_month",
                  label:
                    'If you selected "month", choose the week of the month on which you want the event to repeat.',
                  fieldType: "Dropdown",
                  dbName: "week_of_month",
                  defaultValue: "",
                  data: [
                    { id: "first", displayName: "first" },
                    { id: "second", displayName: "second" },
                    { id: "third", displayName: "third" },
                    { id: "fourth", displayName: "fourth" },
                  ],
                },
                {
                  name: "final_date",
                  label:
                    "Final Date for recurring events, you can specify a final date, otherwise events will recur until cancelled. The time is ignored.",
                  placeholder: "YYYY-MM-DD",
                  fieldType: "DateTime",
                  contentType: "text",
                  isRequired: false,
                  defaultValue: "none",
                  dbName: "final_date",
                  readOnly: false,
                },
              ],
            },
          },
          {
            name: "is_global",
            label: "Is this Event a Template?",
            fieldType: "Radio",
            isRequired: true,
            defaultValue: "false",
            dbName: "is_global",
            readOnly: false,
            data: [{ id: "false", value: "No" }, { id: "true", value: "Yes" }],
            child: {
              valueToCheck: "false",
              fields: [
                {
                  name: "community",
                  label: "Primary Community",
                  placeholder: "eg. Wayland",
                  fieldType: "Dropdown",
                  defaultValue: null,
                  dbName: "community_id",
                  data: [{ displayName: "--", id: "" }, ...communities],
                },
              ],
            },
          },
        ],
      },
      {
        name: "have_address",
        label: "Want to add an address for this event?",
        fieldType: "Radio",
        isRequired: false,
        defaultValue: "false",
        dbName: "have_address",
        readOnly: false,
        data: [{ id: "false", value: "No" }, { id: "true", value: "Yes" }],
        child: {
          valueToCheck: "true",
          fields: [
            {
              name: "address",
              label: "Street Address",
              placeholder: "Street Address or Public Facility",
              fieldType: "TextField",
              contentType: "text",
              isRequired: true,
              defaultValue: "",
              dbName: "address",
              readOnly: false,
            },
            {
              name: "unit",
              label: "Unit Number",
              placeholder: 'eg. "2A"',
              fieldType: "TextField",
              contentType: "text",
              isRequired: false,
              defaultValue: "",
              dbName: "unit",
              readOnly: false,
            },
            {
              name: "city",
              label: "City",
              placeholder: "eg. Springfield",
              fieldType: "TextField",
              contentType: "text",
              isRequired: true,
              defaultValue: "",
              dbName: "city",
              readOnly: false,
            },
            {
              name: "state",
              label: "State ",
              fieldType: "Dropdown",
              contentType: "text",
              isRequired: false,
              data: states,
              defaultValue: "Massachusetts",
              dbName: "state",
              readOnly: false,
            },
          ],
        },
      },
      {
        name: "description",
        label: "Event Description",
        placeholder: "eg. This event is happening in ...",
        fieldType: "HTMLField",
        isRequired: true,
        defaultValue: null,
        dbName: "description",
      },
      {
        name: "image",
        placeholder: "Select an Image",
        fieldType: "File",
        dbName: "image",
        label: "Upload Files",
        selectMany: false,
        isRequired: false,
        defaultValue: "",
        filesLimit: 1,
      },
      {
        name: "rsvp_enabled",
        label: "Enable RSVPs for this Event",
        fieldType: "Radio",
        isRequired: false,
        defaultValue: "false",
        dbName: "rsvp_enabled",
        readOnly: false,
        data: [
          { id: 'false', value: 'No' },
          { id: 'true', value: 'Yes' }
        ],
        child: {
          dbName: "rsvp_communication",
          valueToCheck: "true",
          fields: [
            {
              name: "send_rsvp_email",
              label:
                "Send an email with Zoom link or other details when user RSVPs they are coming?",
              fieldType: "Radio",
              isRequired: false,
              defaultValue: 'false',
              dbName: "rsvp_email",
              readOnly: false,
              data: [
                { id: "false", value: "No" },
                { id: "true", value: "Yes" },
              ],
              child: {
                dbName: "rsvp_details",
                valueToCheck: "true",
                fields: [
                  {
                    name: 'rsvp_message_text',
                    label: 'Message to send to RSVP',
                    placeholder: 'eg. This event is happening in ...',
                    fieldType: 'HTMLField',
                    isRequired: true,
                    defaultValue: null,
                    dbName: 'rsvp_message',
                  },
                ]
              },
            },
          ]
        },
      },
      {
        name: "archive",
        label: "Archive this Event",
        fieldType: "Radio",
        isRequired: false,
        defaultValue: "false",
        dbName: "archive",
        readOnly: false,
        data: [{ id: "false", value: "No" }, { id: "true", value: "Yes" }],
      },
      {
        name: "is_published",
        label: "Should this event Go Live?",
        fieldType: "Radio",
        isRequired: false,
        defaultValue: "false",
        dbName: "is_published",
        readOnly: false,
        data: [{ id: "false", value: "No" }, { id: "true", value: "Yes" }],
      },
    ],
  };
  return formJson;
};
