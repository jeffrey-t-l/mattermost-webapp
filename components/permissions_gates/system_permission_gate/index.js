// Copyright (c) 2017 Mattermost Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

import {haveISystemPermission} from 'mattermost-redux/selectors/entities/roles';

import SystemPermissionGate from './system_permission_gate.jsx';

function mapStateToProps(state, ownProps) {
    for (const permission of ownProps.permissions) {
        if (haveISystemPermission(state, {permission})) {
            return {hasPermission: true};
        }
    }

    return {hasPermission: false};
}

export default connect(mapStateToProps)(SystemPermissionGate);
