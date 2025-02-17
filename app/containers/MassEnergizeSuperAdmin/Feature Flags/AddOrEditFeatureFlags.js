import React, { useEffect } from "react";
import MassEnergizeForm from "../_FormGenerator";
import fieldTypes from "../_FormGenerator/fieldTypes";
import Loading from "dan-components/Loading";
import { LOADING } from "../../../utils/constants";
import { Paper } from "@material-ui/core";

function AddOrEditFeatureFlags({
  communities,
  users,
  switchTabs,
  putFlagsInRedux,
  featureFlags,
  featureToEdit,
}) {
  const inEditMode = featureToEdit;

  if (featureFlags === LOADING) return <Loading />;

  const flagKeys = (featureFlags && featureFlags.keys) || {};
  if (!Object.keys(flagKeys).length)
    return (
      <Paper style={{ padding: 40 }}>
        Sorry, something happened. Please try again later.
      </Paper>
    );

  const ifApiIsSuccessful = (data, yes) => {
    if (!yes) return;
    var features = (featureFlags && featureFlags.features) || [];
    features = features.filter((f) => f.id.toString() !== data.id.toString());
    putFlagsInRedux({ ...(featureFlags || {}), features: [data, ...features] });
    switchTabs();
  };

  const formJson = createFormJson({
    communities,
    flagKeys,
    users,
    putFlagsInRedux,
    ifApiIsSuccessful,
    inEditMode,
    featureToEdit,
  });

  return (
    <MassEnergizeForm formJson={formJson} onComplete={ifApiIsSuccessful} />
  );
}
// -----------------------------------------------------------------------------------

const preflight = (data) => {
  const user_ids = data.user_ids || [];
  var [scope] = data.scope || [] || null;
  const json = {
    ...(data || {}),
    user_ids: user_ids.map((u) => u.id),
    scope,
    key: uniqueIdentifier(data.name),
  };
  if (json.should_expire === "false") delete json.expires_on;  //json.expires_on = null;
  delete json.should_expire;
  return json;
};

const uniqueIdentifier = (text) => {
  if (!text || !text.trim()) return "";
  var arr = text.split(" ");
  return arr.join("-").toLowerCase() + "-feature-flag";
};

const parseFeatureForEditMode = (feature) => {
  const comIds = ((feature && feature.communities) || []).map((c) =>
    c.id.toString()
  );
  const json = {
    ...(feature || {}),
    comIds,
    selectedUsers: (feature && feature.users) || [],
    userAudience: feature && feature.user_audience,
    scope: feature && feature.scope ? [feature.scope] : [],
  };
  return json;
};

