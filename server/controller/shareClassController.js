const db = require("../models")
const WorspaceProtocol = db.workspace_protocol
const Raw = db.sequelize
const StepUserProtocol = db.step_user_protocol

exports.usersShareProtocol = async (req, res) => {

    const query = `select u.id as user_id, u.name as user_name, email, u.role, uw.id as workspace_id
                   from users u
                            join user_workspace uw on u.id = uw.user_id
                   where 1 = 1`

    try {
        const [results] = await Raw.query(query);

        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
        res.status(501).end()
    }

}
exports.shareProtocol = async (req, res) => {
    const protocol = req.body.protocol_id;
    const workspaces = req.body.workspaces;
    const workspaceUser = req.body.workspace_id;
    const steps = req.body.steps;

    if (protocol !== undefined) {
        try {

            for (const workspace of workspaces) {
                const data = {
                    protocol_id: protocol,
                    workspace_id: workspace.workspace_id,
                    shared: 1
                }
                const sharedProtocol = WorspaceProtocol.create(data);
                for (const step of steps) {

                    const stepUserData = {
                        protocol_id: protocol,
                        step_protocol_id: step.step_id,
                        workspace_id: workspace.workspace_id
                    }
                    StepUserProtocol.create(stepUserData);
                }

            }


            res.send('shared')
            // res.status(200).statusMessage('sahred')
        } catch (e) {
            res.status(500)
        }
    } else {
        res.status(500).send('Parsed field wrong!')
    }
}
