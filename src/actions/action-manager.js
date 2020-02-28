export default class ActionManager {
    constructor(actions) {
        this.actions = actions;

        this.handleContextClick = this.handleContextClick.bind(this);
    }


    handleContextClick = (info, tab) => {
        const { menuItemId } = info;

        this.actions.forEach(action => {
            if (action.id === menuItemId) action.execute(tab)
        });
    }

}