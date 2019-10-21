import { NavigationActions } from "react-navigation";

/// ROUTES
export const navigateToDetails = (article) =>
NavigationActions.navigate({
    routeName: 'Details',
    params: {
        article: article,
    },
    key: 'Article_' + article.id + new Date().getTime()
});

export const navigateToSetupSource = () =>
NavigationActions.navigate({
    routeName: 'SetupSource',
});

export const navigateBack = (key) =>
NavigationActions.back({
    key: key || null,
});