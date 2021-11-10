import React from "react";
import { Route } from "react-router-dom";

import Main from "../../pages/Main";

export default () => (
    <Route path="/" exact component={Main} />
);
