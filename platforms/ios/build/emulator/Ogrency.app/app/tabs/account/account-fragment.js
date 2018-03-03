const AccountViewModel = require("./account-view-model");

function onLoaded(args) {
    const component = args.object;
    component.bindingContext = new AccountViewModel();
}

exports.onLoaded = onLoaded;
