import React from "react";

type LoadingBarProp = {
    name?: string,
};


function LoadingBar(props: LoadingBarProp) {
    return (
        <div>{props.name ?? "loading..."}</div>
    );
}

export default LoadingBar;