var createFormJson = ({
  communities,
  flagKeys,
  users,
  inEditMode,
  featureToEdit,
}) => {
  const labelExt = (user) => `${user.preferred_name} - (${user.email})`;
  const valueExt = (user) => user.id;
  const audienceKeys = flagKeys.audience || {};
  const audienceKeysArr = Object.entries(flagKeys.audience || {});
  communities = (communities || []).map((com) => ({
    displayName: com.name,
    id: com.id,
    value: com.id.toString(),
  }));
  const scopeArr = Object.entries(flagKeys.scope || {});
  const {
    scope,
    selectedUsers,
    name,
    comIds,
    notes,
    audience,
    expires_on,
    userAudience,
    id,
  } = parseFeatureForEditMode(featureToEdit);

  const json = {
    title: inEditMode ? "Update a feature flag" : "Add a new feature flag",
    subTitle: "",
    method: inEditMode ? "/featureFlag.update" : "/featureFlags.add",
    preflightFxn: preflight,
    fields: [
      {
        label: "About this feature",
        fieldType: "Section",
        children: [
          inEditMode
            ? {
                name: "id",
                label: "Id of feature",
                fieldType: fieldTypes.TextField,
                contentType: "text",
                defaultValue: id || "",
                dbName: "id",
                readOnly: true,
                disabled: true,
              }
            : {},
          {
            name: "name",
            label: "Name of the feature (60 Chars)",
            placeholder: "Eg. 'Guest Authentication'",
            fieldType: fieldTypes.TextField,
            contentType: "text",
            isRequired: true,
            defaultValue: name || "",
            dbName: "name",
            readOnly: false,
            maxLength: 60,
          },

          {
            name: "notes",
            label: "Briefly describe this feature",
            placeholder:
              "Eg. This feature allows guests to use all platform functionalities without...",
            fieldType: fieldTypes.TextField,
            contentType: "text",
            isRequired: false,
            defaultValue: notes || "",
            dbName: "notes",
            readOnly: false,
          },
          {
            name: "scope",
            label: "Which platform is this feature related to? ",
            fieldType: fieldTypes.Checkbox,
            isRequired: true,
            dbName: "scope",
            readOnly: false,
            defaultValue: scope || [],
            data: scopeArr.map(([_, { name, key }]) => ({
              id: key,
              displayName: name,
            })),
          },
        ],
      },

      {
        label: "Community Audience",
        fieldType: "Section",
        children: [
          {
            name: "audience",
            label: "Should this feature be available to every community?",
            fieldType: fieldTypes.Radio,
            isRequired: true,
            defaultValue: audience || audienceKeys.EVERYONE.key,
            dbName: "audience",
            readOnly: false,
            data: audienceKeysArr.map(([_, { name, key }]) => ({
              id: key,
              value: name,
            })),

            conditionalDisplays: [
              {
                valueToCheck: audienceKeys.SPECIFIC.key,
                fields: [
                  {
                    name: "community_ids",
                    label:
                      "Select all communities that should have this feature activated",
                    placeholder: "eg. Wayland",
                    fieldType: fieldTypes.Checkbox,
                    selectMany: true,
                    defaultValue: comIds || [],
                    dbName: "community_ids",
                    data: communities,
                  },
                ],
              },
              {
                valueToCheck: audienceKeys.ALL_EXCEPT.key,
                fields: [
                  {
                    name: "community_ids",
                    label:
                      "Select all communities that should NOT have this feature",
                    placeholder: "eg. Wayland",
                    fieldType: fieldTypes.Checkbox,
                    selectMany: true,
                    defaultValue: comIds || [],
                    dbName: "community_ids",
                    data: communities,
                  },
                ],
              },
            ],
          },
        ],
      },
      // -------------------------------------
      {
        label: "User Audience",
        fieldType: "Section",
        children: [
          {
            name: "user_audience",
            label: "Should this feature be available to every user?",
            fieldType: fieldTypes.Radio,
            isRequired: true,
            defaultValue: userAudience || audienceKeys.EVERYONE.key,
            dbName: "user_audience",
            readOnly: false,
            data: audienceKeysArr.map(([_, { name, key }]) => ({
              id: key,
              value: name,
            })),
            conditionalDisplays: [
              {
                valueToCheck: audienceKeys.SPECIFIC.key,
                fields: [
                  {
                    name: "users",
                    label:
                      "Select all users that should have this feature activated",
                    placeholder:
                      "Search with their username, or email.. Eg. 'Mademoiselle Kaat'",
                    fieldType: fieldTypes.AutoComplete,
                    defaultValue: selectedUsers || [],
                    dbName: "user_ids",
                    data: users || [],
                    labelExtractor: labelExt,
                    valueExtractor: valueExt,
                  },
                ],
              },
              {
                valueToCheck: audienceKeys.ALL_EXCEPT.key,
                fields: [
                  {
                    name: "users",
                    label: "Select all users that should NOT have this feature",
                    placeholder:
                      "Search with their username, or email.. Eg. 'Monsieur Brad'",
                    fieldType: fieldTypes.AutoComplete,
                    selectMany: true,
                    contentType: "text",

                    defaultValue: selectedUsers || [],
                    dbName: "user_ids",
                    labelExtractor: labelExt,
                    valueExtractor: valueExt,
                    data: users || [],
                  },
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------
      {
        label: "Feature Deactivation",
        fieldType: "Section",
        children: [
          {
            name: "should_expire",
            label: "When should this feature expire?",
            fieldType: fieldTypes.Radio,
            isRequired: true,
            defaultValue: expires_on ? "true" : "false",
            dbName: "should_expire",
            readOnly: false,
            data: [
              { id: "false", value: "Does not expire" },
              { id: "true", value: "Should expire on" },
            ],
            child: {
              valueToCheck: "true",
              fields: [
                {
                  name: "expires_on",
                  label: "Set Date",
                  placeholder: "Eg. 'Guest Authentication Feature'",
                  fieldType: fieldTypes.DateTime,
                  contentType: "text",
                  defaultValue: expires_on || "",
                  dbName: "expires_on",
                  minDate: new Date(),
                },
              ],
            },
          },
        ],
      },
    ],
  };
  return json;
};
export default AddOrEditFeatureFlags;
