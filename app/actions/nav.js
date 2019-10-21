import { NavigationActions } from "react-navigation";

/// ROUTES
export const navigateToDetails = (taskid) =>
NavigationActions.navigate({
    routeName: 'TaskDetail',
    params: {
        taskid: taskid,
    },
    key: 'Task_' + taskid + new Date().getTime()
});
